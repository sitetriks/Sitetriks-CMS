using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using SiteTriks.Data.Models;

namespace SiteTriksApp.Web.Services.Seeders
{
    public class UserSeeder
    {
        public static void Seed(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            IConfigurationSection superUserSection = configuration.GetSection("SuperUser");
            var username = superUserSection.GetSection("Username").Value;
            var password = superUserSection.GetSection("Password").Value;          

            if(username.Contains("#") || string.IsNullOrEmpty(username))
            {
                username = "admin@mail.com";
                password = "12345qQ!";
            }

            string[] roles = new string[]
            {
                "SuperAdmin",
                "Admin",
                "Authorized back-end",
                "Authorized front-end",
                "Partner",
                "Client"
            };

            foreach (var role in roles)
            {
                if (!roleManager.RoleExistsAsync(role).Result)
                {
                    var result = roleManager.CreateAsync(new IdentityRole() { Name = role }).Result;
                }
            }

            if (userManager.FindByNameAsync(username).Result == null)
            {
                CreateUser(userManager, roles[0], username, password);
            }
        }

        private static void CreateUser(UserManager<User> userManager, string role, string email, string password)
        {
            var user = new User { UserName = email, Email = email };
            user.EmailConfirmed = true;
            user.DashboardConfiguration = "";
            userManager.CreateAsync(user, password).Wait();
            userManager.AddToRoleAsync(user, role).Wait();
        }
    }
}
