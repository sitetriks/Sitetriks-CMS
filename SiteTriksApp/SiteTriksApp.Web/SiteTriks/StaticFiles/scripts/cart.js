﻿var Cart = (function () {
    var orders = [];
    var key = "orders";
    var drawFunction, cleanFunction;

    function loadOrders() {
        if (sessionStorage.getItem(key) != null) {
            orders = JSON.parse(sessionStorage.getItem(key));
        }
    }

    function setCallbacks(draw, clean) {
        drawFunction = draw;
        cleanFunction = clean;
    }

    function createOrder(itemId, title) {
        orders.push({
            itemId: itemId,
            title: title
        });

        sessionStorage.setItem(key, JSON.stringify(orders));

        if (typeof (drawFunction) == "function") {
            drawFunction(itemId, title);
        }
    }

    function getOrders() {
        return orders;
    }

    function removeOrders() {
        orders = [];
        sessionStorage.removeItem(key);
        cleanFunction();
    }

    function drawAll() {
        if (typeof (drawFunction) == "function") {
            for (let i = 0; i < orders.length; i++) {
                drawFunction(orders[i].itemId, orders[i].title);
            }
        }
    }

    function pay() {

        if (orders.length <= 0) {
            return;
        }

        let paymentsInfo = [];

        for (let i = 0; i < orders.length; i++) {
            paymentsInfo.push({
                ItemId: orders[i].itemId
            });
        }

        let paymentType = $("#payment-method").val();

        let body = {
            PaymentsInfo: paymentsInfo,
            Type: paymentType
        }

        Data.postJson({ url: '/widget/marketwidget/Pay', data: body }).then(function (data) {
            if (data.success) {
                let url = data.url;
                let ids = data.info;
                let type = data.type;
                console.log(url);

                let $form = $("#pay-form");
                $form.attr("action", url);

                removeOrders();

                $("#itemsIds").val(ids);
                $("#pay-form").submit();
            }
        });
    }

    return {
        loadOrders: loadOrders,
        createOrder: createOrder,
        getOrders: getOrders,
        removeOrders: removeOrders,
        setCallbacks: setCallbacks,
        drawAll: drawAll,
        pay: pay
    };
}());