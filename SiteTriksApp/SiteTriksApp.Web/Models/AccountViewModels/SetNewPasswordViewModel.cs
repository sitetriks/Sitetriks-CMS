using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SiteTriksApp.Web.Models.AccountViewModels
{
    public class SetNewPasswordViewModel
    {
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [RegularExpression(@"^(?=.*[a-z])(?=(.*\d){1})(?=.*[A-Z])(?=.*[^\da-zA-Z]).{6,}$", ErrorMessage = "The {0} must be at least 6 characters long and must contain uppercase letter, special character and digit.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        public string Id { get; set; }

        public string Code { get; set; }
    }
}
