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
using SiteTriks.DatabaseApi;
using SiteTriks.DatabaseApi.Contracts;
using SiteTriks.Dynamic.Contracts;
using SiteTriks.Infrastructure.Common;
using SiteTriksApp.Web.Services.Seeders;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SiteTriksApp.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildMainWebHost(args)
                .MigrateDatabase()
                .Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();


        public static IWebHost BuildMainWebHost(string[] args) => 
            WebHost.CreateDefaultBuilder(args)
                .ConfigureServices(services => {
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
                var dynamicService = services.GetRequiredService<IDynamicAssemblyService>();
                var queryHelper = services.GetRequiredService<IQueryHelper>();
                dynamicService.LoadAssemblies();

                var assemblies = dynamicService.GetAssemblies();
                string linkConstraint = queryHelper.CreateConstraint(ConstraintType.ForeignKey, "LinkId", "st_links");

                foreach (var a in assemblies)
                {
                    foreach (var item in a.Classes)
                    {
                        var constraints = new List<string>();
                        if (item.Properties.Where(p => p.Name == "LinkId").Any())
                        {
                            constraints.Add(linkConstraint);
                        }

                        queryHelper.CreateTable(DatabasePrefix.Dynamic + item.Name, item.Properties, constraints);
                    }
                }
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
