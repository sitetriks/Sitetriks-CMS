using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class CompiledStoreSkins : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CompiledFullPageSkin",
                table: "st_ec_storeSkins",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CompiledGridSkin",
                table: "st_ec_storeSkins",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CompiledPreviewSkin",
                table: "st_ec_storeSkins",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompiledFullPageSkin",
                table: "st_ec_storeSkins");

            migrationBuilder.DropColumn(
                name: "CompiledGridSkin",
                table: "st_ec_storeSkins");

            migrationBuilder.DropColumn(
                name: "CompiledPreviewSkin",
                table: "st_ec_storeSkins");
        }
    }
}
