using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class UpdateTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_st_libraries_st_links2_PrefixId",
                table: "st_libraries");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_links2_LinkId",
                table: "st_newsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageMetas_st_links2_LinkId",
                table: "st_pageMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageTemplateMetas_st_links2_LinkId",
                table: "st_pageTemplateMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_projectFiles_st_links2_LinkId",
                table: "st_projectFiles");

            migrationBuilder.DropForeignKey(
                name: "FK_st_rssFeeds_st_links2_LinkId",
                table: "st_rssFeeds");

            migrationBuilder.DropForeignKey(
                name: "FK_st_urlbase_st_links2_Link2Id",
                table: "st_urlbase");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_site_sync_targets",
                table: "st_site_sync_targets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_links2",
                table: "st_links2");

            migrationBuilder.RenameTable(
                name: "st_site_sync_targets",
                newName: "st_siteSyncTargets");

            migrationBuilder.RenameTable(
                name: "st_links2",
                newName: "st_links");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_siteSyncTargets",
                table: "st_siteSyncTargets",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_links",
                table: "st_links",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_st_libraries_st_links_PrefixId",
                table: "st_libraries",
                column: "PrefixId",
                principalTable: "st_links",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_newsMetas_st_links_LinkId",
                table: "st_newsMetas",
                column: "LinkId",
                principalTable: "st_links",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_pageMetas_st_links_LinkId",
                table: "st_pageMetas",
                column: "LinkId",
                principalTable: "st_links",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_pageTemplateMetas_st_links_LinkId",
                table: "st_pageTemplateMetas",
                column: "LinkId",
                principalTable: "st_links",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_projectFiles_st_links_LinkId",
                table: "st_projectFiles",
                column: "LinkId",
                principalTable: "st_links",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_rssFeeds_st_links_LinkId",
                table: "st_rssFeeds",
                column: "LinkId",
                principalTable: "st_links",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_urlbase_st_links_Link2Id",
                table: "st_urlbase",
                column: "Link2Id",
                principalTable: "st_links",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_st_libraries_st_links_PrefixId",
                table: "st_libraries");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_links_LinkId",
                table: "st_newsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageMetas_st_links_LinkId",
                table: "st_pageMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageTemplateMetas_st_links_LinkId",
                table: "st_pageTemplateMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_projectFiles_st_links_LinkId",
                table: "st_projectFiles");

            migrationBuilder.DropForeignKey(
                name: "FK_st_rssFeeds_st_links_LinkId",
                table: "st_rssFeeds");

            migrationBuilder.DropForeignKey(
                name: "FK_st_urlbase_st_links_Link2Id",
                table: "st_urlbase");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_siteSyncTargets",
                table: "st_siteSyncTargets");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_links",
                table: "st_links");

            migrationBuilder.RenameTable(
                name: "st_siteSyncTargets",
                newName: "st_site_sync_targets");

            migrationBuilder.RenameTable(
                name: "st_links",
                newName: "st_links2");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_site_sync_targets",
                table: "st_site_sync_targets",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_links2",
                table: "st_links2",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_st_libraries_st_links2_PrefixId",
                table: "st_libraries",
                column: "PrefixId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_newsMetas_st_links2_LinkId",
                table: "st_newsMetas",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_pageMetas_st_links2_LinkId",
                table: "st_pageMetas",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_pageTemplateMetas_st_links2_LinkId",
                table: "st_pageTemplateMetas",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_projectFiles_st_links2_LinkId",
                table: "st_projectFiles",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_rssFeeds_st_links2_LinkId",
                table: "st_rssFeeds",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_urlbase_st_links2_Link2Id",
                table: "st_urlbase",
                column: "Link2Id",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
