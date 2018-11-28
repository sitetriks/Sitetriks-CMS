using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

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
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
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
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    FullName = table.Column<string>(maxLength: 150, nullable: true),
                    FirstName = table.Column<string>(maxLength: 150, nullable: true),
                    LastName = table.Column<string>(maxLength: 150, nullable: true),
                    IsApproved = table.Column<bool>(nullable: false),
                    Info = table.Column<string>(maxLength: 500, nullable: true),
                    Company = table.Column<string>(maxLength: 150, nullable: true),
                    GoogleAuthenticatorSecretKey = table.Column<string>(maxLength: 150, nullable: true),
                    IsGoogleAuthenticatorEnabled = table.Column<bool>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    DashboardConfiguration = table.Column<string>(nullable: true),
                    UserGroups = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FileBinaries",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    FileId = table.Column<Guid>(nullable: false),
                    FileContent = table.Column<byte[]>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileBinaries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_classConfigurations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Fields = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_classConfigurations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_configs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    IsIdenticalToFile = table.Column<bool>(nullable: false),
                    Content = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_configs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_defaultLinks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_defaultLinks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_dynamicViews",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    WidgetName = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    LastRequested = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_dynamicViews", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_categories",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_categories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_ecommerceItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    MainImageUrlID = table.Column<string>(nullable: true),
                    ImagesUrlsIDs = table.Column<string>(nullable: true),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18, 6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ecommerceItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_ecommercePayments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Amount = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    Method = table.Column<int>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    InvoiceCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ecommercePayments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_endPoints",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    Skip = table.Column<int>(nullable: true),
                    Take = table.Column<int>(nullable: true),
                    Column = table.Column<string>(nullable: true),
                    JoinTable = table.Column<string>(nullable: true),
                    JoinKey = table.Column<string>(nullable: true),
                    JoinFields = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    RequestType = table.Column<string>(nullable: true)
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
                    ExceptionInformation = table.Column<string>(nullable: true),
                    Domain = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_exceptionLogs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_htmlBlocks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Content = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_htmlBlocks", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_languages",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Culture = table.Column<string>(nullable: true),
                    UrlPrefix = table.Column<string>(nullable: true),
                    IsDefault = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_languages", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_links",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    MainUrlId = table.Column<Guid>(nullable: false),
                    MainUrl = table.Column<string>(maxLength: 150, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_links", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_marketingEmailOptions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Index = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_marketingEmailOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_marketingEmailSubscribers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    MarketingEmailGroups = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_marketingEmailSubscribers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_seoKeywords",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Words = table.Column<string>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: false),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_seoKeywords", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_siteConfigs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    SiteId = table.Column<Guid>(nullable: false),
                    SiteKey = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_siteConfigs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_sites",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Domain = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sites", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_sitesyncHistory",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    ItemId = table.Column<string>(nullable: true),
                    ItemType = table.Column<string>(nullable: true),
                    SyncTargets = table.Column<string>(nullable: true),
                    ItemLastTitle = table.Column<string>(nullable: true),
                    Action = table.Column<int>(nullable: false),
                    IsSynced = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sitesyncHistory", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_sitesyncStatus",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sitesyncStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_siteSyncTargets",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Url = table.Column<string>(nullable: true),
                    SiteId = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_siteSyncTargets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_tags",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_tags", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_thumbnails_sizes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Width = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    OffsetX = table.Column<int>(nullable: false),
                    OffsetY = table.Column<int>(nullable: false),
                    MultiplyerX = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    MultiplyerY = table.Column<decimal>(type: "decimal(18, 6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_thumbnails_sizes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_topicContents",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Content = table.Column<string>(maxLength: 1000000, nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true)
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    TopicType = table.Column<int>(nullable: false),
                    ParentId = table.Column<Guid>(nullable: true)
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
                name: "st_trackable",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    TypeName = table.Column<string>(maxLength: 150, nullable: true),
                    DefaultPageId = table.Column<Guid>(nullable: false),
                    ContentId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_trackable", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_userGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    UnsubscribedUsers = table.Column<string>(nullable: true)
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
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
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
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
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
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    Summary = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    CreatorId = table.Column<string>(nullable: true)
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
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: false),
                    Content = table.Column<string>(maxLength: 5000, nullable: true),
                    CreatorId = table.Column<string>(nullable: true)
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
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
                name: "st_ecommerceOrders",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    ECommerceItemId = table.Column<Guid>(nullable: false),
                    ECommercePaymentId = table.Column<Guid>(nullable: true),
                    BuyerId = table.Column<string>(nullable: true),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ecommerceOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ecommerceOrders_AspNetUsers_BuyerId",
                        column: x => x.BuyerId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ecommerceOrders_st_ecommerceItems_ECommerceItemId",
                        column: x => x.ECommerceItemId,
                        principalTable: "st_ecommerceItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_ecommerceOrders_st_ecommercePayments_ECommercePaymentId",
                        column: x => x.ECommercePaymentId,
                        principalTable: "st_ecommercePayments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_filters",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    PropertyName = table.Column<string>(nullable: true),
                    Value = table.Column<string>(nullable: true),
                    Comparison = table.Column<int>(nullable: false),
                    EndPointId = table.Column<Guid>(nullable: false)
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
                name: "st_multiLingualFields",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    ParentId = table.Column<Guid>(nullable: false),
                    FieldName = table.Column<string>(maxLength: 150, nullable: true),
                    Value = table.Column<string>(maxLength: 5000, nullable: true),
                    LanguageId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_multiLingualFields", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_multiLingualFields_st_languages_LanguageId",
                        column: x => x.LanguageId,
                        principalTable: "st_languages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_stores",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Skin = table.Column<string>(nullable: true),
                    PaymentOptions = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_ec_stores", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_ec_stores_st_links_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_libraries",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    StorageProviderName = table.Column<string>(nullable: true),
                    PrefixId = table.Column<Guid>(nullable: false),
                    AllowedTypes = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_libraries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_libraries_st_links_PrefixId",
                        column: x => x.PrefixId,
                        principalTable: "st_links",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_pageTemplateMetas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    Template = table.Column<string>(maxLength: 150, nullable: true),
                    LinkId = table.Column<Guid>(nullable: false),
                    PageTemplateId = table.Column<Guid>(nullable: true),
                    PageStatus = table.Column<int>(nullable: false),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    IsPublished = table.Column<bool>(nullable: false),
                    BackgroundJobId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_pageTemplateMetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_pageTemplateMetas_st_links_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_pageTemplateMetas_st_pageTemplateMetas_PageTemplateId",
                        column: x => x.PageTemplateId,
                        principalTable: "st_pageTemplateMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_rssFeeds",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(maxLength: 150, nullable: true),
                    BuilderName = table.Column<string>(maxLength: 150, nullable: true),
                    MapFrom = table.Column<string>(maxLength: 150, nullable: true),
                    LinkId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_rssFeeds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_rssFeeds_st_links_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links",
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
                    Url = table.Column<string>(maxLength: 150, nullable: false),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    SiteId = table.Column<string>(maxLength: 150, nullable: true),
                    Link2Id = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_urlbase", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_urlbase_st_links_Link2Id",
                        column: x => x.Link2Id,
                        principalTable: "st_links",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_baseMetas_tags",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    BaseMetaId = table.Column<Guid>(nullable: false),
                    TagId = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false)
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    Version = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    TopicId = table.Column<Guid>(nullable: false),
                    TopicContentId = table.Column<Guid>(nullable: true)
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
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    Creator = table.Column<string>(nullable: true),
                    DiscussionId = table.Column<Guid>(nullable: false),
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
                name: "st_ec_deliveryOptions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    StatusUpdateMode = table.Column<string>(nullable: true),
                    UrlForStatusUpdate = table.Column<string>(nullable: true),
                    StoreId = table.Column<Guid>(nullable: true)
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
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true),
                    StoreId = table.Column<Guid>(nullable: false)
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
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    StoreId = table.Column<Guid>(nullable: false),
                    GridSkin = table.Column<string>(nullable: true),
                    PreviewSkin = table.Column<string>(nullable: true),
                    FullPageSkin = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true)
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
                name: "st_files",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Extension = table.Column<string>(nullable: true),
                    Alt = table.Column<string>(nullable: true),
                    StorageProviderName = table.Column<string>(nullable: true),
                    Content = table.Column<byte[]>(nullable: true),
                    ExpirationDate = table.Column<DateTime>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: false),
                    IsDeleted = table.Column<bool>(nullable: false),
                    LibraryId = table.Column<Guid>(nullable: false),
                    Width = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    OriginalFile = table.Column<Guid>(nullable: true),
                    IsUsed = table.Column<bool>(nullable: false),
                    UsedInPages = table.Column<string>(nullable: true),
                    RefferedInNews = table.Column<string>(nullable: true),
                    SizeName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_files", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_files_st_libraries_LibraryId",
                        column: x => x.LibraryId,
                        principalTable: "st_libraries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_files_st_links_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_library_thumbnails",
                columns: table => new
                {
                    ThumbnailId = table.Column<Guid>(nullable: false),
                    LibraryId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_library_thumbnails", x => new { x.ThumbnailId, x.LibraryId });
                    table.ForeignKey(
                        name: "FK_st_library_thumbnails_st_libraries_LibraryId",
                        column: x => x.LibraryId,
                        principalTable: "st_libraries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_library_thumbnails_st_thumbnails_sizes_ThumbnailId",
                        column: x => x.ThumbnailId,
                        principalTable: "st_thumbnails_sizes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_pageMetas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    Template = table.Column<string>(maxLength: 150, nullable: true),
                    IsInNavigation = table.Column<bool>(nullable: false),
                    IsHomePage = table.Column<bool>(nullable: false),
                    ParentId = table.Column<Guid>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: false),
                    NavigationPriority = table.Column<int>(nullable: false),
                    PermittedRolesIds = table.Column<string>(nullable: true),
                    PageStatus = table.Column<int>(nullable: false),
                    PageTemplateMetaId = table.Column<Guid>(nullable: true),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    IsPublished = table.Column<bool>(nullable: false),
                    BackgroundJobId = table.Column<string>(nullable: true),
                    CurrentTags = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_pageMetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_pageMetas_st_links_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_pageMetas_st_pageTemplateMetas_PageTemplateMetaId",
                        column: x => x.PageTemplateMetaId,
                        principalTable: "st_pageTemplateMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_pageMetas_st_pageMetas_ParentId",
                        column: x => x.ParentId,
                        principalTable: "st_pageMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_pageTemplateVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Version = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    Contents = table.Column<string>(nullable: true),
                    PageTemplateMetaId = table.Column<Guid>(nullable: false),
                    Culture = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_pageTemplateVersions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_pageTemplateVersions_st_pageTemplateMetas_PageTemplateMetaId",
                        column: x => x.PageTemplateMetaId,
                        principalTable: "st_pageTemplateMetas",
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    FieldValue = table.Column<string>(nullable: true),
                    FieldName = table.Column<string>(nullable: true),
                    RssFeedId = table.Column<Guid>(nullable: false)
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    FieldFrom = table.Column<string>(nullable: true),
                    FieldTo = table.Column<string>(nullable: true),
                    RssFeedId = table.Column<Guid>(nullable: false)
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
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Content = table.Column<string>(nullable: true),
                    Creator = table.Column<string>(nullable: true),
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
                name: "st_ec_orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    PaymentOption = table.Column<string>(nullable: true),
                    PaymentValue = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    DeliveryOptionId = table.Column<Guid>(nullable: false),
                    StoreId = table.Column<Guid>(nullable: false),
                    ExpectedDeliveryDate = table.Column<DateTime>(nullable: true),
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
                    CategoryId = table.Column<Guid>(nullable: false),
                    StoreItemExtraFieldsConfigId = table.Column<Guid>(nullable: false)
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
                name: "st_fileUse",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    UsedInPages = table.Column<string>(nullable: true),
                    RefferedInObject = table.Column<string>(nullable: true),
                    FileId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_fileUse", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_fileUse_st_files_FileId",
                        column: x => x.FileId,
                        principalTable: "st_files",
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    StatusCode = table.Column<int>(nullable: false),
                    IsEnabled = table.Column<bool>(nullable: false),
                    PageMetaId = table.Column<Guid>(nullable: true)
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
                name: "st_pageVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Version = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    Contents = table.Column<string>(nullable: true),
                    PageMetaId = table.Column<Guid>(nullable: false),
                    Culture = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_pageVersions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_pageVersions_st_pageMetas_PageMetaId",
                        column: x => x.PageMetaId,
                        principalTable: "st_pageMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_ec_payments",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Value = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    Currency = table.Column<string>(nullable: true),
                    Date = table.Column<DateTime>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    PaymentIdentifier = table.Column<string>(nullable: true),
                    PaymentOptionType = table.Column<string>(nullable: true),
                    OrderId = table.Column<Guid>(nullable: true)
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
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    SalePrice = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    IsOnSale = table.Column<bool>(nullable: false),
                    SalePeriod = table.Column<int>(nullable: false),
                    SaleQuantity = table.Column<int>(nullable: false),
                    MainImage = table.Column<string>(nullable: true),
                    Images = table.Column<string>(nullable: true),
                    AvailableInPhysicalStore = table.Column<bool>(nullable: false),
                    ManualRelatedItems = table.Column<string>(nullable: true),
                    RemainingQuantity = table.Column<int>(nullable: false),
                    StoreId = table.Column<Guid>(nullable: false),
                    OrderId = table.Column<Guid>(nullable: true)
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    StoreItemId = table.Column<Guid>(nullable: true),
                    UserId = table.Column<string>(nullable: true),
                    IsAnonymous = table.Column<bool>(nullable: false),
                    Text = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false)
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Value = table.Column<string>(nullable: true),
                    StoreItemId = table.Column<Guid>(nullable: false),
                    StoreItemExtraFieldConfigId = table.Column<Guid>(nullable: false)
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

            migrationBuilder.CreateTable(
                name: "st_newsMetas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    LinkId = table.Column<Guid>(nullable: true),
                    NewsStatus = table.Column<int>(nullable: false),
                    PublishedNewsVersionId = table.Column<Guid>(nullable: true),
                    DraftNewsVersionId = table.Column<Guid>(nullable: true),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    BackgroundJobId = table.Column<string>(nullable: true),
                    CurrentTags = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_newsMetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_newsMetas_st_links_LinkId",
                        column: x => x.LinkId,
                        principalTable: "st_links",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_newsVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Version = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    MainImageUrlID = table.Column<string>(nullable: true),
                    ImagesUrlsIDs = table.Column<string>(nullable: true),
                    Content = table.Column<string>(maxLength: 5000, nullable: true),
                    NewsMetaId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_newsVersions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_newsVersions_st_newsMetas_NewsMetaId",
                        column: x => x.NewsMetaId,
                        principalTable: "st_newsMetas",
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
                name: "IX_st_ec_storeItems_categories_CategoryId",
                table: "st_ec_storeItems_categories",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_stores_LinkId",
                table: "st_ec_stores",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_stores_categories_CategoryId",
                table: "st_ec_stores_categories",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ec_storeSkins_StoreId",
                table: "st_ec_storeSkins",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ecommerceOrders_BuyerId",
                table: "st_ecommerceOrders",
                column: "BuyerId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ecommerceOrders_ECommerceItemId",
                table: "st_ecommerceOrders",
                column: "ECommerceItemId");

            migrationBuilder.CreateIndex(
                name: "IX_st_ecommerceOrders_ECommercePaymentId",
                table: "st_ecommerceOrders",
                column: "ECommercePaymentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_errorPages_PageMetaId",
                table: "st_errorPages",
                column: "PageMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_files_LibraryId",
                table: "st_files",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_files_LinkId",
                table: "st_files",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_fileUse_FileId",
                table: "st_fileUse",
                column: "FileId");

            migrationBuilder.CreateIndex(
                name: "IX_st_filters_EndPointId",
                table: "st_filters",
                column: "EndPointId");

            migrationBuilder.CreateIndex(
                name: "IX_st_libraries_PrefixId",
                table: "st_libraries",
                column: "PrefixId");

            migrationBuilder.CreateIndex(
                name: "IX_st_library_thumbnails_LibraryId",
                table: "st_library_thumbnails",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_multiLingualFields_LanguageId",
                table: "st_multiLingualFields",
                column: "LanguageId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsMetas_DraftNewsVersionId",
                table: "st_newsMetas",
                column: "DraftNewsVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsMetas_LinkId",
                table: "st_newsMetas",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsMetas_PublishedNewsVersionId",
                table: "st_newsMetas",
                column: "PublishedNewsVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsVersions_NewsMetaId",
                table: "st_newsVersions",
                column: "NewsMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageMetas_LinkId",
                table: "st_pageMetas",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageMetas_PageTemplateMetaId",
                table: "st_pageMetas",
                column: "PageTemplateMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageMetas_ParentId",
                table: "st_pageMetas",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageTemplateMetas_LinkId",
                table: "st_pageTemplateMetas",
                column: "LinkId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageTemplateMetas_PageTemplateId",
                table: "st_pageTemplateMetas",
                column: "PageTemplateId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageTemplateVersions_PageTemplateMetaId",
                table: "st_pageTemplateVersions",
                column: "PageTemplateMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageVersions_PageMetaId_Culture_Version",
                table: "st_pageVersions",
                columns: new[] { "PageMetaId", "Culture", "Version" });

            migrationBuilder.CreateIndex(
                name: "IX_st_posts_ThreadId",
                table: "st_posts",
                column: "ThreadId");

            migrationBuilder.CreateIndex(
                name: "IX_st_posts_UserId",
                table: "st_posts",
                column: "UserId");

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
                name: "FK_st_newsMetas_st_newsVersions_DraftNewsVersionId",
                table: "st_newsMetas",
                column: "DraftNewsVersionId",
                principalTable: "st_newsVersions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_st_newsMetas_st_newsVersions_PublishedNewsVersionId",
                table: "st_newsMetas",
                column: "PublishedNewsVersionId",
                principalTable: "st_newsVersions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_links_LinkId",
                table: "st_newsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_newsVersions_DraftNewsVersionId",
                table: "st_newsMetas");

            migrationBuilder.DropForeignKey(
                name: "FK_st_newsMetas_st_newsVersions_PublishedNewsVersionId",
                table: "st_newsMetas");

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
                name: "FileBinaries");

            migrationBuilder.DropTable(
                name: "st_baseMetas_tags");

            migrationBuilder.DropTable(
                name: "st_blogPosts");

            migrationBuilder.DropTable(
                name: "st_classConfigurations");

            migrationBuilder.DropTable(
                name: "st_comments");

            migrationBuilder.DropTable(
                name: "st_configs");

            migrationBuilder.DropTable(
                name: "st_defaultLinks");

            migrationBuilder.DropTable(
                name: "st_dynamicViews");

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
                name: "st_ec_storeItems_categories");

            migrationBuilder.DropTable(
                name: "st_ec_stores_categories");

            migrationBuilder.DropTable(
                name: "st_ec_storeSkins");

            migrationBuilder.DropTable(
                name: "st_ecommerceOrders");

            migrationBuilder.DropTable(
                name: "st_errorPages");

            migrationBuilder.DropTable(
                name: "st_exceptionLogs");

            migrationBuilder.DropTable(
                name: "st_fileUse");

            migrationBuilder.DropTable(
                name: "st_filters");

            migrationBuilder.DropTable(
                name: "st_htmlBlocks");

            migrationBuilder.DropTable(
                name: "st_library_thumbnails");

            migrationBuilder.DropTable(
                name: "st_marketingEmailOptions");

            migrationBuilder.DropTable(
                name: "st_marketingEmailSubscribers");

            migrationBuilder.DropTable(
                name: "st_multiLingualFields");

            migrationBuilder.DropTable(
                name: "st_pageTemplateVersions");

            migrationBuilder.DropTable(
                name: "st_pageVersions");

            migrationBuilder.DropTable(
                name: "st_posts");

            migrationBuilder.DropTable(
                name: "st_rssFeedFields");

            migrationBuilder.DropTable(
                name: "st_rssItemMappings");

            migrationBuilder.DropTable(
                name: "st_seoKeywords");

            migrationBuilder.DropTable(
                name: "st_siteConfigs");

            migrationBuilder.DropTable(
                name: "st_sites");

            migrationBuilder.DropTable(
                name: "st_sitesyncHistory");

            migrationBuilder.DropTable(
                name: "st_sitesyncStatus");

            migrationBuilder.DropTable(
                name: "st_siteSyncTargets");

            migrationBuilder.DropTable(
                name: "st_topicVersions");

            migrationBuilder.DropTable(
                name: "st_trackable");

            migrationBuilder.DropTable(
                name: "st_urlbase");

            migrationBuilder.DropTable(
                name: "st_userGroups");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "st_tags");

            migrationBuilder.DropTable(
                name: "st_ec_storeItemExtraFieldsConfig");

            migrationBuilder.DropTable(
                name: "st_ec_storeItems");

            migrationBuilder.DropTable(
                name: "st_ec_categories");

            migrationBuilder.DropTable(
                name: "st_ecommerceItems");

            migrationBuilder.DropTable(
                name: "st_ecommercePayments");

            migrationBuilder.DropTable(
                name: "st_files");

            migrationBuilder.DropTable(
                name: "st_endPoints");

            migrationBuilder.DropTable(
                name: "st_thumbnails_sizes");

            migrationBuilder.DropTable(
                name: "st_languages");

            migrationBuilder.DropTable(
                name: "st_pageMetas");

            migrationBuilder.DropTable(
                name: "st_threads");

            migrationBuilder.DropTable(
                name: "st_rssFeeds");

            migrationBuilder.DropTable(
                name: "st_topicContents");

            migrationBuilder.DropTable(
                name: "st_topics");

            migrationBuilder.DropTable(
                name: "st_ec_orders");

            migrationBuilder.DropTable(
                name: "st_libraries");

            migrationBuilder.DropTable(
                name: "st_pageTemplateMetas");

            migrationBuilder.DropTable(
                name: "st_discussions");

            migrationBuilder.DropTable(
                name: "st_ec_deliveryOptions");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "st_ec_stores");

            migrationBuilder.DropTable(
                name: "st_links");

            migrationBuilder.DropTable(
                name: "st_newsVersions");

            migrationBuilder.DropTable(
                name: "st_newsMetas");
        }
    }
}
