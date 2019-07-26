import './layout.js';

import { Comments } from '../comments.js';
import { WarningWindow } from '../modules/warning-window.js';

function postDetails(postId) {
    Comments.init(postId, $('#comments-container'), 'forum-comment-area');
    WarningWindow.attach();
}

window.postDetails = postDetails;
