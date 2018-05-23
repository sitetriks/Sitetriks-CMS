using System.Threading.Tasks;

namespace SiteTriksApp.Web.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);

        Task SendEmailAsync(string reciever, string sender, string subject, string message);

        Task SendEmailFromTemplateAsync(string reciever, string subject, string templateName, object parameters);
    }
}
