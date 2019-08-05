import { Utils } from '../common/utils.js';
import { Data } from '../common/data.js';

export function socialShare() {
    function socialNetworkShareFunctionality() {
        let $widgetContainer = $('.social-share-widget');

        if ($widgetContainer.length !== 0) {

            let socialShareType = $widgetContainer.attr('data-social-type');

            switch (socialShareType) {
                case 'facebook':
                    loadFBSDK();
                    facebookUrlSetup();
                    break;
                case 'twitter':
		            loadTwitterSDK();
                    break;
            }		   
        }

		//linkedInUrlSetup();
	}

	let utilityResources = {
		sdks: {
			facebook: 'https://connect.facebook.net/en_US/sdk.js',
			twitter: 'https://platform.twitter.com/widgets.js',
		},
		currentUrl: {
			currentURL: window.location.href
		}
	}

	function loadTwitterSDK() {
		window.twttr = (function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0],
				t = window.twttr || {};
			if (d.getElementById(id)) {
				return t
			};
			js = d.createElement(s);
			js.id = id;
			js.src = utilityResources.sdks.twitter;
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function (f) {
				t._e.push(f);
			};

			return t;
		}(document, "script", "twitter-wjs"));
	}

	let facebookApiKey = $('#fb-api-key').val();
	function loadFBSDK() {
		window.fbAsyncInit = function () {
			FB.init({
				appId: facebookApiKey,
				cookie: true,
				xfbml: true,
				version: 'v3.3'
			});
		}

		let sdk = (function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[1];
			if (d.getElementById(id)) {
				return
			};
			js = d.createElement(s);
			js.id = id;
			js.async = true;
			js.src = utilityResources.sdks.facebook;
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		return sdk;
	}

	function facebookUrlSetup() {
		let fbShareButton = document.getElementById('facebok-share-btn');
		if (!fbShareButton) {
			return;
		}
		function eventHandler() {
			FB.ui({
				method: 'share',
				href: utilityResources.currentUrl.currentURL
			}, function (response) {
				if (!response) {
					console.log('User was unable to share resource');
				} else {
					console.log('Resource was shared successfully');
				}
			})
		};

		fbShareButton.addEventListener('click', eventHandler);
	}

	//function linkedInUrlSetup() {
	/* TODO: JS logic to get authorisation code then access token.
	 * Implement refresh token logic. Default life span of linkedIn token is 60 days.
	 * Configure HTTP headers
   
	/*TODO: HANDLE LOOKUP API -> get urn id (urn:li:person:{id})  -> on hold, need permission from LinkedIn. Await response from support team.
		* parse received urn and extract ID only  
		* SET JSON template where incomming values from fields will be placed
		* content body field is most important i. Currently only url
		* Configure HTTP headers
		* POST: https://api.linkedin.com/v2/shares
	*/

	//documentation: https://bit.ly/2R523D2

	//let result = getAuthorizationCodeRequestURL({
	//	response_type: 'code',
	//	client_id: '77dr5ythbg0g11',
	//	redirect_uri: 'https://localhost:44327/sitetriks/pages/editcontent?url=some-page',
	//	state: 'someRandomString',
	//	scope: 'r_liteprofile%20r_emailaddress%20w_member_social'
	//})

	// separate into independent function

	//function getAuthorizationCodeRequestURL({ response_type, client_id, redirect_uri, state, scope }) {
	//	let urlParamObj = {
	//		response_type,
	//		client_id,
	//		redirect_uri,
	//		state,
	//		scope
	//	}

	////	let header = {'Access-Control-Allow-Origin': 'https://localhost:44327' }

	//		Data.getApiRequest({
	//			apiEndpoint: 'https://www.linkedin.com/oauth/v2/authorization?',
	//			urlParameters: urlParamObj,
	//			headers: header
	//		})
	//}
	//}


	return socialNetworkShareFunctionality();
};

