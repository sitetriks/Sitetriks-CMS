using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using SiteTriks.Data.Models;
using SiteTriks.Services.Models.Users;
using System.Linq;

namespace SiteTriksApp.Web.Services.Seeders
{
    public class UserSeeder
    {
        public static void Seed(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            string defaultUsername = "admin@mail.com";
            string defaultPassword = "12345qQ!";

            IConfigurationSection superUserSection = configuration.GetSection("SuperUser");
            var username = superUserSection.GetSection("Username").Value;
            var password = superUserSection.GetSection("Password").Value;                  

            if (username == null || password == null)
            {
                username = defaultUsername;
                password = defaultPassword;
            }
            else
            {
                if (username.Contains("#") || string.IsNullOrEmpty(username))
                {
                    username = defaultUsername;
                    password = defaultPassword;
                }
            }

            string[] roles = new string[]
            {
                "SuperAdmin",
                "Admin",
                "Authorized back-end",
                "Authorized front-end",
                "Partner",
                "Client",
                "Unauthorized"
            };

            foreach (var role in roles)
            {
                if (!roleManager.RoleExistsAsync(role).Result)
                {
                    roleManager.CreateAsync(new IdentityRole() { Name = role }).Wait();
                }
            }

            IdentityResult result = new IdentityResult();
            if (userManager.FindByNameAsync(username).Result == null)
            {
                result = CreateUser(userManager, roles[0], username, password);
            }
            
            if(!result.Succeeded)
            {
                CreateUser(userManager, roles[0], defaultUsername, defaultPassword);
            }
        }


        private static IdentityResult CreateUser(UserManager<User> userManager, string role, string email, string password)
        {
            var user = new User { UserName = email, Email = email };
            user.EmailConfirmed = true;
            user.DashboardConfiguration = "";
            var result = userManager.CreateAsync(user, password).Result;

            if(result.Succeeded)
            {
                userManager.AddToRoleAsync(user, role).Wait();
            }

            return result;
        }
    }
}
