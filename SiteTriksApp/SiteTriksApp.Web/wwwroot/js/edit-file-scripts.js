
(function () {
    let $advancedFeatures = $('.advanced-features');
    let $advancedButton = $advancedFeatures.find('.toggle-button');
    let $featuresList = $advancedFeatures.find('.features-list');
    let $arrows = $advancedFeatures.find('.arrow');

    $advancedButton.on('click', function () {
        $arrows.toggle();
        $featuresList.toggle();
    });
})();