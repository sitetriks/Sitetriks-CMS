using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using SiteTriks.Extensions;
using SiteTriks.Infrastructure.Common;
using SiteTriks.Services.LoggingServices.Extensions;
using SiteTriks.Services.LoggingServices.LoggerProviders;

namespace SiteTriksApp.Web
{
	public class Program
	{
		public static void Main(string[] args)
		{
			BuildWebHost(args)
			.InitializeSiteTriks(new string[] { STUserRoles.Partner, STUserRoles.Client, STUserRoles.UnAuthorized })
			.Run();
		}

		public static IWebHost BuildWebHost(string[] args) =>
			WebHost.CreateDefaultBuilder(args)		
            .UseStartup<Startup>()
			.Build();

	}
}
