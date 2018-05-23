using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class EmaiSubscribers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "st_marketingEmailSubscribers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    EMail = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_marketingEmailSubscribers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "st_marketingEmailSubscribers");
        }
    }
}
