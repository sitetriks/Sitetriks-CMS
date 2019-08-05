import { FileHandler } from '../modules/file-handler.js';

export function presentation({ mediator, logger }) {
    let fileHandler;
    function clearFileHandler() {
        if (fileHandler && fileHandler.dispose) {
            fileHandler.dispose();
            fileHandler = undefined;
            mediator.off('selectedFilesChanged', 'presentationChange', 'PresentationWidget');
        }
    }

    let selectedPresentationId;
    function initFileHandler() {
        clearFileHandler();
        fileHandler = FileHandler($('.file-handler-wrapper'), ['Select'], '', mediator, logger, false, 1);
        mediator.on('selectedFilesChanged', function (data) {
            if (data.length) {
                selectedPresentationId = data[0];
            } else {
                selectedPresentationId = undefined;
            }
        }, 'presentationChange', 'PresentationWidget');
    }

    return {
        add: function () { initFileHandler(); },
        edit: function (element) {
            let config = JSON.parse(element);
            $('#presentation-type').val(config.type);
            initFileHandler();

            selectedPresentationId = config.id;
            let info = {};
            info[selectedPresentationId] = { selectedLinkId: selectedPresentationId };
            setTimeout(function () {
                mediator.dispatch('populatedSelected', info);
            }, 500);
        },
        save: function () {
            let type = $('#presentation-type').val();

			return JSON.stringify({ type, id: selectedPresentationId });
        },
        validate: function () {
            if (!selectedPresentationId) {
                return { isValid: false, message: 'Must select presentation first!' };
            }

            return { isValid: true };
        }
    };
}
