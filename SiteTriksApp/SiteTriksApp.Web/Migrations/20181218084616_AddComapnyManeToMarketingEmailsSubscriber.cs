using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class AddComapnyManeToMarketingEmailsSubscriber : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "st_marketingEmailSubscribers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "st_marketingEmailSubscribers");
        }
    }
}
