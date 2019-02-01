var downloadsSubscription = (function () {
    let documentBody = document.body;
    let termsModal = document.getElementById('myModal');
    let termsBtn = document.getElementById('termsDetails');
    let closeSpan = document.getElementsByClassName('close')[0];
    let downloadsModal = document.getElementById('downloadsModal');
    let downloadsClose = document.getElementsByClassName('close-downloads')[0];
    let downloadsBtn = document.getElementById('downloadsDetails');
    let $versionsButtons = $('.downloads-button');
    let $thirtyTwoBitsButton = $('.thirtytwo-bits a');
    let thirtyTwoLink = '/download/installers/SiteTriksManagerInstaller-x86.exe';
    let $sixtyFourBitsButton = $('.sixtyfour-bits a');
    let sixtyFourLink = '/download/installers/SiteTriksManagerInstaller-x64.exe';
    let $tryNowButton = document.getElementsByClassName('try-now')[0];

    /*Downloads modal*/

    /* terms and conditions modal*/
    function attachTermsAndContidionsHandlers() {
        modalHandler(documentBody, termsModal, termsBtn, closeSpan);
    }

    function attachDownloadsModalHandlers() {

        modalHandler(documentBody, downloadsModal, downloadsBtn, downloadsClose);
        modalHandler(documentBody, downloadsModal, $tryNowButton, downloadsClose);
    }

    function modalHandler(documentBody, modal, btn, closeSpan) {

        if (!btn || !modal || !closeSpan) {
            return;
        }
        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = 'block';
            documentBody.style.overflowY = 'hidden';
        };

        closeSpan.onclick = function () {
            modal.style.display = 'none';
            documentBody.style.overflowY = 'unset';
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                documentBody.style.overflowY = 'unset';
            }
        };
    }

    function activateDownloadsLinks() {
        $versionsButtons.removeClass('isDisabled');
        $('#downloads-submit').addClass('isDisabled');


        $thirtyTwoBitsButton.attr('href', thirtyTwoLink);
        $sixtyFourBitsButton.attr('href', sixtyFourLink);
    }

    $('#downloads-submit').on('click', function (e) {
        let flag = true;
        let $name = $('#downloadsForm input[name="name"]');
        let $email = $('#downloadsForm input[name="email"]');
        let $companyName = $('#downloadsForm input[name="company-name"]');
        let $featuresReleases = $("input[name='features-releases']:checked");
        let $promotionalMaterials = $("input[name='promotional-materials']:checked");

        console.log('downloads clicked');

        if (!Validator.validate($email, 'Must enter valid email', function (val) {
            return Validator.validateEmail(val);
        })) {
            flag = false;
        }

        if (!Validator.validate($name, 'Name must be at least 3 letters.', function (val) {
            return Validator.hasMinimumLength(val.trim(), 3) && Validator.isStartingWithLetter(val.trim());
        })) {
            flag = false;
        }

        if (!Validator.validate($companyName, 'The company name must be at least 3 letters.', function (val) {
            return Validator.hasMinimumLength(val.trim(), 3) && Validator.isStartingWithLetter(val.trim());
        })) {
            flag = false;
        }

        if (!$featuresReleases.length > 0) {
            $('#features-releases-group .validation-output').text('Please check one of the options.');
            flag = false;
        }
        else {
            $('#features-releases-group .validation-output').text('');
        }

        if (!$promotionalMaterials.length > 0) {
            $('#promotional-materials-group .validation-output').text('Please check one of the options.');
            flag = false;
        }
        else {
            $('#promotional-materials-group .validation-output').text('');
        }

        if (flag) {

            var emailGroups = $featuresReleases.val().toString() + $promotionalMaterials.val().toString() + '1';
            console.log(emailGroups);

            var subscriberData = {
                Name: $name.val(),
                Email: $email.val(),
                CompanyName: $companyName.val(),
                MarketingEmailGroups: emailGroups,
                WantRecieveUpdates: true
            };

            Data.postJson({ url: '/sitetriks/marketingEmails/subscribe', data: subscriberData }).then(function (res) {
                Notifier.createAlert({ containerId: '#downloadsForm', message: res.message, status: (res.success ? 'info' : 'warning'), seconds: 5 });

                $name.val('');
                $email.val('');
                $companyName.val('');
                $promotionalMaterials.attr('checked', false);
                $featuresReleases.attr('checked', false);
                activateDownloadsLinks();
            }, Data.defaultError);
        }
    });

    return {
        attachTermsAndContidionsHandlers: attachTermsAndContidionsHandlers,
        attachDownloadsModalHandlers: attachDownloadsModalHandlers
    };

})();



$(document).ready(function () {
    downloadsSubscription.attachTermsAndContidionsHandlers();
    downloadsSubscription.attachDownloadsModalHandlers();

    $('.try-now').on('click', downloadsSubscription.attachDownloadsModalHandlers());
});