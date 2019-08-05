var DateConversion = (function () {
    const dateFormatOptions = {
        month: 'numeric',
        year: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    function convertUtcToLocal(utcString, formatOptions) {
        return new Date(utcString).toLocaleString('en', formatOptions || dateFormatOptions);
	}

	return {
		convertUtcToLocal
	};
})();

export { DateConversion };
