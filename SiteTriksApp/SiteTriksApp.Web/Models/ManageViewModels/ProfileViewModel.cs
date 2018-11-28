using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SiteTriksApp.Web.Models.ManageViewModels
{
    public class ProfileViewModel
    {
        public IndexViewModel IndexViewModel { get; set; }

        public TwoFactorAuthenticationViewModel TwoFactorAuthenticationViewModel { get; set; }

        public ChangePasswordViewModel ChangePasswordViewModel { get; set; }
    }
}
