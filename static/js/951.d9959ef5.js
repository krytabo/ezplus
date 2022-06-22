"use strict";
(self["webpackChunkvue3_ezplus_official_website"] = self["webpackChunkvue3_ezplus_official_website"] || []).push([[951],{

/***/ 2951:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Testimonials; }
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9812);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Testimonials.vue?vue&type=template&id=429c83e6

const _hoisted_1 = {
  class: "container2 w-full bg-gray-900 bg-opacity-80 pb-2 pt-14"
};
const _hoisted_2 = {
  class: "bg-gradient-to-b from-black py-10 px-8 lg:px-12 xl:px-52"
};

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("首頁");

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("應用案例");

const _hoisted_5 = {
  class: "my-0 mx-auto -mt-4 mb-40 flex flex-col bg-white py-20 px-4 sm:px-10 lg:px-20",
  style: {
    "border-radius": "60px",
    "max-width": "1186px"
  }
};

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  class: "mb-20 text-center"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "mb-1.5 text-center text-4xl font-bold text-blue-500"
}, "應用案例"), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
  class: "text-center text-lg uppercase"
}, "Case Study")], -1);

const _hoisted_7 = {
  class: "grid grid-cols-1 gap-x-8 gap-y-8 px-4 pt-10 md:grid-cols-3"
};
const _hoisted_8 = ["src"];
const _hoisted_9 = {
  class: "text-base"
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
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_a_breadcrumb_item, {
      class: "text-white"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
      _: 1
    })]),
    _: 1
  })]), (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_5, [_hoisted_6, (0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_7, [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.TestimonialsList, item => {
    return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
      key: item.id,
      class: "flex w-full flex-col items-center justify-center space-y-4 rounded-2xl border border-gray-200 p-8 hover:shadow-6"
    }, [(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
      src: item.photo,
      alt: "",
      class: "w-42 rounded-lg object-cover"
    }, null, 8, _hoisted_8), (0,runtime_core_esm_bundler/* createElementVNode */._)("p", _hoisted_9, (0,shared_esm_bundler/* toDisplayString */.zw)(item.info), 1)]);
  }), 128))])])]);
}
;// CONCATENATED MODULE: ./src/components/Testimonials.vue?vue&type=template&id=429c83e6

;// CONCATENATED MODULE: ./static/testimonials.json
var testimonials_namespaceObject = JSON.parse('[{"id":0,"title":"經濟部工業局","photo":"./assets/clients/經濟部LOGO.svg","info":"智慧物聯網（AIoT）的AR履歷、設施管理、IOT能源管理、 資通應用服務等平台工具，提供建設數位資訊行動化作業管理， 進行BIM設施營運管理應用、IOT大數據分析與機器學習演算、 和府級治理數據儀表板。"},{"id":1,"title":"中國人壽-台北敦北學苑大樓","photo":"./assets/clients/中壽LOGO.svg","info":"中國人壽以「為保戶、股東、員工及社會創造最大利益及價值， 以成為最值得信賴的保險公司」為願景， 一直以來持續精進公司治理與內控機制。"},{"id":2,"title":"陶朱隱園","photo":"./assets/clients/陶朱隱園LOGO.svg","info":"陶朱隱園堅持著一棟傳遞「陶朱精神」 並可以屹立不搖的綠色建築， 研究創新設計結構工法、精密工序， 延長建築物壽命以落實綠色理念。"},{"id":3,"title":"晨禎營造","photo":"./assets/clients/晨禎LOGO.svg","info":"晨禎營造以「誠真踏實、精鑄所託」為企業宗旨， 透過每件承攬實績的技術創新及價值，逐步體現企業理念； 安心為建築的完竣標準， 層疊出值得信賴的建築。"},{"id":4,"title":"陸府建設","photo":"./assets/clients/陸府建設LOGO.svg","info":"『新四合院、人文工程、綠海建築、社區總體營造』是陸府深植的建築核心， 社區一家親的敦睦生活、主題館的人文美學活動、精湛的綠海守護團隊、跨社區結盟互動平台。"},{"id":5,"title":"龍寶建設","photo":"./assets/clients/龍寶LOGO.svg","info":"偌大的建築量體謙遜地退後一步， 向城市禮讓出一個小公園， 一條環繞街廓的散步道， 「分享與共好」是臻邸建築的精神之一； 多年來，龍寶建設未曾停止這樣實踐。"},{"id":6,"title":"璞真建設","photo":"./assets/clients/璞真LOGO.svg","info":"璞真像棵樹，也像是種樹的人， 選在2002年10月14日這天成立， 取一人一樹之意，作建築本心，對環境，對人， 密密融合。對土地，念念不忘。"}]');
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Testimonials.vue?vue&type=script&lang=js

/* harmony default export */ var Testimonialsvue_type_script_lang_js = ({
  name: "Testimonials",
  components: {},

  data() {
    return {
      TestimonialsList: testimonials_namespaceObject
    };
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {}
});
;// CONCATENATED MODULE: ./src/components/Testimonials.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Testimonials.vue?vue&type=style&index=0&id=429c83e6&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Testimonials.vue?vue&type=style&index=0&id=429c83e6&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(8998);
;// CONCATENATED MODULE: ./src/components/Testimonials.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Testimonialsvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var Testimonials = (__exports__);

/***/ })

}]);