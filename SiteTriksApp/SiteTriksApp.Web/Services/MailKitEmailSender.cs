using MailKit.Net.Smtp;
using MimeKit;
using MimeKit.Text;
using SiteTriks.Configuration.Contracts;
using SiteTriks.Configuration.Files;
using SiteTriks.Configuration.JSON.Contracts;
using SiteTriks.Data.Models;
using SiteTriks.Helpers.Contracts;
using System.Threading.Tasks;

namespace SiteTriksApp.Web.Services
{
    public class MailKitEmailSender: EmailSender
    {
        public MailKitEmailSender(IGenericJsonProvider jsonProvider, ISiteTriksConfigurationService<Config> siteTriksConfigurationService, IViewRenderService viewRenderService, IFileProvider fileProvider) 
            : base(jsonProvider, siteTriksConfigurationService, viewRenderService, fileProvider)
        {
        }

        public override Task SendEmailAsync(string reciever, string sender, string subject, string message)
        {
            return Task.Run(() =>
            {
                var mmessage = new MimeMessage();
                mmessage.To.Add(new MailboxAddress(reciever, reciever));//.AddRange(emailMessage.ToAddresses.Select(x => new MailboxAddress(x.Name, x.Address)));
                mmessage.From.Add(new MailboxAddress(sender, sender));

                mmessage.Subject = subject;
                //We will say we are sending HTML. But there are options for plaintext etc. 
                mmessage.Body = new TextPart(TextFormat.Html)
                {
                    Text = message
                };

                var config = this.GetSmtpConfig();

                //Be careful that the SmtpClient class is the one from Mailkit not the framework!
                using (var emailClient = new SmtpClient())
                {
                    //The last parameter here is to use SSL (Which you should!)
                    emailClient.Connect(config.Host, config.Port, config.EnableSsl);

                    //Remove any OAuth functionality as we won't be using it. 
                    emailClient.AuthenticationMechanisms.Remove("XOAUTH2");

                    emailClient.Authenticate(config.Username, config.Password);

                    emailClient.Send(mmessage);

                    emailClient.Disconnect(true);
                }
            });
        }
    }
}
