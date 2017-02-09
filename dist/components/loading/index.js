(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                exports: {},
                id: moduleId,
                loaded: false
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
    }([ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(3);
    }, function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            name: "xcui-loading",
            props: {
                show: {
                    type: Boolean,
                    default: false
                },
                type: {
                    type: String,
                    default: "load2"
                },
                classname: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: ""
                },
                size: {
                    type: String,
                    default: "md"
                }
            },
            methods: {}
        };
    }, function(module, exports) {}, function(module, exports, __webpack_require__) {
        var __vue_exports__, __vue_options__;
        var __vue_styles__ = {};
        __webpack_require__(2);
        __vue_exports__ = __webpack_require__(1);
        var __vue_template__ = __webpack_require__(4);
        __vue_options__ = __vue_exports__ = __vue_exports__ || {};
        if (typeof __vue_exports__.default === "object" || typeof __vue_exports__.default === "function") {
            __vue_options__ = __vue_exports__ = __vue_exports__.default;
        }
        if (typeof __vue_options__ === "function") {
            __vue_options__ = __vue_options__.options;
        }
        __vue_options__.render = __vue_template__.render;
        __vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
        module.exports = __vue_exports__;
    }, function(module, exports) {
        module.exports = {
            render: function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show,
                        expression: "show"
                    } ],
                    staticClass: "xcui-loading load-container",
                    class: [ _vm.type, _vm.size, _vm.classname ]
                }, [ _c("div", {
                    staticClass: "loader",
                    style: {
                        color: _vm.color
                    }
                }) ]);
            },
            staticRenderFns: []
        };
    } ]);
});

