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
 * 
 *===============================================================================================*/

function initLayout($wrapper, l, $resolutions, $options, resolutionValidation) {
    if (!resolutionValidation || {}.toString.call(resolutionValidation) !== '[object Function]') {
        console.error('no resolutuion validation function was specified');
        resolutionValidation = function resolutionValidation() {
            return true;
        };
    }

    var defaultResolution = 'xs';
    var templates = {};
    var _resolutions = ['xs', 'sm', 'md', 'lg'];

    l.resolutions = ['xs', 'sm', 'md', 'lg'];
    l.deletedPlaceholders = [];

    loadTemplates(templates).then(function (res) {
        if (res.indexOf(false) >= 0) {
            throw 'Templates were not loaded successfuly!';
        }

        buildLayout($wrapper, l);
    });

    function loadTemplates(templates) {
        var templateNames = ['layout-row-options', 'layout-column-options', 'layout-row-control', 'layout-column-control', 'layout-separator', 'layout-column', 'layout-row'];
        var promises = [];

        var _loop = function _loop(i) {
            promises.push(Data.getJson({ url: '/templates/layout/' + templateNames[i] + '.html' }).then(function (res) {
                var template = Handlebars.compile(res);
                templates[templateNames[i]] = template;

                return true;
            }, function (res) {
                return false;
            }));
        };

        for (var i = 0; i < templateNames.length; i += 1) {
            _loop(i);
        }

        return Promise.all(promises);
    }

    //-----------------------------------------------------------------------------
    // DOM events registrations

    $wrapper.on('click', '.add-row', function (ev) {
        var $row = appendRow($wrapper.find('.rows-holder'), l.length);

        l.push({ row: $row, columns: [] });
        buildRow($row, []);
    });

    $wrapper.on('click', '.add-column', function (ev) {
        var $target = $(this);
        var rowIndex = $target.attr('data-position');
        var col = { resolutions: {}, properties: {} };
        col.properties.placeholder = Utils.guid();

        for (var i = 0; i < _resolutions.length; i += 1) {
            col.resolutions[_resolutions[i]] = { size: 1 };
        }

        l[rowIndex].columns.push(col);
        buildRow(l[rowIndex].row, l[rowIndex].columns);
    });

    $wrapper.on('click', '.remove-column', function (ev) {
        var $target = $(this);
        var rowIndex = $target.attr('data-position');

        var removed = l[rowIndex].columns.pop();
        l.deletedPlaceholders.push(removed.properties.placeholder);
        buildRow(l[rowIndex].row, l[rowIndex].columns);
    });

    $resolutions.on('click', function () {
        if (resolutionValidation()) {
            this.classList.toggle('selected');
            var type = $(this).attr('data-type');
            var index = l.resolutions.indexOf(type);

            if (index === -1) {
                l.resolutions.push(type);
            } else {
                l.resolutions.splice(index, 1);
            }

            buildLayout($wrapper, l);
        }
    });

    $wrapper.on('click', '.middle-col, .start-col, .end-col, .single-col', function (ev) {
        var $trigger = $(this);
        var $row = $trigger.parents('.row-layout');

        var rowIndex = +$row.attr('data-position');
        var colIndex = +$trigger.attr('data-index');

        if (ev.shiftKey) {
            if (l.selected.length === 0 || l.selected[l.selected.length - 1].row !== rowIndex) {
                clearSelected();
                l.selected.push({ row: rowIndex, col: colIndex });
                selectColumn($trigger, 'both');
                l.lastSelected = { row: rowIndex, col: colIndex };
            } else {
                var last = l.lastSelected;
                clearSelected();
                for (var i = Math.min(last.col, colIndex); i <= Math.max(last.col, colIndex); i += 1) {
                    l.selected.push({ row: rowIndex, col: i });
                    selectColumn($row.find('.col-layout[data-index="' + i + '"]'), 'both');
                }
            }
        } else if (ev.ctrlKey) {
            var index = l.selected.findIndex(function (s) {
                return s.row === rowIndex && s.col === colIndex;
            });

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

    function selectElements() {
        $options.html('');
        var multiple = 'multiple';

        if (!l.selected || !l.selected.length) {
            console.warn('there are no selected elements');
            return;
        }

        var selectedColumn = l[l.selected[0].row].columns[l.selected[0].col];
        var size = selectedColumn.resolutions[l.resolutions[0]].size;
        var offset = selectedColumn.resolutions[l.resolutions[0]].offset || 0;
        var cssClass = selectedColumn.properties ? selectedColumn.properties.cssClass : '';

        for (var i = 1; i < l.resolutions.length; i += 1) {
            var currentSize = selectedColumn.resolutions[l.resolutions[i]].size;
            var currentOffset = selectedColumn.resolutions[l.resolutions[i]].offset || 0;

            if (size !== multiple && size !== currentSize) {
                size = multiple;
            }

            if (offset !== multiple && offset !== currentOffset) {
                offset = multiple;
            }
        }

        if (l.selected.length > 0) {
            for (var _i = 1; _i < l.selected.length; _i += 1) {
                var _selectedColumn = l[l.selected[_i].row].columns[l.selected[_i].col];

                for (var _i2 = 0; _i2 < l.resolutions.length; _i2 += 1) {
                    var _currentSize = _selectedColumn.resolutions[l.resolutions[_i2]].size;
                    var _currentOffset = _selectedColumn.resolutions[l.resolutions[_i2]].offset || 0;

                    if (size !== multiple && size !== _currentSize) {
                        size = multiple;
                    }

                    if (offset !== multiple && offset !== _currentOffset) {
                        offset = multiple;
                    }
                }

                var currentClass = _selectedColumn.properties ? _selectedColumn.properties.cssClass : '';
                if (cssClass !== multiple && cssClass !== currentClass) {
                    cssClass = multiple;
                }
            }
        }

        var template = templates['layout-column-options'];
        var html = template({
            selected: JSON.stringify(l.selected),
            resolution: JSON.stringify(l.resolutions),
            size: size,
            offset: offset,
            cssClass: cssClass
        });

        $options.append(html);
    }

    $options.on('click', '.update-column', function (ev) {
        var multiple = 'multiple';
        var $target = $(this);
        var $notifier = $options.find('.validation-message');

        var size = $options.find('.input-size').val();
        var offset = $options.find('.input-offset').val();
        var cssClass = $options.find('.input-cssClass').val();

        if (size !== multiple && (size > 12 || size < 1)) {
            $notifier.text('size must be between 1 and 12!');
            return;
        }

        if (offset !== multiple) {
            if (offset && (offset < 0 || offset > 11)) {
                $notifier.text('offset must be empty or between 0 and 11!');
                return;
            }

            if (offset && +offset + +size > 12) {
                $notifier.text('offset + size must be between 1 and 12!');
                return;
            }
        }

        for (var i = 0; i < l.selected.length; i += 1) {
            var rowIndex = l.selected[i].row;
            var colIndex = l.selected[i].col;

            for (var _i3 = 0; _i3 < l.resolutions.length; _i3 += 1) {

                var updateSize = size === multiple ? l[rowIndex].columns[colIndex].resolutions[l.resolutions[_i3]].size : size;
                var updateOffset = offset === multiple ? l[rowIndex].columns[colIndex].resolutions[l.resolutions[_i3]].offset : offset;

                if (!l[rowIndex].columns[colIndex][l.resolutions[_i3]]) {
                    l[rowIndex].columns[colIndex].resolutions[l.resolutions[_i3]] = { size: +updateSize, offset: +updateOffset };
                } else {
                    l[rowIndex].columns[colIndex].resolutions[l.resolutions[_i3]].size = +updateSize;
                    l[rowIndex].columns[colIndex].resolutions[l.resolutions[_i3]].offset = +updateOffset;
                }
            }

            var updateCssClass = cssClass === multiple ? l[rowIndex].columns[colIndex].properties ? l[rowIndex].columns[colIndex].properties.cssClass : '' : cssClass;
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

    function deleteColums() {
        l.selected.sort(function (a, b) {
            return a.col > b.col ? -1 : b.col > a.col ? 1 : 0;
        });

        for (var i = 0; i < l.selected.length; i += 1) {
            var removed = l[l.selected[i].row].columns.splice(l.selected[i].col, 1)[0];

            l.deletedPlaceholders.push(removed.properties.placeholder);
        }

        buildLayout($wrapper, l);
    }

    function deleteRows(rowIndex) {

        var removed = l.splice(rowIndex, 1)[0];
        for (var i = 0; i < removed.columns.length; i += 1) {
            l.deletedPlaceholders.push(removed.columns[i].properties.placeholder);
        }

        buildLayout($wrapper, l);
    }

    // Trigger events to check if content should be deleted
    $options.on('click', '.remove-column', function (ev) {
        var placeholders = [];
        for (var i = 0; i < l.selected.length; i += 1) {
            placeholders.push(l[l.selected[i].row].columns[l.selected[i].col].properties.placeholder);
        }

        $wrapper[0].dispatchEvent(new CustomEvent('checkForContent', { bubbles: true, detail: { type: 'col', placeholders: placeholders } }));
    });

    $options.on('click', '.remove-row', function (ev) {
        var $target = $(this);
        var rowIndex = $target.attr('data-rowIndex');
        var placeholders = [];

        for (var i = 0; i < l[rowIndex].columns.length; i += 1) {
            placeholders.push(l[rowIndex].columns[i].properties.placeholder);
        }

        $wrapper[0].dispatchEvent(new CustomEvent('checkForContent', { bubbles: true, detail: { type: 'row', placeholders: placeholders, rowIndex: rowIndex } }));
    });

    // handle when content is allowed for deletion
    $wrapper[0].addEventListener('allowedForDeletion', function (ev) {
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
    });

    $wrapper.on('click', '.select-row', function (ev) {
        var $target = $(this);

        if ($target.hasClass('glyphicon-check')) {
            return;
        }

        clearSelected();

        $target.removeClass('glyphicon-unchecked').addClass('glyphicon-check');

        $target.parents('.row-holder').addClass('selected');

        var rowIndex = $target.parents('.row-control').attr('data-position');
        $options.html('');

        var selectedRow = l[rowIndex];
        var resolution = l.resolutions[0];
        var cols = selectedRow.columns.map(function (c) {
            return c.resolutions[resolution];
        });

        var template = templates['layout-row-options'];
        var html = template({
            rowIndex: rowIndex,
            resolution: JSON.stringify(l.resolutions),
            tag: selectedRow.tag,
            cssClass: selectedRow.cssClass,
            columns: cols
        });

        $options.append(html);
    });

    $options.on('click', '.update-row', function (ev) {
        var $target = $(this);

        var rowIndex = $target.attr('data-rowIndex');

        var tag = $options.find('.select-tag').val();
        var cssClass = $options.find('.input-cssClass').val();

        l[rowIndex].tag = tag;
        l[rowIndex].cssClass = cssClass;

        buildRow(l[rowIndex].row, l[rowIndex].columns);
    });

    // TODO: optimize with select column
    $options.on('click', '.select-column', function (ev) {
        var $trigger = $(this);

        clearSelected();

        var rowIndex = $trigger.attr('data-rowIndex');
        var colIndex = $trigger.attr('data-colIndex');
        var resolution = l.resolutions[0];

        var $element = $wrapper.find('.row-layout[data-position="' + rowIndex + '"] .col-layout[data-index="' + colIndex + '"]');
        selectColumn($element, 'both');

        var selectedColumn = l[rowIndex].columns[colIndex];
        l.selected = [{ row: rowIndex, col: colIndex }];

        $options.html('');

        var template = templates['layout-column-options'];
        var html = template({
            selected: JSON.stringify(l.selected),
            resolution: JSON.stringify(l.resolutions),
            size: selectedColumn.resolutions[resolution].size,
            offset: selectedColumn.resolutions[resolution].offset || 0,
            cssClass: selectedColumn.properties ? selectedColumn.properties.cssClass : ''
        });

        $options.append(html);
    });

    $wrapper[0].addEventListener('rebuildLayout', function (ev) {
        l = ev.detail.l;
        l.resolutions = ['xs', 'sm', 'md', 'lg'];
        l.deletedPlaceholders = [];

        buildLayout($wrapper, l);
    });

    $wrapper.on('dblclick', '.layout-drag.empty', function (ev) {
        var colIndex = ev.target.getAttribute('data-index');
        var rowIndex = ev.target.getAttribute('data-rowindex');

        for (var i = colIndex; i >= 0; i -= 1) {
            var col = l[rowIndex].columns[i].resolutions[l.resolutions[0]];
            if (col.size > 0) {
                break;
            }

            col.size = 1;
        }

        buildRow(l[rowIndex].row, l[rowIndex].columns);
    });

    //-----------------------------------------------------------------------------
    // Methods
    function buildLayout($wrapper, l) {
        var $holder = $wrapper.find('.rows-holder');
        $holder.html('');

        if (!l.resolutions || l.resolutions.length === 0) {
            return;
        }

        for (var i = 0; i < l.length; i += 1) {
            var $row = appendRow($holder, i, l[i].columns.length);
            l[i].row = $row;

            buildRow($row, l[i].columns);
        }
    }

    function appendRow($holder, position, colCount) {
        var $rowWrapper = $('<div></div>', {
            class: 'row-holder'
        });

        // row control
        $rowWrapper.append(templates['layout-row-control']({ position: position }));

        // row view
        var $row = $(templates['layout-row']({ position: position })).appendTo($rowWrapper);

        // columns control
        $rowWrapper.append(templates['layout-column-control']({ position: position, colCount: colCount }));

        $rowWrapper.appendTo($holder);
        $holder.append('<br/>');

        return $row;
    }

    function buildRow($row, columns) {
        $row.html('');
        $options.html('');
        clearSelected();

        // check if col length > 9 -1.1
        var result = '';

        if (columns.length <= 9) {
            result = '0' + columns.length;
        } else {
            result = columns.length;
        }

        $row.parent().find('.columns-count').text(result);

        //starting separator for 0 size column
        $row.append(templates['layout-separator']({ position: -1, active: false, index: -1 }));

        var count = 0;
        for (var i = 0; i < columns.length; i += 1) {
            var colsLeft = 12 - count % 12;
            var currentSize = columns[i].resolutions[l.resolutions[0]].size;
            var offset = columns[i].resolutions[l.resolutions[0]].offset || 0;

            // if there is no space left for the column
            if (currentSize + offset > colsLeft) {
                for (var j = 12 - colsLeft; j < 12; j += 1) {
                    buildColumn(count, $row, false, 'empty');

                    count++;
                }

                buildFiller(count - 1, $row);
            }

            for (var _j = 12 - colsLeft; _j < 12 - colsLeft + offset; _j += 1) {
                buildColumn(count, $row, false, 'empty', 'offset');
                count++;
            }

            colsLeft += offset;

            // render column
            for (var _j2 = 12 - colsLeft; _j2 < 12 - colsLeft + currentSize; _j2 += 1) {
                var type = 'middle';
                var isLastCol = _j2 === 12 - colsLeft + currentSize - 1;
                if (_j2 === 12 - colsLeft) {
                    type = 'start';
                }

                if (isLastCol) {
                    type = 'end';
                }

                if (isLastCol && _j2 === 12 - colsLeft) {
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
            if (12 - count % 12 === 12 && i < columns.length - 1 && !$row.children('.separator').last().hasClass('filler')) {
                buildFiller(count - 1, $row);
            }
        }

        // fill remaining space until the end of the row with empty columns
        if (count % 12 || columns.length === 0 || count === 0) {
            for (var _i4 = count % 12; _i4 < 12; _i4++) {
                buildColumn(count, $row, false, count, 'empty');
                count++;
            }
        }

        var $last = $row.children('.separator').last();
        // clear last element in the row if it is a filler
        if ($last.hasClass('filler')) {
            $last.remove();
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
        var colClass = colType ? colType + '-col' : '';

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
        var $separator = $row.children('.separator').not('.filler').last();

        var $collapsed = $separator.children('.empty');
        if ($collapsed && $collapsed.length) {
            $collapsed.attr('data-index', colIndex);
            $collapsed.attr('data-position', position);
            $collapsed.text(parseInt($collapsed.text()) + 1);
        } else {
            $separator.append('<span class="layout-drag empty" data-index="' + colIndex + '" data-position="' + position + '" data-rowIndex="' + $row.attr('data-position') + '">1</span>');
        }
    }

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
    function dropLayoutSeparator(ev, ui) {
        var $draggable = $(ui.draggable);
        var data = {
            rowIndex: $draggable.parents('.row-layout').attr('data-position'),
            colIndex: $draggable.attr('data-index'),
            position: $draggable.attr('data-position')
        };

        var $target = $(ev.target);
        if ($target.hasClass('col-layout')) {
            $target = $target.next('.separator');
        }

        var $row = $target.parents('.row-layout');
        if ($row.length === 0) {
            var $separators = $row.find('.separator');
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

    function handleMovement(newPosition, data) {
        if (newPosition.rowIndex !== data.rowIndex) {
            console.warn('Can not drag to different rows!');
            return;
        }

        var col = l[data.rowIndex].columns[data.colIndex].resolutions[l.resolutions[0]];

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

        for (var i = 1; i < l.resolutions.length; i += 1) {
            l[data.rowIndex].columns[data.colIndex].resolutions[l.resolutions[i]].size = col.size;
        }

        buildRow(l[data.rowIndex].row, l[data.rowIndex].columns);
    }

    function dropLayoutAccept(dropElem) {
        return $(dropElem).hasClass('layout-drag') && $(this).parents('.row-layout').attr('data-position') === $(dropElem).attr('data-rowIndex');
    }
}