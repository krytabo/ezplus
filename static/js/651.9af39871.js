"use strict";
(self["webpackChunkvue3_ezplus_official_website"] = self["webpackChunkvue3_ezplus_official_website"] || []).push([[651],{

/***/ 7651:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Technology; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9812);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Technology.vue?vue&type=template&id=966ef772

const _hoisted_1 = {
  class: "container2 w-full bg-gray-900 bg-opacity-80 pb-2 pt-14"
};
const _hoisted_2 = {
  class: "bg-gradient-to-b from-black py-10 px-8 lg:px-12 xl:px-52"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("首頁");

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("關於我們");

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("技術核心");

const _hoisted_6 = {
  class: "my-0 mx-auto -mt-4 mb-40 flex flex-col bg-white py-20 px-4 sm:px-10 lg:px-20",
  style: {
    "border-radius": "60px",
    "max-width": "1186px"
  }
};

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "mb-20 text-center"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "mb-1.5 text-4xl font-bold text-blue-500"
}, "技術核心"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-lg uppercase"
}, "TECHNICAL ADVANTAGES")], -1);

const _hoisted_8 = {
  class: "grid grid-cols-1 gap-x-8 gap-y-8 px-4 pt-10 md:grid-cols-2"
};
const _hoisted_9 = {
  class: "flex w-full flex-row items-center justify-start space-x-4"
};
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  class: "text-2xl font-bold"
};
const _hoisted_12 = {
  class: "whitespace-pre-wrap text-left text-lg"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,runtime_core_esm_bundler/* resolveComponent */.up)("router-link");

  const _component_a_breadcrumb_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("a-breadcrumb-item");

  const _component_a_breadcrumb = (0,runtime_core_esm_bundler/* resolveComponent */.up)("a-breadcrumb");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_a_breadcrumb, {
    class: "w-full text-left"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_a_breadcrumb_item, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
        to: "/",
        class: "text-white text-opacity-75"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_a_breadcrumb_item, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_router_link, {
        to: "/news",
        class: "text-white text-opacity-75"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_a_breadcrumb_item, {
      class: "text-white"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
      _: 1
    })]),
    _: 1
  })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_6, [_hoisted_7, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.technologyList, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: item.id,
      class: "flex w-full flex-col items-center justify-center space-y-6 rounded-2xl border border-gray-200 p-8 hover:shadow-6"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_9, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
      src: item.photo,
      alt: ""
    }, null, 8, _hoisted_10), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_11, (0,shared_esm_bundler/* toDisplayString */.zw)(item.title), 1)]), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_12, (0,shared_esm_bundler/* toDisplayString */.zw)(item.info), 1)]);
  }), 128))])])]);
}
;// CONCATENATED MODULE: ./src/components/Technology.vue?vue&type=template&id=966ef772

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Technology.vue?vue&type=script&lang=js
/* harmony default export */ var Technologyvue_type_script_lang_js = ({
  name: "HomePage",
  components: {},

  data() {
    return {
      technologyList: [{
        id: 1,
        photo: __webpack_require__(8383),
        title: "Open BIM 整合性平台",
        info: "BIM#雲端管理平台以Open BIM概念為設計基礎，不局限於特定廠牌軟體使用，而是提供各式3D建模軟體，透過IFC交換格式進行匯入，以達到整合多元資訊之目的。"
      }, {
        id: 2,
        photo: __webpack_require__(4089),
        title: "輕量化壓縮技術",
        info: "3D模型在使用時，硬體設備上存在著大量儲存和運算需求，所以過去難以將BIM資訊透過行動裝置導入至現場實務作業流程上。EZ TIT 透過獨家輕量化壓縮技術克服上述的限制，讓BIM模型可流暢且平順地在行動裝置上進行快速的操作及使用。"
      }, {
        id: 3,
        photo: __webpack_require__(9066),
        title: "平面定位技術",
        info: "為了能快速的協助使用者找到自己所在的空間位置，並查閱所需位置的BIM資訊。EZ TIT 透過平面定位技術，讓使用者透過平面空間圖進行直覺式的操作，如拖曳定位點，選擇方向視角，來快速調閱3D模型資訊。"
      }, {
        id: 4,
        photo: __webpack_require__(8381),
        title: "綜合感知定位技術",
        info: "在現場查驗作業或巡檢作業上，為了讓使用者可透過行動裝置，快速的瀏覽BIM資訊與現場狀況進行比對。透過綜合感知定位技術，即可對使用者的位置進行連續定位和軌跡紀錄，並可切換虛擬實境和擴增實境的操做模式。"
      }]
    };
  },

  mounted() {},

  methods: {}
});
;// CONCATENATED MODULE: ./src/components/Technology.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(8998);
;// CONCATENATED MODULE: ./src/components/Technology.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Technologyvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var Technology = (__exports__);

/***/ }),

/***/ 8383:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/open bim.eb86884b.svg";

/***/ }),

/***/ 9066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/平面定位.18174d19.svg";

/***/ }),

/***/ 8381:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/綜合感知定位.0cef376d.svg";

/***/ }),

/***/ 4089:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/輕量化壓縮.7d4c2d24.svg";

/***/ })

}]);