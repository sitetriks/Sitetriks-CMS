using SiteTriks.ErrorPagesModule.Data.Models;
using SiteTriks.Infrastructure;
using System;

namespace SiteTriksApp.Web.Models.ErrorPages
{
    public class ErrorPageViewModel : IMapFrom<ErrorPage>
    {
        public Guid Id { get; set; }

        public int StatusCode { get; set; }

        public Guid? PageMetaId { get; set; }
    }
}