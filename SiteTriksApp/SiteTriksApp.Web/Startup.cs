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
using SiteTriks.Extentions;
using SiteTriks.Extentions.DynamicViews;
using SiteTriks.Extentions.WidgetModels;
using SiteTriks.Helpers;
using SiteTriks.Services.Contracts;
using SiteTriksApp.Web.Areas.ECommerse.Extentions.WidgetModels;
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
            //Load views from another assemblies
            //var assembly = typeof(HtmlBlocksController).GetTypeInfo().Assembly;

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

            // -----------------------------------------------------------------------------------------------------------
            // Widgets registration. Should be moved
            WidgetRegistry.RegisterWidget<HtmlWidgetModel>("html", "HTML");
            WidgetRegistry.RegisterWidget<NavigationWidgetModel>("navigation", "Navigation");
            WidgetRegistry.RegisterWidget<NewsWidgetModel>("allNews", "All News");
            WidgetRegistry.RegisterWidget<NewsWidgetModel>("detailedNews", "Detailed News");
            WidgetRegistry.RegisterWidget<NewsWidgetModel>("newsCarousel", "News Carousel");
            WidgetRegistry.RegisterWidget<VideoWidgetModel>("video", "Video");
            WidgetRegistry.RegisterWidget<PresentationWidgetModel>("presentation", "Presentation");
            WidgetRegistry.RegisterWidget<CssWidgetModel>("css", "CSS");
            WidgetRegistry.RegisterWidget<JavaScriptWidgetModel>("javascript", "JavaScript");
            WidgetRegistry.RegisterWidget<EmbeddedScriptWidgetModel>("embeddedscript", "Embedded Script");
            WidgetRegistry.RegisterWidget<LayoutBuilderWidgetModel>("layoutBuilder", "Layout Builder");
            WidgetRegistry.RegisterWidget<SearchWidgetModel>("search", "Google Search");
            WidgetRegistry.RegisterWidget<ImageWidgetModel>("image", "Image");
            WidgetRegistry.RegisterWidget<DynamicWidgetModel>("dynamic", "Dynamic Content");
            WidgetRegistry.RegisterWidget<DocumentationWidgetModel>("documentation", "Documentation");
            WidgetRegistry.RegisterWidget<GalleryWidgetModel>("gallery", "Gallery");
            WidgetRegistry.RegisterWidget<ContactUsWidgetModel>("contactUs", "Contact Us");
            WidgetRegistry.RegisterWidget<ContactUsWidgetModel>("contactUsAlternative", "Contact Us Alternative");
            WidgetRegistry.RegisterWidget<MarketWidgetModel>("market", "Market");
            WidgetRegistry.RegisterWidget<UserOrdersWidgetModel>("userOrders", "User Orders");
            WidgetRegistry.RegisterWidget<SubscriptionWidgetModel>("subscription", "Subscription");
            WidgetRegistry.RegisterWidget<LicenseGenerationWidgetModel>("licenseGeneration", "License Form");

            // -----------------------------------------------------------------------------------------------------------
            // Store widgets
            WidgetRegistry.RegisterWidget<StoreGridWidgetModel>("storeGrid", "Grid");
            WidgetRegistry.RegisterWidget<StoreFilterWidgetModel>("storeFilter", "Filter Menu");
            WidgetRegistry.RegisterWidget<StoreItemWidgetModel>("storeItem", "Store Item");

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

            services.AddDataProtection()
            .PersistKeysToFileSystem(new DirectoryInfo("\\KeysData\\keys\\"))
            .SetApplicationName("SiteTriks")
            .SetDefaultKeyLifetime(TimeSpan.FromDays(90));
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
                ApplicationStart.BuildRoutes(routes);
            });
        }
    }
}
