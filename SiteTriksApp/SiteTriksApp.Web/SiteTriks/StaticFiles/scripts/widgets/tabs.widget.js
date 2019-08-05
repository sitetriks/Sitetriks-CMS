import { Data } from '../common/data.js';

export function tabs({ logger }) {
    logger.log('init');
    let tabsConfigurationContainerClass = '.tabs-configuration';
    let tabConfigurationContainerClass = '.tab-configuration';
    let addTabBtnClass = '.add-tab';
    let removeTabBtnClass = '.remove-tab';
    let tabNameClass = '.tab-name';
    let selectTemplateClass = '.template-selector';

    function loadWidgetTemplates($selectMenu, type, selected) {
        var $templatesSelector = $selectMenu;
        if (!$templatesSelector.length) {
            return Promise.resolve();
        }

        return Data.getJson({ url: '/SiteTriks/Widgets/GetTemplateNames?widgetName=' + type }).then(function (data) {
            $templatesSelector.empty();
            for (let i = 0; i < data.templateNames.length; i++) {
                let templateName = data.templateNames[i];

                if(templateName == 'Default') {
                    continue;
                }

                $('<option></option>', {
                    text: data.templateNames[i],
                    value: data.templateNames[i],
                    selected: selected && data.templateNames[i] === selected
                }).appendTo($templatesSelector);
            }
        });
    }
    

    function addTab(tabName, templateName) {
        logger.log(tabName);
        logger.log(templateName);
        let $tabsConfigurationContainer = $(tabsConfigurationContainerClass);

        let $container = $('<div></div>').addClass('tab-configuration form-group row');
        if(tabName && typeof(tabName) == 'string') {
            $container.append(`<input type="text" placeholder="Tab Name" name="tab-name" value="${tabName}" class="tab-name form-control" />`);
        }
        else {
            $container.append(`<input type="text" placeholder="Tab Name" name="tab-name" value="" class="tab-name form-control" />`);
        }

        $container.append(`<select class="template-selector form-control"></select>`);
        $container.append(`<a href="#" class="btn remove-tab btn-delete-field">Remove Tab</a>`);

        let $containerSelect = $container.find('.template-selector');

        if(templateName) {
            loadWidgetTemplates($containerSelect, 'tabs', templateName);
        }
        else {
            loadWidgetTemplates($containerSelect, 'tabs', templateName);
        }

        $tabsConfigurationContainer.append($container);   
        
        $(tabConfigurationContainerClass).on('click', removeTabBtnClass, removeTab);        
    }

    function removeTab(ev) {
        let $currElement = $(ev.target);    

        logger.log($currElement);
        
        $currElement.parent().remove();
    }

    function init() {             
        let $tabsConfigurationContainer = $(tabsConfigurationContainerClass);
        
        $(tabsConfigurationContainerClass).on('click', addTabBtnClass, addTab);
        
        $(tabConfigurationContainerClass).on('click', removeTabBtnClass, removeTab);
    }


    function save() {
        let $tabConfigurationContainer = $(tabConfigurationContainerClass);
        let tabsLength = $tabConfigurationContainer.length;

        let model = [];

        for(let i = 0; i < tabsLength; i++) {
            let $currentTabConfigurationContainer = $($tabConfigurationContainer[i]);

            let tabName = $currentTabConfigurationContainer.find(tabNameClass).val();
            let templateName = $currentTabConfigurationContainer.find(selectTemplateClass).val();

            logger.log(tabName);
            logger.log(templateName);

            let currModel = {
                tabName: tabName,
                templateName: templateName
            };

            model.push(currModel);
        }

        return JSON.stringify(model);        
    }

    function edit(element) {
        logger.log(element);
        let model = JSON.parse(element);
        logger.log(model);

        for(let i = 0; i < model.length; i++) {
            addTab(model[i].tabName, model[i].templateName);
        }
    }

    function validate() {
        let $tabConfigurationContainer = $(tabConfigurationContainerClass);
        logger.log($tabConfigurationContainer);
        let result = { isValid: true };

        let tabsLength = $tabConfigurationContainer.length;

        if(tabsLength < 1) {          
            result.isValid = false;
            result.message = 'Can not save without created tabs.';
        }

        if(tabsLength > 10) {          
            result.isValid = false;
            result.message = 'Can not have more than 10 tabs.';
        }

        for(let i = 0; i < tabsLength; i++) {
            let $currentTabConfigurationContainer = $($tabConfigurationContainer[i]);

            let tabName = $currentTabConfigurationContainer.find(tabNameClass).val();
            let templateName = $currentTabConfigurationContainer.find(selectTemplateClass).val();

            if(tabName.length < 3) {
                result.isValid = false;
                result.message = 'Tab name can not be empty.';                
            }

            if(templateName.length < 2) {
                result.isValid = false;
                result.message = 'Template name can not be empty.';                
            }
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