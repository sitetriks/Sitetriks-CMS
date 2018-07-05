using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class fileUsage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "st_fileUse",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    FileId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    RefferedIn = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    UsedInPages = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_fileUse", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_fileUse_st_projectFiles_FileId",
                        column: x => x.FileId,
                        principalTable: "st_projectFiles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_st_fileUse_FileId",
                table: "st_fileUse",
                column: "FileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "st_fileUse");
        }
    }
}
