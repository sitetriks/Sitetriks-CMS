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
