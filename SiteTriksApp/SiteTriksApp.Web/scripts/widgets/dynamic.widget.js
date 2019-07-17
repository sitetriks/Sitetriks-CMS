import { Data } from '../common/data.js';

export function dynamic() {
    function initDynamic(selectedClass, selectedType, selectedTemplate) {
        let model;

        Data.getJson({ url: '/sitetriks/widgets/widgettemplates' }).then(function (res) {
            model = res.model;

            let $classes = $(document.createElement('select')).attr('id', 'dropdown-classes');

            $('<option></option>', {
                text: '-- Select Class --',
                value: ''
            }).appendTo($classes);

            for (var klass in model) {
                $('<option></option>', {
                    text: klass,
                    value: klass,
                    selected: selectedClass === klass
                }).appendTo($classes);
            }

            $classes.appendTo('#dynamic-container');
            $classes.trigger('change');
            selectedClass = '';
        }, Data.defaultError);

        $('#dynamic-container').on('change', '#dropdown-classes', function (ev) {
            $('#dropdown-types').remove();
            $('#dropdown-templates').remove();
            let klass = $('#dropdown-classes').val();

            if (!klass || klass === '') {
                return;
            }

            let $types = $(document.createElement('select')).attr('id', 'dropdown-types');

            $('<option></option>', {
                text: '-- Select Type --',
                value: ''
            }).appendTo($types);

            for (var type in model[klass]) {
                $('<option></option>', {
                    text: type,
                    value: type,
                    selected: selectedType === type
                }).appendTo($types);
            }

            $types.appendTo('#dynamic-container');
            $types.trigger('change');
            selectedType = '';
        });

        $('#dynamic-container').on('change', '#dropdown-types', function (ev) {
            $('#dropdown-templates').remove();
            let klass = $('#dropdown-classes').val();
            let type = $('#dropdown-types').val();

            if (!type || type === '' || !klass || klass === '') {
                return;
            }

            let $templates = $(document.createElement('select')).attr('id', 'dropdown-templates');

            $(document.createElement('option'))
                .val('')
                .text('-- Select Template --')
                .appendTo($templates);

            for (var template of model[klass][type]) {
                $('<option></option>', {
                    text: template,
                    value: template,
                    selected: selectedTemplate === template
                }).appendTo($templates);
            }

            $templates.appendTo('#dynamic-container');
            selectedTemplate = '';
        });
    }

    return {
        add: initDynamic,
        edit: function (element) {
            let elements = element.split('/');

            let selectedClass = elements[0];
            let selectedType = elements[1];
            let selectedTemplate = elements[2];

            initDynamic(selectedClass, selectedType, selectedTemplate);
        },
        save: function () {
            let klass = $('#dropdown-classes').val();
            if (!klass) {
                return null;
            }

            let t = $('#dropdown-types').val() || '';
            let templ = $('#dropdown-templates').val() || '';

            return `${klass}/${t}/${templ}`;
        },
        validate: function () {
            return {
                isValid: !!$('#dropdown-classes').val(),
                message: 'You must select class!'
            };
        }
    };
}
