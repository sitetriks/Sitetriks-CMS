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
                    UserGroups = table.Column<string>(nullable: true),
                    LastUserId = table.Column<string>(nullable: true)
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
                name: "st_componentConnections",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    EntityId = table.Column<Guid>(nullable: false),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_componentConnections", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_componentsConfigurations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    ContainerName = table.Column<string>(nullable: true),
                    Components = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_componentsConfigurations", x => x.Id);
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
                name: "st_logs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    UserName = table.Column<string>(nullable: true),
                    TimeOfEvent = table.Column<DateTime>(nullable: false),
                    LogLevel = table.Column<string>(nullable: true),
                    CategoryName = table.Column<string>(nullable: true),
                    Formatter = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_logs", x => x.Id);
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
                name: "st_permissions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    System = table.Column<string>(nullable: true),
                    Action = table.Column<string>(nullable: true),
                    AllowedRoles = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_permissions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "st_scheduledTasks",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    TaskId = table.Column<Guid>(nullable: false),
                    ServiceType = table.Column<string>(nullable: true),
                    MethodName = table.Column<string>(nullable: true),
                    Params = table.Column<string>(nullable: true),
                    DateOfExecutionUtc = table.Column<DateTime>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    Info = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_scheduledTasks", x => x.Id);
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
                name: "st_sites",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Domain = table.Column<string>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
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
                    ItemId = table.Column<Guid>(nullable: false),
                    ItemType = table.Column<string>(nullable: true),
                    TargetSiteId = table.Column<Guid>(nullable: false),
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
                    Status = table.Column<int>(nullable: false),
                    OriginSite = table.Column<string>(nullable: true),
                    TargetSite = table.Column<string>(nullable: true),
                    OriginUserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sitesyncStatus", x => x.Id);
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
                name: "st_commentsComponent",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    EntityConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_commentsComponent", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_commentsComponent_st_componentConnections_EntityConnectionId",
                        column: x => x.EntityConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_fileComponents",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    EntityConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_fileComponents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_fileComponents_st_componentConnections_EntityConnectionId",
                        column: x => x.EntityConnectionId,
                        principalTable: "st_componentConnections",
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
                    AllowedTypes = table.Column<int>(nullable: false),
                    ComponentConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_libraries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_libraries_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_linkComponents",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    EntityConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_linkComponents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_linkComponents_st_componentConnections_EntityConnectionId",
                        column: x => x.EntityConnectionId,
                        principalTable: "st_componentConnections",
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
                    Title = table.Column<string>(nullable: true),
                    ComponentConnectionId = table.Column<Guid>(nullable: false),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    BackgroundJobId = table.Column<Guid>(nullable: true),
                    Status = table.Column<int>(nullable: false),
                    IsPublished = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_newsMetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_newsMetas_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_templateMetas",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Title = table.Column<string>(maxLength: 150, nullable: true),
                    Description = table.Column<string>(maxLength: 5000, nullable: true),
                    TemplateMetaId = table.Column<Guid>(nullable: true),
                    PageStatus = table.Column<int>(nullable: false),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    IsPublished = table.Column<bool>(nullable: false),
                    ComponentConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_templateMetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_templateMetas_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_templateMetas_st_templateMetas_TemplateMetaId",
                        column: x => x.TemplateMetaId,
                        principalTable: "st_templateMetas",
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
                name: "st_sitesyncResponses",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Successful = table.Column<bool>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    ItemId = table.Column<Guid>(nullable: false),
                    ItemType = table.Column<string>(nullable: true),
                    SiteSyncStatusId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_sitesyncResponses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_sitesyncResponses_st_sitesyncStatus_SiteSyncStatusId",
                        column: x => x.SiteSyncStatusId,
                        principalTable: "st_sitesyncStatus",
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
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true)
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
                    CreatorId = table.Column<string>(nullable: true),
                    ComponentId = table.Column<Guid>(nullable: true),
                    CommentComponentId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_comments_st_commentsComponent_ComponentId",
                        column: x => x.ComponentId,
                        principalTable: "st_commentsComponent",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_comments_AspNetUsers_CreatorId",
                        column: x => x.CreatorId,
                        principalTable: "AspNetUsers",
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
                    IsDeleted = table.Column<bool>(nullable: false),
                    LibraryId = table.Column<Guid>(nullable: false),
                    Width = table.Column<int>(nullable: false),
                    Height = table.Column<int>(nullable: false),
                    OriginalFile = table.Column<Guid>(nullable: true),
                    IsUsed = table.Column<bool>(nullable: false),
                    UsedInPages = table.Column<string>(nullable: true),
                    RefferedInNews = table.Column<string>(nullable: true),
                    SizeName = table.Column<string>(nullable: true),
                    ComponentConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_files", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_files_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_files_st_libraries_LibraryId",
                        column: x => x.LibraryId,
                        principalTable: "st_libraries",
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
                name: "st_links",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false),
                    Url = table.Column<string>(nullable: true),
                    ComponentId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_links", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_links_st_linkComponents_ComponentId",
                        column: x => x.ComponentId,
                        principalTable: "st_linkComponents",
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
                    IsInNavigation = table.Column<bool>(nullable: false),
                    IsHomePage = table.Column<bool>(nullable: false),
                    ParentId = table.Column<Guid>(nullable: true),
                    NavigationPriority = table.Column<int>(nullable: false),
                    IsAMPPage = table.Column<bool>(nullable: false),
                    PermittedRolesIds = table.Column<string>(nullable: true),
                    PageStatus = table.Column<int>(nullable: false),
                    TemplateMetaId = table.Column<Guid>(nullable: true),
                    LastPublished = table.Column<DateTime>(nullable: true),
                    DateToBePublished = table.Column<DateTime>(nullable: true),
                    IsPublished = table.Column<bool>(nullable: false),
                    BackgroundJobId = table.Column<Guid>(nullable: true),
                    CurrentTags = table.Column<string>(nullable: true),
                    ComponentConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_pageMetas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_pageMetas_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_pageMetas_st_pageMetas_ParentId",
                        column: x => x.ParentId,
                        principalTable: "st_pageMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_pageMetas_st_templateMetas_TemplateMetaId",
                        column: x => x.TemplateMetaId,
                        principalTable: "st_templateMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_templateVersions",
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
                    TemplateMetaId = table.Column<Guid>(nullable: false),
                    Culture = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_templateVersions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_templateVersions_st_templateMetas_TemplateMetaId",
                        column: x => x.TemplateMetaId,
                        principalTable: "st_templateMetas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "st_fileFileComponents",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    FileId = table.Column<Guid>(nullable: false),
                    FileComponentId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_fileFileComponents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_fileFileComponents_st_fileComponents_FileComponentId",
                        column: x => x.FileComponentId,
                        principalTable: "st_fileComponents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_fileFileComponents_st_files_FileId",
                        column: x => x.FileId,
                        principalTable: "st_files",
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
                    UsedInNews = table.Column<string>(nullable: true),
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
                name: "st_newsVersions",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: true),
                    DateModified = table.Column<DateTime>(nullable: true),
                    SiteProviderId = table.Column<Guid>(nullable: false),
                    LastUserId = table.Column<string>(nullable: true),
                    DisplayTitle = table.Column<string>(nullable: true),
                    Content = table.Column<string>(maxLength: 5000, nullable: true),
                    NewsMetaId = table.Column<Guid>(nullable: false),
                    Type = table.Column<int>(nullable: false),
                    Version = table.Column<decimal>(type: "decimal(18, 6)", nullable: false),
                    MainImageId = table.Column<Guid>(nullable: true),
                    ComponentConnectionId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_st_newsVersions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_st_newsVersions_st_componentConnections_ComponentConnectionId",
                        column: x => x.ComponentConnectionId,
                        principalTable: "st_componentConnections",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_newsVersions_st_files_MainImageId",
                        column: x => x.MainImageId,
                        principalTable: "st_files",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_st_newsVersions_st_newsMetas_NewsMetaId",
                        column: x => x.NewsMetaId,
                        principalTable: "st_newsMetas",
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
                name: "IX_st_comments_ComponentId",
                table: "st_comments",
                column: "ComponentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_comments_CreatorId",
                table: "st_comments",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_st_commentsComponent_EntityConnectionId",
                table: "st_commentsComponent",
                column: "EntityConnectionId");

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
                name: "IX_st_fileComponents_EntityConnectionId",
                table: "st_fileComponents",
                column: "EntityConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_fileFileComponents_FileComponentId",
                table: "st_fileFileComponents",
                column: "FileComponentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_fileFileComponents_FileId",
                table: "st_fileFileComponents",
                column: "FileId");

            migrationBuilder.CreateIndex(
                name: "IX_st_files_ComponentConnectionId",
                table: "st_files",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_files_LibraryId",
                table: "st_files",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_fileUse_FileId",
                table: "st_fileUse",
                column: "FileId");

            migrationBuilder.CreateIndex(
                name: "IX_st_filters_EndPointId",
                table: "st_filters",
                column: "EndPointId");

            migrationBuilder.CreateIndex(
                name: "IX_st_libraries_ComponentConnectionId",
                table: "st_libraries",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_library_thumbnails_LibraryId",
                table: "st_library_thumbnails",
                column: "LibraryId");

            migrationBuilder.CreateIndex(
                name: "IX_st_linkComponents_EntityConnectionId",
                table: "st_linkComponents",
                column: "EntityConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_links_ComponentId",
                table: "st_links",
                column: "ComponentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_multiLingualFields_LanguageId",
                table: "st_multiLingualFields",
                column: "LanguageId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsMetas_ComponentConnectionId",
                table: "st_newsMetas",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsVersions_ComponentConnectionId",
                table: "st_newsVersions",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsVersions_MainImageId",
                table: "st_newsVersions",
                column: "MainImageId");

            migrationBuilder.CreateIndex(
                name: "IX_st_newsVersions_NewsMetaId",
                table: "st_newsVersions",
                column: "NewsMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageMetas_ComponentConnectionId",
                table: "st_pageMetas",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageMetas_ParentId",
                table: "st_pageMetas",
                column: "ParentId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageMetas_TemplateMetaId",
                table: "st_pageMetas",
                column: "TemplateMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_pageVersions_PageMetaId_Culture_Version",
                table: "st_pageVersions",
                columns: new[] { "PageMetaId", "Culture", "Version" });

            migrationBuilder.CreateIndex(
                name: "IX_st_sitesyncResponses_SiteSyncStatusId",
                table: "st_sitesyncResponses",
                column: "SiteSyncStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_st_templateMetas_ComponentConnectionId",
                table: "st_templateMetas",
                column: "ComponentConnectionId");

            migrationBuilder.CreateIndex(
                name: "IX_st_templateMetas_TemplateMetaId",
                table: "st_templateMetas",
                column: "TemplateMetaId");

            migrationBuilder.CreateIndex(
                name: "IX_st_templateVersions_TemplateMetaId",
                table: "st_templateVersions",
                column: "TemplateMetaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
                name: "st_comments");

            migrationBuilder.DropTable(
                name: "st_componentsConfigurations");

            migrationBuilder.DropTable(
                name: "st_configs");

            migrationBuilder.DropTable(
                name: "st_defaultLinks");

            migrationBuilder.DropTable(
                name: "st_dynamicViews");

            migrationBuilder.DropTable(
                name: "st_ecommerceOrders");

            migrationBuilder.DropTable(
                name: "st_exceptionLogs");

            migrationBuilder.DropTable(
                name: "st_fileFileComponents");

            migrationBuilder.DropTable(
                name: "st_fileUse");

            migrationBuilder.DropTable(
                name: "st_filters");

            migrationBuilder.DropTable(
                name: "st_htmlBlocks");

            migrationBuilder.DropTable(
                name: "st_library_thumbnails");

            migrationBuilder.DropTable(
                name: "st_links");

            migrationBuilder.DropTable(
                name: "st_logs");

            migrationBuilder.DropTable(
                name: "st_marketingEmailOptions");

            migrationBuilder.DropTable(
                name: "st_multiLingualFields");

            migrationBuilder.DropTable(
                name: "st_newsVersions");

            migrationBuilder.DropTable(
                name: "st_pageVersions");

            migrationBuilder.DropTable(
                name: "st_permissions");

            migrationBuilder.DropTable(
                name: "st_scheduledTasks");

            migrationBuilder.DropTable(
                name: "st_seoKeywords");

            migrationBuilder.DropTable(
                name: "st_sites");

            migrationBuilder.DropTable(
                name: "st_sitesyncHistory");

            migrationBuilder.DropTable(
                name: "st_sitesyncResponses");

            migrationBuilder.DropTable(
                name: "st_templateVersions");

            migrationBuilder.DropTable(
                name: "st_trackable");

            migrationBuilder.DropTable(
                name: "st_userGroups");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "st_tags");

            migrationBuilder.DropTable(
                name: "st_commentsComponent");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "st_ecommerceItems");

            migrationBuilder.DropTable(
                name: "st_ecommercePayments");

            migrationBuilder.DropTable(
                name: "st_fileComponents");

            migrationBuilder.DropTable(
                name: "st_endPoints");

            migrationBuilder.DropTable(
                name: "st_thumbnails_sizes");

            migrationBuilder.DropTable(
                name: "st_linkComponents");

            migrationBuilder.DropTable(
                name: "st_languages");

            migrationBuilder.DropTable(
                name: "st_files");

            migrationBuilder.DropTable(
                name: "st_newsMetas");

            migrationBuilder.DropTable(
                name: "st_pageMetas");

            migrationBuilder.DropTable(
                name: "st_sitesyncStatus");

            migrationBuilder.DropTable(
                name: "st_libraries");

            migrationBuilder.DropTable(
                name: "st_templateMetas");

            migrationBuilder.DropTable(
                name: "st_componentConnections");
        }
    }
}
