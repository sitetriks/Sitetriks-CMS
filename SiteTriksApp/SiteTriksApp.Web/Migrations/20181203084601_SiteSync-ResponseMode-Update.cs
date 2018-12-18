using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class SiteSyncResponseModeUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "st_sitesyncResponses",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "st_sitesyncResponses");
        }
    }
}
