$(document).ready(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

$('html').on('click', '.downloads-link', function () {
	$($('[data-url="downloads"]')[2]).click();
});

$('html').on('click', '.contacts-link', function () {
	$($('[data-url="contact-us"]')[2]).click();
});
