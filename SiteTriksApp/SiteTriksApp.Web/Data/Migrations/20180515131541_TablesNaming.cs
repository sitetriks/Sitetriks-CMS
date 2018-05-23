using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class TablesNaming : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ECommerceOrders_AspNetUsers_BuyerId",
                table: "ECommerceOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_ECommerceOrders_ECommerceItems_ECommerceItemId",
                table: "ECommerceOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_ECommerceOrders_ECommercePayment_ECommercePaymentId",
                table: "ECommerceOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_NewsMetas_NewsVersions_DraftNewsVersionId",
                table: "NewsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_NewsMetas_st_links2_LinkId",
                table: "NewsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_NewsMetas_NewsVersions_PublishedNewsVersionId",
                table: "NewsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_NewsVersions_NewsMetas_NewsMetaId",
                table: "NewsVersions");

            migrationBuilder.DropForeignKey(
                name: "FK_st_errorPages_st_page_metas_PageMetaId",
                table: "st_errorPages");

            migrationBuilder.DropForeignKey(
                name: "FK_st_multiLingualField_st_languages_LanguageId",
                table: "st_multiLingualField");

            migrationBuilder.DropForeignKey(
                name: "FK_st_page_metas_st_links2_LinkId",
                table: "st_page_metas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_page_metas_st_page_template_metas_PageTemplateMetaId",
                table: "st_page_metas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_page_metas_st_page_metas_ParentId",
                table: "st_page_metas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_page_template_metas_st_links2_LinkId",
                table: "st_page_template_metas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_page_template_metas_st_page_template_metas_PageTemplateId",
                table: "st_page_template_metas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_page_template_versions_st_page_template_metas_PageTemplateMetaId",
                table: "st_page_template_versions");

            migrationBuilder.DropForeignKey(
                name: "FK_st_page_versions_st_page_metas_PageMetaId",
                table: "st_page_versions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_sitesync_status",
                table: "st_sitesync_status");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_sitesync_history",
                table: "st_sitesync_history");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_site_configs",
                table: "st_site_configs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_page_versions",
                table: "st_page_versions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_page_template_versions",
                table: "st_page_template_versions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_page_template_metas",
                table: "st_page_template_metas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_page_metas",
                table: "st_page_metas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_multiLingualField",
                table: "st_multiLingualField");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_html_blocks",
                table: "st_html_blocks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_dynamic_views",
                table: "st_dynamic_views");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Sites",
                table: "Sites");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NewsVersions",
                table: "NewsVersions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NewsMetas",
                table: "NewsMetas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ECommercePayment",
                table: "ECommercePayment");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ECommerceOrders",
                table: "ECommerceOrders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ECommerceItems",
                table: "ECommerceItems");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Configurations",
                table: "Configurations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassConfigurations",
                table: "ClassConfigurations");

            migrationBuilder.RenameTable(
                name: "st_sitesync_status",
                newName: "st_sitesyncStatus");

            migrationBuilder.RenameTable(
                name: "st_sitesync_history",
                newName: "st_sitesyncHistory");

            migrationBuilder.RenameTable(
                name: "st_site_configs",
                newName: "st_siteConfigs");

            migrationBuilder.RenameTable(
                name: "st_page_versions",
                newName: "st_pageVersions");

            migrationBuilder.RenameTable(
                name: "st_page_template_versions",
                newName: "st_pageTemplateVersions");

            migrationBuilder.RenameTable(
                name: "st_page_template_metas",
                newName: "st_pageTemplateMetas");

            migrationBuilder.RenameTable(
                name: "st_page_metas",
                newName: "st_pageMetas");

            migrationBuilder.RenameTable(
                name: "st_multiLingualField",
                newName: "st_multiLingualFields");

            migrationBuilder.RenameTable(
                name: "st_html_blocks",
                newName: "st_htmlBlocks");

            migrationBuilder.RenameTable(
                name: "st_dynamic_views",
                newName: "st_dynamicViews");

            migrationBuilder.RenameTable(
                name: "Sites",
                newName: "st_sites");

            migrationBuilder.RenameTable(
                name: "NewsVersions",
                newName: "st_newsVersions");

            migrationBuilder.RenameTable(
                name: "NewsMetas",
                newName: "st_newsMetas");

            migrationBuilder.RenameTable(
                name: "ECommercePayment",
                newName: "st_ecommercePayments");

            migrationBuilder.RenameTable(
                name: "ECommerceOrders",
                newName: "st_ecommerceOrders");

            migrationBuilder.RenameTable(
                name: "ECommerceItems",
                newName: "st_ecommerceItems");

            migrationBuilder.RenameTable(
                name: "Configurations",
                newName: "st_configs");

            migrationBuilder.RenameTable(
                name: "ClassConfigurations",
                newName: "st_classConfigurations");

            migrationBuilder.RenameIndex(
                name: "IX_st_page_versions_PageMetaId",
                table: "st_pageVersions",
                newName: "IX_st_pageVersions_PageMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_st_page_template_versions_PageTemplateMetaId",
                table: "st_pageTemplateVersions",
                newName: "IX_st_pageTemplateVersions_PageTemplateMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_st_page_template_metas_PageTemplateId",
                table: "st_pageTemplateMetas",
                newName: "IX_st_pageTemplateMetas_PageTemplateId");

            migrationBuilder.RenameIndex(
                name: "IX_st_page_template_metas_LinkId",
                table: "st_pageTemplateMetas",
                newName: "IX_st_pageTemplateMetas_LinkId");

            migrationBuilder.RenameIndex(
                name: "IX_st_page_metas_ParentId",
                table: "st_pageMetas",
                newName: "IX_st_pageMetas_ParentId");

            migrationBuilder.RenameIndex(
                name: "IX_st_page_metas_PageTemplateMetaId",
                table: "st_pageMetas",
                newName: "IX_st_pageMetas_PageTemplateMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_st_page_metas_LinkId",
                table: "st_pageMetas",
                newName: "IX_st_pageMetas_LinkId");

            migrationBuilder.RenameIndex(
                name: "IX_st_multiLingualField_LanguageId",
                table: "st_multiLingualFields",
                newName: "IX_st_multiLingualFields_LanguageId");

            migrationBuilder.RenameIndex(
                name: "IX_NewsVersions_NewsMetaId",
                table: "st_newsVersions",
                newName: "IX_st_newsVersions_NewsMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_NewsMetas_PublishedNewsVersionId",
                table: "st_newsMetas",
                newName: "IX_st_newsMetas_PublishedNewsVersionId");

            migrationBuilder.RenameIndex(
                name: "IX_NewsMetas_LinkId",
                table: "st_newsMetas",
                newName: "IX_st_newsMetas_LinkId");

            migrationBuilder.RenameIndex(
                name: "IX_NewsMetas_DraftNewsVersionId",
                table: "st_newsMetas",
                newName: "IX_st_newsMetas_DraftNewsVersionId");

            migrationBuilder.RenameIndex(
                name: "IX_ECommerceOrders_ECommercePaymentId",
                table: "st_ecommerceOrders",
                newName: "IX_st_ecommerceOrders_ECommercePaymentId");

            migrationBuilder.RenameIndex(
                name: "IX_ECommerceOrders_ECommerceItemId",
                table: "st_ecommerceOrders",
                newName: "IX_st_ecommerceOrders_ECommerceItemId");

            migrationBuilder.RenameIndex(
                name: "IX_ECommerceOrders_BuyerId",
                table: "st_ecommerceOrders",
                newName: "IX_st_ecommerceOrders_BuyerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_sitesyncStatus",
                table: "st_sitesyncStatus",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_sitesyncHistory",
                table: "st_sitesyncHistory",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_siteConfigs",
                table: "st_siteConfigs",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_pageVersions",
                table: "st_pageVersions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_pageTemplateVersions",
                table: "st_pageTemplateVersions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_pageTemplateMetas",
                table: "st_pageTemplateMetas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_pageMetas",
                table: "st_pageMetas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_multiLingualFields",
                table: "st_multiLingualFields",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_htmlBlocks",
                table: "st_htmlBlocks",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_dynamicViews",
                table: "st_dynamicViews",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_sites",
                table: "st_sites",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_newsVersions",
                table: "st_newsVersions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_newsMetas",
                table: "st_newsMetas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_ecommercePayments",
                table: "st_ecommercePayments",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_ecommerceOrders",
                table: "st_ecommerceOrders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_ecommerceItems",
                table: "st_ecommerceItems",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_configs",
                table: "st_configs",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_classConfigurations",
                table: "st_classConfigurations",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_st_ecommerceOrders_AspNetUsers_BuyerId",
                table: "st_ecommerceOrders",
                column: "BuyerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_ecommerceOrders_st_ecommerceItems_ECommerceItemId",
                table: "st_ecommerceOrders",
                column: "ECommerceItemId",
                principalTable: "st_ecommerceItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_ecommerceOrders_st_ecommercePayments_ECommercePaymentId",
                table: "st_ecommerceOrders",
                column: "ECommercePaymentId",
                principalTable: "st_ecommercePayments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_errorPages_st_pageMetas_PageMetaId",
                table: "st_errorPages",
                column: "PageMetaId",
                principalTable: "st_pageMetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_multiLingualFields_st_languages_LanguageId",
                table: "st_multiLingualFields",
                column: "LanguageId",
                principalTable: "st_languages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_newsMetas_st_newsVersions_DraftNewsVersionId",
                table: "st_newsMetas",
                column: "DraftNewsVersionId",
                principalTable: "st_newsVersions",
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
                name: "FK_st_newsMetas_st_newsVersions_PublishedNewsVersionId",
                table: "st_newsMetas",
                column: "PublishedNewsVersionId",
                principalTable: "st_newsVersions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_newsVersions_st_newsMetas_NewsMetaId",
                table: "st_newsVersions",
                column: "NewsMetaId",
                principalTable: "st_newsMetas",
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
                name: "FK_st_pageMetas_st_pageTemplateMetas_PageTemplateMetaId",
                table: "st_pageMetas",
                column: "PageTemplateMetaId",
                principalTable: "st_pageTemplateMetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_pageMetas_st_pageMetas_ParentId",
                table: "st_pageMetas",
                column: "ParentId",
                principalTable: "st_pageMetas",
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
                name: "FK_st_pageTemplateMetas_st_pageTemplateMetas_PageTemplateId",
                table: "st_pageTemplateMetas",
                column: "PageTemplateId",
                principalTable: "st_pageTemplateMetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_pageTemplateVersions_st_pageTemplateMetas_PageTemplateMetaId",
                table: "st_pageTemplateVersions",
                column: "PageTemplateMetaId",
                principalTable: "st_pageTemplateMetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_pageVersions_st_pageMetas_PageMetaId",
                table: "st_pageVersions",
                column: "PageMetaId",
                principalTable: "st_pageMetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_st_ecommerceOrders_AspNetUsers_BuyerId",
                table: "st_ecommerceOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_st_ecommerceOrders_st_ecommerceItems_ECommerceItemId",
                table: "st_ecommerceOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_st_ecommerceOrders_st_ecommercePayments_ECommercePaymentId",
                table: "st_ecommerceOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_st_errorPages_st_pageMetas_PageMetaId",
                table: "st_errorPages");

            migrationBuilder.DropForeignKey(
                name: "FK_st_multiLingualFields_st_languages_LanguageId",
                table: "st_multiLingualFields");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_newsVersions_DraftNewsVersionId",
                table: "st_newsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_links2_LinkId",
                table: "st_newsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_newsVersions_PublishedNewsVersionId",
                table: "st_newsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsVersions_st_newsMetas_NewsMetaId",
                table: "st_newsVersions");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageMetas_st_links2_LinkId",
                table: "st_pageMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageMetas_st_pageTemplateMetas_PageTemplateMetaId",
                table: "st_pageMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageMetas_st_pageMetas_ParentId",
                table: "st_pageMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageTemplateMetas_st_links2_LinkId",
                table: "st_pageTemplateMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageTemplateMetas_st_pageTemplateMetas_PageTemplateId",
                table: "st_pageTemplateMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageTemplateVersions_st_pageTemplateMetas_PageTemplateMetaId",
                table: "st_pageTemplateVersions");

            migrationBuilder.DropForeignKey(
                name: "FK_st_pageVersions_st_pageMetas_PageMetaId",
                table: "st_pageVersions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_sitesyncStatus",
                table: "st_sitesyncStatus");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_sitesyncHistory",
                table: "st_sitesyncHistory");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_sites",
                table: "st_sites");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_siteConfigs",
                table: "st_siteConfigs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_pageVersions",
                table: "st_pageVersions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_pageTemplateVersions",
                table: "st_pageTemplateVersions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_pageTemplateMetas",
                table: "st_pageTemplateMetas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_pageMetas",
                table: "st_pageMetas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_newsVersions",
                table: "st_newsVersions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_newsMetas",
                table: "st_newsMetas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_multiLingualFields",
                table: "st_multiLingualFields");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_htmlBlocks",
                table: "st_htmlBlocks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_ecommercePayments",
                table: "st_ecommercePayments");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_ecommerceOrders",
                table: "st_ecommerceOrders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_ecommerceItems",
                table: "st_ecommerceItems");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_dynamicViews",
                table: "st_dynamicViews");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_configs",
                table: "st_configs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_st_classConfigurations",
                table: "st_classConfigurations");

            migrationBuilder.RenameTable(
                name: "st_sitesyncStatus",
                newName: "st_sitesync_status");

            migrationBuilder.RenameTable(
                name: "st_sitesyncHistory",
                newName: "st_sitesync_history");

            migrationBuilder.RenameTable(
                name: "st_sites",
                newName: "Sites");

            migrationBuilder.RenameTable(
                name: "st_siteConfigs",
                newName: "st_site_configs");

            migrationBuilder.RenameTable(
                name: "st_pageVersions",
                newName: "st_page_versions");

            migrationBuilder.RenameTable(
                name: "st_pageTemplateVersions",
                newName: "st_page_template_versions");

            migrationBuilder.RenameTable(
                name: "st_pageTemplateMetas",
                newName: "st_page_template_metas");

            migrationBuilder.RenameTable(
                name: "st_pageMetas",
                newName: "st_page_metas");

            migrationBuilder.RenameTable(
                name: "st_newsVersions",
                newName: "NewsVersions");

            migrationBuilder.RenameTable(
                name: "st_newsMetas",
                newName: "NewsMetas");

            migrationBuilder.RenameTable(
                name: "st_multiLingualFields",
                newName: "st_multiLingualField");

            migrationBuilder.RenameTable(
                name: "st_htmlBlocks",
                newName: "st_html_blocks");

            migrationBuilder.RenameTable(
                name: "st_ecommercePayments",
                newName: "ECommercePayment");

            migrationBuilder.RenameTable(
                name: "st_ecommerceOrders",
                newName: "ECommerceOrders");

            migrationBuilder.RenameTable(
                name: "st_ecommerceItems",
                newName: "ECommerceItems");

            migrationBuilder.RenameTable(
                name: "st_dynamicViews",
                newName: "st_dynamic_views");

            migrationBuilder.RenameTable(
                name: "st_configs",
                newName: "Configurations");

            migrationBuilder.RenameTable(
                name: "st_classConfigurations",
                newName: "ClassConfigurations");

            migrationBuilder.RenameIndex(
                name: "IX_st_pageVersions_PageMetaId",
                table: "st_page_versions",
                newName: "IX_st_page_versions_PageMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_st_pageTemplateVersions_PageTemplateMetaId",
                table: "st_page_template_versions",
                newName: "IX_st_page_template_versions_PageTemplateMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_st_pageTemplateMetas_PageTemplateId",
                table: "st_page_template_metas",
                newName: "IX_st_page_template_metas_PageTemplateId");

            migrationBuilder.RenameIndex(
                name: "IX_st_pageTemplateMetas_LinkId",
                table: "st_page_template_metas",
                newName: "IX_st_page_template_metas_LinkId");

            migrationBuilder.RenameIndex(
                name: "IX_st_pageMetas_ParentId",
                table: "st_page_metas",
                newName: "IX_st_page_metas_ParentId");

            migrationBuilder.RenameIndex(
                name: "IX_st_pageMetas_PageTemplateMetaId",
                table: "st_page_metas",
                newName: "IX_st_page_metas_PageTemplateMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_st_pageMetas_LinkId",
                table: "st_page_metas",
                newName: "IX_st_page_metas_LinkId");

            migrationBuilder.RenameIndex(
                name: "IX_st_newsVersions_NewsMetaId",
                table: "NewsVersions",
                newName: "IX_NewsVersions_NewsMetaId");

            migrationBuilder.RenameIndex(
                name: "IX_st_newsMetas_PublishedNewsVersionId",
                table: "NewsMetas",
                newName: "IX_NewsMetas_PublishedNewsVersionId");

            migrationBuilder.RenameIndex(
                name: "IX_st_newsMetas_LinkId",
                table: "NewsMetas",
                newName: "IX_NewsMetas_LinkId");

            migrationBuilder.RenameIndex(
                name: "IX_st_newsMetas_DraftNewsVersionId",
                table: "NewsMetas",
                newName: "IX_NewsMetas_DraftNewsVersionId");

            migrationBuilder.RenameIndex(
                name: "IX_st_multiLingualFields_LanguageId",
                table: "st_multiLingualField",
                newName: "IX_st_multiLingualField_LanguageId");

            migrationBuilder.RenameIndex(
                name: "IX_st_ecommerceOrders_ECommercePaymentId",
                table: "ECommerceOrders",
                newName: "IX_ECommerceOrders_ECommercePaymentId");

            migrationBuilder.RenameIndex(
                name: "IX_st_ecommerceOrders_ECommerceItemId",
                table: "ECommerceOrders",
                newName: "IX_ECommerceOrders_ECommerceItemId");

            migrationBuilder.RenameIndex(
                name: "IX_st_ecommerceOrders_BuyerId",
                table: "ECommerceOrders",
                newName: "IX_ECommerceOrders_BuyerId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_sitesync_status",
                table: "st_sitesync_status",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_sitesync_history",
                table: "st_sitesync_history",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Sites",
                table: "Sites",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_site_configs",
                table: "st_site_configs",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_page_versions",
                table: "st_page_versions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_page_template_versions",
                table: "st_page_template_versions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_page_template_metas",
                table: "st_page_template_metas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_page_metas",
                table: "st_page_metas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_NewsVersions",
                table: "NewsVersions",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_NewsMetas",
                table: "NewsMetas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_multiLingualField",
                table: "st_multiLingualField",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_html_blocks",
                table: "st_html_blocks",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ECommercePayment",
                table: "ECommercePayment",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ECommerceOrders",
                table: "ECommerceOrders",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ECommerceItems",
                table: "ECommerceItems",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_st_dynamic_views",
                table: "st_dynamic_views",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Configurations",
                table: "Configurations",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassConfigurations",
                table: "ClassConfigurations",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_ECommerceOrders_AspNetUsers_BuyerId",
                table: "ECommerceOrders",
                column: "BuyerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ECommerceOrders_ECommerceItems_ECommerceItemId",
                table: "ECommerceOrders",
                column: "ECommerceItemId",
                principalTable: "ECommerceItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ECommerceOrders_ECommercePayment_ECommercePaymentId",
                table: "ECommerceOrders",
                column: "ECommercePaymentId",
                principalTable: "ECommercePayment",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NewsMetas_NewsVersions_DraftNewsVersionId",
                table: "NewsMetas",
                column: "DraftNewsVersionId",
                principalTable: "NewsVersions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NewsMetas_st_links2_LinkId",
                table: "NewsMetas",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NewsMetas_NewsVersions_PublishedNewsVersionId",
                table: "NewsMetas",
                column: "PublishedNewsVersionId",
                principalTable: "NewsVersions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_NewsVersions_NewsMetas_NewsMetaId",
                table: "NewsVersions",
                column: "NewsMetaId",
                principalTable: "NewsMetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_errorPages_st_page_metas_PageMetaId",
                table: "st_errorPages",
                column: "PageMetaId",
                principalTable: "st_page_metas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_multiLingualField_st_languages_LanguageId",
                table: "st_multiLingualField",
                column: "LanguageId",
                principalTable: "st_languages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_page_metas_st_links2_LinkId",
                table: "st_page_metas",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_page_metas_st_page_template_metas_PageTemplateMetaId",
                table: "st_page_metas",
                column: "PageTemplateMetaId",
                principalTable: "st_page_template_metas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_page_metas_st_page_metas_ParentId",
                table: "st_page_metas",
                column: "ParentId",
                principalTable: "st_page_metas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_page_template_metas_st_links2_LinkId",
                table: "st_page_template_metas",
                column: "LinkId",
                principalTable: "st_links2",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_page_template_metas_st_page_template_metas_PageTemplateId",
                table: "st_page_template_metas",
                column: "PageTemplateId",
                principalTable: "st_page_template_metas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_page_template_versions_st_page_template_metas_PageTemplateMetaId",
                table: "st_page_template_versions",
                column: "PageTemplateMetaId",
                principalTable: "st_page_template_metas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_page_versions_st_page_metas_PageMetaId",
                table: "st_page_versions",
                column: "PageMetaId",
                principalTable: "st_page_metas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
