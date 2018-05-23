using Microsoft.EntityFrameworkCore;
using SiteTriks.Data;

namespace SiteTriksApp.Web.Data
{
    public class  SiteTriksAppContext: SiteTriksContext
    {
        public SiteTriksAppContext(DbContextOptions<SiteTriksAppContext> options) : base(options)
        {
        }
    }
}
