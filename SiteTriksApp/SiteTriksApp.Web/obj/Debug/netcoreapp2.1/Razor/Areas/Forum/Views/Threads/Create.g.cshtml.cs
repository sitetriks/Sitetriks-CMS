#pragma checksum "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f5c4f6a24c0827b59624b3797b7ac23cd8cd3b9d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Forum_Views_Threads_Create), @"mvc.1.0.view", @"/Areas/Forum/Views/Threads/Create.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/Forum/Views/Threads/Create.cshtml", typeof(AspNetCore.Areas_Forum_Views_Threads_Create))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f5c4f6a24c0827b59624b3797b7ac23cd8cd3b9d", @"/Areas/Forum/Views/Threads/Create.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"37c59baa2c2423197145f0831249231c41dbc78d", @"/Areas/Forum/Views/_ViewImports.cshtml")]
    public class Areas_Forum_Views_Threads_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SiteTriks.ForumModule.Models.ThreadViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/navbar-remove.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/lib/custom/tinymce/tinymce.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/text-editor.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/sitetriks/threads.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(53, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
  
    ViewBag.Title = "Create Thread";

#line default
#line hidden
            BeginContext(100, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("Styles", async() => {
                BeginContext(119, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(125, 56, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "5c97152f856c4359bf97ef3bfd5e313d", async() => {
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
                BeginContext(181, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            BeginContext(186, 127, true);
            WriteLiteral("\r\n<div class=\"forum-wrapper\">\r\n    <div id=\"error-message\" class=\"alert alert-danger\" style=\"display: none;\">\r\n\r\n    </div>\r\n\r\n");
            EndContext();
#line 16 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
     using (Html.BeginForm(actionName: "Create", controllerName: "Threads", method: FormMethod.Post, htmlAttributes: new { id = "create-thread" }))
    {

#line default
#line hidden
            BeginContext(469, 35, true);
            WriteLiteral("        <div class=\"fixed-top-3\">\r\n");
            EndContext();
            BeginContext(565, 16, true);
            WriteLiteral("\r\n            <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 581, "\"", 637, 2);
            WriteAttributeValue("", 588, "/forum/discussions/discussion/", 588, 30, true);
#line 21 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
WriteAttributeValue("", 618, Model.DiscussionId, 618, 19, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(638, 170, true);
            WriteLiteral(" class=\"btn-nav-2\"><span class=\"st-icon-return-to-list\"></span>Back to Threads</a>\r\n            <input type=\"submit\" value=\"Create\" class=\"btn-nav-2\" />\r\n        </div>\r\n");
            EndContext();
            BeginContext(810, 97, true);
            WriteLiteral("        <div class=\"page-properties\">\r\n            <div class=\"form-group row\">\r\n                ");
            EndContext();
            BeginContext(908, 94, false);
#line 27 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
           Write(Html.LabelFor(model => model.Title, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(1002, 18, true);
            WriteLiteral("\r\n                ");
            EndContext();
            BeginContext(1021, 138, false);
#line 28 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
           Write(Html.EditorFor(m => m.Title, new { htmlAttributes = new { @class = "form-control cf_txtTitle should-validate-not-empty", id = "title" } }));

#line default
#line hidden
            EndContext();
            BeginContext(1159, 98, true);
            WriteLiteral("\r\n            </div>\r\n\r\n            <div class=\"form-group row description-row\">\r\n                ");
            EndContext();
            BeginContext(1258, 96, false);
#line 32 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
           Write(Html.LabelFor(model => model.Content, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(1354, 63, true);
            WriteLiteral("\r\n                <div class=\"col-md-10\">\r\n                    ");
            EndContext();
            BeginContext(1418, 101, false);
#line 34 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
               Write(Html.TextAreaFor(m => Model.Content, htmlAttributes: new { @class = "form-control", id = "content" }));

#line default
#line hidden
            EndContext();
            BeginContext(1519, 62, true);
            WriteLiteral("\r\n                </div>\r\n            </div>\r\n        </div>\r\n");
            EndContext();
#line 38 "C:\Users\milova\.nuget\packages\sitetriks.forummodule\1.0.2\contentFiles\any\netcoreapp2.1\Areas\Forum\Views\Threads\Create.cshtml"
    }

#line default
#line hidden
            BeginContext(1588, 10, true);
            WriteLiteral("</div>\r\n\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(1615, 10, true);
                WriteLiteral("    \r\n    ");
                EndContext();
                BeginContext(1625, 59, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b41bb4f623f9479fbc48e4564835cd4b", async() => {
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
                BeginContext(1684, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(1690, 43, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "be797cfe34f7428d89af4e577179a8b5", async() => {
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
                BeginContext(1733, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(1739, 49, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "1eb18567edb049f3beed542f79b07816", async() => {
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
                BeginContext(1788, 142, true);
                WriteLiteral("\r\n    <script type=\"text/javascript\">\r\n        textEditor.initWithoutImages(\'#content\', 500, 300);\r\n        createThread();\r\n    </script>\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SiteTriks.ForumModule.Models.ThreadViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591