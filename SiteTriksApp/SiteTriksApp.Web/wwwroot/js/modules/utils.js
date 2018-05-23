var Utils = (function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    function guid() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    function isGuid(stringToTest) {
        if (stringToTest[0] === "{") {
            stringToTest = stringToTest.substring(1, stringToTest.length - 1);
        }
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(stringToTest);
    }

    function addEditor(id, width, height) {
        if (!id) {
            console.warn('Id for the text editor must be specified!');

            return;
        }
        width = width || 600;
        height = height || 300;
        if (id[0] === '#') {
            textEditor.remove(id.substring(1));
        } else {
            textEditor.remove(id);
        }

        textEditor.init(id, width, height);
    }

    return {
        s4,
        guid,
        isGuid,
        addEditor
    }
}());