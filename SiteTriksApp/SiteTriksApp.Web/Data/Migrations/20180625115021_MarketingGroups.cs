using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class MarketingGroups : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EMail",
                table: "st_marketingEmailSubscribers",
                newName: "Email");

            migrationBuilder.AddColumn<string>(
                name: "MarketingEmailGroups",
                table: "st_marketingEmailSubscribers",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "st_marketingEmailOptions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Index = table.Column<int>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_marketingEmailOptions", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_st_marketingEmailOptions_Index",
                table: "st_marketingEmailOptions",
                column: "Index",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "st_marketingEmailOptions");

            migrationBuilder.DropColumn(
                name: "MarketingEmailGroups",
                table: "st_marketingEmailSubscribers");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "st_marketingEmailSubscribers",
                newName: "EMail");
        }
    }
}
