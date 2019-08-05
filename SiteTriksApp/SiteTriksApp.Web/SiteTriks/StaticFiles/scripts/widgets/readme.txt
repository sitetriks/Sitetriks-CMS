place widgets configuration scripts in this folder. 
Script must be named <widgetName>.widget.js 
Export the widget function with name or as default. 
It will recive object with mediator and logger to allow interaction with other widgets and modules.
	add function will be called to setup view when adding widget.
	edit function will be called to setup view when editing widget.
	save function will be called to when saving widget. Must return single string, it will be passed to widget's ViewComponent and to 'edit' function.
	validate function will be called before 'save' to validate the information on the view. Must return object with 'isValid' parameter(optionaly 'message' that will be shown if not valid)

Example:

export function <widgetName>({ mediator, logger }){
	return {
		add: function () { },
		edit: function (element) { },
		save: function () { },
		validate: function () { 
			return {
				isValid: false,
				message: 'Invalid Data!'			
			}
		}
	};
}
