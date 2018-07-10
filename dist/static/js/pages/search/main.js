global.webpackJsonp([5],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_564ccf63_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(59);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-564ccf63"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_template_compiler_index_id_data_v_564ccf63_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_15_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-564ccf63", Component.options)
  } else {
    hotAPI.reload("data-v-564ccf63", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(12);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Fly = __webpack_require__(2); //npm引入方式
var fly = new Fly(); //创建fly实例
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            internal: false,
            searchData: {},
            firstName: ""
        };
    },

    onLoad: function onLoad(options) {
        var _this = this;

        wx.setNavigationBarTitle({
            title: "搜索界面" //页面标题为路由参数
        });
        var firstSearch = options.search;
        this.firstName = firstSearch;
        var firstSearchUrl = "http://localhost:3000/search?keywords=" + firstSearch;
        fly.get(firstSearchUrl, {}).then(function (d) {
            _this.searchData = d.data.result.songs;
        }).catch(function (err) {
            console.log(err.status, err.message);
        });
    },

    mounted: function mounted() {},

    methods: {
        bindKeyInput: function bindKeyInput(e) {
            this.bindKeyInput = e.target.value;
        },
        searchI: function searchI() {
            var _this2 = this;

            this.searchData = {};
            var searchValue = this.bindKeyInput;
            this.firstName = searchValue;
            var searchValueUrl = "http://localhost:3000/search?keywords=" + searchValue;
            fly.get(searchValueUrl, {}).then(function (d) {
                _this2.searchData = d.data.result.songs;
            }).catch(function (err) {
                console.log(err.status, err.message);
            });
        },
        musicUrl: function musicUrl(e) {
            var url = "../music/main?id=" + e;
            wx.navigateTo({ url: url });
        },

        //监听button暂停按钮
        listenerButtonPause: function listenerButtonPause() {
            var e = wx.getStorageSync("musicId");

            if (!e) {} else {
                var url = "../music/main?id=" + e;
                wx.navigateTo({ url: url });
            }
        },
        JoinTheList: function JoinTheList(e) {
            var chongfu = [];
            var playing = wx.getStorageSync("playing");
            for (var index = 0; index < playing.length; index++) {
                var element = playing[index].id;
                chongfu.push(element);
            }
            for (var _index = 0; _index < chongfu.length; _index++) {
                var elementq = chongfu[_index];
                if (elementq == e) {
                    var panduanchongfu = true;
                }
            }
            if (!panduanchongfu) {
                var status = {
                    id: e,
                    status: false
                };
                playing.unshift(status);
                wx.setStorageSync("playing", playing);
            }
        }
    }
});

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('input', {
    staticClass: "inputSearch",
    attrs: {
      "type": "text",
      "placeholder": "搜索歌曲",
      "value": _vm.firstName,
      "eventid": '0'
    },
    on: {
      "input": _vm.bindKeyInput
    }
  }), _vm._v(" "), _c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzU0MTYzNzM1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5MjAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDQxLjE5MiAxODEuODMxYzEzMi40OC0xMy43MDQgMjU1LjgyNCA2OC41MjQgMjkyLjM3MSAxOTEuODY4IDQuNTY4IDE4LjI3NC00LjU2OCAyNy40MS0xMy43MDQgMzEuOTc4LTkuMTM3IDAtMjIuODQxLTQuNTY4LTI3LjQxLTE4LjI3NC0zMS45NzgtMTA5LjYzOS0xMzcuMDQ5LTE3OC4xNjMtMjUxLjI1Ni0xNTkuODktMjIuODQxIDQuNTY3LTI3LjQxLTQxLjExNCAwLTQ1LjY4M3pNNzY1LjUzOSA2OTMuNDc5Yy00LjU2OC00LjU2NyAwLTE4LjI3NCA0LjU2Ny0yMi44NDEgNTAuMjUxLTYzLjk1NSA3Ny42NjEtMTQxLjYxNyA3Ny42NjEtMjI4LjQxMyAwLTIwMS4wMDQtMTY0LjQ1OS0zNjUuNDYzLTM2NS40NjMtMzY1LjQ2My0yMDEuMDA0IDAtMzY1LjQ2MyAxNjQuNDU5LTM2NS40NjMgMzY1LjQ2MyAwIDIwMS4wMDQgMTY0LjQ1OSAzNjUuNDYzIDM2NS40NjMgMzY1LjQ2MyA4Ni43OTcgMCAxNjQuNDU5LTI3LjQxIDIyMy44NDYtNzMuMDkyIDkuMTM3LTkuMTM3IDE4LjI3NC0xMy43MDQgMjcuNDEtNC41NjdsMTI3LjkxMyAxMzIuNDhjOS4xMzcgOS4xMzcgMjcuNDEgNC41NjcgMzYuNTQ3LTQuNTY3djBjOS4xMzctOS4xMzcgOS4xMzctMjIuODQxIDAtMzEuOTc4bC0xMzIuNDgtMTMyLjQ4ek00ODIuMzA3IDc2Ni41NzFjLTE3OC4xNjMgMC0zMTkuNzc5LTE0Ni4xODUtMzE5Ljc3OS0zMjQuMzQ4czE0MS42MTctMzE5Ljc3OSAzMTkuNzc5LTMxOS43NzljMTc4LjE2MyAwIDMyNC4zNDggMTQxLjYxNiAzMjQuMzQ4IDMxOS43NzkgMCAxNzguMTYzLTE0Ni4xODUgMzI0LjM0OC0zMjQuMzQ4IDMyNC4zNDh6IiBwLWlkPSIxOTIxIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+)",
      "background-size": "56rpx 56rpx",
      "width": "56rpx",
      "height": "56rpx"
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.searchI
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "20rpx"
    }
  }, _vm._l((_vm.searchData), function(item, index) {
    return _c('div', {
      key: item.id,
      staticClass: "searchTitle"
    }, [_c('div', {
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.musicUrl(item.id)
        }
      }
    }, [_c('div', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "searchName"
    }, [_vm._l((item.artists), function(itempeo, indexa) {
      return _c('p', {
        key: indexa
      }, [_vm._v("\n                        " + _vm._s(itempeo.name) + "  \n                    ")])
    }), _vm._v(" "), _c('p', [_vm._v("- " + _vm._s(item.album.name))])], 2)]), _vm._v(" "), _c('i', {
      staticStyle: {
        "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1NDI2MTQwNDE3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTE0LjA0OCA2Mi40NjRxOTMuMTg0IDAgMTc1LjYxNiAzNS4zMjh0MTQzLjg3MiA5Ni43NjggOTYuNzY4IDE0My44NzIgMzUuMzI4IDE3NS42MTZxMCA5NC4yMDgtMzUuMzI4IDE3Ni4xMjh0LTk2Ljc2OCAxNDMuMzYtMTQzLjg3MiA5Ni43NjgtMTc1LjYxNiAzNS4zMjhxLTk0LjIwOCAwLTE3Ni42NC0zNS4zMjh0LTE0My44NzItOTYuNzY4LTk2Ljc2OC0xNDMuMzYtMzUuMzI4LTE3Ni4xMjhxMC05My4xODQgMzUuMzI4LTE3NS42MTZ0OTYuNzY4LTE0My44NzIgMTQzLjg3Mi05Ni43NjggMTc2LjY0LTM1LjMyOHpNNzcyLjA5NiA1NzYuNTEycTI2LjYyNCAwIDQ1LjA1Ni0xOC45NDR0MTguNDMyLTQ1LjU2OC0xOC40MzItNDUuMDU2LTQ1LjA1Ni0xOC40MzJsLTE5Mi41MTIgMCAwLTE5Mi41MTJxMC0yNi42MjQtMTguOTQ0LTQ1LjU2OHQtNDUuNTY4LTE4Ljk0NC00NS4wNTYgMTguOTQ0LTE4LjQzMiA0NS41NjhsMCAxOTIuNTEyLTE5Mi41MTIgMHEtMjYuNjI0IDAtNDUuMDU2IDE4LjQzMnQtMTguNDMyIDQ1LjA1NiAxOC40MzIgNDUuNTY4IDQ1LjA1NiAxOC45NDRsMTkyLjUxMiAwIDAgMTkxLjQ4OHEwIDI2LjYyNCAxOC40MzIgNDUuNTY4dDQ1LjA1NiAxOC45NDQgNDUuNTY4LTE4Ljk0NCAxOC45NDQtNDUuNTY4bDAtMTkxLjQ4OCAxOTIuNTEyIDB6IiBwLWlkPSIzODA0IiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+)",
        "background-size": "40rpx 40rpx",
        "width": "40rpx",
        "height": "40rpx"
      },
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.JoinTheList(item.id)
        }
      }
    })], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "Playing",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.listenerButtonPause
    }
  }, [_c('div', {
    staticClass: "wrap"
  }, [_c('i', {
    staticStyle: {
      "background": "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI1MzU5NTQ5NTE5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxNTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDEwMjRjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtOTcyLjhjMC0xNC4zMzYgMTEuMjY0LTI1LjYgMjUuNi0yNS42czI1LjYgMTEuMjY0IDI1LjYgMjUuNnY5NzIuOGMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6TTI2OC44IDc4MC44Yy0xNC4zMzYgMC0yNS42LTExLjI2NC0yNS42LTI1LjZ2LTQ4Ni40YzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2NDg2LjRjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek0yNS42IDY1OS45NjhjLTE0LjMzNiAwLTI1LjYtMTEuMjY0LTI1LjYtMjUuNnYtMjQxLjE1MmMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djI0MS4xNTJjMCAxNC4zMzYtMTEuMjY0IDI1LjYtMjUuNiAyNS42ek03NTUuMiA3ODAuOGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di00ODYuNGMwLTE0LjMzNiAxMS4yNjQtMjUuNiAyNS42LTI1LjZzMjUuNiAxMS4yNjQgMjUuNiAyNS42djQ4Ni40YzAgMTQuMzM2LTExLjI2NCAyNS42LTI1LjYgMjUuNnpNOTk4LjQgNjU5Ljk2OGMtMTQuMzM2IDAtMjUuNi0xMS4yNjQtMjUuNi0yNS42di0yNDEuMTUyYzAtMTQuMzM2IDExLjI2NC0yNS42IDI1LjYtMjUuNnMyNS42IDExLjI2NCAyNS42IDI1LjZ2MjQxLjE1MmMwIDE0LjMzNi0xMS4yNjQgMjUuNi0yNS42IDI1LjZ6IiBwLWlkPSIyMTUzIiBmaWxsPSIjNzA1NGRkIj48L3BhdGg+PC9zdmc+)",
      "background-size": "80rpx 80rpx",
      "width": "80rpx",
      "height": "80rpx",
      "margin-top": "20rpx",
      "margin-left": "20rpx"
    }
  })], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-564ccf63", esExports)
  }
}

/***/ })

},[24]);
//# sourceMappingURL=main.js.map