import './layout.js';

import { Data } from '../common/data.js';
import { Utils } from '../common/utils.js';
import { Loader } from '../common/loader.js';
import { Notifier } from '../common/notifier.js';
import { WarningWindow } from '../modules/warning-window.js';
import { WidgetsDraggable } from '../widgets-draggable';
import { ModuleBuilder } from '../modules/module-builder';
import { mainMenuModule } from '../modules/main-widgets-menu.js';
import { allNewsWidget } from '../widgets-helpers/all-news.js';
import { blogWidget } from '../widgets-helpers/blog-widget.js';
import { forumWidget } from '../widgets-helpers/forum-widget.js';

export function editPageContent(url, currentLanguage, currentVersion, currentTemplate, w) {
	// Layout handling
    Utils.loadjscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-lg-preview.css`, 'css');
	$('.resolution').on('click', function (ev) {
		let active = $('.selected-option').attr('data-type');
		let $target = $(this);

		if (active === 'content') {
			if ($target.hasClass('selected')) {
				return;
			}

			$('.resolution.selected').each(function (_, element) {
				let $el = $(element);
				$el.removeClass('selected');
				let type = $el.attr('data-type');

                Utils.removejscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-${type}-preview.css`, 'css');
			});

			$target.addClass('selected');
			let type = $target.attr('data-type');
            Utils.loadjscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-${type}-preview.css`, 'css');
		}
	});

	let $previewContainer = $('#preview-container');
	let $showContent = $('.show-content');
	let $showLayout = $('.show-layout');
	let $widgetsWrapper = $('#widgets-wrapper');
	$showLayout.on('click', function (ev) {
		$('#preview-layout').show();
		$('#layout-properties').show();
		$widgetsWrapper.hide();
		$previewContainer.hide();

		// button styles 1.1
		$(this).parent().addClass('selected-option');
		$showContent.parent().removeClass('selected-option');

		//reset resolutions
		$('.resolution').each(function (_, element) {
			element.classList.add('selected');
		});

		WarningWindow.force();
		ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT).resolutions = ['xs', 'sm', 'md', 'lg'];
	});

	$showContent.on('click', function (ev) {
		$('#preview-layout').hide();
		$('#layout-properties').hide();
		$widgetsWrapper.show();
		$previewContainer.show();

		// button styles 1.1
		$(this).parent().addClass('selected-option');
		$showLayout.parent().removeClass('selected-option');

		$('.resolution.selected').each(function (_, element) {
			let $el = $(element);
			$el.removeClass('selected');
			let type = $el.attr('data-type');

            Utils.removejscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-${type}-preview.css`, 'css');
		});

		$('.resolution[data-type="lg"]').trigger('click');
	});

	let layoutWidget = w.getPageContent().find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
	if (layoutWidget) {
		let layout = JSON.parse(layoutWidget.element);

		ModuleBuilder.initializeLayout('#preview-layout', layout.layoutRows, '.resolution', '#main-layout-options', function () { return $('.selected-option').attr('data-type') === 'layout'; });

		$showContent.on('click', saveLayout);
	} else {
		console.error('Layout was not found!');
	}

	function saveLayout() {
		let layoutWidget = w.getPageContent().find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
		let layout = JSON.parse(layoutWidget.element);
		let l = ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT);
		layout.layoutRows = l.map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });

		ModuleBuilder.renderLayout(layout.layoutRows, $(`div.preview-placeholder[data-identifier="${layoutWidget.id}"]`).find('.layout-content').first(), l.deletedPlaceholders);
		WidgetsDraggable.init(w);

		layoutWidget.element = JSON.stringify(layout);
		if (layoutWidget.IsInherited) {
			layoutWidget.IsModifiedOnChild = true;
		}
	}

	document.addEventListener('checkForContent', function (e) {
		let placeholders = e.detail.placeholders;

		for (let i = 0; i < placeholders.length; i += 1) {
			if (typeof w.getPageContent() !== 'undefined' && w.getPageContent().find(e => e.placeholder === placeholders[i])) {
				let $modal = $('#layout-delete-confirmation');
				$modal.modal('show');
				$modal.attr('data-caller-id', e.target.id);
				$modal.attr('data-type', e.detail.type);
				$modal.attr('data-rowindex', e.detail.rowIndex);
				return false;
			}
		}

		e.target.dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: e.detail.type, rowIndex: e.detail.rowIndex } }));
	});

	$('#delete-layout-content').on('click', function () {
		let $modal = $('#layout-delete-confirmation');

		let callerId = $modal.attr('data-caller-id');
		let type = $modal.attr('data-type');
		let rowIndex = $modal.attr('data-rowindex');

		document.getElementById(callerId).dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: type, rowIndex: rowIndex } }));
	});

	initStickyWidgets();
	WarningWindow.attach();

	$(document).on('updatePreview', {}, updatePreview.bind(document, url));
	updatePreview(url);
	let $languages = $('#languages');
	let versions = new revisionControl(url, 'pages', $languages, $('#versions'), $('#version-control'));
	versions.loadVersions(currentLanguage, currentVersion);

	Data.getJson({ url: '/sitetriks/languages/getlanguages', disableCache: true }).then(function (res) {
		if (res.success) {
			res.cultures.forEach(function (element) {
				let $option = $('<option></option>', {
					value: element,
					text: element
				});
				if (element === currentLanguage) {
					$option.attr('selected', 'selected');
				}

				$option.appendTo($languages);
			});
		}
	}, Data.defaultError);

	$languages.on('change', function (ev) {
		updatePreview(url);
		currentLanguage = $languages.val();
		versions.loadVersions(currentLanguage);
	});

	function updatePreview(url) {
		let lang = $('#languages').val() || 'en';
		console.log(lang);

		$previewContainer.html('');
		Loader.show(true);

		Data.getJson({ url: `/sitetriks/display/previewpage?url=${url}&lang=${lang}`, disableCache: true }).then(function (res) {
			$previewContainer.html(res.view);

			$(document).trigger('initCarousel');
			w.setPageContent(res.content);
			$('#alerts').html('');

			if (res.message) {
				Notifier.createAlert({ containerId: '#alerts', message: res.message, isPermanent: true });
			}

			Loader.hide();

			$('#displayed-version').text(res.version);

			WidgetsDraggable.init(w);

			let layoutWidget = w.getPageContent().find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
			if (layoutWidget) {
				let layout = JSON.parse(layoutWidget.element);

				ModuleBuilder.setInstance('#preview-layout', ModuleBuilder.LAYOUT, layout.layoutRows);
				document.getElementById('preview-layout').dispatchEvent(new CustomEvent('rebuildLayout', { detail: { l: layout.layoutRows } }));
				mainMenuModule.setMenuOnChange();
            }
            allNewsWidget();
            blogWidget();
            forumWidget();

		}, Data.defaultError);
	}

	$previewContainer.on('click', '.lock-widget', function (ev) {
		var $caller = $(this);
		var status = $caller.prop('checked');
		var id = $caller.attr('data-id');

		let item = w.getPageContent().find(c => c.id === id);
		item.isLocked = !!status;
	});

	function loadNotifier() {
		return Notifier.createAlert({
			containerId: '#alerts',
			message: 'This widget is restricted to the business license holders only, please contact support to upgrade.',
			status: 'danger',
			isPermanent: false,
			seconds: 5
		});
	}

	function prepareSave() {
		saveLayout();
		return {
			url: url,
			content: w.getPageContent(),
			lang: $languages.val()
		};
	}

	//publish event + handler
	$('#btn-publish').on('click', savePublish);

	function savePublish(ev) {
		Loader.show('#fff');
		ev.preventDefault();

		return Data.postJson({ url: '/sitetriks/Pages/PublishPageWithContent', data: prepareSave() }).then(redirectToPagesGridOnSuccess, Data.defaultError);
	}

	//save-draft event + handler
	$('#btn-save-draft').on('click', saveDraft);

	function saveDraft(ev) {
		Loader.show('#fff');
		ev.preventDefault();

		return Data.postJson({ url: '/sitetriks/Pages/SaveDraft', data: prepareSave() }).then(redirectToPagesGridOnSuccess);
	}

	//preview event + handler
	$('#btn-preview-page').on('click', previewPage);

	let notifierCounter = 0;

	function previewPage(ev) {
		Loader.show('#fff');
		saveLayout();
		let body = {
			content: w.getPageContent(),
			template: currentTemplate,
			language: $languages.val(),

		};

        Data.postJson({ url: '/sitetriks/Display/Preview', data: body }).then(function (res) {    
			Utils.openInNewTab(res)
			Loader.hide();
            

		}, Data.defaultError);
	};

	function redirectToPagesGridOnSuccess(res) {
		if (res.success) {
			location.replace('/sitetriks/pages');
		} else {
			Loader.hide();
			previewPage();
		}
	}

	$('#btn-reset').on('click', updatePreview.bind(document, url));
	$('.btn-revision').on('click', versions.toggle);
	$('#btn-preview-version').on('click', versions.previewVersion);
	$('#btn-revert-version').on('click', versions.revertVersion);

	$('.widget-search').on('keyup', function (ev) {
		let pattern = this.value.toLocaleLowerCase();
		$widgetsWrapper.find('.drag').each((_, e) => {
			if (e.getAttribute('data-type').toLocaleLowerCase().indexOf(pattern) !== -1) {
				e.style.display = 'block';
			} else {
				e.style.display = 'none';
			}
		});
    });

    let $widgetList = $('.widgets-list');
    let $pageEditContent = $('.page-content-wrapper');

    $('.toggle-widget-container').on('click', function () {

        let $arrows = $(this).children();
        $arrows.toggle();
        $widgetList.toggle("slide", { direction: "left" }, 300);
        $pageEditContent.toggleClass('full-width');
    })
}

export function revisionControl(url, type, $languages, $versions, $versionControl) {
	function previewVersion(ev) {
		let body = {
			version: $versions.val(),
			url: url,
			lang: $languages.val()
		};

		Data.postJson({ url: '/sitetriks/Display/PreviewVersion', data: body }).then(function (res) {
			Utils.openInNewTab(res);
		}, Data.defaultError);
	}

	function revertVersion(ev) {
		let body = {
			version: $versions.val(),
			url: url,
			lang: $languages.val()
		};

		Data.postJson({ url: `/sitetriks/${type}/RevertVersion`, data: body }).then(function (res) {
			location.reload(true);
		}, Data.defaultError);
	}

	function toggle(ev) {
		let $span = $(this).children('span');
		if ($span.hasClass('fa-angle-left')) {
			$span.removeClass('fa-angle-left');
			$span.addClass('fa-angle-right');
			$versionControl.css('display', 'inline-block');
		} else {
			$span.removeClass('fa-angle-right');
			$span.addClass('fa-angle-left');
			$versionControl.css('display', 'none');
		}
	}

	function loadVersions(lang, selected) {
		$versions.children().remove();

		return Data.getJson({ url: `/sitetriks/${type}/getpageversions?url=${url}&lang=${lang}`, disableCache: true }).then(function (res) {
			if (res.success) {
				res.versions.forEach(function (element) {
					let $v = $(`<option value="${element}">${element}</option>`);
					if (selected && element === +selected) {
						$v.attr('selected', 'selected');
					}
					$versions.append($v);
				});
			}

			return res;
		}, Data.defaultError);
	}

	return {
		loadVersions,
		previewVersion,
		revertVersion,
		toggle
	};
}

export function initStickyWidgets() {
	let $window = $(window);
	let itemTop = 0;
	$window.on('scroll resize', stickyWidgets);
	stickyWidgets();

	function stickyWidgets() {
		let scrollPosition = $window.scrollTop();
		let $widgetsList = $('.widgets-list');

		if (!itemTop) {
			itemTop = $widgetsList.offset().top;
		}

		if ($widgetsList && $widgetsList.length === 1) {
			if (scrollPosition > itemTop - 100) {
				$widgetsList.addClass('scrolling');
			} else {
				$widgetsList.removeClass('scrolling');
			}
		}
	}
}

export function editTemplateContent(url, currentLanguage, currentVersion, currentCulture, currentTemplate, w) {
	// Layout handling
    Utils.loadjscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-lg-preview.css`, 'css');
	$('.resolution').on('click', function (ev) {
		let active = $('.selected-option').attr('data-type');
		let $target = $(this);

		if (active === 'content') {
			if ($target.hasClass('selected')) {
				return;
			}

			$('.resolution.selected').each(function (_, element) {
				let $el = $(element);
				$el.removeClass('selected');
				let type = $el.attr('data-type');

                Utils.removejscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-${type}-preview.css`, 'css');
			});

			$target.addClass('selected');
			let type = $target.attr('data-type');
            Utils.loadjscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-${type}-preview.css`, 'css');
		}
	});

	$('.show-layout').on('click', function (ev) {
		$('#preview-layout').show();
		$('#layout-properties').show();
		$('#widgets-wrapper').hide();
		$('#preview-container').hide();

		// button styles 1.1
		$(this).parent().addClass('selected-option');
		$('.show-content').parent().removeClass('selected-option');

		//reset resolutions
		$('.resolution').each(function (_, element) {
			element.classList.add('selected');
		});

		WarningWindow.force();
		ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT).resolutions = ['xs', 'sm', 'md', 'lg'];
	});

	$('.show-content').on('click', function (ev) {
		$('#preview-layout').hide();
		$('#layout-properties').hide();
		$('#widgets-wrapper').show();
		$('#preview-container').show();

		// button styles 1.1
		$(this).parent().addClass('selected-option');
		$('.show-layout').parent().removeClass('selected-option');

		$('.resolution.selected').each(function (_, element) {
			let $el = $(element);
			$el.removeClass('selected');
			let type = $el.attr('data-type');

            Utils.removejscssfile(`/SiteTriks/StaticFiles/css/sitetriks/st-${type}-preview.css`, 'css');
		});

		$('.resolution[data-type="lg"]').trigger('click');
	});

	let layoutWidget = w.getPageContent().find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
	if (layoutWidget) {
		let layout = JSON.parse(layoutWidget.element);

		ModuleBuilder.initializeLayout('#preview-layout', layout.layoutRows, '.resolution', '#main-layout-options', function () { return $('.selected-option').attr('data-type') === 'layout'; });

		$('.show-content').on('click', saveLayout.bind($('.show-content'), true));
	} else {
		console.error('Layout was not found!');
	}

	function saveLayout(sendToServer) {
		let layoutWidget = w.getPageContent().find(c => c.placeholder === 'main' && c.type === 'layoutBuilder' && c.order === 0);
		let layout = JSON.parse(layoutWidget.element);
		let l = ModuleBuilder.getInstance('#preview-layout', ModuleBuilder.LAYOUT);
		layout.layoutRows = l.map(function (r) { return { columns: r.columns, tag: r.tag || 'div', cssClass: r.cssClass }; });

		ModuleBuilder.renderLayout(layout.layoutRows, $(`div.preview-placeholder[data-identifier="${layoutWidget.id}"]`).find('.layout-content').first(), l.deletedPlaceholders);
		WidgetsDraggable.init(w);

		layoutWidget.element = JSON.stringify(layout);
		if (layoutWidget.IsInherited) {
			layoutWidget.IsModifiedOnChild = true;
		}
	}

	document.addEventListener('checkForContent', function (e) {
		let placeholders = e.detail.placeholders;
		console.log('checking for updateds');

		for (let i = 0; i < placeholders.length; i += 1) {
			if (typeof w.getPageContent() !== 'undefined' && w.getPageContent().find(e => e.placeholder === placeholders[i])) {
				let $modal = $('#layout-delete-confirmation');
				$modal.modal('show');
				$modal.attr('data-caller-id', e.target.id);
				$modal.attr('data-type', e.detail.type);
				$modal.attr('data-rowindex', e.detail.rowIndex);
				return false;
			}
		}

		e.target.dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: e.detail.type, rowIndex: e.detail.rowIndex } }));
	});

	$('#delete-layout-content').on('click', function () {
		let $modal = $('#layout-delete-confirmation');

		let callerId = $modal.attr('data-caller-id');
		let type = $modal.attr('data-type');
		let rowIndex = $modal.attr('data-rowindex');

		document.getElementById(callerId).dispatchEvent(new CustomEvent('allowedForDeletion', { bubbles: true, detail: { type: type, rowIndex: rowIndex } }));
	});

	initStickyWidgets();
	WarningWindow.attach();

	$(document).on('updatePreview', {}, updatePreview.bind(document, url));
	updatePreview(url);
	let versions = new revisionControl(url, 'templates', $('#languages'), $('#versions'), $('#version-control'));
	versions.loadVersions(currentCulture, currentVersion);

	Data.getJson({ url: '/sitetriks/languages/getlanguages', disableCache: true }).then(function (res) {
		if (res.success) {
			res.cultures.forEach(function (element) {
				let $l = $('<option value="' + element + '">' + element + '</option>');
				if (element === currentLanguage) {
					$l.attr('selected', 'selected');
				}

				$l.appendTo('#languages');
			});
		}
	}, Data.defaultError);

	$('#languages').on('change', function (ev) {
		updatePreview(url);
		let lang = $('#languages').val();
		currentLanguage = lang;
		versions.loadVersions(lang);
	});

	function updatePreview(url) {
		var fullUrl = '/sitetriks/display/previewpage';
		let lang = $('#languages').val() || 'en';

		console.log(lang);

		$('#preview-container').html('');
		Loader.show(true);

		Data.getJson({ url: fullUrl + '?url=' + url + '&lang=' + lang, disableCache: true }).then(function (res) {
			$('#preview-container').html(res.view);

			$(document).trigger('initCarousel');
			w.setPageContent(res.content);
			$('#alerts').html('');

			if (res.message) {
				Notifier.createAlert({ containerId: '#alerts', message: res.message, isPermanent: true });
			}

			Loader.hide();

			$('#displayed-version').text(res.version);

			WidgetsDraggable.init(w);
		}, Data.defaultError);
	}

	$('#preview-container').on('click', '.lock-widget', function (ev) {
		var $caller = $(this);
		var status = $caller.prop('checked');
		var id = $caller.attr('data-id');

		let item = w.getPageContent().find(c => c.id === id);
		item.isLocked = !!status;
	});

	$('#btn-publish').on('click', function (evt) {
		let body = {
			url: url
		};

		Data.postJson({ url: '/sitetriks/Templates/GetChildren', data: body }).then(function (res) {
			if (res.success) {
				var container = $('#warning-modal .modal-body');
				var childPagesList = $('#child-pages-list');
				childPagesList.empty();
				$('#child-pages-container').attr('hidden', 'hidden');
				var childTemplatesList = $('#child-templates-list');
				childTemplatesList.empty();
				$('#child-templates-container').attr('hidden', 'hidden');

				if (!res.childTemplates.length && !res.childPages.length) {
					var msg = $('<h5>');
					msg.text('Publish of this template won\'t affect any page!');

					container.html(msg);
					return;
				}

				for (var i = 0; i < res.childPages.length; i++) {
					var li = $('<li>');
					li.addClass('list-group-item');
					li.text(res.childPages[i]);

					childPagesList.append(li);
				}

				for (var i = 0; i < res.childTemplates.length; i++) {
					var li = $('<li>');
					li.addClass('list-group-item');
					li.text(res.childTemplates[i]);

					childTemplatesList.append(li);
				}

				if (res.childPages.length > 0) {
					$('#child-pages-container').removeAttr('hidden');
				}

				if (res.childTemplates.length > 0) {
					$('#child-templates-container').removeAttr('hidden');
				}
			}
		});
	});

	$('#warning-modal-publish').on('click', publishTemplate);

	function loadNotifier() {
		return Notifier.createAlert({
			containerId: '#alerts',
			message: 'This widget is restricted to the business license holders only, please contact support to upgrade.',
			status: 'danger',
			isPermanent: false,
			seconds: 5
		});
	}

	let notifierCounter = 0;

	function publishTemplate() {
		saveLayout();
		let body = {
			url: url,
			content: w.getPageContent(),
			lang: currentLanguage
		};

		Data.postJson({ url: '/sitetriks/Templates/PublishPageWithContent', data: body }).then(function (res) {
			if (res.success) {
				window.onbeforeunload = null;
				location.replace('/sitetriks/templates');
			} else {
				if (notifierCounter === 0) {
					loadNotifier();
					++notifierCounter;
				}
				closeModalOnPublish();
				previewTemplate();
			}


		}, Data.defaultError).then(closeModalOnPublish);
	}

	function closeModalOnPublish() {
		$('#warning-modal').modal('hide');

	}

	$('#btn-save-draft').on('click', function (evt) {
		saveDraft().then(function (res) {
			if (res.success) {
				location.replace('/sitetriks/templates');
			} else {
				if (notifierCounter === 0) {
					loadNotifier();
					++notifierCounter;
				}
				previewTemplate();
			}
		});
	});

	function saveDraft() {
		let body = {
			url: url,
			content: w.getPageContent(),
			lang: currentLanguage
		};

		return Data.postJson({ url: '/sitetriks/Templates/SaveDraft', data: body });
	}

	$('#btn-preview-page').on('click', previewTemplate);

	function previewTemplate(evt) {
		Loader.show('#fff');
		saveLayout();
		let body = {
			content: w.getPageContent(),
			teamplate: currentTemplate,
			language: currentLanguage
		};

        return Data.postJson({ url: '/sitetriks/Display/Preview', data: body }).then(function (res) {
            
        
                Utils.openInNewTab(res);
            Loader.hide();
        }, Data.defaultError);
	};

	$('#btn-reset').on('click', updatePreview.bind(document, url));

	$('.btn-revision').on('click', versions.toggle);
	$('#btn-preview-version').on('click', versions.previewVersion);
	$('#btn-revert-version').on('click', versions.revertVersion);

	$('.widget-search').on('keyup', function (ev) {
		let pattern = this.value.toLocaleLowerCase();
		$('.widgets-holder .drag').each((_, e) => {
			if (e.getAttribute('data-type').toLocaleLowerCase().indexOf(pattern) !== -1) {
				e.style.display = 'block';
			} else {
				e.style.display = 'none';
			}
		});
    });

}

window.editPageContent = editPageContent;
window.editTemplateContent = editTemplateContent;
