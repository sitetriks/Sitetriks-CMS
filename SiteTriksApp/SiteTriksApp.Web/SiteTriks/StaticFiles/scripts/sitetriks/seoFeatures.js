import { Data } from '../common/data.js';

let SeoFeatures = (function () {

    //Main
    let seoFeaturesContainerClass = '.seoFeaturesContainer';
    let seoMainInputClass = '.seo-main-input';

    //OpenGraph
    let openGraphContainerClass = '.open-graph-container';
    let openGraphInputClass = '.open-graph-input';


    //Twitter
    let twitterContainerClass = '.twitter-container';
    let twitterInputClass = '.twitter-input';
    let cardTypeSelector = 'input[data-for="type"]';
    let siteSelector = 'input[data-for="site"]';
    let creatorSelector = 'input[data-for="creator"]';

    //Model
    let model = {};
    let postUrl = '/sitetriks/seoFeatures/create';
    let getUrl = '/sitetriks/seoFeatures/getByParentId?parentId=';
    let editUrl = '/sitetriks/seoFeatures/edit';



    function init(parentId) {
        Data.getJson({ url: getUrl + parentId }).then(function (res) {
            console.log('initRes', res);
            if (res.success) {
                $(seoFeaturesContainerClass).find(`input[data-for="title"]`).val(res.seoFeature.title);
                $(seoFeaturesContainerClass).find(`input[data-for="metadata"]`).val(res.seoFeature.metadata);
                $(seoFeaturesContainerClass).find(`#seo-words`).val(res.seoFeature.seoKeywords);
                $(seoFeaturesContainerClass).find(`input[data-for="canonicalUrl"]`).val(res.seoFeature.canonicalUrl);

                $(openGraphContainerClass).find(`input[data-for="title"]`).val(res.seoFeature.openGraphTitle);
                $(openGraphContainerClass).find(`textarea[data-for="description"]`).text(res.seoFeature.openGraphDescription);
                $(openGraphContainerClass).find(`input[data-for="image"]`).val(res.seoFeature.openGraphImage);

                $(twitterContainerClass).find(cardTypeSelector).val(res.seoFeature.twitterCard);
                $(twitterContainerClass).find(siteSelector).val(res.seoFeature.twitterCardSite);
                $(twitterContainerClass).find(creatorSelector).val(res.seoFeature.twitterCardCreator);
            }
        });
    }

    function getModel(parentId) {
        let title = $(seoFeaturesContainerClass).find(`input[data-for="title"]`).val();
        let metadata = $(seoFeaturesContainerClass).find(`input[data-for="metadata"]`).val();
        let SEOKeywords = $(seoFeaturesContainerClass).find(`#seo-words`).val();
        let canonicalUrl = $(seoFeaturesContainerClass).find(`input[data-for="canonicalUrl"]`).val();


        let openGraphTitle = $(openGraphContainerClass).find(`input[data-for="title"]`).val();
        let openGraphDescription = $(openGraphContainerClass).find(`textarea[data-for="description"]`).val();
        let openGraphImage = $(openGraphContainerClass).find(`input[data-for="image"]`).val();

        let twitterCard = $(twitterContainerClass).find(cardTypeSelector).val();
        let twitterCardSite = $(twitterContainerClass).find(siteSelector).val();
        let twitterCardCreator = $(twitterContainerClass).find(creatorSelector).val();

        let model = {
            parentId,
            title,
            SEOKeywords,
            metadata,
            canonicalUrl,
            openGraphTitle,
            openGraphDescription,
            openGraphImage,
            twitterCard,
            twitterCardSite,
            twitterCardCreator
        };

        console.log(model);

        return model;
    }

    function edit(parentId) {
        let model = getModel(parentId);

        return Data.postJson({ url: editUrl, data: model });
    }



    function save(parentId) {
        let model = getModel(parentId)

        return Data.postJson({ url: postUrl, data: model });
    }

    return {
        save,
        init,
        edit
    }

})();

export { SeoFeatures };