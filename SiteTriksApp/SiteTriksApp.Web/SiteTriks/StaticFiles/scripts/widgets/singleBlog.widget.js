
export function singleBlog({ mediator, logger }) {

	function add() {
		//
	}

	function edit(element) {
		//
	}

	function save() {
		return {
			templateName: $('#template-selector').val()
		};
	}

	function validate() {
		return {
			isValid: true,
			message: 'Successfully added!'
		}
    }

	return {
		add: add,
		edit: edit,
		save: save,
		validate: validate
	};
}

