export function stwContactUsTemplate() {
	$(document).ready(function () {
		let phoneImage = '#phone';
		let flags = '#flags';

		$(flags).hide();
		$(phoneImage).on('click', function (e) {
			$(this).hide();
			$(flags).show();
		});
	})
};