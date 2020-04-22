using System;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using SiteTriks.Data.Models.Users;
using SiteTriks.Extensions;
using SiteTriksApp.Web.Data;


namespace SiteTriksApp.Web
{
    public class Startup
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfiguration _config;

        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            this._config = configuration;
            this._env = environment;
        }      

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });

            services.AddMvc(options => options.EnableEndpointRouting = false).AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

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
            services.InitDatabase<SiteTriksAppContext>(this._config, "DefaultConnection")
                .InjectModules(this._env);

            services.AddSingleton<IConfiguration>(this._config);

            services.AddDynamicViews();

            services.AddIdentity<User, IdentityRole>(config =>
            {
                config.SignIn.RequireConfirmedEmail = true;
            })
                .AddEntityFrameworkStores<SiteTriksAppContext>()
                .AddDefaultTokenProviders();

            services.ConfigureApplicationCookie(options =>
            {
                options.LoginPath = new PathString("/sitetriks/login/");
                options.ExpireTimeSpan = TimeSpan.FromHours(4);
            });

            services.AddGZipConpression();

            services.AddSignalR(options =>
            {
                options.EnableDetailedErrors = true;
                options.KeepAliveInterval = TimeSpan.FromMinutes(1);
            });

            var storageProviderConfig = this._config.GetSection("SiteTriks").GetSection("StorageProvider");
            switch (storageProviderConfig.GetSection("Name").Value)
            {
                case "azure":
                    var protectionBuilder = services.AddDataProtection().SetApplicationName("SiteTriks")
                        .SetDefaultKeyLifetime(TimeSpan.FromDays(90));
                    string blobUri = storageProviderConfig.GetSection("BlobUri").Value;
                    protectionBuilder.PersistKeysToAzureBlobStorage(new Uri(blobUri));

                    break;
                case "filesystem":
                    services.AddDataProtection().SetApplicationName("SiteTriks")
                        .PersistKeysToFileSystem(new DirectoryInfo("\\KeysData\\keys\\"));

                    break;
                default:
                    break;
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            if (this._env.IsDevelopment())
            {
                //app.UseBrowserLink();
                app.UseDatabaseErrorPage();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseStaticFiles();

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
            Path.Combine(Directory.GetCurrentDirectory(), "Assets")),
                RequestPath = "/Assets"
            });

            app.UseHttpsRedirection();
            app.UseSiteTriks(this._env, this._config);            

            app.UseSession();

            app.UseMvc(routes =>
            {
                routes.BuildRoutes(app);
            });
        }
    }
}
