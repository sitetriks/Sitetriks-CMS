using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using SiteTriks.Data.Models;
using SiteTriks.DatabaseApi.Contracts;
using SiteTriks.Extensions.DynamicViews;
using SiteTriks.Helpers;
using SiteTriks.Services.Contracts;
using SiteTriksApp.Web.Data;
using SiteTriksApp.Web.Services;
using System;
using System.IO;
using System.IO.Compression;

namespace SiteTriksApp.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment environment)
        {
            Configuration = configuration;
            Environment = environment;
        }

        public IConfiguration Configuration { get; }
        public IHostingEnvironment Environment { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });

            services.AddMvc();

            services.Configure<RouteOptions>(options =>
            {
                options.LowercaseUrls = true;
            });

            services.AddDistributedMemoryCache();
            services.AddSession(opt =>
            {
                opt.IdleTimeout = TimeSpan.FromMinutes(5);
                opt.Cookie.HttpOnly = true;
            });

            // -----------------------------------------------------------------------------------------------------------
            // IoC
            ApplicationStart.InitDatabase<SiteTriksAppContext>(this.Configuration, services, "DefaultConnection");
            ApplicationStart.InjectSiteTriksCore(services, this.Environment);

            var providers = ApplicationStart.InjectModules(services);

            services.AddTransient<IEmailSender, MailKitEmailSender>();
            services.AddTransient<ISiteTriksEmailSender, MailKitEmailSender>();
            services.AddSingleton<IConfiguration>(Configuration);
            services.AddScoped<IPermissionChecker, PermissionChecker>();
            services.AddDbContext<SiteTriksAppContext>();

            // Area registration
            services.Configure<RazorViewEngineOptions>(options =>
            {
                var scopeFactory = services
                    .BuildServiceProvider()
                    .GetRequiredService<IServiceScopeFactory>();

                using (var scope = scopeFactory.CreateScope())
                {
                    var provider = scope.ServiceProvider;
                    var service = provider.GetRequiredService<IDynamicViewService>();
                    var queryHelper = provider.GetService<IQueryHelper>();
                    options.FileProviders.Add(new DatabaseFileProvider(options.FileProviders[0], queryHelper));

                    foreach (var item in providers)
                    {
                        options.FileProviders.Add(item);
                    }
                }

                options.AreaViewLocationFormats.Clear();
                options.AreaViewLocationFormats.Add("/Areas/{2}/Views/{1}/{0}.cshtml");
                options.AreaViewLocationFormats.Add("/Areas/{2}/Views/Shared/{0}.cshtml");
                options.AreaViewLocationFormats.Add("/Views/{1}/{0}.cshtml");
                options.AreaViewLocationFormats.Add("/Views/Shared/{0}.cshtml");
            });
            
            services.AddIdentity<User, IdentityRole>(config =>
            {
                config.SignIn.RequireConfirmedEmail = true;
            })
                .AddEntityFrameworkStores<SiteTriksAppContext>()
                .AddDefaultTokenProviders();

            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.Expiration = TimeSpan.FromHours(4);
            });

            services.AddResponseCompression(options =>
            {
                ApplicationStart.SetResposnseCompressionOptions(options);
            });

            services.Configure<GzipCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Optimal;
            });

            services.AddSignalR(options =>
            {
                options.EnableDetailedErrors = true;
                options.KeepAliveInterval = TimeSpan.FromMinutes(1);
            });           

            var storageProviderConfig = this.Configuration.GetSection("SiteTriks").GetSection("StorageProvider");
            switch (storageProviderConfig.GetSection("Name").Value)
            {
                case "azure":
                    var protectionBuilder = services.AddDataProtection().SetApplicationName("SiteTriks")
                        .SetDefaultKeyLifetime(TimeSpan.FromDays(90));
                    string blobUri = storageProviderConfig.GetSection("BlobUri").Value;
                    protectionBuilder.PersistKeysToAzureBlobStorage(new Uri(blobUri));

                    break;
                default:
                    break;
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();

                if (Directory.Exists(Path.Combine(Directory.GetCurrentDirectory(), @"node_modules")))
                {
                    app.UseFileServer(new FileServerOptions()
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"node_modules")),
                        RequestPath = new PathString("/vendor"),
                        EnableDirectoryBrowsing = true
                    });
                }

                if (Directory.Exists(Path.Combine(Directory.GetCurrentDirectory(), @"scripts_babel")))
                {
                    app.UseFileServer(new FileServerOptions()
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"scripts_babel")),
                        RequestPath = new PathString("/scripts"),
                        EnableDirectoryBrowsing = true
                    });
                }
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStatusCodePagesWithRedirects("/sitetriks/home/error");
            ApplicationStart.InjectMiddlewares(app);

            //app.UseStatusCodePagesWithReExecute()
            app.UseResponseCompression();

            app.UseStaticFiles(new StaticFileOptions()
            {
                OnPrepareResponse = (context) =>
                {
                    ApplicationStart.CacheStaticFiles(context, this.Configuration);
                }
            });
           
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseAuthentication();

            app.UseSession();

            app.UseMiddleware<ExceptionMiddleware>();

            app.UseMvc(routes =>
            {
                ApplicationStart.BuildRoutes(routes, app);
            });
        }
    }
}
