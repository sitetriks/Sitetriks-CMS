#pragma checksum "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5a8f95f7285e4f412af2ba08c2430a20a4cb4b2e"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Forum_Views_Discussions_Create), @"mvc.1.0.view", @"/Areas/Forum/Views/Discussions/Create.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/Forum/Views/Discussions/Create.cshtml", typeof(AspNetCore.Areas_Forum_Views_Discussions_Create))]
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
#line 1 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#line 2 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\_ViewImports.cshtml"
using SiteTriksApp.Web;

#line default
#line hidden
#line 3 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\_ViewImports.cshtml"
using SiteTriksApp.Web.Models;

#line default
#line hidden
#line 4 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\_ViewImports.cshtml"
using SiteTriksApp.Web.Models.AccountViewModels;

#line default
#line hidden
#line 5 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\_ViewImports.cshtml"
using SiteTriksApp.Web.Models.ManageViewModels;

#line default
#line hidden
#line 7 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\_ViewImports.cshtml"
using SiteTriks.Infrastructure.Common;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5a8f95f7285e4f412af2ba08c2430a20a4cb4b2e", @"/Areas/Forum/Views/Discussions/Create.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"37c59baa2c2423197145f0831249231c41dbc78d", @"/Areas/Forum/Views/_ViewImports.cshtml")]
    public class Areas_Forum_Views_Discussions_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SiteTriks.ForumModule.Models.DiscussionViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/navbar-remove.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/lib/custom/tinymce/tinymce.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/text-editor.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/sitetriks/discussions.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(57, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml"
  
    ViewBag.Title = "Create Discussion";

#line default
#line hidden
            BeginContext(108, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("Styles", async() => {
                BeginContext(127, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(133, 56, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "8512e03775904a719ee07d4fe0a9f079", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(189, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            BeginContext(194, 119, true);
            WriteLiteral("\r\n<div class=\"forum-wrapper\">\r\n    <div id=\"error-message\" class=\"alert alert-danger\" style=\"display: none;\"></div>\r\n\r\n");
            EndContext();
#line 14 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml"
     using (Html.BeginForm("Create", "Discussions", FormMethod.Post, htmlAttributes: new { area = "SiteTriks", id = "create-discussion" }))
    {

#line default
#line hidden
            BeginContext(461, 35, true);
            WriteLiteral("        <div class=\"fixed-top-3\">\r\n");
            EndContext();
            BeginContext(557, 313, true);
            WriteLiteral(@"
            <a href=""/forum/discussions"" class=""btn-nav-2""><span class=""st-icon-return-to-list""></span>Back to Discussions</a>
            <input type=""submit"" value=""Create"" class=""btn-nav-2"" />
        </div>
        <div class=""page-properties"">
            <div class=""form-group row"">
                ");
            EndContext();
            BeginContext(871, 86, false);
#line 24 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml"
           Write(Html.LabelFor(m => m.Title, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(957, 18, true);
            WriteLiteral("\r\n                ");
            EndContext();
            BeginContext(976, 124, false);
#line 25 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml"
           Write(Html.EditorFor(m => m.Title, new { htmlAttributes = new { @class = "form-control cf_txtTitle should-validate-not-empty" } }));

#line default
#line hidden
            EndContext();
            BeginContext(1100, 98, true);
            WriteLiteral("\r\n            </div>\r\n\r\n            <div class=\"form-group row description-row\">\r\n                ");
            EndContext();
            BeginContext(1199, 92, false);
#line 29 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml"
           Write(Html.LabelFor(m => m.Description, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(1291, 63, true);
            WriteLiteral("\r\n                <div class=\"col-md-10\">\r\n                    ");
            EndContext();
            BeginContext(1355, 105, false);
#line 31 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml"
               Write(Html.TextAreaFor(m => Model.Description, htmlAttributes: new { @class = "form-control", id = "content" }));

#line default
#line hidden
            EndContext();
            BeginContext(1460, 62, true);
            WriteLiteral("\r\n                </div>\r\n            </div>\r\n        </div>\r\n");
            EndContext();
#line 35 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Discussions\Create.cshtml"
    }

#line default
#line hidden
            BeginContext(1529, 10, true);
            WriteLiteral("</div>\r\n\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(1556, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(1562, 59, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e68b3baaa8004ff7810bc31691ab5e31", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1621, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(1627, 43, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "68ee016e254c42d89832a2b8e42a6fe9", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1670, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(1676, 53, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "059f09f325e248d4a74201c040172e2a", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1729, 83, true);
                WriteLiteral("\r\n    <script type=\"text/javascript\">\r\n        createDiscussion();\r\n    </script>\r\n");
                EndContext();
            }
            );
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SiteTriks.ForumModule.Models.DiscussionViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591