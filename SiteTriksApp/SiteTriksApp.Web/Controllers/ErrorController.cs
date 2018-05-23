using Microsoft.AspNetCore.Mvc;
using SiteTriks.Controllers;
using SiteTriks.Infrastructure;
using SiteTriks.Models.Pages;
using SiteTriks.Services.Contracts;
using SiteTriksApp.Web.Models.ErrorPages;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SiteTriksApp.Web.Controllers
{
    public class ErrorController : SiteTriksController
    {
        private readonly IErrorPageService errorPageService;
        private readonly IPageMetaService pageMetaService;

        public ErrorController(IErrorPageService errorPageService, IPageMetaService pageMetaService, IServiceProvider services) : base(services)
        {
            this.errorPageService = errorPageService;
            this.pageMetaService = pageMetaService;
        }

        // GET: Error
        public ActionResult Index()
        {
            var errorPages = this.errorPageService.GetAll().To<ErrorPageViewModel>().ToList();
            List<EditParentViewModel> pages = new List<EditParentViewModel>() { new EditParentViewModel() { Title = "-- Select Error Page --" } };
            pages.AddRange(this.pageMetaService.GetAllPublishedPages().To<EditParentViewModel>().ToList());

            var model = new ErrorPageMainViewModel()
            {
                Pages = pages,
                ErrorPages = errorPages
            };

            return this.View(model);
        }

        [HttpGet]
        public ActionResult Create()
        {
            var pages = this.pageMetaService.GetAllPublishedPages().To<EditParentViewModel>().ToList();
            CreateErrorPageViewModel model = new CreateErrorPageViewModel()
            {
                Pages = pages
            };

            return this.View(model);
        }

        [HttpPost]
        public ActionResult Create(CreateErrorPageViewModel model)
        {
            this.errorPageService.Create(model.StatusCode, model.PageMetaId);

            return this.RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Edit(Guid pageMetaId, Guid errorPageId)
        {
            this.errorPageService.Edit(errorPageId, pageMetaId);

            return this.Json(new { success = true });
        }

        public ActionResult Authenticate()
        {
            return this.View();
        }

        public ActionResult Unauthorize()
        {
            return this.View();
        }

        public ActionResult SessionExpired()
        {
            return this.View();
        }

        public ActionResult Error(string lang, int statusCode = 500)
        {
            string url = this.errorPageService.GetUrlForStatusCode(statusCode);
            var page = this.pageMetaService.GetDisplayPageByUrl(url, lang);
            if (string.IsNullOrWhiteSpace(url) || page == null)
            {
                return this.View("Error404");
            }
            else
            {
                if (string.IsNullOrWhiteSpace(lang))
                {
                    return this.Redirect($"~/{url}");
                }
                else
                {
                    return this.Redirect($"~/{lang}/{url}");
                }
            }
        }
    }
}