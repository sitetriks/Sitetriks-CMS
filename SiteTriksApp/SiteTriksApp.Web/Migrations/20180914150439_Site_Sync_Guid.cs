using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class Site_Sync_Guid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SyncTargets",
                table: "st_sitesyncHistory");

            migrationBuilder.AlterColumn<Guid>(
                name: "SiteId",
                table: "st_siteSyncTargets",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "ItemId",
                table: "st_sitesyncHistory",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "SyncTarget",
                table: "st_sitesyncHistory",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SyncTarget",
                table: "st_sitesyncHistory");

            migrationBuilder.AlterColumn<string>(
                name: "SiteId",
                table: "st_siteSyncTargets",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<string>(
                name: "ItemId",
                table: "st_sitesyncHistory",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AddColumn<string>(
                name: "SyncTargets",
                table: "st_sitesyncHistory",
                nullable: true);
        }
    }
}
