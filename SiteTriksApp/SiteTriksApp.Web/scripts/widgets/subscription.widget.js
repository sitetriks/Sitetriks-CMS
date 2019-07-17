import { Data } from '../common/data';
import { Multiselect } from '../common/multiselect-setup.js';


export function subscription() {

    function fillMarketingGroupsSelect(selected) {
        let $multiselect = $('#multiselect-groups');
        Data.getJson({ url: '/sitetriks/marketingEmailGroups/GetEmailGroups' }).then(function (res) {
            console.log(res);
            if (res.success) {
                for (let i = 0; i < res.groupNames.length; i++) {
                    let groupId = res.groupIds[i];
                    let groupName = res.groupNames[i];

                    if (selected.indexOf(groupId) !== -1) {
                        $(`<option value="${groupId}" selected>${groupName}</option>`).appendTo($multiselect);
                    } else {
                        $(`<option value="${groupId}">${groupName}</option>`).appendTo($multiselect);
                    }
                }
            }

            Multiselect.Setup($multiselect.attr('id'), function (option, checked, select) {          
            });
        })
    }


    return {
        add: function () {
            fillMarketingGroupsSelect([]);
        },
        edit: function (element) {
            let model;

            try {
                model = JSON.parse(element);
            } catch (e) {}

            fillMarketingGroupsSelect(model);
        },
        save: function () {
            let val = $('#multiselect-groups').val();
            console.log('val', val);       
            

            return JSON.stringify(val);
        }
    };
}
