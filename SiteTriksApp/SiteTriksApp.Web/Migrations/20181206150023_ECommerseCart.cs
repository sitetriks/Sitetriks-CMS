using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class ECommerseCart : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "st_ec_carts",
                columns: table => new
                {
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Id = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_carts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_carts_AspNetUsers_Id",
                        column: x => x.Id,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_storeItems_carts",
                columns: table => new
                {
                    CartId = table.Column<string>(nullable: false),
                    StoreItemId = table.Column<Guid>(nullable: false),
                    Number = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_storeItems_carts", x => new { x.CartId, x.StoreItemId });
                    table.ForeignKey(
                        name: "FK_st_ec_storeItems_carts_st_ec_carts_CartId",
                        column: x => x.CartId,
                        principalTable: "st_ec_carts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ec_storeItems_carts_st_ec_storeItems_StoreItemId",
                        column: x => x.StoreItemId,
                        principalTable: "st_ec_storeItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeItems_carts_StoreItemId",
                table: "st_ec_storeItems_carts",
                column: "StoreItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "st_ec_storeItems_carts");

            migrationBuilder.DropTable(
                name: "st_ec_carts");
        }
    }
}
