using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class static_pages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsStaticPage",
                table: "st_pageMetas",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "st_static_page_cache",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    PageId = table.Column<Guid>(nullable: false),
                    Language = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_static_page_cache", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "st_static_page_cache");

            migrationBuilder.DropColumn(
                name: "IsStaticPage",
                table: "st_pageMetas");
        }
    }
}
