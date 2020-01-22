// Source https://www.cssscript.com/color-picker-component-pickr/

window.pickrModule = (function (elClass) {
	let inputFiled = elClass.replace('-btn', '');
	let defaultColor = $(inputFiled).val();
	let colorHex;

	//function init(elClass) {
	let pickr = new Pickr({
		el: elClass,
		default: defaultColor, // default color
		showAlways: false,
		theme: 'classic',
		position: 'right',
		components: {
			// color preview
			preview: true,
			// enables opacity slider
			opacity: true,
			// enables HUE slider
			hue: true,     // Hue slider
			// shows/hides controls
			// Input / output Options
			interaction: {
				hex: true,
				//rgba: true,
				//cmyk: true,
				input: true,
				save: true
			}
		}

	});

	pickr.on('save', (color, instance) => {
		colorHex = '#' + color.toHEXA().join('');
		$(inputFiled).val(colorHex); 
		console.log(elClass, 'save', '#'+ color.toHEXA().join(''), instance);
	})
});

