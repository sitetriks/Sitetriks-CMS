using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class RefferedInObject_last : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RefferedInObjects",
                table: "st_projectFiles",
                newName: "RefferedInNews");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RefferedInNews",
                table: "st_projectFiles",
                newName: "RefferedInObjects");
        }
    }
}
