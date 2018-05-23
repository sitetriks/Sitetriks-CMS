using Microsoft.AspNetCore.Identity;
using SiteTriks.Data.Models;

namespace SiteTriksApp.Web.Services.Seeders
{
    public class UserSeeder
    {
        public static void Seed(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            string[] roles = new string[]
            {
                "SuperAdmin",
                "Admin",
                "Authorized back-end",
                "Authorized front-end",
                "Unauthorized"
            };

            // Seeding users with roles based on the same index
            string[] emails = new string[]
            {
                "superadmin@mail.bg",
                "admin@mail.bg",
                "backend@mail.bg",
                "frontend@mail.bg"
            };

            foreach (var role in roles)
            {
                if (!roleManager.RoleExistsAsync(role).Result)
                {
                    var result = roleManager.CreateAsync(new IdentityRole() { Name = role }).Result;
                }
            }

            for (int i = 0; i < emails.Length; i++)
            {
                string email = emails[i];
                if (userManager.FindByNameAsync(email).Result == null)
                {
                    CreateUser(userManager, roles[i], email, "12345qQ!");
                }
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
