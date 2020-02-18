import './layout.js';
import 'jquery-ui';
import 'eonasdan-bootstrap-datetimepicker';

import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { Tags } from '../tags.js';
import { Multiselect } from '../common/multiselect-setup.js';
import { WarningWindow } from '../modules/warning-window.js';
import { Handlebars } from '../common/handlebars.js';
import { SeoFeatures } from './seoFeatures.js';

export function createPage(validateUrlUrl) {
	Utils.populateUrl('#title', '#url', validateUrlOnChange);
	WarningWindow.attach();
	Multiselect.SetupElement($('.multiselect-roles'));

	$('#date-picker').datetimepicker({
		defaultDate: '',
		minDate: new Date()
	});


	Tags.init();

	$('.date-picker-group span').on('click', function () {
		$('#date-picker').focus();
	});


	$('#date-picker').val('');

	$('.seo-toggle-button').on('click', toggleSeoFeatures);

	function toggleSeoFeatures() {
		let $target = $(this);
		let $arrows = $target.find('.arrow');
		let $featuresList = $target.next('.seoFeaturesContainer');

		$arrows.toggle();
		$featuresList.toggle();
	}

	$('#seo-words').on('input change', countWords.bind(this, '#seo-words-counter', '#seo-words'));


	$('.description-counter').on('input change', countSymbols.bind(this, '#description-symbol-counter', '.description-counter'));
	countSymbols.apply('.description-counter', ['#description-symbol-counter', '.description-counter']);

	// title
	$('.seo-title').on('input change', countSymbols.bind(this, '#seo-title-counter', '.seo-title'));

	//meta desc
	$('.meta-description').on('input change', countSymbols.bind(this, '#seo-meta-counter', '.meta-description'));

	// Fill SEO fields on Partial display
	$('.seo-toggle-button').on('click', function () {
		countSymbols.apply('.seo-title', ['#seo-title-counter', '.seo-title']);

		countSymbols.apply('.meta-description', ['#seo-meta-counter', '.meta-description']);

		countWords.apply('#seo-words', ['#seo-words-counter', '#seo-words']);

	})

	function countWords(counterClass, targetClass) {
		let $target = $(targetClass);
		let $counter = $(counterClass);
		console.log(counterClass);

		let words = $target.val().split(',');
		if (words.length === 1 && words[0].trim().length === 0) {
			$counter.text('Words: 0');
		} else {
			$counter.text('Words: ' + words.length);
		}
	}

	function countSymbols(counterClass, targetClass) {
		let $target = $(targetClass).val();
		let $counter = $(counterClass);

		console.log($target);
		if ($target.length > 0) {
			$counter.text('Characters:' + $target.length);
		}
	}


	var $urlField = $('#url');
	var $urlValidation = $('#url-validation');
	var $btnSubmit = $('#submit');

	var timer = 0;
	$urlField.on('input', function (e) {
		validateUrlOnChange(e);
	});

	function validateUrlOnChange(e) {
		if (timer) {
			clearTimeout(timer);
		}

		var url = $urlField.val();

		if (url.length >= 3) {
			timer = setTimeout(function () {
				Validator.validateUrl(validateUrlUrl + url, $urlField, $btnSubmit);
			}, 500);
			$urlValidation.text('');
		} else {
			$urlField.css('border', '1px solid red');
			$urlValidation.text('Url must be atleast 3 symbols!');
		}
	}

	$('.title-field').on('input', function (e) {
		var $target = $(e.target);
		if ($target.val().length >= 3) {
			$target.css('border', '1px solid green');
			$target.next('span').text('');
		} else {
			$target.css('border', '1px solid red');
			$target.next('span').text('Tittle must be atleast 3 symbols!');
		}
	});

	$('.btn-save-and-content').on('click', function (ev) {

		console.log("hi");
		$('#create-page-form').removeAttr('data-exit');
		$('#create-page-form').attr('data-content', true);
		$('#create-page-form').submit();
	});

	$('.btn-save-and-exit-li').on('click', function (ev) {

		$('#create-page-form').removeAttr('data-content');
		$('#create-page-form').attr('data-exit', true);
		$('#create-page-form').submit();
	});

	$('.btn-save-li').on('click', function (ev) {

		$('#create-page-form').removeAttr('data-exit');
		$('#create-page-form').removeAttr('data-content');
		$('#create-page-form').submit();
	});

	var $notfier = $('#notifier');
	$('#create-page-form').on('submit', function (evt) {
		var _this = this;
		var $target = $(this);
		let saveAndExit = $target.attr('data-exit');
		let saveAndContent = $target.attr('data-content');

		var url = $urlField.val();
		$notfier.text('');
		var flag = false;

		$('.title-field').each((_, element) => {
			if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
				flag = true;
			}
		});

		if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) { return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3); })) {
			flag = true;
		}

		if (flag) {
			evt.preventDefault();
			return false;
		}

		//let dateVal = $('#date-picker').val();

		//if (!!dateVal) {
		//    let dateToBePublished = new Date(dateVal);

		//    if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
		//        evt.preventDefault();
		//        $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
		//        return false;
		//    }
		//}

		Loader.show(true);

		$btnSubmit.attr('disabled', true);
		Data.getJson({ url: validateUrlUrl + url }).then(function (res) {
			if (res.success) {
				let datePicker = document.getElementById('date-picker');
				if (datePicker.value) {
					let hidden = document.getElementById('date-picker-hidden');
					let parsedDate = new Date(Date.parse(datePicker.value)).toUTCString();
					hidden.value = parsedDate;
				}

				$btnSubmit.attr('disabled', false);
				return Data.postForm({ url: _this.action, formData: new FormData(_this) });
			} else {
				Validator.validate($urlField, 'Url is invalid or already in use!', function (val) { return false; });

				Loader.hide();
				return Promise.reject('Url is invalid or already in use!');
			}
		}, Data.defaultError)
			.then(function (res) {
				console.log('[age-res', res);
				if (res.success) {
					let url = res.url;
					return SeoFeatures.save(res.pageId).then(function (res) {
						if (res.success) {

							if (saveAndExit) {
								window.location.replace('/sitetriks/pages');
							}
							if (saveAndContent) {
								window.location.replace('/sitetriks/pages/editcontent?url=' + url);
							}
							
						} else {
							$notfier.text(res.message);
							Loader.hide();
						}

						$btnSubmit.attr('disabled', false);
					}, function (error) {
						console.warn(error);
						$btnSubmit.attr('disabled', false);
						$notfier.text(error);
					});
				}
				else {
					$notfier.text(res.message);
					Loader.hide();
				}
				$btnSubmit.attr('disabled', false);

			});
		// .then(function (res) {
		// 	if (res.success) {
		// 		window.location.replace('/sitetriks/pages/editcontent?url=' + res.url);
		// 	} else {
		// 		$notfier.text(res.message);
		// 		Loader.hide();
		// 	}

		// 	$btnSubmit.attr('disabled', false);
		// }, function (error) {
		// 	console.warn(error);
		// 	$btnSubmit.attr('disabled', false);
		// 	$notfier.text(error);
		// });

		evt.preventDefault();
		return false;
	});
}

export function editPage(validateUrlUrl, mlf, pageId, mlfUrl, initialUrl) {
	Utils.populateUrl('#title', '#url', validateUrlOnChange);
	WarningWindow.attach();
	Multiselect.SetupElement($('.multiselect-roles'));
	SeoFeatures.init(pageId);

	Data.getJson({ url: '/SiteTriks/StaticFiles/templates/page-multilingual.html' }).then(function (res) {
		for (var key in mlf) {
			$('<option></option>', {
				value: key,
				text: key
			}).appendTo('#languages');
		}

		let template = Handlebars.compile(res);

		$('#languages').on('change', function (ev) {
			let lang = $(this).val();

			if (!lang) {
				$('#mlf-info').html('');
				$('#backend-info').show();
			} else {
				$('#backend-info').hide();

				let current = mlf[lang];
				let html = template({ lang, title: current.Title });

				$('#mlf-info').html(html);
			}
		});
	});

	$('.date-picker-group span').on('click', function () {
		$('#date-picker').focus();
	});

	$('#date-picker').datetimepicker({
		minDate: new Date()
	}).val('');

	Tags.init();


	$('.seo-toggle-button').on('click', toggleSeoFeatures);

	function toggleSeoFeatures() {
		let $target = $(this);
		let $arrows = $target.find('.arrow');
		let $featuresList = $target.next('.seoFeaturesContainer');

		$arrows.toggle();
		$featuresList.toggle();
	}

	$('#seo-words').on('input change', countWords.bind(this, '#seo-words-counter', '#seo-words'));


	$('.description-counter').on('input change', countSymbols.bind(this, '#description-symbol-counter', '.description-counter'));
	countSymbols.apply('.description-counter', ['#description-symbol-counter', '.description-counter']);

	// title
	$('.seo-title').on('input change', countSymbols.bind(this, '#seo-title-counter', '.seo-title'));

	//meta desc
	$('.meta-description').on('input change', countSymbols.bind(this, '#seo-meta-counter', '.meta-description'));

	// Fill SEO fields on Partial display
	$('.seo-toggle-button').on('click', function () {
		countSymbols.apply('.seo-title', ['#seo-title-counter', '.seo-title']);

		countSymbols.apply('.meta-description', ['#seo-meta-counter', '.meta-description']);

		countWords.apply('#seo-words', ['#seo-words-counter', '#seo-words']);

	})

	function countWords(counterClass, targetClass) {
		let $target = $(targetClass);
		let $counter = $(counterClass);
		console.log(counterClass);

		let words = $target.val().split(',');
		if (words.length === 1 && words[0].trim().length === 0) {
			$counter.text('Words: 0');
		} else {
			$counter.text('Words: ' + words.length);
		}
	}

	function countSymbols(counterClass, targetClass) {
		let $target = $(targetClass).val();
		let $counter = $(counterClass);

		console.log($target);
		if ($target.length > 0) {
			$counter.text('Characters:' + $target.length);
		} 
	}

	var $urlField = $('#url');
	var $urlValidation = $('#url-validation');
	var $btnSubmit = $('#submit');

	var timer = 0;
	$urlField.on('input', function (e) {
		return validateUrlOnChange(e);
	});

	function validateUrlOnChange(e) {
		if (timer) {
			clearTimeout(timer);
		}
		var url = $urlField.val();

		if (url.length >= 3) {
			timer = setTimeout(function () {
				return Validator.validateUrl(validateUrlUrl + url + '&id=' + pageId, $urlField, $btnSubmit);
			}, 500);
			$urlValidation.text('');
		} else {
			$urlField.css('border', '1px solid red');
			$urlValidation.text('Url must be atleast 3 symbols!');
		}
	}

	$('.title-field').on('input', function (e) {
		var $target = $(e.target);
		if ($target.val().length >= 3) {
			$target.css('border', '1px solid green');
			$target.next('span').text('');
		} else {
			$target.css('border', '1px solid red');
			$target.next('span').text('Tittle must be atleast 3 symbols!');
		}
	});

	$('.btn-save-and-new').on('click', function (ev) {

		console.log("hi");
		$('#edit-page-form').removeAttr('data-exit');
		$('#edit-page-form').attr('data-new', true);
		$('#edit-page-form').submit();
	});

	$('.btn-save-and-exit-li').on('click', function (ev) {

		$('#edit-page-form').removeAttr('data-new');
		$('#edit-page-form').attr('data-exit', true);
		$('#edit-page-form').submit();
	});

	$('.btn-save-li').on('click', function (ev) {		

		$('#edit-page-form').removeAttr('data-exit');
		$('#edit-page-form').removeAttr('data-new');
		$('#edit-page-form').submit();
	});
	var $notfier = $('#notifier');

	$('#edit-page-form').on('submit', function (evt) {

		var _this = this;
		let $target = $(this);
		let saveAndExit = $target.attr('data-exit');
		let saveAndNew = $target.attr('data-new');
		//--------------------------------------------------------
		// multi lingual fields logic
		console.log(saveAndNew)
		let lang = $('#languages').val();
		if (lang) {
			Loader.show('#fff');

			let $fields = $(`[data-lang="${lang}"]`);
			let body = { lang: lang, parentId: pageId };
			$fields.each(function (index, element) {
				let name = $(element).attr('data-name');
				let value = $(element).val();
				body[name] = value;
			});

			Data.postJson({ url: mlfUrl, data: body }).then(function (res) {
				if (res.success) {
					if (saveAndExit) {
						window.location.replace('/sitetriks/pages');
					}
					if (saveAndNew) {
						window.location.replace('/sitetriks/pages/create');
					}
					WarningWindow.attach();
					mlf = res.mlf;
					Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' });
				} else {
					Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: 'Page was not updated!', status: 'danger' });
					$target.removeAttr('data-exit');
				}

				Loader.hide();
			});

			evt.preventDefault();
			return false;
		}

		//--------------------------------------------------------

		var url = $urlField.val();
		$notfier.text('');
		var flag = false;

		$('.title-field').each(function (index, element) {
			if ($(element).val().length < 3) {
				flag = true;
			}
		});

		$('.title-field').each((_, element) => {
			if (!Validator.validate($(element), 'Title must be atleast 3 characters!', function (val) { return Validator.hasMinimumLength(val, 3); })) {
				flag = true;
			}
		});

		if (!Validator.validate($urlField, 'Url must be atleast 3 characters and contain only english letters, numbers, dash(-) and underscore(_)!', function (val) { return Validator.isUrlFriendly(val) && Validator.hasMinimumLength(val, 3); })) {
			flag = true;
		}

		if (flag) {
			evt.preventDefault();
			return false;
		}

		//let dateVal = $('#date-picker').val();

		//if (!!dateVal) {
		//    let dateToBePublished = new Date(dateVal);

		//    if (!dateToBePublished.laterThan((new Date()).addMinutes(10))) {
		//        evt.preventDefault();
		//        $notfier.text('Date to be published cannot be sooner than 10 minutes from now!');
		//        return false;
		//    }
		//}

		Loader.show(true);

		$btnSubmit.attr('disabled', true);
		Data.getJson({ url: validateUrlUrl + url + '&id=' + pageId }).then(function (res) {
			if (res.success) {
				$btnSubmit.attr('disabled', false);
				return Data.postForm({ url: _this.action, formData: new FormData(_this) });
			} else {
				Validator.validate($urlField, res.message, function (val) { return false; });
				$target.removeAttr('data-exit');
				Loader.hide();
				return Promise.reject(res.message);
			}
		}, Data.defaultError).then(function (res) {
			if (res.success) {
				SeoFeatures.edit(pageId).then(function (res) {
					if (res.success) {
						if (saveAndExit) {
							window.location.replace('/sitetriks/pages');
							return;
						}
						if (saveAndNew) {
							window.location.replace('/sitetriks/pages/create');
							return;
						}

						WarningWindow.attach();
						Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' });
						if (url !== initialUrl) {
							// update url if
							if (window.history.replaceState) {
								window.history.replaceState('', '', '/sitetriks/pages/edit?url=' + url);
							} else {
								// reload with new url for older browsers
								window.location.replace('/sitetriks/pages/edit?url=' + url);
							}
						}
					} else {
						Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: res.message, status: 'danger' });
						$target.removeAttr('data-exit');
					}
				});
				// if (saveAndExit) {
				// 	window.location.replace('/sitetriks/pages');
				// 	return;
				// }

				// WarningWindow.attach();
				// Notifier.createAlert({ containerId: '#alerts', title: 'Success', message: 'Page updated!', status: 'success' });
				// if (url !== initialUrl) {
				// 	// update url if
				// 	if (window.history.replaceState) {
				// 		window.history.replaceState('', '', '/sitetriks/pages/edit?url=' + url);
				// 	} else {
				// 		// reload with new url for older browsers
				// 		window.location.replace('/sitetriks/pages/edit?url=' + url);
				// 	}
				// }
			} else {
				Notifier.createAlert({ containerId: '#alerts', title: 'Failed', message: res.message, status: 'danger' });
				$target.removeAttr('data-exit');
			}

			$(window).scrollTop(0);
			Loader.hide();

			$btnSubmit.attr('disabled', false);
		}, function (error) {
			console.warn(error);
			$btnSubmit.attr('disabled', false);
			$notfier.text(error);
		});

		evt.preventDefault();
		return false;
	});
}

window.createPage = createPage;
window.editPage = editPage;
