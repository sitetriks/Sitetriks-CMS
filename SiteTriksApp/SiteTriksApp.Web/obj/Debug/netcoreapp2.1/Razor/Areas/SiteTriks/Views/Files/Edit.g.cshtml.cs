#pragma checksum "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a0f26aafa58292cc57a3777d06558dc45a06443f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_SiteTriks_Views_Files_Edit), @"mvc.1.0.view", @"/Areas/SiteTriks/Views/Files/Edit.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/SiteTriks/Views/Files/Edit.cshtml", typeof(AspNetCore.Areas_SiteTriks_Views_Files_Edit))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a0f26aafa58292cc57a3777d06558dc45a06443f", @"/Areas/SiteTriks/Views/Files/Edit.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"37c59baa2c2423197145f0831249231c41dbc78d", @"/Areas/SiteTriks/Views/_ViewImports.cshtml")]
    public class Areas_SiteTriks_Views_Files_Edit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<SiteTriks.Models.Files.ProjectFileViewModel>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/navbar-remove.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", new global::Microsoft.AspNetCore.Html.HtmlString("text/javascript"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/validator.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/leaving-warning.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/populate-url.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/sitetriks/files.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_7 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/notifier.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(52, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
  
    ViewBag.Title = "Edit File";

#line default
#line hidden
            BeginContext(95, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("Styles", async() => {
                BeginContext(114, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(120, 56, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "61e022307a8842448f43c6bac883b813", async() => {
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
                BeginContext(176, 2, true);
                WriteLiteral("\r\n");
                EndContext();
            }
            );
            BeginContext(181, 81, true);
            WriteLiteral("\r\n    <div class=\"backend-wrapper\">\r\n        <div id=\"file-edit-notfier\"></div>\r\n");
            EndContext();
#line 13 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
         using (Html.BeginForm("Edit", "Files", null, FormMethod.Post, null, htmlAttributes: new { id = "submit-form" }))
        {

#line default
#line hidden
            BeginContext(396, 55, true);
            WriteLiteral("            <div class=\"fixed-top-2\">\r\n                ");
            EndContext();
            BeginContext(452, 42, false);
#line 16 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
           Write(await Html.PartialAsync("SecondNavHeader"));

#line default
#line hidden
            EndContext();
            BeginContext(494, 22, true);
            WriteLiteral("\r\n\r\n                <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 516, "\"", 556, 1);
#line 18 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
WriteAttributeValue("", 523, Url.Action("Index", "Libraries"), 523, 33, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(557, 169, true);
            WriteLiteral(" class=\"btn-nav-2\"><span class=\"st-icon-return-to-list\"></span>Cancel</a>\r\n                <input type=\"submit\" value=\"Update\" class=\"btn-nav-2\" />\r\n            </div>\r\n");
            EndContext();
            BeginContext(769, 20, true);
            WriteLiteral("            <hr />\r\n");
            EndContext();
            BeginContext(791, 30, true);
            WriteLiteral("            <input type=\"text\"");
            EndContext();
            BeginWriteAttribute("value", " value=\"", 821, "\"", 838, 1);
#line 25 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
WriteAttributeValue("", 829, Model.Id, 829, 9, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(839, 60, true);
            WriteLiteral(" name=\"Id\" class=\"hidden\" />\r\n            <input type=\"text\"");
            EndContext();
            BeginWriteAttribute("value", " value=\"", 899, "\"", 917, 1);
#line 26 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
WriteAttributeValue("", 907, Model.Url, 907, 10, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(918, 38, true);
            WriteLiteral(" name=\"CurrentUrl\" class=\"hidden\" />\r\n");
            EndContext();
            BeginContext(958, 181, true);
            WriteLiteral("            <div class=\"row\">\r\n                <div class=\"page-properties col-md-6 col-sm-12 col-xs-12\">\r\n                    <div class=\"form-group row\">\r\n                        ");
            EndContext();
            BeginContext(1140, 90, false);
#line 31 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                   Write(Html.LabelFor(m => Model.Title, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(1230, 79, true);
            WriteLiteral("\r\n                        <div class=\"col-md-10\">\r\n                            ");
            EndContext();
            BeginContext(1310, 104, false);
#line 33 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                       Write(Html.EditorFor(m => Model.Title, new { htmlAttributes = new { @class = "form-control", Id = "title" } }));

#line default
#line hidden
            EndContext();
            BeginContext(1414, 201, true);
            WriteLiteral("\r\n                            <span class=\"text-danger\"></span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        ");
            EndContext();
            BeginContext(1616, 100, false);
#line 39 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                   Write(Html.LabelFor(m => Model.Alt, "Alt text", htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(1716, 79, true);
            WriteLiteral("\r\n                        <div class=\"col-md-10\">\r\n                            ");
            EndContext();
            BeginContext(1796, 100, false);
#line 41 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                       Write(Html.EditorFor(m => Model.Alt, new { htmlAttributes = new { @class = "form-control", id = "alt" } }));

#line default
#line hidden
            EndContext();
            BeginContext(1896, 138, true);
            WriteLiteral("\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        ");
            EndContext();
            BeginContext(2035, 88, false);
#line 46 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                   Write(Html.LabelFor(m => Model.Url, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(2123, 79, true);
            WriteLiteral("\r\n                        <div class=\"col-md-10\">\r\n                            ");
            EndContext();
            BeginContext(2203, 101, false);
#line 48 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                       Write(Html.DisplayFor(m => Model.Url, new { htmlAttributes = new { @class = "form-control", Id = "url" } }));

#line default
#line hidden
            EndContext();
            BeginContext(2304, 138, true);
            WriteLiteral("\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        ");
            EndContext();
            BeginContext(2443, 99, false);
#line 53 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                   Write(Html.LabelFor(m => Model.ExpirationDate, htmlAttributes: new { @class = "control-label col-md-2" }));

#line default
#line hidden
            EndContext();
            BeginContext(2542, 156, true);
            WriteLiteral("\r\n                        <div class=\"col-md-10\">\r\n                            <div class=\"input-group date-picker-group\">\r\n                                ");
            EndContext();
            BeginContext(2699, 134, false);
#line 56 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                           Write(Html.EditorFor(m => Model.ExpirationDate, new { htmlAttributes = new { @class = "form-control", Id = "date-picker", type = "text" } }));

#line default
#line hidden
            EndContext();
            BeginContext(2833, 821, true);
            WriteLiteral(@"
                                <span class=""input-group-addon"">
                                    <i class=""fa fa-calendar-o"" aria-hidden=""true""></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class=""form-group row"">
                        <label class=""control-label col-md-2"" for=""input-update-file"">File</label>
                        <div class=""col-md-10"">
                            <input id=""input-update-file"" type=""file"" name=""File"" />
                        </div>
                    </div>

                    <div class=""form-group row"">
                        <label class=""control-label col-md-2"">File Type</label>
                        <div class=""col-md-10"">");
            EndContext();
            BeginContext(3655, 10, false);
#line 73 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                                          Write(Model.Type);

#line default
#line hidden
            EndContext();
            BeginContext(3665, 209, true);
            WriteLiteral("</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label col-md-2\"></label>\r\n                        <div class=\"col-md-10\">\r\n");
            EndContext();
#line 79 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                             if (Model.Type == SiteTriks.Data.Models.Helpers.FileType.Image || Model.Type == SiteTriks.Data.Models.Helpers.FileType.Svg)
                            {

#line default
#line hidden
            BeginContext(4059, 36, true);
            WriteLiteral("                                <img");
            EndContext();
            BeginWriteAttribute("src", " src=\"", 4095, "\"", 4124, 2);
            WriteAttributeValue("", 4101, "/files/id/", 4101, 10, true);
#line 81 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
WriteAttributeValue("", 4111, Model.LinkId, 4111, 13, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(4125, 27, true);
            WriteLiteral(" class=\"display-image\" />\r\n");
            EndContext();
#line 82 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                            }
                            else
                            {

#line default
#line hidden
            BeginContext(4248, 113, true);
            WriteLiteral("                                <img src=\"/images/default-document-image.png\" class=\"type-container-element\" />\r\n");
            EndContext();
#line 86 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"

                            }

#line default
#line hidden
            BeginContext(4394, 250, true);
            WriteLiteral("                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6  col-sm-12 col-xs-12 used-in-files\">\r\n                    <p>Used In Pages:</p>\r\n                    <ul class=\"list-of-pages\">\r\n");
            EndContext();
#line 94 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                         foreach (var pageTitle in @Model.IsUsedInPages)
                        {

#line default
#line hidden
            BeginContext(4745, 32, true);
            WriteLiteral("                            <li>");
            EndContext();
            BeginContext(4778, 9, false);
#line 96 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                           Write(pageTitle);

#line default
#line hidden
            EndContext();
            BeginContext(4787, 7, true);
            WriteLiteral("</li>\r\n");
            EndContext();
#line 97 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"

                        }

#line default
#line hidden
            BeginContext(4823, 118, true);
            WriteLiteral("                    </ul>\r\n                    <p>Used In Items:</p>\r\n                    <ul class=\"list-of-pages\">\r\n");
            EndContext();
#line 102 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                         foreach (var newsTitle in @Model.RefferedInNews)
                        {

#line default
#line hidden
            BeginContext(5043, 32, true);
            WriteLiteral("                            <li>");
            EndContext();
            BeginContext(5076, 9, false);
#line 104 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                           Write(newsTitle);

#line default
#line hidden
            EndContext();
            BeginContext(5085, 7, true);
            WriteLiteral("</li>\r\n");
            EndContext();
#line 105 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"

                        }

#line default
#line hidden
            BeginContext(5121, 121, true);
            WriteLiteral("                    </ul>\r\n                    <div>\r\n                        <div id=\"generate-thumbnails\" data-fileId=\"");
            EndContext();
            BeginContext(5243, 8, false);
#line 109 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                                                              Write(Model.Id);

#line default
#line hidden
            EndContext();
            BeginContext(5251, 142, true);
            WriteLiteral("\">\r\n                            <a class=\"btn btn-success\">Regenerate ThumbNails</a>\r\n                        </div>\r\n                        ");
            EndContext();
            BeginContext(5394, 48, false);
#line 112 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                   Write(Html.DisplayFor(x => x.Thumbnails, "Thumbnails"));

#line default
#line hidden
            EndContext();
            BeginContext(5442, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(5739, 72, true);
            WriteLiteral("                    </div>\r\n                </div>\r\n            </div>\r\n");
            EndContext();
#line 122 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"



        }

#line default
#line hidden
            BeginContext(5828, 14, true);
            WriteLiteral("    </div>\r\n\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(5859, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(5865, 64, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2feb3d3141b940798b32642a57768a1f", async() => {
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
                BeginContext(5929, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(5935, 47, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "a1aef30047094fa2a7ca6d5e7b3d0832", async() => {
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
                BeginContext(5982, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(5988, 44, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d1c685affde846e3b2e3feba99f1bd77", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(6032, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(6038, 47, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2b2b93bf18dd41f4b297bad1b1c26773", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(6085, 6, true);
                WriteLiteral("\r\n    ");
                EndContext();
                BeginContext(6091, 40, false);
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9a7dc1fe14e5413b9dd24f3030ff4f3f", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_7);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                EndContext();
                BeginContext(6131, 90, true);
                WriteLiteral("\r\n    <script type=\"text/javascript\">\r\n        (function () {\r\n            initFilesEdit(\"");
                EndContext();
                BeginContext(6222, 20, false);
#line 136 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                      Write(Model.ExpirationDate);

#line default
#line hidden
                EndContext();
                BeginContext(6242, 4, true);
                WriteLiteral("\", \"");
                EndContext();
                BeginContext(6247, 20, false);
#line 136 "E:\Kaloyan\Projects\AlphaPreview0001\Deploy\Sitetriks-CMS\SiteTriksApp\SiteTriksApp.Web\Areas\SiteTriks\Views\Files\Edit.cshtml"
                                               Write(Model.LibraryAllowed);

#line default
#line hidden
                EndContext();
                BeginContext(6267, 35, true);
                WriteLiteral("\");\r\n        })();\r\n    </script>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<SiteTriks.Models.Files.ProjectFileViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591