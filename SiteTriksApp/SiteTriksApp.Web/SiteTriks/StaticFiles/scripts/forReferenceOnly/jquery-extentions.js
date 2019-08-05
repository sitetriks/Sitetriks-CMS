function eikValidation($eikInput) {
    $eikInput.keyup(() => {
        let value = $eikInput.val();

        value = removeAllNonNumber(value);

        if (value.length > 2) {
            value = insert(value, 2, '-');
            value = value.slice(0, 10);
        }

        $eikInput.val(value);
    })

    function removeAllNonNumber(text) {
        text = text.replace(/\D/g, '');

        return text;
    }

    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
}