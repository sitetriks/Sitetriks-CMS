using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class RemoveIndexFromEmailsOptions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_st_marketingEmailOptions_Index",
                table: "st_marketingEmailOptions");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_st_marketingEmailOptions_Index",
                table: "st_marketingEmailOptions",
                column: "Index",
                unique: true);
        }
    }
}
