import { Data } from '../common/data.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';

export function stwScheduleDemoWidget() {
	const formSelector = '.schedule-form';
	const groupCheckboxes = $(`${formSelector} > .row > .checkbox-wrapper > .selector-class > .group-checkboxes > .single-checkbox-wrapper > .row`).find('input');

	function getGroupIds() {
		let groupIds = [];
		if (groupCheckboxes.length == 0) {
			return;
		}
		for (let i = 0; i < groupCheckboxes.length; i++) {
			let $currItem = $(groupCheckboxes[i]);
			if ($currItem[0].checked) {
				groupIds.push($currItem.data('id'));
			}
		}
		return groupIds;
	}
	
	//Not decided how will that be persisted in Db

	//const appendRoleField = '<label for="role">Role: </label><input class="form-control" type="text" value="9" name="company-role">'
	//let $companyRole = $(`${formSelector} select[name="company-role"] option:selected`).attr('name', 'company-role');

	//$companyRole.change(function (e) {
	//	let selectedValue = $companyRole.val();
	//	//Check if selected value is Other from the Dropdown(enumeration)
	//	if (selectedValue === 8) {
	//		$('div.other-role').append(appendRoleField);
	//	}
	//})

	$('#schedule-btn').on('click', function (e) {
		getGroupIds();
		let flag = true;

		//get input fields
		let $name = $(`${formSelector} input[name="name"]`);
		let $email = $(`${formSelector} input[name="email"]`);
		let $company = $(`${formSelector} input[name="company"]`);
		let $companyWebsite = $(`${formSelector} input[name="company-website"]`);
		let $phone = $(`${formSelector} input[name="phone"]`);
		let $country = $(`${formSelector} select[name="country"] option:selected`);
		let $companyRole = $(`${formSelector} select[name="company-role"] option:selected`).attr('name', 'company-role');

		//validation section
		let formFields = [$name, $email, $company, $companyWebsite, $phone, $country, $companyRole];
		for (let i = 0; i < formFields.length; i++) {
			if (!fieldValidation(formFields[i])) {
				flag = false;
			};
		}

		//construct data object
		if (flag) {
			let scheduleDemoModel = {
				Name: $name.val(),
				Email: $email.val(),
				Company: $company.val(),
				CompanyWebsite: $companyWebsite.val(),
				Phone: $phone.val(),
				Country: $country.val(),
				CompanyRole: $companyRole.val(),
				groupIds: getGroupIds()
			}
			function sendEmailToSupport() {
				let content = '';
				for (let [key, value] of Object.entries(scheduleDemoModel)) {
					if (key !== 'groupIds') {
						if (key === 'CompanyRole') {
							value = $companyRole.text();
							content += `${key}:  ${value}` + '<br>'
							continue;
						}
						content += `${key}:  ${value}` + '<br>'
					}
				}
				let sendEmailModel = {
					Subject: 'Scheduled Demo',
					Sender: scheduleDemoModel.Email,
					Content: content,
					Receiver: 'support@sitetriks.com'
				}


				Data.postJson({ url: '/sitetriks/scheduleDemo/SendEmails', data: sendEmailModel }).then(function (res) {
					if (res.success) {
						//TODO: Determine response handle
					} else {
						//TODO: Determine response handle
					}
				});
			}

			function redirectToCalendly() {
				const win = window.open('https://calendly.com/contact-1092/', '_blank');
				if (win) {
					win.focus();
				} else {
					alert('Please allow popups for this website');
				}
			}

			function setCheckboxesToUncheck() {
				if (groupCheckboxes.length == 0) {
					return;
				}
				for (let i = 0; i < groupCheckboxes.length; i++) {
					let $currItem = $(groupCheckboxes[i]);
					$currItem.prop('checked', false);
				}
			}

			function emptyFieldsAfterSuccess(fields) {
				for (let i = 0; i < fields.length; i++) {
					if (i === fields.length - 1) {
						fields[i].val(0);
					}
					fields[i].val('');
				}

				$(`${formSelector} select[name="company-role"]`).val('(Optional)');
				$(`${formSelector} select[name="country"]`).val('(Optional)');
			}
			//send data to controller
			Data.postJson({ url: '/sitetriks/scheduleDemo/CreateScheduledDemo', data: scheduleDemoModel }).then(function (res) {
				if (res.success) {
					Notifier.createAlert({ containerId: '.alert', message: res.message, status: 'info', seconds: 5 })
					redirectToCalendly();
					//TODO SEND/Receive e-mails(needs a content for email to customers)
					sendEmailToSupport(); //send e-mail to support
					emptyFieldsAfterSuccess(formFields);
					setCheckboxesToUncheck();
				} else {

					Notifier.createAlert({ containerId: '.alert', message: res.message, status: 'danger', seconds: 5 })
				}

			}, Data.defaultError);

		} else {
			Notifier.createAlert({ containerId: '.alert', message: 'Could not send data.Please,check your fields and try again.', status: 'danger', seconds:5 })
		}
	});

	function fieldValidation(field) {
		let flag = true;
		let $currentField = field;
		let fieldName = $currentField.attr('name');

		switch (fieldName) {
			case 'name':
				if (!Validator.validate($currentField, '', function (val) {
					return Validator.hasMinimumLength(val.trim(), 3) && Validator.isStartingWithLetter(val.trim());
				})) {
					$(`span.${fieldName}-validation`).text('Name must be at least 3 letters.');
					flag = false;
				} else {
					$(`span.${fieldName}-validation`).text('');
					flag = true;
				}
				break;
			case 'email':
				if (!Validator.validate($currentField, '', function (val) {
					return Validator.validateEmail(val);
				})) {
					$(`span.${fieldName}-validation`).text('Must enter valid email.');
					flag = false;
				} else {
					$(`span.${fieldName}-validation`).text('');
					flag = true;
				}
				break;
			case 'company':
				if (!Validator.validate($currentField, '', function (val) {
					return Validator.hasMinimumLength(val.trim(), 1);
				})) {
					$(`span.${fieldName}-validation`).text('Company field is required.');
					flag = false;
				} else {
					removeValidationText(fieldName);
				}
				break;
			case 'company-website':
				if ($currentField.val() !== '') {
					if (!Validator.validate($currentField, '', function (val) {
						return !Validator.isUrlFriendly(val.trim());
					})) {
						$(`span.${fieldName}-validation`).text('Provide URL in valid format.');
						flag = false;
					}
				} else {
					removeValidationText(fieldName);
				}
				break;
			case 'phone':
				if (!Validator.validate($currentField, '', function (val) {
					return Validator.isInteger(val.trim());
				})) {
					$(`span.${fieldName}-validation`).text('Use only numeric symbols.');
					flag = false;
				} else {
					removeValidationText(fieldName);
				}
				break;
			case 'company-role':
				if ($currentField.val() < 1) {
					$(`span.${fieldName}-validation`).text('Please choose your role in your company.');
					flag = false;
				} else {
					removeValidationText(fieldName);
				}
				break;
			default:
				break;
		}

		function removeValidationText(fieldName) {
			$(`span.${fieldName}-validation`).text('');
			flag = true;
		}

		return flag;

	}
}