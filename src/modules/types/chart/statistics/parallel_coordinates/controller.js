define(['modules/default/defaultcontroller', "src/util/datatraversing"], function (Default, Traversing) {

    function Controller() {
    }

    Controller.prototype = $.extend(true, {}, Default);

    Controller.prototype.moduleInformation = {
        moduleName: 'Parallel coordinates',
        description: 'Multivariate data visualization',
        author: 'Michaël Zasso',
        date: '11.03.2014',
        license: 'MIT'
    };

    Controller.prototype.references = {
        value: {
            type: 'array',
            label: 'An array of data points'
        },
        columns: {
            type: 'array',
            label: 'Array of column descriptions'
        },
        flagResult: {
            type: 'array',
            label: 'Array of boolean values'
        }
    };

    Controller.prototype.events = {
        onBrushSelection: {
            label: 'A selection has been made',
            refVariable: ['value', 'flagResult']
        }
    };

    Controller.prototype.variablesIn = ['value', 'columns'];

    Controller.prototype.actionsIn = {
        addColumn: 'Add a column',
        removeColumn: 'Remove a column'
    };

    Controller.prototype.configurationStructure = function (section) {

        var jpaths = Traversing.getJPathsFromElement(this.module.view._value[0]);
        return {
            groups: {
                group: {
                    options: {
                        type: "list",
                        multiple: "false"
                    },
                    fields: {
                        colJPath: {
                            type: 'combo',
                            title: 'Color jPath',
                            options: jpaths
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
                            title: 'Columns name'
                        },
                        jpath: {
                            type: 'combo',
                            title: 'jPath',
                            options: jpaths
                        }
                    }
                }
            }
        };
    };

    Controller.prototype.configAliases = {
        colsjPaths: ['groups', 'cols', 0],
        colorjpath: ['groups', 'group', 0, 'colJPath', 0]
    };

    Controller.prototype.onBrushSelection = function (value) {
        var toSend = value;
        var original = this.module.view._value;
        var flags = new Array(original.length);

        if (value[0] && value[0].hasOwnProperty('__id')) {
            original = this.module.view._value;
            toSend = new Array(value.length);

            var index;
            for (var i = 0; i < value.length; i++) {
                index = value[i].__id;
                toSend[i] = original[index];
                flags[index] = true;
            }
        }
        this.createDataFromEvent("onBrushSelection", "value", toSend);
        this.createDataFromEvent("onBrushSelection", "flagResult", flags);
    };

    return Controller;
});