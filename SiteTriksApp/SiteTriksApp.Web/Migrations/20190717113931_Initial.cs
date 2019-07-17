using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SiteTriksApp.Web.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "forum_posts");

            migrationBuilder.DropTable(
                name: "st_blogPosts");

            migrationBuilder.DropTable(
                name: "st_ec_categories_extraFieldsConfig");

            migrationBuilder.DropTable(
                name: "st_ec_payments");

            migrationBuilder.DropTable(
                name: "st_ec_physicalLocations");

            migrationBuilder.DropTable(
                name: "st_ec_review");

            migrationBuilder.DropTable(
                name: "st_ec_storeItemExtraFields");

            migrationBuilder.DropTable(
                name: "st_ec_storeItems_carts");

            migrationBuilder.DropTable(
                name: "st_ec_storeItems_categories");

            migrationBuilder.DropTable(
                name: "st_ec_stores_categories");

            migrationBuilder.DropTable(
                name: "st_ec_storeSkins");

            migrationBuilder.DropTable(
                name: "st_errorPages");

            migrationBuilder.DropTable(
                name: "st_marketingEmailGroupsSubscribers");

            migrationBuilder.DropTable(
                name: "st_rssFeedFields");

            migrationBuilder.DropTable(
                name: "st_rssItemMappings");

            migrationBuilder.DropTable(
                name: "st_siteSyncTargets");

            migrationBuilder.DropTable(
                name: "st_topicVersions");

            migrationBuilder.DropTable(
                name: "forum_themes");

            migrationBuilder.DropTable(
                name: "st_ec_storeItemExtraFieldsConfig");

            migrationBuilder.DropTable(
                name: "st_ec_carts");

            migrationBuilder.DropTable(
                name: "st_ec_storeItems");

            migrationBuilder.DropTable(
                name: "st_ec_categories");

            migrationBuilder.DropTable(
                name: "st_marketingEmailGroups");

            migrationBuilder.DropTable(
                name: "st_marketingEmailSubscribers");

            migrationBuilder.DropTable(
                name: "st_rssFeeds");

            migrationBuilder.DropTable(
                name: "st_topicContents");

            migrationBuilder.DropTable(
                name: "st_topics");

            migrationBuilder.DropTable(
                name: "forum_categories");

            migrationBuilder.DropTable(
                name: "st_ec_orders");

            migrationBuilder.DropTable(
                name: "st_ec_deliveryOptions");

            migrationBuilder.DropTable(
                name: "st_ec_stores");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "forum_categories",
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
                    table.PrimaryKey("PK_forum_categories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_forum_categories_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_blogPosts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ComponentConnectionId = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Summary = table.Column<string>(nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_blogPosts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_blogPosts_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_blogPosts_AspNetUsers_CreatorId",
                        column: x => x.CreatorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_carts",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
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
                name: "st_ec_categories",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_stores",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ComponentConnectionId = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    PaymentOptions = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Skin = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_stores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_stores_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_errorPages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    IsEnabled = table.Column<bool>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    PageMetaId = table.Column<Guid>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StatusCode = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_errorPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_errorPages_st_pageMetas_PageMetaId",
                        column: x => x.PageMetaId,
                        principalTable: "st_pageMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_marketingEmailGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Question = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_marketingEmailGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_marketingEmailSubscribers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CompanyName = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_marketingEmailSubscribers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_rssFeeds",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BuilderName = table.Column<string>(maxLength: 150, nullable: true),
                    ComponentConnectionId = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    MapFrom = table.Column<string>(maxLength: 150, nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_rssFeeds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_rssFeeds_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_siteSyncTargets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    SiteId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    TargetIdentifier = table.Column<Guid>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_siteSyncTargets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_topicContents",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(maxLength: 1000000, nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_topicContents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_topics",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    Order = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    ParentId = table.Column<Guid>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    TopicType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_topics", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_topics_st_topics_ParentId",
                        column: x => x.ParentId,
                        principalTable: "st_topics",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "forum_themes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CategoryId = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
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

            migrationBuilder.CreateTable(
                name: "st_ec_deliveryOptions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StatusUpdateMode = table.Column<string>(nullable: true),
                    StoreId = table.Column<Guid>(nullable: true),
                    UrlForStatusUpdate = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_deliveryOptions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_deliveryOptions_st_ec_stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "st_ec_stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_physicalLocations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Address = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StoreId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_physicalLocations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_physicalLocations_st_ec_stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "st_ec_stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_storeItemExtraFieldsConfig",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StoreId = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_storeItemExtraFieldsConfig", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_storeItemExtraFieldsConfig_st_ec_stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "st_ec_stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_stores_categories",
                columns: table => new
                {
                    StoreId = table.Column<Guid>(nullable: false),
                    CategoryId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_stores_categories", x => new { x.StoreId, x.CategoryId });
                    table.ForeignKey(
                        name: "FK_st_ec_stores_categories_st_ec_categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "st_ec_categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ec_stores_categories_st_ec_stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "st_ec_stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_storeSkins",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CompiledFullPageSkin = table.Column<string>(nullable: true),
                    CompiledGridSkin = table.Column<string>(nullable: true),
                    CompiledPreviewSkin = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    FullPageSkin = table.Column<string>(nullable: true),
                    GridSkin = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    PreviewSkin = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    StoreId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_storeSkins", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_storeSkins_st_ec_stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "st_ec_stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_marketingEmailGroupsSubscribers",
                columns: table => new
                {
                    MarketingEmailGroupId = table.Column<Guid>(nullable: false),
                    MarketingEmailSubscriberId = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Id = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_marketingEmailGroupsSubscribers", x => new { x.MarketingEmailGroupId, x.MarketingEmailSubscriberId });
                    table.UniqueConstraint("AK_st_marketingEmailGroupsSubscribers_Id", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_marketingEmailGroupsSubscribers_st_marketingEmailGroups_MarketingEmailGroupId",
                        column: x => x.MarketingEmailGroupId,
                        principalTable: "st_marketingEmailGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_marketingEmailGroupsSubscribers_st_marketingEmailSubscribers_MarketingEmailSubscriberId",
                        column: x => x.MarketingEmailSubscriberId,
                        principalTable: "st_marketingEmailSubscribers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_rssFeedFields",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    FieldName = table.Column<string>(nullable: true),
                    FieldValue = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    RssFeedId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_rssFeedFields", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_rssFeedFields_st_rssFeeds_RssFeedId",
                        column: x => x.RssFeedId,
                        principalTable: "st_rssFeeds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_rssItemMappings",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    FieldFrom = table.Column<string>(nullable: true),
                    FieldTo = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    RssFeedId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_rssItemMappings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_rssItemMappings_st_rssFeeds_RssFeedId",
                        column: x => x.RssFeedId,
                        principalTable: "st_rssFeeds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_topicVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Order = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    TopicContentId = table.Column<Guid>(nullable: true),
                    TopicId = table.Column<Guid>(nullable: false),
                    UpToVersion = table.Column<decimal>(nullable: true),
                    Version = table.Column<decimal>(type: "decimal(18, 6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_topicVersions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_topicVersions_st_topicContents_TopicContentId",
                        column: x => x.TopicContentId,
                        principalTable: "st_topicContents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_topicVersions_st_topics_TopicId",
                        column: x => x.TopicId,
                        principalTable: "st_topics",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "forum_posts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ComponentConnectionId = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    ThemeId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_forum_posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_forum_posts_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_forum_posts_forum_themes_ThemeId",
                        column: x => x.ThemeId,
                        principalTable: "forum_themes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_forum_posts_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DeliveryOptionId = table.Column<Guid>(nullable: false),
                    ExpectedDeliveryDate = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    PaymentOption = table.Column<string>(nullable: true),
                    PaymentValue = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StoreId = table.Column<Guid>(nullable: false),
                    UserFeedBack = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_orders_st_ec_deliveryOptions_DeliveryOptionId",
                        column: x => x.DeliveryOptionId,
                        principalTable: "st_ec_deliveryOptions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ec_orders_st_ec_stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "st_ec_stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_categories_extraFieldsConfig",
                columns: table => new
                {
                    StoreItemExtraFieldsConfigId = table.Column<Guid>(nullable: false),
                    CategoryId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_categories_extraFieldsConfig", x => new { x.StoreItemExtraFieldsConfigId, x.CategoryId });
                    table.ForeignKey(
                        name: "FK_st_ec_categories_extraFieldsConfig_st_ec_categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "st_ec_categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ec_categories_extraFieldsConfig_st_ec_storeItemExtraFieldsConfig_StoreItemExtraFieldsConfigId",
                        column: x => x.StoreItemExtraFieldsConfigId,
                        principalTable: "st_ec_storeItemExtraFieldsConfig",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_payments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Currency = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    OrderId = table.Column<Guid>(nullable: true),
                    PaymentIdentifier = table.Column<string>(nullable: true),
                    PaymentOptionType = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    Value = table.Column<decimal>(type: "decimal(18, 6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_payments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_payments_st_ec_orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "st_ec_orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_storeItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AvailableInPhysicalStore = table.Column<bool>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Images = table.Column<string>(nullable: true),
                    IsOnSale = table.Column<bool>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    MainImage = table.Column<string>(nullable: true),
                    ManualRelatedItems = table.Column<string>(nullable: true),
                    OrderId = table.Column<Guid>(nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    RemainingQuantity = table.Column<int>(nullable: false),
                    SalePeriod = table.Column<int>(nullable: false),
                    SalePrice = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    SaleQuantity = table.Column<int>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StoreId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_storeItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_storeItems_st_ec_orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "st_ec_orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ec_storeItems_st_ec_stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "st_ec_stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_review",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    IsAnonymous = table.Column<bool>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StoreItemId = table.Column<Guid>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_review", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_review_st_ec_storeItems_StoreItemId",
                        column: x => x.StoreItemId,
                        principalTable: "st_ec_storeItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_storeItemExtraFields",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StoreItemExtraFieldConfigId = table.Column<Guid>(nullable: false),
                    StoreItemId = table.Column<Guid>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_storeItemExtraFields", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_storeItemExtraFields_st_ec_storeItems_StoreItemId",
                        column: x => x.StoreItemId,
                        principalTable: "st_ec_storeItems",
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

            migrationBuilder.CreateTable(
                name: "st_ec_storeItems_categories",
                columns: table => new
                {
                    StoreItemId = table.Column<Guid>(nullable: false),
                    CategoryId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_storeItems_categories", x => new { x.StoreItemId, x.CategoryId });
                    table.ForeignKey(
                        name: "FK_st_ec_storeItems_categories_st_ec_categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "st_ec_categories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ec_storeItems_categories_st_ec_storeItems_StoreItemId",
                        column: x => x.StoreItemId,
                        principalTable: "st_ec_storeItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_forum_categories_UserId",
                table: "forum_categories",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_forum_posts_ComponentConnectionId",
                table: "forum_posts",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_forum_posts_ThemeId",
                table: "forum_posts",
                column: "ThemeId");

            migrationBuilder.CreateIndex(
                name: "IX_forum_posts_UserId",
                table: "forum_posts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_forum_themes_CategoryId",
                table: "forum_themes",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_forum_themes_UserId",
                table: "forum_themes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_st_blogPosts_ComponentConnectionId",
                table: "st_blogPosts",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_blogPosts_CreatorId",
                table: "st_blogPosts",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_categories_extraFieldsConfig_CategoryId",
                table: "st_ec_categories_extraFieldsConfig",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_deliveryOptions_StoreId",
                table: "st_ec_deliveryOptions",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_orders_DeliveryOptionId",
                table: "st_ec_orders",
                column: "DeliveryOptionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_orders_StoreId",
                table: "st_ec_orders",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_payments_OrderId",
                table: "st_ec_payments",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_physicalLocations_StoreId",
                table: "st_ec_physicalLocations",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_review_StoreItemId",
                table: "st_ec_review",
                column: "StoreItemId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeItemExtraFields_StoreItemId",
                table: "st_ec_storeItemExtraFields",
                column: "StoreItemId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeItemExtraFieldsConfig_StoreId",
                table: "st_ec_storeItemExtraFieldsConfig",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeItems_OrderId",
                table: "st_ec_storeItems",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeItems_StoreId",
                table: "st_ec_storeItems",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeItems_carts_StoreItemId",
                table: "st_ec_storeItems_carts",
                column: "StoreItemId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeItems_categories_CategoryId",
                table: "st_ec_storeItems_categories",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_stores_ComponentConnectionId",
                table: "st_ec_stores",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_stores_categories_CategoryId",
                table: "st_ec_stores_categories",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeSkins_StoreId",
                table: "st_ec_storeSkins",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_st_errorPages_PageMetaId",
                table: "st_errorPages",
                column: "PageMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_marketingEmailGroupsSubscribers_MarketingEmailSubscriberId",
                table: "st_marketingEmailGroupsSubscribers",
                column: "MarketingEmailSubscriberId");

            migrationBuilder.CreateIndex(
                name: "IX_st_rssFeedFields_RssFeedId",
                table: "st_rssFeedFields",
                column: "RssFeedId");

            migrationBuilder.CreateIndex(
                name: "IX_st_rssFeeds_ComponentConnectionId",
                table: "st_rssFeeds",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_rssItemMappings_RssFeedId",
                table: "st_rssItemMappings",
                column: "RssFeedId");

            migrationBuilder.CreateIndex(
                name: "IX_st_topics_ParentId",
                table: "st_topics",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_topicVersions_TopicContentId",
                table: "st_topicVersions",
                column: "TopicContentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_topicVersions_TopicId",
                table: "st_topicVersions",
                column: "TopicId");
        }
    }
}
