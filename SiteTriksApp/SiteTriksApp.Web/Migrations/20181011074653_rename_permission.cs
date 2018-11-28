using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class rename_permission : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Category",
                table: "st_permissions",
                newName: "System");

            migrationBuilder.RenameColumn(
                name: "AllowedRole",
                table: "st_permissions",
                newName: "AllowedRoles");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "System",
                table: "st_permissions",
                newName: "Category");

            migrationBuilder.RenameColumn(
                name: "AllowedRoles",
                table: "st_permissions",
                newName: "AllowedRole");
        }
    }
}
