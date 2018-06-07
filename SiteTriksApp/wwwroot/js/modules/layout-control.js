﻿'use strict';

/*===============================================================================================
 * --- Layout.js ---
 * 
 * -v0.1: core functionality
 * -v0.2: drag and drop functionality
 * -v0.2.1: clean up
 * -v0.2.2: removed html5 drag and drop
 * -v0.3: jquery ui drag and drop added
 * -v0.4: functionality for column properties added
 * -v0.5: select and edit column properties
 * -v0.5.1: select and edit row properties
 * -v0.5.2: select row changes
 * -v0.6: handlebars templates
 * -v0.7: offset functionality and some column options validations
 * -v0.8: select column from within selected row and columns count
 * -v0.9: multiselect columns, shift and ctrl keys modifiers
 * -v0.10: multiselect for resolutions
 * -v0.10.1: deleted placeholders
 * 
 *===============================================================================================*/

// Example initialization
//let l = [
//    { columns: [{ resolutions: { default: { size: 1 }, 767: { size: 3 }, 991: { size: 2 }, 1440: { size: 1 } }, properties: { placeholder: '' } }, { resolutions: { default: { size: 3 } } }, { resolutions: { default: { size: 5 } } }] },
//    { columns: [{ resolutions: { default: { size: 4 } } }] },
//    { columns: [{ resolutions: { default: { size: 1 } } }, { resolutions: { default: { size: 1 } } }, { resolutions: { default: { size: 1 } } }] }
//];

//let $wrapper2 = $('#w2');
//let $resolutions = $('#resolutions');
//initLayout($wrapper2, l, $resolutions);
//---------------------------------------------------------------------------------

function initLayout($wrapper, l, $resolutions, $options, resolutionValidation) {
    if (!resolutionValidation || {}.toString.call(resolutionValidation) !== '[object Function]') {
        console.error('no resolutuion validation function was specified');
        resolutionValidation = function () { return true };
    }

    const defaultResolution = 'xs';
    let templates = {};
    let _resolutions = ['xs', 'sm', 'md', 'lg'];

    l.resolutions = ['xs', 'sm', 'md', 'lg'];
    l.deletedPlaceholders = [];

    loadTemplates(templates).then(function (res) {
        if (res.indexOf(false) >= 0) {
            throw 'Templates were not loaded successfuly!';
        }

        buildLayout($wrapper, l);
    })


    function loadTemplates(templates) {
        let templateNames = ['layout-row-options', 'layout-column-options', 'layout-row-control', 'layout-column-control', 'layout-separator', 'layout-column', 'layout-row'];
        let promises = [];

        for (let i = 0; i < templateNames.length; i += 1) {
            promises.push(Data.getJson({ url: `/templates/layout/${templateNames[i]}.html` }).then(function (res) {
                let template = Handlebars.compile(res);
                templates[templateNames[i]] = template;

                return true;
            }, function (res) { return false }));
        }

        return Promise.all(promises);
    }

    //-----------------------------------------------------------------------------
    // DOM events registrations

    $wrapper.on('click', '.add-row', function (ev) {
        let $row = appendRow($wrapper.find('.rows-holder'), l.length);

        l.push({ row: $row, columns: [] });
        buildRow($row, []);
    });

    $wrapper.on('click', '.add-column', function (ev) {
        let $target = $(this);
        let rowIndex = $target.attr('data-position');
        let col = { resolutions: {}, properties: {} };
        col.properties.placeholder = Utils.guid();

        for (let i = 0; i < _resolutions.length; i += 1) {
            col.resolutions[_resolutions[i]] = { size: 1 };
        }

        l[rowIndex].columns.push(col);
        buildRow(l[rowIndex].row, l[rowIndex].columns);
    });

    $wrapper.on('click', '.remove-column', function (ev) {
        let $target = $(this);
        let rowIndex = $target.attr('data-position');

        let removed = l[rowIndex].columns.pop();
        l.deletedPlaceholders.push(removed.properties.placeholder);
        buildRow(l[rowIndex].row, l[rowIndex].columns);
    });

    $resolutions.on('click', function () {
        if (resolutionValidation()) {
            this.classList.toggle('selected');
            let type = $(this).attr('data-type');
            let index = l.resolutions.indexOf(type);

            if (index === -1) {
                l.resolutions.push(type);
            } else {
                l.resolutions.splice(index, 1);
            }

            buildLayout($wrapper, l);
        }
    });

    $wrapper.on('click', '.middle-col, .start-col, .end-col, .single-col', function (ev) {
        let $trigger = $(this);
        let $row = $trigger.parents('.row-layout')

        let rowIndex = +$row.attr('data-position');
        let colIndex = +$trigger.attr('data-index');

        if (ev.shiftKey) {
            if (l.selected.length === 0 || l.selected[l.selected.length - 1].row !== rowIndex) {
                clearSelected();
                l.selected.push({ row: rowIndex, col: colIndex });
                selectColumn($trigger, 'both');
                l.lastSelected = { row: rowIndex, col: colIndex };
            } else {
                let last = l.lastSelected;
                clearSelected();
                for (let i = Math.min(last.col, colIndex); i <= Math.max(last.col, colIndex); i += 1) {
                    l.selected.push({ row: rowIndex, col: i });
                    selectColumn($row.find('.col-layout[data-index="' + i + '"]'), 'both');
                }
            }
        } else
            if (ev.ctrlKey) {
                let index = l.selected.findIndex(s => s.row === rowIndex && s.col === colIndex);

                if (index > -1) {
                    l.selected.splice(index, 1);
                    selectColumn($trigger, 'both', true);
                } else {
                    l.selected.push({ row: rowIndex, col: colIndex });
                    selectColumn($trigger, 'both');
                }

                l.lastSelected = { row: rowIndex, col: colIndex };
            } else {
                clearSelected();
                l.selected = [{ row: rowIndex, col: colIndex }];
                selectColumn($trigger, 'both');
                l.lastSelected = { row: rowIndex, col: colIndex };
            }

        selectElements();
    });

    function clearSelected() {
        l.selected = [];
        $wrapper.find('.select-row.glyphicon-check').removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        $wrapper.find('.selected').each(function (_, element) {
            $(element).removeClass('selected');
        });
    }

    function selectColumn($element, direction, unselect) {
        if (($element.hasClass('selected') && !unselect) || (!$element.hasClass('selected') && unselect)) {
            return;
        }

        if (unselect) {
            $element.removeClass('selected');
        } else {
            $element.addClass('selected');
        }

        if ($element.hasClass('middle-col') || $element.hasClass('middle-separator') || $element.hasClass('start-separator')) {
            switch (direction) {
                case 'both':
                    selectColumn($element.next(), 'right', unselect);
                    selectColumn($element.prev(), 'left', unselect);
                    break;

                case 'left':
                    selectColumn($element.prev(), 'left', unselect);
                    break;

                case 'right':
                    selectColumn($element.next(), 'right', unselect);
                    break;

                default:
                    break;
            }
        } else if ($element.hasClass('start-col')) {
            selectColumn($element.next(), 'right', unselect);
        } else if ($element.hasClass('end-col')) {
            selectColumn($element.prev(), 'left', unselect);
        }
    }

    function selectElements() {
        $options.html('');
        const multiple = 'multiple';

        if (!l.selected || !l.selected.length) {
            console.warn('there are no selected elements')
            return;
        }

        let selectedColumn = l[l.selected[0].row].columns[l.selected[0].col];
        let size = selectedColumn.resolutions[l.resolutions[0]].size;
        let offset = selectedColumn.resolutions[l.resolutions[0]].offset || 0;
        let cssClass = selectedColumn.properties ? selectedColumn.properties.cssClass : '';

        for (let i = 1; i < l.resolutions.length; i += 1) {
            let currentSize = selectedColumn.resolutions[l.resolutions[i]].size;
            let currentOffset = selectedColumn.resolutions[l.resolutions[i]].offset || 0;

            if (size !== multiple && size !== currentSize) {
                size = multiple;
            }

            if (offset !== multiple && offset !== currentOffset) {
                offset = multiple;
            }
        }

        if (l.selected.length > 0) {
            for (let i = 1; i < l.selected.length; i += 1) {
                let selectedColumn = l[l.selected[i].row].columns[l.selected[i].col];

                for (let i = 0; i < l.resolutions.length; i += 1) {
                    let currentSize = selectedColumn.resolutions[l.resolutions[i]].size;
                    let currentOffset = selectedColumn.resolutions[l.resolutions[i]].offset || 0;

                    if (size !== multiple && size !== currentSize) {
                        size = multiple;
                    }

                    if (offset !== multiple && offset !== currentOffset) {
                        offset = multiple;
                    }
                }

                let currentClass = selectedColumn.properties ? selectedColumn.properties.cssClass : '';
                if (cssClass !== multiple && cssClass !== currentClass) {
                    cssClass = multiple;
                }
            }
        }

        let template = templates['layout-column-options'];
        let html = template({
            selected: JSON.stringify(l.selected),
            resolution: JSON.stringify(l.resolutions),
            size: size,
            offset: offset,
            cssClass: cssClass
        });

        $options.append(html);
    }

    $options.on('click', '.update-column', function (ev) {
        const multiple = 'multiple';
        let $target = $(this);
        let $notifier = $options.find('.validation-message');

        let size = $options.find('.input-size').val();
        let offset = $options.find('.input-offset').val();
        let cssClass = $options.find('.input-cssClass').val();

        if (size !== multiple && (size > 12 || size < 1)) {
            $notifier.text('size must be between 1 and 12!');
            return;
        }

        if (offset != multiple) {
            if (offset && (offset < 0 || offset > 11)) {
                $notifier.text('offset must be empty or between 0 and 11!');
                return;
            }

            if (offset && +offset + +size > 12) {
                $notifier.text('offset + size must be between 1 and 12!');
                return;
            }
        }

        for (let i = 0; i < l.selected.length; i += 1) {
            let rowIndex = l.selected[i].row;
            let colIndex = l.selected[i].col;

            for (let i = 0; i < l.resolutions.length; i += 1) {

                let updateSize = size === multiple ? l[rowIndex].columns[colIndex].resolutions[l.resolutions[i]].size : size;
                let updateOffset = offset === multiple ? l[rowIndex].columns[colIndex].resolutions[l.resolutions[i]].offset : offset;

                if (!l[rowIndex].columns[colIndex][l.resolutions[i]]) {
                    l[rowIndex].columns[colIndex].resolutions[l.resolutions[i]] = { size: +updateSize, offset: +updateOffset };
                } else {
                    l[rowIndex].columns[colIndex].resolutions[l.resolutions[i]].size = +updateSize;
                    l[rowIndex].columns[colIndex].resolutions[l.resolutions[i]].offset = +updateOffset;
                }
            }

            let updateCssClass = cssClass === multiple ? (l[rowIndex].columns[colIndex].properties ? l[rowIndex].columns[colIndex].properties.cssClass : '') : cssClass;
            if (cssClass) {
                if (l[rowIndex].columns[colIndex].properties) {
                    l[rowIndex].columns[colIndex].properties.cssClass = updateCssClass;
                } else {
                    l[rowIndex].columns[colIndex].properties = { cssClass: updateCssClass };
                }
            }
        }

        buildLayout($wrapper, l);
    });

    // state 0 for rows, 1 for colums
    function checkForContent(state, rowIndex) {
        if (state == 1) {
            for (let i = 0; i < l.selected.length; i += 1) {
                let removed = l[l.selected[i].row].columns[l.selected[i].col];

                if (pageContent.find(e => e.placeholder == removed.properties.placeholder)) {
                    let $modal = $('#layout-delete-confirmation');
                    $modal.modal('show');
                    $modal.addClass("columns-deletion");
                    return true;
                }
            }

            return false;
        }
        else {
            let removed = l[rowIndex];

            for (let i = 0; i < removed.columns.length; i += 1) {
                if (pageContent.find(e => e.placeholder == removed.columns[i].properties.placeholder)) {
                    let $modal = $('#layout-delete-confirmation');
                    $modal.modal('show');
                    $modal.addClass("rows-deletion");
                    $modal.attr("data-rowindex", rowIndex);
                    return true;
                }
            }

            return false;
        }
    }

    function deleteColums() {
        l.selected.sort((a, b) => { return (a.col > b.col) ? -1 : ((b.col > a.col) ? 1 : 0); });

        for (let i = 0; i < l.selected.length; i += 1) {
            let removed = l[l.selected[i].row].columns.splice(l.selected[i].col, 1)[0];

            l.deletedPlaceholders.push(removed.properties.placeholder);
        }

        buildLayout($wrapper, l);
    }

    function deleteRows(rowIndex) {

        let removed = l.splice(rowIndex, 1)[0];
        for (let i = 0; i < removed.columns.length; i += 1) {
            l.deletedPlaceholders.push(removed.columns[i].properties.placeholder);
        }

        buildLayout($wrapper, l);
    }

    $("#delete-layout-content").on("click", function () {
        let $modal = $('#layout-delete-confirmation');
        if ($modal.hasClass("columns-deletion")) {
            deleteColums();
        }
        else if ($modal.hasClass("rows-deletion")) {
            let rowIndex = $modal.attr("data-rowindex");
            deleteRows(rowIndex);
        }
    });

    $options.on('click', '.remove-column', function (ev) {
        let $target = $(this);
        let hasContent = checkForContent(1);

        if (!hasContent) {
            deleteColums();
        }
    });

    $options.on('click', '.remove-row', function (ev) {
        let $target = $(this);
        let rowIndex = $target.attr('data-rowIndex');
        let hasContent = checkForContent(0, rowIndex);

        if (!hasContent) {
            deleteRows(rowIndex);
        }
    });

    $wrapper.on('click', '.select-row', function (ev) {
        let $target = $(this);

        if ($target.hasClass('glyphicon-check')) {
            return;
        }

        clearSelected();

        $target.removeClass('glyphicon-unchecked').addClass('glyphicon-check');

        $target.parents('.row-holder').addClass('selected');

        let rowIndex = $target.parents('.row-control').attr('data-position');
        $options.html('');

        let selectedRow = l[rowIndex];
        let resolution = l.resolutions[0]
        let cols = selectedRow.columns.map(c => c.resolutions[resolution]);

        let template = templates['layout-row-options'];
        let html = template({
            rowIndex,
            resolution: JSON.stringify(l.resolutions),
            tag: selectedRow.tag,
            cssClass: selectedRow.cssClass,
            columns: cols
        });

        $options.append(html);
    });

    $options.on('click', '.update-row', function (ev) {
        let $target = $(this);

        let rowIndex = $target.attr('data-rowIndex');

        let tag = $options.find('.select-tag').val();
        let cssClass = $options.find('.input-cssClass').val();

        l[rowIndex].tag = tag;
        l[rowIndex].cssClass = cssClass;

        buildRow(l[rowIndex].row, l[rowIndex].columns);
    });

    // TODO: optimize with select column
    $options.on('click', '.select-column', function (ev) {
        let $trigger = $(this);

        clearSelected();

        let rowIndex = $trigger.attr('data-rowIndex');
        let colIndex = $trigger.attr('data-colIndex');
        let resolution = l.resolutions[0];

        let $element = $wrapper.find('.row-layout[data-position="' + rowIndex + '"] .col-layout[data-index="' + colIndex + '"]');
        selectColumn($element, 'both');

        let selectedColumn = l[rowIndex].columns[colIndex];
        l.selected = [{ row: rowIndex, col: colIndex }]

        $options.html('');

        let template = templates['layout-column-options'];
        let html = template({
            selected: JSON.stringify(l.selected),
            resolution: JSON.stringify(l.resolutions),
            size: selectedColumn.resolutions[resolution].size,
            offset: selectedColumn.resolutions[resolution].offset || 0,
            cssClass: selectedColumn.properties ? selectedColumn.properties.cssClass : ''
        });

        $options.append(html);
    });

    //-----------------------------------------------------------------------------
    // Methods
    function buildLayout($wrapper, l) {
        let $holder = $wrapper.find('.rows-holder');
        $holder.html('');

        if (!l.resolutions || l.resolutions.length === 0) {
            return;
        }

        for (let i = 0; i < l.length; i += 1) {
            let $row = appendRow($holder, i, l[i].columns.length);
            l[i].row = $row;

            buildRow($row, l[i].columns);
        }
    }

    function appendRow($holder, position, colCount) {
        let $rowWrapper = $('<div></div>', {
            class: 'row-holder'
        });

        // row control
        $rowWrapper.append(templates['layout-row-control']({ position }));

        // row view
        let $row = $(templates['layout-row']({ position }))
            .appendTo($rowWrapper);

        // columns control
        $rowWrapper.append(templates['layout-column-control']({ position, colCount }));

        $rowWrapper.appendTo($holder);
        $holder.append('<br/>');

        return $row;
    }

    function buildRow($row, columns) {
        $row.html('');
        $options.html('');
        clearSelected();

        // check if col length > 9 -1.1
        let result = "";

        if (columns.length <= 9) {
            result = "0" + columns.length;
        } else {
            result = columns.length;
        }

        $row.parent().find('.columns-count').text(result);

        //starting separator for 0 size column
        $row.append(templates['layout-separator']({ position: -1, active: false, index: -1 }));

        let count = 0;
        for (let i = 0; i < columns.length; i += 1) {
            let colsLeft = 12 - count % 12;
            let currentSize = columns[i].resolutions[l.resolutions[0]].size;
            let offset = (columns[i].resolutions[l.resolutions[0]].offset) || 0;

            // if there is no space left for the column
            if (currentSize + offset > colsLeft) {
                for (let j = 12 - colsLeft; j < 12; j += 1) {
                    buildColumn(count, $row, false, 'empty');

                    count++;
                }
            }

            for (let j = 12 - colsLeft; j < 12 - colsLeft + offset; j += 1) {
                buildColumn(count, $row, false, 'empty', 'offset');
                count++;
            }

            colsLeft += offset;

            // render column
            for (let j = 12 - colsLeft; j < 12 - colsLeft + currentSize; j += 1) {
                let type = 'middle';
                let isLastCol = j === 12 - colsLeft + currentSize - 1;
                if (j === 12 - colsLeft) {
                    type = 'start';
                }

                if (isLastCol) {
                    type = 'end';
                }

                if (isLastCol && j === 12 - colsLeft) {
                    type = 'single';
                }

                buildColumn(count, $row, isLastCol, i, type);

                count++;
            }

            // control for columns with size = 0
            if (currentSize === 0) {
                buildEmpyColumn(count - 1, $row, i);
            }
        }

        // fill remaining space until the end of the row with empty columns
        if (count % 12 || columns.length === 0 || count === 0) {
            for (let i = count % 12; i < 12; i++) {
                buildColumn(count, $row, false, count, 'empty');
                count++;
            }
        }

        $('.layout-drag').draggable({ revert: 'invalid' });
        $('.separator').droppable({
            accept: dropLayoutAccept,
            hoverClass: 'drop-highlight',
            drop: dropLayoutSeparator
        });
        $('.col-layout').droppable({
            accept: dropLayoutAccept,
            hoverClass: 'drop-highlight',
            drop: dropLayoutSeparator
        });
    }

    function buildColumn(position, $row, active, colIndex, colType) {
        let colClass = colType ? colType + '-col' : '';

        $row.append(templates['layout-column']({
            cssClass: colClass,
            position: position,
            index: colIndex
        }));

        $row.append(templates['layout-separator']({
            cssClass: colType ? colType + '-separator' : '',
            position: position,
            rowIndex: $row.attr('data-position'),
            active: !!active,
            index: colIndex
        }));
    }

    function buildEmpyColumn(position, $row, colIndex) {
        $row.append(templates['layout-separator']({
            position: position,
            cssClass: 'empty',
            spanClass: 'empty',
            rowIndex: $row.attr('data-position'),
            active: true,
            index: colIndex
        }));
    }

    //----------------------------------------------------------------------------------
    // Drag & Drop event handlers
    function dropLayoutSeparator(ev, ui) {
        let $draggable = $(ui.draggable);
        let data = {
            rowIndex: $draggable.parents('.row-layout').attr('data-position'),
            colIndex: $draggable.attr('data-index'),
            position: $draggable.attr('data-position')
        };

        let $target = $(ev.target);
        if ($target.hasClass('col-layout')) {
            $target = $target.next('.separator');
        }

        let $row = $target.parents('.row-layout');
        if ($row.length === 0) {
            let $separators = $row.find('.separator');
            if ($target.hasClass('row-holder')) {
                $row = $target.find('.row-layout');
                $target = $separators.first();
            }

            if ($target.hasClass('row-control')) {
                $row = $target.next('.row-layout');
                $target = $separators.first();
            }
        }

        let rowIndex = $row.attr('data-position');

        if (rowIndex !== data.rowIndex) {
            console.warn('Can not drag to different rows!');
            return;
        }

        let position = $target.attr('data-position');
        let move = position - data.position;

        let col = l[data.rowIndex].columns[data.colIndex].resolutions[l.resolutions[0]];

        col.size += move;

        if (col.size > 12) {
            col.size = 12;
        }

        if (col.size < 0) {
            col.size = 0;
        }

        if (isNaN(col.size)) {
            col.size = 1;
        }

        for (let i = 1; i < l.resolutions.length; i += 1) {
            l[data.rowIndex].columns[data.colIndex].resolutions[l.resolutions[i]].size = col.size;
        }

        buildRow(l[data.rowIndex].row, l[data.rowIndex].columns);
    }

    function dropLayoutAccept(dropElem) {
        return $(dropElem).hasClass('layout-drag') && $(this).parents('.row-layout').attr('data-position') === $(dropElem).attr('data-rowIndex');
    }
}
