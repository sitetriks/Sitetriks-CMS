import './layout.js';
import 'eonasdan-bootstrap-datetimepicker';

import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Validator } from '../common/validator.js';
import { Notifier } from '../common/notifier.js';
import { WarningWindow } from '../modules/warning-window.js';

export function initFilesEdit(expirationDate, libraryAllowed) {
	let $inputFile = $('#input-update-file');
	let $dateTimePicker = $('#date-picker');
	let $title = $('#title');
	let $altText = $('#alt');
	let $notifier = $('#alerts');
	let $cacheControl = $('#CacheConfiguration');

	WarningWindow.attach();

    $dateTimePicker.datetimepicker({
        minDate: new Date(),
        sideBySide: true
    }).val(expirationDate);

	var libraryAllowed = Utils.replaceAll(Utils.replaceAll(libraryAllowed, '*', ''), ',', '|');

	if ($inputFile[0].files.length === 1) {
		editFileDisplayImage.apply($inputFile);
	}

	//------------------------------------------------------------------
	// moved from edit-file-scripts.js
	let $advancedFeatures = $('.advanced-features');
	let $advancedButton = $advancedFeatures.find('.toggle-button');
	let $featuresList = $advancedFeatures.find('.features-list');
	let $arrows = $advancedFeatures.find('.arrow');

	$advancedButton.on('click', function () {
		$arrows.toggle();
		$featuresList.toggle();
	});

	//------------------------------------------------------------------

	bindEvents();

	//Validation for the Cache Value input field
	function cacheControlValidation() {
		let isValid = true;
		let cacheValue = $cacheControl.val();

		if (!cacheValue) {
			return false;
		}

		let valueArr = cacheValue.split('=');

		let maxAge = valueArr[0];
		let pattern = 'max-age';

		if (!pattern === maxAge) {
			return false;
		}

		let maxAgeValue = valueArr[1];
		
		if (!Validator.isNumber(maxAgeValue)) {
			return false;
		} 

		//The maximum recommended cache value is 1 year.
		if (!(maxAgeValue > 0 && maxAgeValue <= 31536000)) {
			return false;
		} 

		return isValid;
	}

	function editFileDisplayImage(ev) {
		var file = $(this)[0].files[0];

		var regExp = new RegExp(libraryAllowed);

		if (!regExp.test(file.name) && !regExp.test(file.type)) {
			Notifier.createAlert({
				containerId: '#alerts',
				status: 'danger',
				title: 'Error',
				message: file.name + ' file type is not supported by selected library and will not be uploaded!'
			});

			return;
		} else {
			var fileName = file.name.substring(0, file.name.lastIndexOf('.'));
			$title.val(fileName);
			$altText.val(fileName);
			$('.display-image').attr('src', window.URL.createObjectURL(file));
		}
	}

	function submitFileForm(ev) {
		Loader.show('#fff');
		var flag = false;

		if (!Validator.validate($title, 'Name must be atleast 3 characters!', function (val) { return Validator.hasMinimumLength(val.trim(), 3); })) {
			flag = true;
		}

		if (!Validator.validate($cacheControl, 'Invalid cache-control header value!', cacheControlValidation)) {
			flag = true;
		}

		if (!flag) {
			Data.postForm({ url: '/sitetriks/files/edit', formData: new FormData(this) }).then(function (res) {
				if (res.success) {
					location.replace('/sitetriks/libraries');
				} else {
					Loader.hide();

					Notifier.createAlert({
						containerId: '#alerts',
						message: res.message,
						status: 'danger'
					});
				}
			});
		}
		else {
			Loader.hide();
		}

		ev.preventDefault();
		return false;
	}

	$('.thumbnail-image-delete').on('click', function () {
		var id = $(this).attr('data-id');
		var $wrapper = $(this).parents('.thumbnail-wrapper');

		Data.getJson({ url: '/sitetriks/files/DeleteSingleFile?id=' + id, formData: new FormData() }).then(function (res) {
			if (res.success) {
				$wrapper.remove();
				Notifier.createAlert({
					containerId: $notifier,
					message: 'Successfully deleting a thumbnail',
					status: 'success'
				});
			} else {
				Notifier.createAlert({
					containerId: $notifier,
					message: 'We were unable to delete this thumbnail',
					status: 'danger'
				});
			}
		}).then(function () {
			location.reload();
		});
	});

	$('#generate-thumbnails').on('click', function () {
		var id = $(this).attr('data-fileId');

		Data.postJson({ url: '/sitetriks/files/GenerateThumbnailsForFile', data: id }).then(function (res) {
			if (res.success) {
				Notifier.createAlert({
					containerId: $notifier,
					message: 'Successfully regenerated thumbnails',
					status: 'success'
				});
				location.reload();
			} else {
				Notifier.createAlert({
					containerId: $notifier,
					message: 'We were unable to generate thumbnails for the image.',
					status: 'danger'
				});
			}
		});

    });
    
    function openDatePicker() {
        $dateTimePicker.focus();





    }

	function bindEvents() {
		$inputFile.on('change', editFileDisplayImage);
		$('#submit-form').on('submit', submitFileForm);
		$dateTimePicker.next('span.input-group-addon').on('click', openDatePicker);
	}

	function dispose() {
		$inputFile.off('change', editFileDisplayImage);
		$('#submit-form').off('submit', submitFileForm);
		$dateTimePicker.next('span.input-group-addon').off('click', openDatePicker);
	}
}

window.initFilesEdit = initFilesEdit;
