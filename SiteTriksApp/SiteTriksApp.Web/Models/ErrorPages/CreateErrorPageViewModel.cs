using SiteTriks.Models.Pages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteTriksApp.Web.Models.ErrorPages
{
    public class CreateErrorPageViewModel
    {
        public int StatusCode { get; set; }

        public Guid PageMetaId { get; set; }

        public IEnumerable<EditParentViewModel> Pages { get; set; }
    }
}
