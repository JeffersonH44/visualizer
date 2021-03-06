'use strict';

define(['modules/default/defaultcontroller'], function (Default) {

    function Controller() {
        this._data = new DataObject();
    }

    $.extend(true, Controller.prototype, Default);

    Controller.prototype.moduleInformation = {
        name: 'Phylogram',
        description: 'Display phylogram using D3 library',
        author: 'Nathanaêl Khodl, Luc Patiny, Michaël Zasso',
        date: '30.12.2013',
        license: 'MIT',
        cssClass: 'phylogram'
    };

    Controller.prototype.mouseOverLeaf = function (data) {
        if (data.data) {
            this._data = DataObject.check(data.data);
            this.createDataFromEvent('onLeafHover', 'leaf', DataObject.check(this._data));
        }
    };

    Controller.prototype.mouseOutLeaf = function () {

    };

    Controller.prototype.clickLeaf = function (data) {
        if (data.data) {
            this._data = DataObject.check(data.data);
            this.createDataFromEvent('onLeafSelect', 'leaf', DataObject.check(this._data));
        }
    };

    Controller.prototype.mouseOverBranch = function (data) {
        this.sendTreeFromEvent(data, 'onBranchHover');
    };

    Controller.prototype.mouseOutBranch = function () {
    };

    Controller.prototype.clickBranch = function (data) {
        this.sendTreeFromEvent(data, 'onBranchSelect');
    };

    Controller.prototype.sendTreeFromEvent = function (data, name) {
        var element = new DataObject({'type': 'tree', value: data}, true);
        this.sendActionFromEvent(name, 'tree', element);
        this.createDataFromEvent(name, 'tree', element);
        this.createDataFromEvent(name, 'list', function () {
            var arr = [];
            treeToArray(arr, data);
            return DataArray(arr);
        });
    };

    function treeToArray(arr, tree) {
        if (tree.children) {
            for (var i = 0, ii = tree.children.length; i < ii; i++) {
                treeToArray(arr, tree.children[i]);
            }
        } else if (tree.data) {
            arr.push(tree.data);
        }
    }

    Controller.prototype.configurationStructure = function () {
        return {
            groups: {
                group: {
                    options: {
                        type: 'list'
                    },
                    fields: {
                        branchWidth: {
                            type: 'text',
                            'default': 4,
                            title: 'Branch width'
                        }
                    }
                }
            }
        };
    };

    Controller.prototype.configAliases = {
        branchWidth: ['groups', 'group', 0, 'branchWidth', 0]
    };

    Controller.prototype.events = {
        onLeafSelect: {
            label: 'Select a leaf',
            refVariable: ['leaf']
        },
        onLeafHover: {
            label: 'Hovers a leaf',
            refVariable: ['leaf']
        },
        onBranchSelect: {
            label: 'Select a branch',
            refVariable: ['tree', 'list']
        },
        onBranchHover: {
            label: 'Hovers a branch',
            refVariable: ['tree', 'list']
        }
    };

    Controller.prototype.references = {
        tree: {
            type: ['tree'],
            label: 'A tree with children'
        },
        leaf: {
            label: 'Value of the leaf'
        },
        list: {
            type: 'array',
            label: 'A list of children'
        }
    };

    Controller.prototype.variablesIn = ['tree'];

    return Controller;

});
