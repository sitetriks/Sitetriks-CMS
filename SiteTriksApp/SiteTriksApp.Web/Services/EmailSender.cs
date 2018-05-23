using SiteTriks.Configuration.Contracts;
using SiteTriks.Configuration.Files;
using SiteTriks.Configuration.JSON.Contracts;
using SiteTriks.Data.Models;
using SiteTriks.Helpers.Contracts;
using SiteTriks.Models;
using SiteTriks.Models.Emails;
using SiteTriks.Services.Contracts;
using System;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace SiteTriksApp.Web.Services
{
    // This class is used by the application to send email for account confirmation and password reset.
    // For more details see https://go.microsoft.com/fwlink/?LinkID=532713
    public class EmailSender : IEmailSender, ISiteTriksEmailSender
    {
        private readonly IGenericJsonProvider jsonProvider;
        private readonly ISiteTriksConfigurationService<Config> siteTriksConfigurationService;
        private readonly IViewRenderService viewRenderService;
        private readonly IFileProvider fileProvider;
        private readonly string Path = "/SiteTriks/Configurations/smtp.config.json";
        private readonly string ViewPath = "EmailTemplates/";

        public EmailSender(IGenericJsonProvider jsonProvider, ISiteTriksConfigurationService<Config> siteTriksConfigurationService, IViewRenderService viewRenderService, IFileProvider fileProvider)
        {
            this.jsonProvider = jsonProvider;
            this.siteTriksConfigurationService = siteTriksConfigurationService;
            this.viewRenderService = viewRenderService;
            this.fileProvider = fileProvider;
        }


        public Task SendEmailAsync(string email, string subject, string message)
        {
            return this.SendEmailAsync(email, "mail@mail.com", subject, message);
        }

        public Task SendEmailFromTemplateAsync(string reciever, string subject, string templateName, object parameters)
        {
            var emailContent = this.viewRenderService.RenderToStringAsync(this.ViewPath + templateName, parameters).Result;

            return this.SendEmailAsync(reciever, "mail@mail.com", subject, emailContent);
        }

        public Task SendEmailAsync(string reciever, string sender, string subject, string message)
        {
            return Task.Run(() =>
            {
                MailMessage mailMessage = new MailMessage();
                MailAddress fromAddress = new MailAddress(sender);
                mailMessage.From = fromAddress;
                mailMessage.To.Add(reciever);
                mailMessage.Body = message;
                mailMessage.IsBodyHtml = true;
                mailMessage.Subject = subject;

                var config = this.siteTriksConfigurationService.GetAll().FirstOrDefault(c => c.Name == this.Path);
                string json = string.Empty;
                if(config == null)
                {
                    if (this.fileProvider.DoesFileExist(this.Path))
                    {
                        json = this.fileProvider.ReadFile(this.Path);
                    }
                    else
                    {
                        json = "{\"Port\", \"Host\", \"UseDefaultCredentials\", \"EnableSsl\"}";
                        this.fileProvider.WriteJSONToFile(this.Path, json);
                    }

                    Config c = new Config()
                    {
                        Content = json,
                        IsIdenticalToFile = true,
                        Name = this.Path
                    };

                    this.siteTriksConfigurationService.Create(c);
                }
                else
                {
                    json = config.Content;
                    string jsonFile = string.Empty;

                    if (this.fileProvider.DoesFileExist(this.Path))
                    {
                        jsonFile = this.fileProvider.ReadFile(this.Path);
                        if (jsonFile != json)
                        {
                            config.Content = jsonFile;
                            config.DateModified = DateTime.Now;
                            this.siteTriksConfigurationService.Update(config);
                            json = jsonFile;
                        }
                    }
                    else
                    {
                        this.fileProvider.WriteJSONToFile(this.Path, json);
                    }
                }

                var smtpConfig = this.jsonProvider.Deserialize<SmtpConfigurationModel>(json);

                using (SmtpClient smtp = new SmtpClient())
                {
                    // Settings for localhost
                    // TODO: change on deploy
                    smtp.Port = smtpConfig.Port;
                    smtp.Credentials = new NetworkCredential(smtpConfig.Username, smtpConfig.Password);
                    smtp.Host = smtpConfig.Host;
                    smtp.EnableSsl = smtpConfig.EnableSsl;                    
                    smtp.Send(mailMessage);
                }
            });
        }
    }
}
