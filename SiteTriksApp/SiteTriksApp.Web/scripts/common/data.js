var Data = (function () {
	let makeRequest = typeof fetch !== 'undefined' && isFunction(fetch) ? makeFetchRequest : makeAjaxRequest; // fallback to ajax if older browser

	function makeAjaxRequest({ url, method, body, headers, isForm }) {
		return new Promise((resolve, reject) => {
			let params = {
				url,
				method,
				data: body,
				success: resolve,
				error: reject
			};
			if (isForm) {
				params.contentType = false; // tell jQuery not to process the data
				params.processData = false; // tell jQuery not to set contentType
			} else {
				params.headers = headers;
			}

			$.ajax(params);
		});
	}

	function makeFetchRequest({ url, method, body, headers, isForm }) {
		headers = headers || {};
		if (isForm) {
			delete headers['Content-Type'];
		} else {
			headers['Content-Type'] = 'application/json';
		}

		return fetch(url, {
			method,
			body,
			headers,
			credentials: 'include'
		}).then(res => {
			if (res.status >= 200 && res.status < 300) {
				if (res.headers.get('Content-Type') && res.headers.get('Content-Type').indexOf('application/json') > -1) {
					return res.json();
				}

				return res.text();
			} else {
				return Promise.reject(res.text());
			}
		});
	}

	function getJson({ url, disableCache }) {
		let headers = {};
		if (disableCache === true) {
			headers = {
				'Pragma': 'no-cache',
				'Cache-Control': 'no-cache'
			};
		}

		return makeRequest({ url, method: 'GET', headers });
	}

	function postJson({ url, data }) {
		return makeRequest({ url, method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
	}

	function postForm({ url, formData }) {
		return makeRequest({ url, method: 'POST', body: formData, isForm: true });
	}

	function deleteJson({ url, data }) {
		return makeRequest({ url, method: 'DELETE', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
	}

	//remove comments once the LinkedIn btn functionality is available

	//function getApiRequest({ apiEndpoint, urlParameters, headers }) {
	//	let urlParams = '';
	//	Object.entries(urlParameters).forEach((kvp) => {
	//		urlParams += `${kvp[0]}=${kvp[1]}&`;
	//	});

	//	let url = apiEndpoint + urlParams;
	//	return makeRequest({ url, method: 'GET', headers: {'Access-Control-Allow-Origin': 'https://www.abv.bg'} });
	//}

	//function postAPIRequest() {

	//}

	function defaultError() {
		for (let i = 0; i < arguments.length; i++) {
			console.log(arguments[i]);
		}
	}


	return {
		getJson,
		postJson,
		postForm,
		deleteJson,
		defaultError,
		//getApiRequest
	};

	function isFunction(func) {
		return func && {}.toString.call(func) === '[object Function]';
	}
}());

export { Data };
