define(['modules/default/defaultcontroller', 'src/util/util', 'lodash'], function(Default, Util, _) {

    var controller = function() {};

    controller.prototype = $.extend(true, {}, Default);

    /*
     Information about the module
     */
    controller.prototype.moduleInformation = {
        name: 'Slick Grid',
        description: 'Table editor based on SlickGrid',
        author: 'Daniel Kostro',
        date: '14.10.2014',
        license: 'MIT',
        cssClass: 'slickgrid'
    };

    controller.prototype.configurationStructure = function(section) {

        var jpaths = this.module.model.getjPath('row', false );


        return {
            groups: {

                group: {
                    options: {
                        type: 'list',
                        multiple: false
                    },

                    fields: {
                        slickCheck: {
                            type: 'checkbox',
                            title: 'Slick options',
                            options: {
                                editable: 'Editable',
                                enableAddRow: 'Enable add row',
                                autoEdit: 'Enable Auto Edit',
                                forceFitColumns: 'Force fit Columns',
                                rowDelete: 'Can delete rows',
                                autoFocus: 'Auto Focus',
                                rowNumbering: 'Show row number when scrolling',
                                oneUncollapsed: 'Maximum One group uncollapsed (per level)',
                                filterColumns: 'Provides search input for each column',
                                backToTop: 'Don\'t remember scroll position on new variable',
                                forgetLastActive: 'Don\'t scroll back to last active row on new variable',
                                highlightScroll: 'Scroll to highlighted line',
                                collapseGroup: 'Collapse groups on start'
                            },
                            default: ['enableCellNavigation', 'rowNumbering', 'forceFitColumns', 'highlightScroll']
                        },
                        colorjpath: {
                            type: 'combo',
                            title: 'Color jPath',
                            options: jpaths,
                            extractValue: Util.jpathToArray,
                            insertValue: Util.jpathToString
                        },
                        "slick.defaultColumnWidth": {
                            type: 'float',
                            title: 'Default Column Width'
                        },

                        "slick.rowHeight": {
                            type: 'text',
                            title: 'Row Height'
                        },

                        "slick.selectionModel": {
                            type: 'combo',
                            title: 'Selection',
                            options: [
                                {key: 'row', title: 'Row Selection Model'},
                                {key: 'cell', title: 'Cell Selection Model'}
                            ],
                            default: ['cell']
                        }
                    }
                },


                cols: {
                    options: {
                        type: 'table',
                        multiple: true,
                        title: 'Columns'
                    },
                    fields: {
                        name: {
                            type: 'text',
                            title: 'Columns title'
                        },
                        jpath: {
                            type: 'combo',
                            title: 'jPath',
                            options: jpaths,
                            extractValue: Util.jpathToArray,
                            insertValue: Util.jpathToString
                        },
                        editor: {
                            type: 'combo',
                            title: 'Editor',
                            default: 'none',
                            options: [
                                {key: 'none', title: 'None'},
                                {key: 'auto', title: 'Based on type'},
                                {key: 'DataString', title: 'DataString'},
                                {key: 'DataNumber', title: 'DataNumber'},
                                {key: 'DataBoolean', title: 'DataBoolean'},
                                {key: 'mf', title: 'Molecular Formula'},
                                {key: 'color', title: 'Color'}
                            ]
                        },
                        formatter: {
                            type: 'combo',
                            title: 'Formatter',
                            options: [
                                {key: 'typerenderer', title: 'Type Renderer'}
                            ],
                            default: 'typerenderer'
                        },
                        width: {
                            type: 'text',
                            title: 'Width'
                        },
                        minWidth: {
                            type: 'text',
                            title: 'Min Width'
                        },
                        maxWidth: {
                            type: 'text',
                            title: 'Max Width'
                        }
                    }
                },
                groupings: {
                    options: {
                        type: 'table',
                        multiple: true,
                        title: 'Groupings'
                    },

                    fields: {
                        getter: {
                            type: 'combo',
                            title: 'jPath',
                            options: jpaths,
                            extractValue: Util.jpathToArray,
                            insertValue: Util.jpathToString
                        },
                        groupName: {
                            type: 'text',
                            title: 'Group Name'
                        }
                    }
                }
            }
        }
    };

    controller.prototype.configAliases = {
        'colorjPath': [ 'groups', 'group', 0, 'colorjpath', 0 ],
        'slickCheck': [ 'groups', 'group', 0, 'slickCheck', 0 ],
        'slick.rowHeight': [ 'groups', 'group', 0, 'slick.rowHeight', 0 ],
        'slick.selectionModel': [ 'groups', 'group', 0, 'slick.selectionModel', 0 ],
        'slick.defaultColumnWidth': [ 'groups', 'group', 0, 'slick.defaultColumnWidth', 0 ],
        'cols': ['groups', 'cols', 0],
        'groupings': ['groups', 'groupings', 0]
    };



    /*
        Configuration of the input/output references of the module
    */
    controller.prototype.references = {

        row: {
            label: 'Row'
        },

        list: {
            label: 'Table',
            type: 'array'
        },

        rows: {
            label: 'Row selection',
            type: 'array'
        }
    };


    /*
     Configuration of the module for receiving events, as a static object
     */
    controller.prototype.variablesIn = [ 'list' ];

    /*
     Received actions
     */
    controller.prototype.actionsIn = $.extend({}, Default.actionsIn, {
        hoverRow: 'Mimic hover row',
        selectRow: 'Mimic select row',
        addRow: 'Add a new row',
        addColumn: 'Add a new column',
        removeColumn: 'Remove a column',
        removeRow: 'Remove a row'
    });

    /*
     Configuration of the module for sending events, as a static object
     */
    controller.prototype.events = {

        // List of all possible events

        onSelect: {
            label: 'A row was clicked',
            refVariable: [ 'row' ],
            refAction: [ 'row' ]
        },

        onHover: {
            label: 'Hovers a line',
            refVariable: [ 'row' ],
            refAction: [ 'row' ]
        },

        onRowChange: {
            label: 'A row has been edited',
            refVariable: ['row'],
            refAction: ['row']
        },

        onRowNew: {
            label: 'A new row has been edited',
            refVariable: ['row'],
            refAction: ['row']
        },
        onRowActive: {
            label: 'A new row became active',
            refVariable: ['row'],
            refAction: ['row']
        },
        onRowsSelect: {
            label: 'Row have been selected',
            refVariable: ['rows']
        }
    };

    controller.prototype.onRowsSelected = function(items) {
        items = items.filter(function(v) {
            return !!v;
        });
        this.createDataFromEvent('onRowsSelect', 'rows', items);
    };


    controller.prototype.onHover = function(row, item) {
        var itemId = item[this.module.view.idPropertyName];
        if(this.lastHoveredItemId === itemId) return;
        this.lastHoveredItemId = itemId;
        this.setVarFromEvent( 'onHover', 'row', 'list', [ row ] );
        this.sendActionFromEvent( 'onHover', 'row', item );
    };

    controller.prototype.onClick = _.throttle(function(row, item) {
        this.setVarFromEvent( 'onSelect', 'row', 'list', [ row ] );
        this.sendActionFromEvent( 'onSelect', 'row', item );
    }, 250, {trailing: false});

    controller.prototype.onActive = function(row, item) {
        var itemId = item[this.module.view.idPropertyName];
        if(this.lastClickedItemId === itemId) return;
        this.lastClickedItemId = itemId;
        this.setVarFromEvent( 'onRowActive', 'row', 'list', [ row ] );
        this.sendActionFromEvent( 'onRowActive', 'row', item );
    };

    controller.prototype.onRowChange = function(row, item) {
        this.setVarFromEvent('onRowChange', 'row', 'list', [row]);
        this.sendActionFromEvent('onRowChange', 'row', item);
    };


    controller.prototype.onRowNew = function(row, item) {
        this.setVarFromEvent('onRowNew', 'row', 'list', [row]);
        this.sendActionFromEvent('onRowNew', 'row', item);
    };

    controller.prototype.export = function() {
        return this.module.view.exportToTabDelimited();
    };

    return controller;
});