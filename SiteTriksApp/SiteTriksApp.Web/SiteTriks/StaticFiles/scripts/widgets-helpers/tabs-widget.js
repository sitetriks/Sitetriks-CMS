
export function tabsWidget() {
    let tabsContainerClassName = '.st-tabs-widget';    
    let $tabsWidgetContainer = $(tabsContainerClassName);

    if($tabsWidgetContainer.length < 1) {
        return;
    }

    $tabsWidgetContainer.on('click', '.st-tabs a', initTabs)

    function initTabs(e) {
        e.preventDefault();
        $(e.target).tab('show');
    }   
}