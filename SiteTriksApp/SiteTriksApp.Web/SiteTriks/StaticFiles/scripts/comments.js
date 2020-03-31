import { Data } from './common/data.js';
import { Loader } from './common/loader.js';
import { loadHandlebarsTemplates } from './common/handlebars.js';
import { Notifier } from './common/notifier.js';
import { DateConversion } from './common/date-conversion.js';
import { Validator } from './common/validator.js';

const Comments = (function () {
	let parentId;
	let $container;
	const templatesCache = {};
	let areaId;

	function init(id, $commentsContainer, textAreaId) {
		parentId = id;
		$container = $commentsContainer || $('#comments-container');
		areaId = textAreaId || 'comment-area';
		return Promise.all([
			loadHandlebarsTemplates(templatesCache, [{ name: 'comment-edit', url: '/SiteTriks/StaticFiles/templates/comment-edit.html' }]),
			loadComments(parentId)
		]).then(function (res) {
			bindEvents();
		});
	}

	function loadComments(id, $commentsContainer) {
		$container = $commentsContainer || $container || $('#comments-container');
		// TODO: add inline loader
		return Data.getJson({ url: '/sitetriks/comments/loadcomments?id=' + id }).then(function (res) {
			if (res) {
				$container.append(res);
				$('.comment-date').each((_, e) => {
					let d = e.getAttribute('data-original-date');
					let date = DateConversion.convertUtcToLocal(d);
					e.textContent = date.toLocaleString();

				});
				return { success: true };
			}
			return { success: false };
		});
	}

	function addComment(ev) {
		Loader.show('#fff');

		let content = noFollowRule.applyNoFollowRule($('#blog-comment-area').val());

		let body = { id: parentId, content };

		Data.postJson({ url: '/sitetriks/comments/addcomment', data: body }).then(function (res) {
			if (res.success) {
				$container.append(res.view);
				$("#blog-comment-area").val("");
				$('.comment-date').each((_, e) => {
					let d = e.getAttribute('data-original-date');

					let newDate = DateConversion.convertUtcToLocal(d);
					e.textContent = newDate.toLocaleString();
				});
			} else {
				Notifier.createAlert({ containerId: '#alert', message: 'Comment must not be empty', status: 'danger' });
			}

			Loader.hide();
		});
	}

	function editComment(ev) {
		closeEdit();
		let $trigger = $(this);
		let $content = $trigger.parents('.panel-heading').next('.panel-body');

		let html = templatesCache['comment-edit']({ content: $content.html() });
		$content.parent().append(html);

		$content.hide();
		$trigger.hide();

	}

	function closeEdit(ev, content) {
		let $content = (ev && ev.target ? $(ev.target).parents('.edit-post-container') : $container.find('.edit-post-container')).prev('.panel-body');
		if ($content && $content.length) {
			$content.prev('.panel-heading').find('.btn-edit-post').show();
			$content.show();
			$('.edit-post-container').remove();
			if (content) {
				$content.html(content);
			}
		}
	}

	function saveEditedComment(ev) {
		let $trigger = $(this);
		let id = $trigger.parents('.comment-wrapper').attr('data-id');

		let content = noFollowRule.applyNoFollowRule($('#edit-post-content').val());

		let body = { id, content };

		Loader.show('#fff');
		Data.postJson({ url: '/sitetriks/comments/editcomment', data: body }).then(function (res) {
			if (res.success) {
				closeEdit({ target: $trigger }, content);
			}

			Loader.hide();
		});
	}

	function deleteComment(ev) {
		let $parent = $(this).parents('.comment-wrapper');
		let id = $parent.attr('data-id');

		Loader.show(true);
		closeEdit();
		Data.postJson({ url: '/sitetriks/comments/deletecomment', data: { id } }).then(function (res) {
			if (res.success) {
				$parent.parent().remove();
			}

			Loader.hide();
		});
	}

	//no follow logic - start
	let noFollowRule = (function () {
		function applyNoFollowRule(content) {
			let regex = /\bhttps?:\/\/\S+/;
			let contentAsArray = content.split(' ');
			contentAsArray
				.forEach((element, index) => {
					let match = element.match(regex);
					if (match) {
						let newItem = appendeeString(match);
						contentAsArray.splice(index, 1, newItem);
					};
				});

			let ruleAppliedContent = contentAsArray.join(' ');
			return ruleAppliedContent;
		}

		function appendeeString(url) {
			return `<a href="${url}" rel="nofollow" style="color:blue;text-decoration:underline;cursor:pointer">${url}</a>`
		};

		return {
			applyNoFollowRule
		}
	})();
	//no follow logic - end

	function bindEvents() {
		$container.parent().on('click', '.btn-add-comment', addComment);
		$container.on('click', '.btn-edit-post', editComment);
		$container.on('click', '.btn-save-edited-post', saveEditedComment);
		$container.on('click', '.btn-delete-comment', deleteComment);
		$container.on('click', '.btn-cancel-edited-post', closeEdit);
	}

	return { init, loadComments };
})();

export { Comments };
