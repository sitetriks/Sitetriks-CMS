export function timelines({logger}) {

    function init() {

        add();
    } 
    function edit(element) {
        let model = JSON.parse(element);
        console.log(model);
        $('.timeline-widget-container').find('.timeline-name').val(model.versionName);
        $('.timeline-widget-container').find('.timeline-dotnet').val(model.dotNetVersion);
        $('.timeline-widget-container').find('.timeline-summary').val(model.versionSummary);

        $('.timeline-widget-container').find('.timeline-date').val(model.releaseDate);

        for (var feature of model.features) {
           
            createInput(feature);
        }
        add();
    }
    function save() {
        var model = {};
        model.features = [];
        model.versionName = $('.timeline-widget-container').find('.timeline-name').val();
        model.dotNetVersion = $('.timeline-widget-container').find('.timeline-dotnet').val();
        model.versionSummary = $('.timeline-widget-container').find('.timeline-summary').val();
        model.releaseDate = $('.timeline-widget-container').find('.timeline-date').val();

        
        $('.timline-features').find('input').each(function () { model.features.push($(this).val()) })
        return JSON.stringify(model); 
    }

    function createInput(feature) {
        var row = $('<div>', {style:"margin-bottom:5px", class: 'row timline-features' });

        row.append($('<input>', { type: 'text', value: feature, class: 'timline-feature form-control' }));
        row.append($('<a>,', { class: "btn-remove-feature btn btn-delete-field", href: '#', text: "Remove" }))

        $('.timline-features-container').append(row);

        $('.btn-remove-feature').on('click', function (e) {
            $(e.target).closest('.timline-features').remove();
        });
    }

    function add() {
       
        $('.btn-add-feature').on('click', function () {
            var row = $('<div>', { style: "margin-bottom:5px",class: 'row timline-features' });
            
            row.append($('<input>', { type: 'text', class: 'timline-feature form-control' }));
            row.append($('<a>,', { class: "btn-remove-feature btn btn-delete-field", href: '#', text: "Remove" }))

            $('.timline-features-container').append(row);

            $('.btn-remove-feature').on('click', function (e) {
                $(e.target).closest('.timline-features').remove();
            });

        });
    }

    function validate() {

        let result = { isValid: true };
        var $timelines = $('.timline-features').find('input');
        if ($timelines.length < 1) {
            result.isValid = false;
            result.message = 'Can not save without at least one feature.';
        }
        $timelines.each(function () {
            var timelineValue = $(this).val();
            console.log(timelineValue)
            if (timelineValue.length < 3) {

                result.isValid = false;
                result.message = 'Feature can not be less then 3 symbols.';
            
            }
        })
        if ($timelines.length > 20) {
            result.isValid = false;
            result.message = 'Can not have more than 20 features.';
        }

        var versionName = $('.timeline-widget-container').find('.timeline-name').val();
        var summary = $('.timeline-widget-container').find('.timeline-summary').val();
        var dotnetVersion = $('.timeline-widget-container').find('.timeline-dotnet').val();
        if (versionName.length < 3) {
            result.isValid = false;
            result.message = 'Version name can not be less then 3 symbols.';
        }
        if (summary.length < 3) {
            result.isValid = false;
            result.message = 'Summary can not be less then 3 symbols.';
        }
        if (dotnetVersion.length < 1) {
            result.isValid = false;
            result.message = '.Net Version can not be less then 1 symbol.';
        }
        return result;
    }

    return {
        add: init,
        edit: edit,
        save: save,
        validate: validate
    }

}
