using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class Rename_SiteSyncHistory_Property : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SyncTarget",
                table: "st_sitesyncHistory",
                newName: "TargetSiteId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TargetSiteId",
                table: "st_sitesyncHistory",
                newName: "SyncTarget");
        }
    }
}
