var DeleteConfirmation = {};

DeleteConfirmation.Load = function (onConfirmClick) {
    $('#delete-confirmation').modal('show');
    $('#confirm-delete').on('click', function () {
        $('#delete-confirmation').modal('hide');
    });
    $('#confirm-delete').on('click', onConfirmClick);
};