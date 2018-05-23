using SiteTriks.Models.Pages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteTriksApp.Web.Models.ErrorPages
{
    public class ErrorPageMainViewModel
    {
        public IEnumerable<ErrorPageViewModel> ErrorPages { get; set; }

        public IEnumerable<EditParentViewModel> Pages { get; set; }
    }
}
