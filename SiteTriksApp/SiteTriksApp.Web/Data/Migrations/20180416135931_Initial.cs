using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SiteTriksApp.Web.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Company = table.Column<string>(maxLength: 150, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    DashboardConfiguration = table.Column<string>(nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    FullName = table.Column<string>(maxLength: 150, nullable: true),
                    GoogleAuthenticatorSecretKey = table.Column<string>(maxLength: 150, nullable: true),
                    Info = table.Column<string>(maxLength: 500, nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    IsGoogleAuthenticatorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    PasswordHash = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    SecurityStamp = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    UserGroups = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(maxLength: 256, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ClassConfigurations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Fields = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassConfigurations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Configurations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    IsIdenticalToFile = table.Column<bool>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Configurations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ECommerceItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    ImagesUrlsIDs = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    MainImageUrlID = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(maxLength: 150, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ECommerceItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ECommercePayment",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Amount = table.Column<decimal>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    InvoiceCode = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Method = table.Column<int>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ECommercePayment", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sites",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    Domain = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sites", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_defaultLinks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_defaultLinks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_endPoints",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Column = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    JoinFields = table.Column<string>(nullable: true),
                    JoinKey = table.Column<string>(nullable: true),
                    JoinTable = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    RequestType = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Skip = table.Column<int>(nullable: true),
                    Take = table.Column<int>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_endPoints", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_exceptionLogs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    Domain = table.Column<string>(nullable: true),
                    ExceptionInformation = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_exceptionLogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_html_blocks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_html_blocks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_languages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Culture = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    IsDefault = table.Column<bool>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    UrlPrefix = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_languages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_links2",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    MainUrl = table.Column<string>(maxLength: 150, nullable: false),
                    MainUrlId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_links2", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_site_configs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteId = table.Column<Guid>(nullable: false),
                    SiteKey = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_site_configs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_site_sync_targets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    SiteId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Url = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_site_sync_targets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_sitesync_history",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Action = table.Column<int>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    IsSynced = table.Column<bool>(nullable: false),
                    ItemId = table.Column<string>(nullable: true),
                    ItemLastTitle = table.Column<string>(nullable: true),
                    ItemType = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    SyncTargets = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sitesync_history", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_sitesync_status",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sitesync_status", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_tags",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_tags", x => x.Id);
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
                name: "st_userGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_userGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "st_blogPosts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(maxLength: 5000, nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Summary = table.Column<string>(maxLength: 500, nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_blogPosts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_blogPosts_AspNetUsers_CreatorId",
                        column: x => x.CreatorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_comments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(maxLength: 5000, nullable: true),
                    CreatorId = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_comments_AspNetUsers_CreatorId",
                        column: x => x.CreatorId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

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
                name: "ECommerceOrders",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BuyerId = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    ECommerceItemId = table.Column<Guid>(nullable: false),
                    ECommercePaymentId = table.Column<Guid>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ECommerceOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ECommerceOrders_AspNetUsers_BuyerId",
                        column: x => x.BuyerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ECommerceOrders_ECommerceItems_ECommerceItemId",
                        column: x => x.ECommerceItemId,
                        principalTable: "ECommerceItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ECommerceOrders_ECommercePayment_ECommercePaymentId",
                        column: x => x.ECommercePaymentId,
                        principalTable: "ECommercePayment",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_filters",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Comparison = table.Column<int>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    EndPointId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    PropertyName = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_filters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_filters_st_endPoints_EndPointId",
                        column: x => x.EndPointId,
                        principalTable: "st_endPoints",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_multiLingualField",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    FieldName = table.Column<string>(maxLength: 150, nullable: true),
                    LanguageId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Value = table.Column<string>(maxLength: 5000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_multiLingualField", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_multiLingualField_st_languages_LanguageId",
                        column: x => x.LanguageId,
                        principalTable: "st_languages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_libraries",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    AllowedTypes = table.Column<int>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    PrefixId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_libraries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_libraries_st_links2_PrefixId",
                        column: x => x.PrefixId,
                        principalTable: "st_links2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_page_template_metas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BackgroundJobId = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    IsPublished = table.Column<bool>(nullable: false),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: false),
                    PageStatus = table.Column<int>(nullable: false),
                    PageTemplateId = table.Column<Guid>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Template = table.Column<string>(maxLength: 150, nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_page_template_metas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_page_template_metas_st_links2_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_page_template_metas_st_page_template_metas_PageTemplateId",
                        column: x => x.PageTemplateId,
                        principalTable: "st_page_template_metas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_rssFeeds",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BuilderName = table.Column<string>(maxLength: 150, nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: false),
                    MapFrom = table.Column<string>(maxLength: 150, nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_rssFeeds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_rssFeeds_st_links2_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_urlbase",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    Link2Id = table.Column<Guid>(nullable: true),
                    SiteId = table.Column<string>(maxLength: 150, nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Url = table.Column<string>(maxLength: 150, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_urlbase", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_urlbase_st_links2_Link2Id",
                        column: x => x.Link2Id,
                        principalTable: "st_links2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_baseMetas_tags",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BaseMetaId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    TagId = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_baseMetas_tags", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_baseMetas_tags_st_tags_TagId",
                        column: x => x.TagId,
                        principalTable: "st_tags",
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    TopicContentId = table.Column<Guid>(nullable: true),
                    TopicId = table.Column<Guid>(nullable: false),
                    Version = table.Column<decimal>(nullable: false)
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

            migrationBuilder.CreateTable(
                name: "st_projectFiles",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Alt = table.Column<string>(nullable: true),
                    Content = table.Column<byte[]>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    ExpirationDate = table.Column<DateTime>(nullable: true),
                    Extension = table.Column<string>(nullable: true),
                    IsDeleted = table.Column<bool>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    LibraryId = table.Column<Guid>(nullable: false),
                    LinkId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_projectFiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_projectFiles_st_libraries_LibraryId",
                        column: x => x.LibraryId,
                        principalTable: "st_libraries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_projectFiles_st_links2_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_page_metas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BackgroundJobId = table.Column<string>(nullable: true),
                    CurrentTags = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    IsHomePage = table.Column<bool>(nullable: false),
                    IsInNavigation = table.Column<bool>(nullable: false),
                    IsPublished = table.Column<bool>(nullable: false),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: false),
                    NavigationPriority = table.Column<int>(nullable: false),
                    PageStatus = table.Column<int>(nullable: false),
                    PageTemplateMetaId = table.Column<Guid>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: true),
                    PermittedRolesIds = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Template = table.Column<string>(maxLength: 150, nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_page_metas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_page_metas_st_links2_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_page_metas_st_page_template_metas_PageTemplateMetaId",
                        column: x => x.PageTemplateMetaId,
                        principalTable: "st_page_template_metas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_page_metas_st_page_metas_ParentId",
                        column: x => x.ParentId,
                        principalTable: "st_page_metas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_page_template_versions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Contents = table.Column<string>(nullable: true),
                    Culture = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    PageTemplateMetaId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    Version = table.Column<decimal>(type: "decimal(18,3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_page_template_versions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_page_template_versions_st_page_template_metas_PageTemplateMetaId",
                        column: x => x.PageTemplateMetaId,
                        principalTable: "st_page_template_metas",
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
                name: "st_posts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(nullable: true),
                    Creator = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    ThreadId = table.Column<Guid>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_posts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_posts_st_threads_ThreadId",
                        column: x => x.ThreadId,
                        principalTable: "st_threads",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_posts_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
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
                    LastUserId = table.Column<string>(nullable: true),
                    PageMetaId = table.Column<Guid>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    StatusCode = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_errorPages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_errorPages_st_page_metas_PageMetaId",
                        column: x => x.PageMetaId,
                        principalTable: "st_page_metas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_page_versions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Contents = table.Column<string>(nullable: true),
                    Culture = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    PageMetaId = table.Column<Guid>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    Version = table.Column<decimal>(type: "decimal(18,3)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_page_versions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_page_versions_st_page_metas_PageMetaId",
                        column: x => x.PageMetaId,
                        principalTable: "st_page_metas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "NewsVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(maxLength: 5000, nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    ImagesUrlsIDs = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    MainImageUrlID = table.Column<string>(nullable: true),
                    NewsMetaId = table.Column<Guid>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Version = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsVersions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NewsMetas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BackgroundJobId = table.Column<string>(nullable: true),
                    CurrentTags = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    DraftNewsVersionId = table.Column<Guid>(nullable: true),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: true),
                    NewsStatus = table.Column<int>(nullable: false),
                    PublishedNewsVersionId = table.Column<Guid>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsMetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NewsMetas_NewsVersions_DraftNewsVersionId",
                        column: x => x.DraftNewsVersionId,
                        principalTable: "NewsVersions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NewsMetas_st_links2_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links2",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NewsMetas_NewsVersions_PublishedNewsVersionId",
                        column: x => x.PublishedNewsVersionId,
                        principalTable: "NewsVersions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_ECommerceOrders_BuyerId",
                table: "ECommerceOrders",
                column: "BuyerId");

            migrationBuilder.CreateIndex(
                name: "IX_ECommerceOrders_ECommerceItemId",
                table: "ECommerceOrders",
                column: "ECommerceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_ECommerceOrders_ECommercePaymentId",
                table: "ECommerceOrders",
                column: "ECommercePaymentId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsMetas_DraftNewsVersionId",
                table: "NewsMetas",
                column: "DraftNewsVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsMetas_LinkId",
                table: "NewsMetas",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsMetas_PublishedNewsVersionId",
                table: "NewsMetas",
                column: "PublishedNewsVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_NewsVersions_NewsMetaId",
                table: "NewsVersions",
                column: "NewsMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_baseMetas_tags_TagId",
                table: "st_baseMetas_tags",
                column: "TagId");

            migrationBuilder.CreateIndex(
                name: "IX_st_blogPosts_CreatorId",
                table: "st_blogPosts",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_st_comments_CreatorId",
                table: "st_comments",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_st_discussions_UserId",
                table: "st_discussions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_st_errorPages_PageMetaId",
                table: "st_errorPages",
                column: "PageMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_filters_EndPointId",
                table: "st_filters",
                column: "EndPointId");

            migrationBuilder.CreateIndex(
                name: "IX_st_libraries_PrefixId",
                table: "st_libraries",
                column: "PrefixId");

            migrationBuilder.CreateIndex(
                name: "IX_st_multiLingualField_LanguageId",
                table: "st_multiLingualField",
                column: "LanguageId");

            migrationBuilder.CreateIndex(
                name: "IX_st_page_metas_LinkId",
                table: "st_page_metas",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_page_metas_PageTemplateMetaId",
                table: "st_page_metas",
                column: "PageTemplateMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_page_metas_ParentId",
                table: "st_page_metas",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_page_template_metas_LinkId",
                table: "st_page_template_metas",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_page_template_metas_PageTemplateId",
                table: "st_page_template_metas",
                column: "PageTemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_st_page_template_versions_PageTemplateMetaId",
                table: "st_page_template_versions",
                column: "PageTemplateMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_page_versions_PageMetaId",
                table: "st_page_versions",
                column: "PageMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_posts_ThreadId",
                table: "st_posts",
                column: "ThreadId");

            migrationBuilder.CreateIndex(
                name: "IX_st_posts_UserId",
                table: "st_posts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_st_projectFiles_LibraryId",
                table: "st_projectFiles",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_projectFiles_LinkId",
                table: "st_projectFiles",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_rssFeedFields_RssFeedId",
                table: "st_rssFeedFields",
                column: "RssFeedId");

            migrationBuilder.CreateIndex(
                name: "IX_st_rssFeeds_LinkId",
                table: "st_rssFeeds",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_rssItemMappings_RssFeedId",
                table: "st_rssItemMappings",
                column: "RssFeedId");

            migrationBuilder.CreateIndex(
                name: "IX_st_threads_DiscussionId",
                table: "st_threads",
                column: "DiscussionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_threads_UserId",
                table: "st_threads",
                column: "UserId");

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

            migrationBuilder.CreateIndex(
                name: "IX_st_urlbase_Link2Id",
                table: "st_urlbase",
                column: "Link2Id");

            migrationBuilder.AddForeignKey(
                name: "FK_NewsVersions_NewsMetas_NewsMetaId",
                table: "NewsVersions",
                column: "NewsMetaId",
                principalTable: "NewsMetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NewsMetas_NewsVersions_DraftNewsVersionId",
                table: "NewsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_NewsMetas_NewsVersions_PublishedNewsVersionId",
                table: "NewsMetas");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "ClassConfigurations");

            migrationBuilder.DropTable(
                name: "Configurations");

            migrationBuilder.DropTable(
                name: "ECommerceOrders");

            migrationBuilder.DropTable(
                name: "Sites");

            migrationBuilder.DropTable(
                name: "st_baseMetas_tags");

            migrationBuilder.DropTable(
                name: "st_blogPosts");

            migrationBuilder.DropTable(
                name: "st_comments");

            migrationBuilder.DropTable(
                name: "st_defaultLinks");

            migrationBuilder.DropTable(
                name: "st_errorPages");

            migrationBuilder.DropTable(
                name: "st_exceptionLogs");

            migrationBuilder.DropTable(
                name: "st_filters");

            migrationBuilder.DropTable(
                name: "st_html_blocks");

            migrationBuilder.DropTable(
                name: "st_multiLingualField");

            migrationBuilder.DropTable(
                name: "st_page_template_versions");

            migrationBuilder.DropTable(
                name: "st_page_versions");

            migrationBuilder.DropTable(
                name: "st_posts");

            migrationBuilder.DropTable(
                name: "st_projectFiles");

            migrationBuilder.DropTable(
                name: "st_rssFeedFields");

            migrationBuilder.DropTable(
                name: "st_rssItemMappings");

            migrationBuilder.DropTable(
                name: "st_site_configs");

            migrationBuilder.DropTable(
                name: "st_site_sync_targets");

            migrationBuilder.DropTable(
                name: "st_sitesync_history");

            migrationBuilder.DropTable(
                name: "st_sitesync_status");

            migrationBuilder.DropTable(
                name: "st_topicVersions");

            migrationBuilder.DropTable(
                name: "st_urlbase");

            migrationBuilder.DropTable(
                name: "st_userGroups");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "ECommerceItems");

            migrationBuilder.DropTable(
                name: "ECommercePayment");

            migrationBuilder.DropTable(
                name: "st_tags");

            migrationBuilder.DropTable(
                name: "st_endPoints");

            migrationBuilder.DropTable(
                name: "st_languages");

            migrationBuilder.DropTable(
                name: "st_page_metas");

            migrationBuilder.DropTable(
                name: "st_threads");

            migrationBuilder.DropTable(
                name: "st_libraries");

            migrationBuilder.DropTable(
                name: "st_rssFeeds");

            migrationBuilder.DropTable(
                name: "st_topicContents");

            migrationBuilder.DropTable(
                name: "st_topics");

            migrationBuilder.DropTable(
                name: "st_page_template_metas");

            migrationBuilder.DropTable(
                name: "st_discussions");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "NewsVersions");

            migrationBuilder.DropTable(
                name: "NewsMetas");

            migrationBuilder.DropTable(
                name: "st_links2");
        }
    }
}
