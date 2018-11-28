using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class ForumUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_st_posts_st_threads_ThreadId",
                table: "st_posts");

            migrationBuilder.DropForeignKey(
                name: "FK_st_posts_AspNetUsers_UserId",
                table: "st_posts");

            migrationBuilder.DropTable(
                name: "st_threads");

            migrationBuilder.DropTable(
                name: "st_discussions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_posts",
                table: "st_posts");

            migrationBuilder.RenameTable(
                name: "st_posts",
                newName: "forum_posts");

            migrationBuilder.RenameColumn(
                name: "ThreadId",
                table: "forum_posts",
                newName: "ThemeId");

            migrationBuilder.RenameColumn(
                name: "Creator",
                table: "forum_posts",
                newName: "Title");

            migrationBuilder.RenameIndex(
                name: "IX_st_posts_UserId",
                table: "forum_posts",
                newName: "IX_forum_posts_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_st_posts_ThreadId",
                table: "forum_posts",
                newName: "IX_forum_posts_ThemeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_forum_posts",
                table: "forum_posts",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "forum_categories",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_forum_categories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_forum_categories_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "forum_themes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    CategoryId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_forum_themes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_forum_themes_forum_categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "forum_categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_forum_themes_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_forum_categories_UserId",
                table: "forum_categories",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_forum_themes_CategoryId",
                table: "forum_themes",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_forum_themes_UserId",
                table: "forum_themes",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_forum_posts_forum_themes_ThemeId",
                table: "forum_posts",
                column: "ThemeId",
                principalTable: "forum_themes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_forum_posts_AspNetUsers_UserId",
                table: "forum_posts",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_forum_posts_forum_themes_ThemeId",
                table: "forum_posts");

            migrationBuilder.DropForeignKey(
                name: "FK_forum_posts_AspNetUsers_UserId",
                table: "forum_posts");

            migrationBuilder.DropTable(
                name: "forum_themes");

            migrationBuilder.DropTable(
                name: "forum_categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_forum_posts",
                table: "forum_posts");

            migrationBuilder.RenameTable(
                name: "forum_posts",
                newName: "st_posts");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "st_posts",
                newName: "Creator");

            migrationBuilder.RenameColumn(
                name: "ThemeId",
                table: "st_posts",
                newName: "ThreadId");

            migrationBuilder.RenameIndex(
                name: "IX_forum_posts_UserId",
                table: "st_posts",
                newName: "IX_st_posts_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_forum_posts_ThemeId",
                table: "st_posts",
                newName: "IX_st_posts_ThreadId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_posts",
                table: "st_posts",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "st_discussions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_discussions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_discussions_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_threads",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    Creator = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DiscussionId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_threads", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_threads_st_discussions_DiscussionId",
                        column: x => x.DiscussionId,
                        principalTable: "st_discussions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_threads_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_st_discussions_UserId",
                table: "st_discussions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_st_threads_DiscussionId",
                table: "st_threads",
                column: "DiscussionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_threads_UserId",
                table: "st_threads",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_st_posts_st_threads_ThreadId",
                table: "st_posts",
                column: "ThreadId",
                principalTable: "st_threads",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_posts_AspNetUsers_UserId",
                table: "st_posts",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
