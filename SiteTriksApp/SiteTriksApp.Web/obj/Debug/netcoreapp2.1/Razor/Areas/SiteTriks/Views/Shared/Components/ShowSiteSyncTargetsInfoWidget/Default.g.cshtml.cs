#pragma checksum "C:\Users\milova\.nuget\packages\sitetriks.sitesync\1.0.2.1\contentFiles\any\netcoreapp2.1\Areas\SiteTriks\Views\Shared\Components\ShowSiteSyncTargetsInfoWidget\Default.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f0bb88c4b59aaf94bb00e88ff1b93ca25841666d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_SiteTriks_Views_Shared_Components_ShowSiteSyncTargetsInfoWidget_Default), @"mvc.1.0.view", @"/Areas/SiteTriks/Views/Shared/Components/ShowSiteSyncTargetsInfoWidget/Default.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/SiteTriks/Views/Shared/Components/ShowSiteSyncTargetsInfoWidget/Default.cshtml", typeof(AspNetCore.Areas_SiteTriks_Views_Shared_Components_ShowSiteSyncTargetsInfoWidget_Default))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#line 2 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\_ViewImports.cshtml"
using SiteTriksApp.Web;

#line default
#line hidden
#line 3 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\_ViewImports.cshtml"
using SiteTriksApp.Web.Models;

#line default
#line hidden
#line 4 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\_ViewImports.cshtml"
using SiteTriksApp.Web.Models.AccountViewModels;

#line default
#line hidden
#line 5 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\_ViewImports.cshtml"
using SiteTriksApp.Web.Models.ManageViewModels;

#line default
#line hidden
#line 7 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\_ViewImports.cshtml"
using SiteTriks.Infrastructure.Common;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f0bb88c4b59aaf94bb00e88ff1b93ca25841666d", @"/Areas/SiteTriks/Views/Shared/Components/ShowSiteSyncTargetsInfoWidget/Default.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"37c59baa2c2423197145f0831249231c41dbc78d", @"/Areas/SiteTriks/Views/_ViewImports.cshtml")]
    public class Areas_SiteTriks_Views_Shared_Components_ShowSiteSyncTargetsInfoWidget_Default : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<SiteTriks.SiteSync.Models.SiteSyncTargetViewModel>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/dragable.svg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(64, 251, true);
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <div>\r\n        <div class=\"dashboard-table\">\r\n            <div class=\"panel panel-primary\" style=\"border: none;\">\r\n                <div class=\"controle-header panel-heading panel-heading-landing\">\r\n                    ");
            EndContext();
            BeginContext(315, 33, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "9409d071d71b4867a32096533d8285ce", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(348, 161, true);
            WriteLiteral("\r\n                    <h1 class=\"panel-title panel-title-landing\">\r\n                        SiteSync Targets\r\n                    </h1>\r\n                </div>\r\n");
            EndContext();
            BeginContext(682, 120, true);
            WriteLiteral("                <div class=\"panel-body panel-body-landing\">\r\n                    <table class=\"dashboard-items-table\">\r\n");
            EndContext();
#line 18 "C:\Users\milova\.nuget\packages\sitetriks.sitesync\1.0.2.1\contentFiles\any\netcoreapp2.1\Areas\SiteTriks\Views\Shared\Components\ShowSiteSyncTargetsInfoWidget\Default.cshtml"
                         if (Model.Count > 0)
                        {
                            foreach (var target in Model)
                            {

#line default
#line hidden
            BeginContext(966, 123, true);
            WriteLiteral("                                <tr>\r\n                                    <td>\r\n                                        <b>");
            EndContext();
            BeginContext(1090, 11, false);
#line 24 "C:\Users\milova\.nuget\packages\sitetriks.sitesync\1.0.2.1\contentFiles\any\netcoreapp2.1\Areas\SiteTriks\Views\Shared\Components\ShowSiteSyncTargetsInfoWidget\Default.cshtml"
                                      Write(target.Name);

#line default
#line hidden
            EndContext();
            BeginContext(1101, 134, true);
            WriteLiteral("</b>\r\n                                    </td>\r\n                                    <td>\r\n                                        <b>");
            EndContext();
            BeginContext(1236, 26, false);
#line 27 "C:\Users\milova\.nuget\packages\sitetriks.sitesync\1.0.2.1\contentFiles\any\netcoreapp2.1\Areas\SiteTriks\Views\Shared\Components\ShowSiteSyncTargetsInfoWidget\Default.cshtml"
                                      Write(target.NotSyncedItemsCount);

#line default
#line hidden
            EndContext();
            BeginContext(1262, 88, true);
            WriteLiteral("</b>\r\n                                    </td>\r\n                                </tr>\r\n");
            EndContext();
#line 30 "C:\Users\milova\.nuget\packages\sitetriks.sitesync\1.0.2.1\contentFiles\any\netcoreapp2.1\Areas\SiteTriks\Views\Shared\Components\ShowSiteSyncTargetsInfoWidget\Default.cshtml"
                            }
                        }
                        else
                        {

#line default
#line hidden
            BeginContext(1465, 69, true);
            WriteLiteral("                            <tr>You have no site sync targets!</tr>\r\n");
            EndContext();
#line 35 "C:\Users\milova\.nuget\packages\sitetriks.sitesync\1.0.2.1\contentFiles\any\netcoreapp2.1\Areas\SiteTriks\Views\Shared\Components\ShowSiteSyncTargetsInfoWidget\Default.cshtml"
                        }

#line default
#line hidden
            BeginContext(1561, 199, true);
            WriteLiteral("                    </table>\r\n                </div>\r\n                <div class=\"panel-footer panel-footer-landing\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<SiteTriks.SiteSync.Models.SiteSyncTargetViewModel>> Html { get; private set; }
    }
}
#pragma warning restore 1591