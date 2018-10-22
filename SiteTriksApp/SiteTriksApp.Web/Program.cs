using Hangfire;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SiteTriks.Data;
using SiteTriks.Data.Models;
using SiteTriks.Data.Seeders;
using SiteTriks.Dynamic.Contracts;
using SiteTriks.Helpers;
using SiteTriks.Services.Contracts;
using SiteTriksApp.Web.Services.Seeders;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildMainWebHost(args)
            .MigrateDatabase()
            .AddPermissions()
            .Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();


        public static IWebHost BuildMainWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureServices(services =>
                {
                    services.AddTransient<IStartupFilter, HangfireStartupFilter>();
                })
                .UseStartup<Startup>()
                .Build();
    }

    // TODO: Move
    public static class WebHostExtentions
    {
        public static IWebHost MigrateDatabase(this IWebHost webHost)
        {
            using (var scope = webHost.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var dbContext = services.GetRequiredService<SiteTriksContext>();

                // Migrate database
                dbContext.Database.Migrate();

                // Seed Database
                var userManager = services.GetRequiredService<UserManager<User>>();
                var roleManager = services.GetRequiredService<RoleManager<IdentityRole>>();

                var configuration = services.GetRequiredService<IConfiguration>();

                UserSeeder.Seed(userManager, roleManager, configuration);

                SiteSeeder.Seed(dbContext);

                // Init dynamic types
                var dynamicService = services.GetRequiredService<IDynamicService>();
                dynamicService.PopulateDynamicTypesInDatabase();
            }

            return webHost;
        }

        public static IWebHost AddPermissions(this IWebHost webHost, IEnumerable<string> assemblyNames = null)
        {
            using (var scope = webHost.Services.CreateScope())
            {
                var sevices = scope.ServiceProvider;
                var permissionService = sevices.GetService<IPermissionService>();
                ApplicationStart.RegisterCustomPermissions(permissionService, assemblyNames);
            }

            return webHost;
        }
    }

    public class HangfireStartupFilter : IStartupFilter
    {
        #region Methods

        public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> next)
        {
            return builder =>
            {
                builder.UseHangfireDashboard();
                builder.UseHangfireServer();
                next(builder);
            };
        }

        #endregion Methods
    }
}
