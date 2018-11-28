/* globals Data, Utils, Handlebars */

'use strict';

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
 * -v0.11: delete confirmation is handled with events
 * -v0.12: added stacking of collapsed columns, styles polishing
 * -v0.13: cleared anonymous event handlers and added some documentation
 * 
 *===============================================================================================*/

function initLayout($wrapper, l, $resolutions, $options, resolutionValidation) {
    if (!resolutionValidation || {}.toString.call(resolutionValidation) !== '[object Function]') {
        console.error('no resolutuion validation function was specified');
        resolutionValidation = function () { return true; };
    }

    let templates = {};
    const templateNames = ['layout-row-options', 'layout-column-options', 'layout-row-control', 'layout-column-control', 'layout-separator', 'layout-column', 'layout-row'];
    const templateSources = templateNames.map((templateName) => { return { name: templateName, url: `/templates/layout/${templateName}.html` }; });
    const _resolutions = ['xs', 'sm', 'md', 'lg'];

    l.resolutions = ['xs', 'sm', 'md', 'lg'];
    l.deletedPlaceholders = [];

    Utils.loadHandlebarsTemplates(templates, templateSources).then(function (res) {
        if (res.indexOf(false) >= 0) {
            throw 'Templates were not loaded successfuly!';
        }

        buildLayout($wrapper, l);
        bindEvents();
    });

    //-----------------------------------------------------------------------------
    // DOM events registrations

    // append new row to the end of the page
    function addRow(ev) {
        let $row = appendRow($wrapper.find('.rows-holder'), l.length);

        l.push({ row: $row, columns: [] });
        buildRow($row, []);
    }

    // append new column to the targeted row
    function addColumn(ev) {
        let $target = $(this);
        let rowIndex = $target.attr('data-position');
        let col = { resolutions: {}, properties: {} };
        col.properties.placeholder = Utils.guid();

        for (let i = 0; i < _resolutions.length; i += 1) {
            col.resolutions[_resolutions[i]] = { size: 1 };
        }

        l[rowIndex].columns.push(col);
        buildRow(l[rowIndex].row, l[rowIndex].columns);
    }

    // remove last column from the targeted row
    function removeColumn(ev) {
        let $target = $(this);
        let rowIndex = $target.attr('data-position');

        let removed = l[rowIndex].columns.pop();
        l.deletedPlaceholders.push(removed.properties.placeholder);
        buildRow(l[rowIndex].row, l[rowIndex].columns);
    }

    // activate or deactivate resolution for the current selection
    function toggleResolution(ev) {
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
    }

    // on selection column from the ui
    function selectColumnHandler(ev) {
        let $trigger = $(this);
        let $row = $trigger.parents('.row-layout');

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
        } else if (ev.ctrlKey) {
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
    }

    // clears selected item from the control and the ui
    function clearSelected() {
        l.selected = [];
        $wrapper.find('.select-row.glyphicon-check').removeClass('glyphicon-check').addClass('glyphicon-unchecked');
        $wrapper.find('.selected').each(function (_, element) {
            $(element).removeClass('selected');
        });
    }

    // helper for displaying selected column 
    function selectColumn($element, direction, unselect) {
        if ($element.hasClass('selected') && !unselect || !$element.hasClass('selected') && unselect) {
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

    // handles selection of elements from the UI
    // ctrl key allows appeding to already selected elements
    // shift key allows selection of all elements between last selected and current element
    function selectElements() {
        $options.html('');
        const multiple = 'multiple';

        if (!l.selected || !l.selected.length) {
            console.warn('there are no selected elements');
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

    // updates columm properties
    function updateColumn(ev) {
        const multiple = 'multiple';
        let $notifier = $options.find('.validation-message');

        let size = $options.find('.input-size').val();
        let offset = $options.find('.input-offset').val();
        let cssClass = $options.find('.input-cssClass').val();

        if (size !== multiple && (size > 12 || size < 0)) {
            $notifier.text('size must be between 0 and 12!');
            return;
        }

        if (offset !== multiple) {
            if (offset && (offset < 0 || offset > 11)) {
                $notifier.text('offset must be empty or between 0 and 11!');
                return;
            }

            if (offset && +offset + +size > 12) {
                $notifier.text('offset + size must be between 0 and 12!');
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

            let updateCssClass = cssClass === multiple ? l[rowIndex].columns[colIndex].properties ? l[rowIndex].columns[colIndex].properties.cssClass : '' : cssClass;
            if (cssClass) {
                if (l[rowIndex].columns[colIndex].properties) {
                    l[rowIndex].columns[colIndex].properties.cssClass = updateCssClass;
                } else {
                    l[rowIndex].columns[colIndex].properties = { cssClass: updateCssClass };
                }
            }
        }

        buildLayout($wrapper, l);
    }

    // deletes all selected columns
    function deleteColums() {
        l.selected.sort((a, b) => { return a.col > b.col ? -1 : b.col > a.col ? 1 : 0; });

        for (let i = 0; i < l.selected.length; i += 1) {
            let removed = l[l.selected[i].row].columns.splice(l.selected[i].col, 1)[0];

            l.deletedPlaceholders.push(removed.properties.placeholder);
        }

        buildLayout($wrapper, l);
    }

    // deletes the specified row
    function deleteRows(rowIndex) {

        let removed = l.splice(rowIndex, 1)[0];
        for (let i = 0; i < removed.columns.length; i += 1) {
            l.deletedPlaceholders.push(removed.columns[i].properties.placeholder);
        }

        buildLayout($wrapper, l);
    }

    // event call to check if columns are allowed for deletion, must inkove 'allowedForDeletion' from the wrapper to delete
    // TODO: redo with mediator
    function removeColumn(ev) {
        let placeholders = [];
        for (let i = 0; i < l.selected.length; i += 1) {
            placeholders.push(l[l.selected[i].row].columns[l.selected[i].col].properties.placeholder);
        }

        $wrapper[0].dispatchEvent(new CustomEvent('checkForContent', { bubbles: true, detail: { type: 'col', placeholders } }));
    }

    // event call to check if row is allowed for deletion, must inkove 'allowedForDeletion' from the wrapper to delete
    // TODO: redo with mediator
    function removeRow(ev) {
        let $target = $(this);
        let rowIndex = $target.attr('data-rowIndex');
        let placeholders = [];

        for (let i = 0; i < l[rowIndex].columns.length; i += 1) {
            placeholders.push(l[rowIndex].columns[i].properties.placeholder);
        }

        $wrapper[0].dispatchEvent(new CustomEvent('checkForContent', { bubbles: true, detail: { type: 'row', placeholders, rowIndex } }));
    }

    // handle when content is allowed for deletion
    function allowForDeletion(ev) {
        switch (ev.detail.type) {
            case 'row':
                deleteRows(ev.detail.rowIndex);
                break;
            case 'col':
                deleteColums();
                break;
            default:
                break;
        }
    }

    // on select row from the ui
    function selectRow(ev) {
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
        let resolution = l.resolutions[0];
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
    }

    // updates row properties
    function updateRow(ev) {
        let $target = $(this);

        let rowIndex = $target.attr('data-rowIndex');

        let tag = $options.find('.select-tag').val();
        let cssClass = $options.find('.input-cssClass').val();

        l[rowIndex].tag = tag;
        l[rowIndex].cssClass = cssClass;

        buildRow(l[rowIndex].row, l[rowIndex].columns);
    }

    // TODO: optimize with select column
    // selects column from row properties
    function selectColumnFromRow(ev) {
        let $trigger = $(this);

        clearSelected();

        let rowIndex = $trigger.attr('data-rowIndex');
        let colIndex = $trigger.attr('data-colIndex');
        let resolution = l.resolutions[0];

        let $element = $wrapper.find('.row-layout[data-position="' + rowIndex + '"] .col-layout[data-index="' + colIndex + '"]');
        selectColumn($element, 'both');

        let selectedColumn = l[rowIndex].columns[colIndex];
        l.selected = [{ row: rowIndex, col: colIndex }];

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
    }

    // rebuilds the layout, exposed for usage from outside via 'rebuildLayout' from the wrapper
    // TODO: redo with mediator
    function rebuildLayout(ev) {
        l = ev.detail.l;
        l.resolutions = ['xs', 'sm', 'md', 'lg'];
        l.deletedPlaceholders = [];

        buildLayout($wrapper, l);
    }

    // expands all collapsed columns(stacked as well) to 1 size
    function expandCollapsedColumns(ev) {
        let colIndex = ev.target.getAttribute('data-index');
        let rowIndex = ev.target.getAttribute('data-rowindex');

        for (let i = colIndex; i >= 0; i -= 1) {
            for (let j = 0; j < l.resolutions.length; j += 1) {
                let col = l[rowIndex].columns[i].resolutions[l.resolutions[j]];
                if (col.size > 0) {
                    break;
                }

                col.size = 1;
            }
        }

        buildRow(l[rowIndex].row, l[rowIndex].columns);
        console.log(l);
    }

    // binds events
    function bindEvents() {
        $wrapper.on('dblclick', '.layout-drag.empty', expandCollapsedColumns);
        $wrapper.on('click', '.add-row', addRow);
        $wrapper.on('click', '.add-column', addColumn);
        $wrapper.on('click', '.remove-column', removeColumn);
        $wrapper.on('click', '.middle-col, .start-col, .end-col, .single-col', selectColumnHandler);
        $wrapper.on('click', '.select-row', selectRow);
        $options.on('click', '.select-column', selectColumnFromRow);
        $options.on('click', '.update-row', updateRow);
        $options.on('click', '.remove-row', removeRow);
        $options.on('click', '.remove-column', removeColumn);
        $options.on('click', '.update-column', updateColumn);
        $resolutions.on('click', toggleResolution);

        $wrapper[0].addEventListener('allowedForDeletion', allowForDeletion);
        $wrapper[0].addEventListener('rebuildLayout', rebuildLayout);
    }

    //-----------------------------------------------------------------------------
    // Methods

    /**
     * builds the layout 
     * @param {JQuery} $wrapper wrapper for the layout
     * @param {any} l layout configurations
     */
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

    /**
     * Appends row to the provided $holder.
     * @param {JQuery} $holder row holder
     * @param {Number} position row index
     * @param {Number} colCount number of columns in the row
     * @return {JQuery} row 
     */
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

    /**
     * Populates row with columns
     * @param {JQuery} $row row to populate
     * @param {Array<any>} columns columns configurations
     */
    function buildRow($row, columns) {
        $row.html('');
        $options.html('');
        clearSelected();

        // check if col length > 9 -1.1
        let result = '';

        if (columns.length <= 9) {
            result = '0' + columns.length;
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
            let offset = columns[i].resolutions[l.resolutions[0]].offset || 0;

            // if there is no space left for the column
            if (currentSize + offset > colsLeft) {
                for (let j = 12 - colsLeft; j < 12; j += 1) {
                    buildColumn(count, $row, false, 'empty');

                    count++;
                }

                buildFiller(count - 1, $row);
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

            // if on the end of the row and not the last row, build filler separator for the start of the next row
            if (count !== 0 && 12 - count % 12 === 12 && i < columns.length - 1 && !$row.children('.separator').last().hasClass('filler')) {
                buildFiller(count - 1, $row);
            }
        }

        // fill remaining space until the end of the row with empty columns
        if (count % 12 || columns.length === 0 || count === 0) {
            for (let i = count % 12; i < 12; i++) {
                buildColumn(count, $row, false, count, 'empty');
                count++;
            }
        }

        let $last = $row.children('.separator').last();
        // clear last element in the row if it is a filler
        if ($last.hasClass('filler')) {
            $last.remove();
        }

        // attach jQuery drag & drop events
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

    /**
     * Creates column cell in the provided row
     * @param {Number} position position of the column
     * @param {JQuery} $row column's parent row
     * @param {Boolean} active is column active
     * @param {Number} colIndex column's index
     * @param {String} colType column's type
     */
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

    /**
     * Creates empty column cell in the provided row
     * @param {Number} position column's position
     * @param {JQuery} $row column's parent row
     * @param {Number} colIndex column's index
     */
    function buildEmpyColumn(position, $row, colIndex) {
        let $separator = $row.children('.separator').not('.filler').last();

        let $collapsed = $separator.children('.empty');
        if ($collapsed && $collapsed.length) {
            $collapsed.attr('data-index', colIndex);
            $collapsed.attr('data-position', position);
            $collapsed.text(parseInt($collapsed.text()) + 1);
        } else {
            $separator.append(`<span class="layout-drag empty" data-index="${colIndex}" data-position="${position}" data-rowIndex="${$row.attr('data-position')}">1</span>`);
        }
    }

    /**
     * Builds filler separator for the end of the row
     * @param {Number} position position of the separator
     * @param {JQuery} $row separator's parent row
     */
    function buildFiller(position, $row) {
        $row.append(templates['layout-separator']({
            cssClass: 'empty-separator filler',
            position: position,
            rowIndex: $row.attr('data-position'),
            active: false,
            index: position
        }));
    }

    //----------------------------------------------------------------------------------
    // Drag & Drop event handlers
    // Handles the drop of the drag and drop resizing of the columns
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

        handleMovement({
            position: $target.attr('data-position'),
            rowIndex: $row.attr('data-position')
        }, data);
    }

    /**
     * Handles the update and validation of the new position
     * @param {any} newPosition the updated position and row of the column
     * @param {any} data current position, row and column index of the column
     */
    function handleMovement(newPosition, data) {
        if (newPosition.rowIndex !== data.rowIndex) {
            console.warn('Can not drag to different rows!');
            return;
        }

        let col = l[data.rowIndex].columns[data.colIndex].resolutions[l.resolutions[0]];

        col.size += newPosition.position - data.position;

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

    // validates if the element can be dropped over hovered element
    function dropLayoutAccept(dropElem) {
        return $(dropElem).hasClass('layout-drag') && $(this).parents('.row-layout').attr('data-position') === $(dropElem).attr('data-rowIndex');
    }
}
