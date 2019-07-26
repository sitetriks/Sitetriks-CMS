import { Data } from '../common/data.js';
import { Validator } from '../common/validator.js'
import { Notifier } from '../common/notifier.js'

let calculate = (function () {

    function npv() {
        let container = '.npv-container';
        let selector = container + ' .years-conteiner'
        let years = $(container + ` .years-value`);

        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let kvp of formData.entries()) {
                if (kvp === 'null') {
                    flag = false;
                }
            }

            let cashFlow = [];
            for (let i = 0; i < years.length; i++) {
                let year = $(years[i]);
                year = validateNumber(year);

                if (year != null) {
                    cashFlow.push(year);
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateNPV', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result)
                    } else {
                        Notifier.createAlert({ containerId: '#npv-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                })

            }
        });

        addField(container, selector);
        removeField(container);
    }

    function irr() {
        let container = '.irr-container'
        let selector = container + ' .years-conteiner'
        let years = $(container + ` .years-value`);

        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let kvp of formData.entries()) {
                console.log(kvp);
                if (kvp === 'null') {
                    flag = false;
                }
            }

            let cashFlow = [];
            for (let i = 0; i < years.length; i++) {
                let year = $(years[i]);
                year = validateNumber(year);

                if (year != null) {
                    cashFlow.push(year);
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateIRR', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result)

                    } else {
                        Notifier.createAlert({ containerId: '#irr-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }

        });

        addField(container, selector);
        removeField(container);
    }

    function roi() {
        let container = '.roi-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateROI', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result)
                    } else {
                        Notifier.createAlert({ containerId: '#roi-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            };
        });
    }

    function apr() {
        let container = '.apr-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateAPR', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result);
                        $(container + ' .monthly').text(res.monthly);
                        $(container + ' .total').text(res.total);
                        $(container + ' .change').text(res.change);

                    } else {
                        Notifier.createAlert({ containerId: '#apr-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }
        });
    }

    function ci() {
        let container = '.ci-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input', 'select']);

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            let compound = $(container + ' .compound').val();
            formData.append('CompoundValue', compound);

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateCI', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result);

                    } else {
                        Notifier.createAlert({ containerId: '#ci-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });

            }

        });
    }

    function wacc() {
        let container = '.wacc-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateWACC', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result);

                    } else {
                        Notifier.createAlert({ containerId: '#wacc-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }
        });
    }

    function by() {
        let container = '.by-container';

        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();

            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateBY', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result);
                        $(container + ' .current').text(res.current);
                    } else {
                        Notifier.createAlert({ containerId: '#by-alert', message: res.message, status: 'danger', seconds: '5' });
                    }

                });
            }
        })

    }

    function dcf() {
        let container = '.dcf-container';

        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();

            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {

                if (formData.get('DiscountRate') === formData.get('GrowthRate')) {
                    return Notifier.createAlert({ containerId: '#dcf-alert', message: 'Discount Rate and Growth Rate cannot be the same value', status: 'danger', seconds: '5' });
                }

                if (formData.get('DiscountRate') === formData.get('TerminalGrowth')) {
                    return Notifier.createAlert({ containerId: '#dcf-alert', message: 'Discount Rate and Terminal Rate cannot be the same value', status: 'danger', seconds: '5' });
                }

                Data.postForm({ url: 'sitetriks/calculators/CalculateDCF', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .intrinsic-value').text(res.result);
                        $(container + ' .growth-value').text(res.growth);
                        $(container + ' .terminal-value').text(res.terminal);
                    } else {
                        Notifier.createAlert({ containerId: '#dcf-alert', message: res.message, status: 'danger', seconds: '5' });
                    }

                });
            }
        });

    }

    function si() {
        let container = '.si-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();

            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);


            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateSI', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result);
                    } else {
                        Notifier.createAlert({ containerId: '#si-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }
        });
    }

    function pv() {
        let container = '.pv-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();

            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);


            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculatePV', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result);
                        $(container + ' .interest').text(res.interest);
                    } else {
                        Notifier.createAlert({ containerId: '#pv-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }
        });
    }

    function al() {
        let container = '.al-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();

            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);


            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateAL', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .result').text(res.result);
                        $(container + ' .total').text(res.total);
                        $(container + ' .total-interest').text(res.interest);
                    } else {
                        Notifier.createAlert({ containerId: '#al-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }
        });
    }

    function ry() {
        let container = '.ry-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input', 'select']);
            let frequency = $(container + ' .frequency').val();

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }


            formData.append('Frequency', frequency)
            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateRY', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .gross').text(res.gross);
                        $(container + ' .net').text(res.net);

                    } else {
                        Notifier.createAlert({ containerId: '#ry-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                })
            }

        });
    }

    function ser() {
        let container = '.ser-container';
        let selector = container + ' .list-container'

        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();

            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);


            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }


            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateSER', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .expected-return-one').text(res.firstExpected);
                        $(container + ' .expected-return-two').text(res.secondExpected);
                        $(container + ' .deviation-one').text(res.firstDeviation);
                        $(container + ' .deviation-two').text(res.secondDeviation);
                    }
                    else {
                        Notifier.createAlert({ containerId: '#ser-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                })
            }

        });

        addField(container, selector);
        removeField(container);
    }

    function lac() {
        let container = '.lac-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);
            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateLAC', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .total-interest').text(res.principal);
                        $(container + ' .total-amount').text(res.interest);
                        $(container + ' .payable-amount').text(res.payableAmount);
                    } else {
                        Notifier.createAlert({ containerId: '#lac-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }

        });
    }

    function autoLoan() {
        let container = '.auto-loan-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);
            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateAutoLoan', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .monthly-payment').text(res.monthlyPayment);
                        $(container + ' .loan-amount').text(res.loanAmount);
                        $(container + ' .payable-amount').text(res.payableAmount);
                        $(container + ' .total-interest').text(res.totalInterest);
                    } else {
                        Notifier.createAlert({ containerId: '#auto-loan-alert', message: res.message, status: 'danger', seconds: '5' });
                    }

                });
            }

        })
    }

    function interestOnly() {
        let container = '.ioc-container';
        $(container).on('click', '.submit-btn', function (e) {
            e.preventDefault();
            let flag = true;
            let formData = getDataFromInputFields(container, ['input']);

            for (let value of formData.values()) {
                if (value === 'null') {
                    flag = false;
                }
            }

            if (flag) {
                Data.postForm({ url: 'sitetriks/calculators/CalculateInterestOnly', formData: formData }).then(function (res) {
                    if (res.success) {
                        $(container + ' .interest-only-payment').text(res.interestOnlyPayment);
                        $(container + ' .principal-interest-payment').text(res.principalAndInterestPayment);
                        $(container + ' .payable-amount').text(res.payableAmount);
                        $(container + ' .total-interest').text(res.totalInterest);
                    } else {
                        Notifier.createAlert({ containerId: '#io-alert', message: res.message, status: 'danger', seconds: '5' });
                    }
                });
            }

        })
    }

    function getDataFromInputFields(container, tags) {
        let formData = new FormData();
        for (let tag of tags) {
            $(`div${container} form#form-submit ${tag}`).each((index, field) => {
                if (field.name !== '__RequestVerificationToken' && field.name !== 'Compound' && field.name !== 'RentFrequency') {
                    if (validateNumber($(field))) {
                        formData.append(field.name, field.value);
                    } else {
                        formData.append(field.name, null);
                    }
                }
            });
        }

        return formData;
    }

    function validateNumber($class) {
        if (Validator.validate($class, 'Must be a number value', function (val) { return Validator.isNumber(val) })) {
            return true;
        } else {
            return false;
        }
        return value;
    }

    function addField(container, selector) {

        $(container).on('click', '.add-year', function (e) {
            e.preventDefault();

            let length = $(selector + ' .row').length;
            let row;
            switch (container) {
                case '.npv-container':
                    row = createYearRow(length);
                    row.appendTo($(selector));
                    break;
                case '.irr-container':
                    row = createYearRow(length);
                    $(selector).append(row);
                    break;
                case '.ser-container':
                    row = createListRow(length);
                    $(selector).append(row);
                    break;
            }
        });
    }

    function removeField(container) {

        $(container).on('click', '.remove-year', function (e) {
            e.preventDefault();

            switch (container) {
                case '.npv-container':
                case '.irr-container':

                    $(e.target).closest('.row').remove();
                    let labels = $(container + ' .years-conteiner label');

                    for (var i = 0; i < labels.length; i++) {
                        labels[i].innerHTML = `Year ${i + 1}`;
                    }

                    break;
                case '.ser-container':

                    $(e.target).closest('.row').remove();
                    labels = $(container + ' .list-container label');

                    for (var i = 0; i < labels.length; i++) {
                        labels[i].innerHTML = `${i + 1}`;
                    }
                    break;
            }
        });
    }

    function createListRow(length) {
        let row = $('<div/>', { 'class': 'row form-group' });

        $('<label>', { class: 'col-1 state', text: `${length + 1}` }).appendTo(row);

        let fisrstDiv = $('<div/>', { 'class': 'col-2' }).appendTo(row);
        $('<input/>', { class: `form-control probability`, 'data-val': 'true', 'value': 0, name: `Probability[${length}]` }).appendTo(fisrstDiv);
        $('<span/>', { class: 'text-danger field-validation-valid' }).appendTo(fisrstDiv);

        $('<span/>', { class: 'col-1' }).appendTo(row);

        let secondDiv = $('<div/>', { 'class': 'col-2' }).appendTo(row);
        $('<input/>', { class: `form-control first-stock`, 'data-val': 'true', 'value': 0, name: `FirstStock[${length}]` }).appendTo(secondDiv);
        $('<span/>', { class: 'text-danger field-validation-valid' }).appendTo(secondDiv);

        $('<span/>', { class: 'col-1' }).appendTo(row);

        let thirdDiv = $('<div/>', { 'class': 'col-2' }).appendTo(row);
        $('<input/>', { class: `form-control second-stock`, 'data-val': 'true', 'value': 0, name: `SecondStock[${length}]` }).appendTo(thirdDiv);
        $('<span/>', { class: 'text-danger field-validation-valid' }).appendTo(thirdDiv);

        $('<span/>', { class: 'col-1' }).appendTo(row);

        let btnDiv = $('<div/>', { 'class': 'col-2' }).appendTo(row);
        $('<button/>', { class: 'btn remove-year', type: 'button', text: 'Remove' }).appendTo(btnDiv);

        return row
    }

    function createYearRow(length) {

        let row = $('<div/>', { "class": "row years form-group" })

        $('<label/>', { class: 'control-label year col-2', text: `Year ${length + 1}` }).appendTo(row);
        $('<input/>', { class: `form-control years-value col-8`, 'data-val': 'true', 'value': 0, name: `CashFlow[${length}]` }).appendTo(row);
        $('<span/>', { class: 'text-danger field-validation-valid' }).appendTo(row);
        $('<button/>', { class: 'btn remove-year col-1', type: 'button', text: 'Remove' }).appendTo(row);

        return row;
    }

    return {
        npv,
        irr,
        roi,
        apr,
        ci,
        wacc,
        dcf,
        si,
        pv,
        by,
        al,
        ry,
        ser,
        lac,
        autoLoan,
        interestOnly
    }

})();

window.calculate = calculate;
