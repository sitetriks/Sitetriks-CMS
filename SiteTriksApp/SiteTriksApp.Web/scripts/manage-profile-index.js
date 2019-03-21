import { Data } from './common/data.js';

// Manage profile / Index.cshtml

const ProfileManagement = (function () {
    function submitForm(ev) {
        var $summary = $(this).find('.form-summary');
        $summary.html('');
        Data.postForm({ url: this.action, formData: new FormData(this) }).then(function (res) {
            if (res.message) {
                $summary.append(`<li>${res.message}</li>`);
            }

            if (res.messages && res.messages.length) {
                for (var i = 0; i < res.messages.length; i += 1) {
                    $summary.append(`<li>${res.messages[i]}</li>`);
                }
            }
        });

        ev.preventDefault();
        return false;
    }

    let $imageKey = $('.profile-form-img.key');
    let $imagePhone = $('.profile-form-img.phone');
    let $backButtonImage = $('.back-button img');

    let imageKeyFourk = '/images/profile/key-4K.png';
    let imageKey = '/images/profile/key.png';
    let imagePhoneFourk = '/images/profile/Mobile-4K.png';
    let imagePhone = '/images/profile/Mobile.png';

    let backButtonSmall = '/images/profile/back.png';
    let backButtonBig = '/images/profile/back_x2.png';

    function selectLoginImage() {
        let windowWidth = $(window).width();
        if (windowWidth >= 2800) {
            $imageKey.attr('src', imageKeyFourk);
            $imagePhone.attr('src', imagePhoneFourk);
            $backButtonImage.attr('src', backButtonBig);
        } else {
            $imageKey.attr('src', imageKey);
            $imagePhone.attr('src', imagePhone);
            $backButtonImage.attr('src', backButtonSmall);
        }
    }

    return {
        selectLoginImage,
        submitForm
    };
})();


$(document).ready(function () {
    $(window).ready(ProfileManagement.selectLoginImage);
    $(window).resize(ProfileManagement.selectLoginImage);

    $('form').on('submit', ProfileManagement.submitForm);
});
