#pragma checksum "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "38deb36243f816a921eaff5c6338a04145f5f650"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_SiteTriks_Views_Tags_Create), @"mvc.1.0.view", @"/Areas/SiteTriks/Views/Tags/Create.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/SiteTriks/Views/Tags/Create.cshtml", typeof(AspNetCore.Areas_SiteTriks_Views_Tags_Create))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"38deb36243f816a921eaff5c6338a04145f5f650", @"/Areas/SiteTriks/Views/Tags/Create.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"37c59baa2c2423197145f0831249231c41dbc78d", @"/Areas/SiteTriks/Views/_ViewImports.cshtml")]
    public class Areas_SiteTriks_Views_Tags_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SiteTriks.Models.Tags.CreateTagViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/navbar-remove.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", new global::Microsoft.AspNetCore.Html.HtmlString("text/javascript"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/validator.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(49, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
  
    ViewBag.Title = "Create Tag";

#line default
#line hidden
            BeginContext(93, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("Styles", async() => {
                BeginContext(112, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(118, 56, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "840ab200d63047deb67be127ed7e59f9", async() => {
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
                BeginContext(174, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            BeginContext(179, 33, true);
            WriteLiteral("\r\n<div class=\"backend-wrapper\">\r\n");
            EndContext();
#line 12 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
     using (Html.BeginForm("Create", "Tags", FormMethod.Post, new { id = "create-tag-form" }))
    {
        

#line default
#line hidden
            BeginContext(324, 23, false);
#line 14 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
   Write(Html.AntiForgeryToken());

#line default
#line hidden
            EndContext();
            BeginContext(351, 47, true);
            WriteLiteral("        <div class=\"fixed-top-2\">\r\n            ");
            EndContext();
            BeginContext(399, 42, false);
#line 17 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
       Write(await Html.PartialAsync("SecondNavHeader"));

#line default
#line hidden
            EndContext();
            BeginContext(441, 18, true);
            WriteLiteral("\r\n\r\n            <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 459, "\"", 486, 1);
#line 19 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
WriteAttributeValue("", 466, Url.Action("Index"), 466, 20, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(487, 237, true);
            WriteLiteral(" class=\"btn-nav-2\"><span class=\"st-icon-return-to-list\"></span>Cancel</a>\r\n            <button type=\"submit\" id=\"submit\" value=\"Create\" class=\"btn-nav-2\"><span class=\"glyphicon glyphicon-plus\"></span>Create Tag</button>\r\n        </div>\r\n");
            EndContext();
            BeginContext(726, 102, true);
            WriteLiteral("        <div class=\"form-horizontal\">\r\n            <h4>Category</h4>\r\n            <hr />\r\n            ");
            EndContext();
            BeginContext(829, 64, false);
#line 26 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
       Write(Html.ValidationSummary(true, "", new { @class = "text-danger" }));

#line default
#line hidden
            EndContext();
            BeginContext(893, 56, true);
            WriteLiteral("\r\n            <div class=\"form-group\">\r\n                ");
            EndContext();
            BeginContext(950, 93, false);
#line 28 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
           Write(Html.LabelFor(model => model.Name, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(1043, 63, true);
            WriteLiteral("\r\n                <div class=\"col-md-10\">\r\n                    ");
            EndContext();
            BeginContext(1107, 106, false);
#line 30 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
               Write(Html.EditorFor(model => model.Name, new { htmlAttributes = new { @class = "form-control", id = "name" } }));

#line default
#line hidden
            EndContext();
            BeginContext(1213, 22, true);
            WriteLiteral("\r\n                    ");
            EndContext();
            BeginContext(1236, 82, false);
#line 31 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
               Write(Html.ValidationMessageFor(model => model.Name, "", new { @class = "text-danger" }));

#line default
#line hidden
            EndContext();
            BeginContext(1318, 62, true);
            WriteLiteral("\r\n                </div>\r\n            </div>\r\n        </div>\r\n");
            EndContext();
#line 35 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Tags\Create.cshtml"
    }

#line default
#line hidden
            BeginContext(1387, 8, true);
            WriteLiteral("</div>\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(1413, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(1419, 64, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "fbb0ef261f6d46d391cf1b42d57b2716", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(1483, 443, true);
                WriteLiteral(@"
    <script>
        $('#create-tag-form').on('submit', function (e) {
            let flag = true;

            if (!Validator.validate($('#name'), 'Name must be atleast 3 symbols', function (val) {
                return Validator.hasMinimumLength(val, 3);
            })) {
                flag = false;
            }


            if (!flag) {

                e.preventDefault();
            }
        })
    </script>
");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SiteTriks.Models.Tags.CreateTagViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591