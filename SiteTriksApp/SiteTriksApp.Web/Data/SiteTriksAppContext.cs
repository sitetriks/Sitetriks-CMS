using Microsoft.EntityFrameworkCore;
using SiteTriks.Data;
using SiteTriks.Data.Repository;
using System;

namespace SiteTriksApp.Web.Data
{
    public class  SiteTriksAppContext: SiteTriksContext
    {
        public SiteTriksAppContext(DbContextOptions<SiteTriksAppContext> options, IServiceProvider serviceProvider) : base(options, serviceProvider)
        {
        }
    }
}
