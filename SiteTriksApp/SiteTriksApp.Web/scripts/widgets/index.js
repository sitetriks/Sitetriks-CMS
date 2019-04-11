// Loads all widget scripts inside the folder
let context = require.context('./', true, /\.widget.js$/);
let widgets = {};

context.keys().forEach((filename) => {
    let imported = context(filename);
    let widgetName = filename.substring(2, filename.indexOf('.widget.js'));
    widgets[widgetName] = imported.default || imported[widgetName];
});

export { widgets };
