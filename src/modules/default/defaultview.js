'use strict';

define(['src/util/util'], function (Util) {

    return {

        initDefault: function () {
            this.onReady = true;
        },

        init: function () {
            this.resolveReady();
        },

        setModule: function (module) {
            this.module = module;
        },

        update: {},

        blank: {},

        onResize: Util.noop,

        onActionReceive: {
            _editPreferences: function (values) {

                var currentPreferences = this.module.definition.configuration,
                    aliases = this.module.controller.configAliases;

                var cfgEl;

                function getCfgEl(alias) {
                    var cfgEl = currentPreferences;
                    for (var i = 0, l = alias.length - 1; i < l; i++) {
                        cfgEl = cfgEl[alias[i]];
                        if (typeof cfgEl === 'undefined') {
                            break;
                        }
                    }
                    return cfgEl;
                }

                for (var i in values) {
                    if (values.hasOwnProperty(i)) {
                        var alias = aliases[i];
                        if (alias) {
                            cfgEl = getCfgEl(aliases[i]);
                            cfgEl[0] = values[i];
                        }
                    }
                }

                this.module.reload();

            }
        },

        inDom: Util.noop,

        resolveReady: function () {
            this.module._resolveView();
        },

        showLoading: function () {
            this.module.domLoading.addClass('ci-module-loading-visible');
        },

        hideLoading: function () {
            this.module.domLoading.removeClass('ci-module-loading-visible');
        },

        //TODO hack for chrome
        // see http://jsfiddle.net/jub3ohct/3/
        refresh: function () {
            var el = this.module.getDomContent();
            el.hide();
            setImmediate(function () {
                el.show();
            });
        }
    };

});
