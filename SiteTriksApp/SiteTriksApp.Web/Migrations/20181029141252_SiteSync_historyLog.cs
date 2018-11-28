using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class SiteSync_historyLog : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OriginSite",
                table: "st_sitesyncStatus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OriginUserId",
                table: "st_sitesyncStatus",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TargetSite",
                table: "st_sitesyncStatus",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "st_sitesyncResponses",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Successful = table.Column<bool>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    ItemId = table.Column<Guid>(nullable: false),
                    ItemType = table.Column<string>(nullable: true),
                    SiteSyncStatusId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sitesyncResponses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_sitesyncResponses_st_sitesyncStatus_SiteSyncStatusId",
                        column: x => x.SiteSyncStatusId,
                        principalTable: "st_sitesyncStatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_st_sitesyncResponses_SiteSyncStatusId",
                table: "st_sitesyncResponses",
                column: "SiteSyncStatusId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "st_sitesyncResponses");

            migrationBuilder.DropColumn(
                name: "OriginSite",
                table: "st_sitesyncStatus");

            migrationBuilder.DropColumn(
                name: "OriginUserId",
                table: "st_sitesyncStatus");

            migrationBuilder.DropColumn(
                name: "TargetSite",
                table: "st_sitesyncStatus");
        }
    }
}
