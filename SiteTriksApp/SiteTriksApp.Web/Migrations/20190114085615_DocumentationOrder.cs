using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class DocumentationOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Order",
                table: "st_topics",
                type: "decimal(18, 6)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Order",
                table: "st_topics");
        }
    }
}
