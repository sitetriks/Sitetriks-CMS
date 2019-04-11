import './layout.js';

import { WarningWindow } from '../modules/warning-window.js';
import { Comments } from '../comments.js';
import { textEditor } from '../text-editor.js';
import { setupAjaxForm } from './helpers.js';
import { DateConversion } from '../common/date-conversion.js';

function blogDetails(id) {
    Comments.init(id, $('#comments-container'), 'blog-comment-area');
    WarningWindow.attach();
	let element = document.querySelector('.comment-date');
	element.textContent = DateConversion.convertUtcToLocal(element.getAttribute('data-original-date'));
}

function blogForm() {
    textEditor.init('#summary-area', 500, 150);
    textEditor.init('#content-area', 500, 300);

    setupAjaxForm('#blog-form', '/sitetriks/blog');
    WarningWindow.attach();
}

window.blog = {
    details: blogDetails,
    setupForm: blogForm
};
