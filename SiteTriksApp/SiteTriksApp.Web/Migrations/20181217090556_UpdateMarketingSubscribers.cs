using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class UpdateMarketingSubscribers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "WantRecieveUpdates",
                table: "st_marketingEmailSubscribers",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WantRecieveUpdates",
                table: "st_marketingEmailSubscribers");
        }
    }
}
