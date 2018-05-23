using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class UnsubscribedUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UnsubscribedUsers",
                table: "st_userGroups",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Summary",
                table: "st_blogPosts",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 500,
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UnsubscribedUsers",
                table: "st_userGroups");

            migrationBuilder.AlterColumn<string>(
                name: "Summary",
                table: "st_blogPosts",
                maxLength: 500,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
