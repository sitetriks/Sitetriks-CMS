import { Data } from '../common/data.js'

export function socialShare({ mediator, logger }) {

	function initShareWidget() {
		$(document).ready(function () {
			$('.twitter-fields').hide();
			//	$('.linkedin-fields').hide();
		});
		switchFields();
	};

	function editShareWidget(element) {
		let model = JSON.parse(element);
		switchFields();

		if (model.SocialNetwork === 'Facebook') {
			$('.facebook-fields').show();
			$('.twitter-fields').hide();

			let fbApiKeyField = $('.facebook-fields').find('input');
			fbApiKeyField[0].setAttribute("value", model.FacebookApiKey);

		} else if (model.SocialNetwork === 'Twitter') {
			$('.twitter-fields').show();
			$('.facebook-fields').hide();

			let inputFields = $('.twitter-fields').find('input');

			for (let i = 0; i < inputFields.length; i++) {
				for (let key in model) {
					if (key === inputFields[i].getAttribute('name')) {
						inputFields[i].setAttribute('value', model[key]);
					}
				}
			}
		}
	}

	function postConfigDataFromWidget() {
		let body = {};
		let template = $('#template-selector option:selected').val();
		let facebookApiKey = $('#api-key').val();
		let idElements = $('.twitter-fields').find('input');

		body.SocialNetwork = template;
		body.FacebookApiKey = facebookApiKey;

		for (const val of idElements) {
			body[val.id] = val.value;
		}

		return JSON.stringify(body);
	}

	function validateInput() {
		const fbApiKey = $('#api-key').val();
		const currentTemplate = $('#template-selector option:selected').val();
		if (currentTemplate === 'Twitter') {
			return {
				isValid: true
			};
		}

		if (!fbApiKey) {
			return {
				isValid: false,
				message: 'Enter your Facebook API key'
			};
		}

		return {
			isValid: true
		};
	}

	function switchFields() {
		$('#template-selector').on('change', function (e) {
			let template = $('#template-selector option:selected').val();
			if (template === 'Facebook') {
				$('.facebook-fields').show();
				$('.twitter-fields').hide();
				//$('.linkedin-fields').hide();

			} else if (template === 'Twitter') {
				$('.twitter-fields').show();
				$('.facebook-fields').hide();
				//	$('.linkedin-fields').hide();

			} //else if (template === 'LinkedIn') {
			//	$('.linkedin-fields').show();
			//	$('.facebook-fields').hide();
			//	$('.twitter-fields').hide();
			//}
		});
	};

	return {
		add: initShareWidget,
		edit: editShareWidget,
		save: postConfigDataFromWidget,
		validate: validateInput
	};
}
