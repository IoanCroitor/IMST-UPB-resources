import { c as create_ssr_component, i as is_promise, n as noop, e as escape, d as compute_rest_props, f as spread, h as escape_attribute_value, j as escape_object, k as add_classes, l as createEventDispatcher, v as validate_component, o as add_attribute } from "../../chunks/ssr.js";
import register from "highlight.js/lib/languages/cpp";
import hljs from "highlight.js/lib/core";
async function calculateMechanism(k) {
  const l1 = 0.029;
  const l2 = 0.104;
  const l3 = 0.078;
  const l3s = 0.048;
  const l4 = 0.094;
  const xE = 0.085;
  const yE = -0.014;
  const yF = 0;
  const phi1_deg = k * 10;
  const phi1_rad = phi1_deg * Math.PI / 180;
  const omega1 = 2;
  const A = 2 * (l1 * l2 * Math.cos(phi1_rad) - l2 * xE);
  const B = 2 * (l1 * l2 * Math.sin(phi1_rad) - l2 * yE);
  const C = Math.pow(l3, 2) - Math.pow(l1, 2) - Math.pow(l2, 2) - Math.pow(xE, 2) - Math.pow(yE, 2) + 2 * l1 * xE * Math.cos(phi1_rad) + 2 * l1 * yE * Math.sin(phi1_rad);
  const term1 = 2 * B * C;
  const term2 = Math.sqrt(
    4 * Math.pow(B, 2) * Math.pow(C, 2) - 4 * (Math.pow(A, 2) + Math.pow(B, 2)) * (Math.pow(C, 2) - Math.pow(A, 2))
  );
  const term3 = 2 * (Math.pow(A, 2) + Math.pow(B, 2));
  const sin_phi2_1 = (term1 + term2) / term3;
  const sin_phi2_2 = (term1 - term2) / term3;
  const phi2_rad_1 = Math.asin(sin_phi2_1);
  const phi2_rad_2 = Math.asin(sin_phi2_2);
  const sin_phi3 = (l1 * Math.sin(phi1_rad) + l2 * Math.sin(phi2_rad_1) - yE) / l3;
  const cos_phi3 = (l1 * Math.cos(phi1_rad) + l2 * Math.cos(phi2_rad_1) - xE) / l3;
  let phi3_rad = Math.asin(sin_phi3);
  let phi3_rad_corrected;
  if (sin_phi3 > 0 && cos_phi3 < 0) {
    phi3_rad_corrected = Math.PI - phi3_rad;
  } else if (sin_phi3 < 0 && cos_phi3 < 0) {
    phi3_rad_corrected = Math.PI + phi3_rad;
  } else if (sin_phi3 < 0 && cos_phi3 > 0) {
    phi3_rad_corrected = 2 * Math.PI - phi3_rad;
  } else {
    phi3_rad_corrected = phi3_rad;
  }
  const A1 = l2 * Math.sin(phi2_rad_1);
  const A2 = l2 * Math.cos(phi2_rad_1);
  const B1 = -l3 * Math.sin(phi3_rad_corrected);
  const B2 = -l3 * Math.cos(phi3_rad_corrected);
  const C1 = -l1 * omega1 * Math.sin(phi1_rad);
  const C2 = -l1 * omega1 * Math.cos(phi1_rad);
  const delta1 = A1 * B2 - A2 * B1;
  const delta2w = C1 * B2 - C2 * B1;
  const delta3w = A1 * C2 - A2 * C1;
  const omega2 = delta2w / delta1;
  const omega3 = delta3w / delta1;
  const D1 = -Math.pow(omega1, 2) * l1 * Math.cos(phi1_rad) - Math.pow(omega2, 2) * l2 * Math.cos(phi2_rad_1) + Math.pow(omega3, 2) * l3 * Math.cos(phi3_rad_corrected);
  const D2 = Math.pow(omega1, 2) * l1 * Math.sin(phi1_rad) + Math.pow(omega2, 2) * l2 * Math.sin(phi2_rad_1) - Math.pow(omega3, 2) * l3 * Math.sin(phi3_rad_corrected);
  const delta2e = D1 * B2 - D2 * B1;
  const delta3e = A1 * D2 - A2 * D1;
  const sin_phi4 = (yF - yE - l3s * Math.sin(phi3_rad_corrected)) / l4;
  const phi4_rad = Math.asin(sin_phi4);
  return {
    phi1_deg,
    phi2_deg_1: phi2_rad_1 * 180 / Math.PI,
    phi2_deg_2: phi2_rad_2 * 180 / Math.PI,
    phi3: phi3_rad_corrected * 180 / Math.PI,
    omega2,
    omega3,
    epsilon2: delta2e / delta1,
    epsilon3: delta3e / delta1,
    phi4: phi4_rad * 180 / Math.PI
  };
}
const CalculatorResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { k = 5 } = $$props;
  let { showMechanismResults = true } = $$props;
  let { precision = 5 } = $$props;
  let phi1_deg = 0;
  let phi2_deg_1 = 0;
  let phi3 = 0;
  let omega2 = 0;
  let omega3 = 0;
  let epsilon2 = 0;
  let epsilon3 = 0;
  let phi4 = 0;
  let mechanism;
  async function setMechanismResults(k2, precision2) {
    mechanism = await calculateMechanism(k2);
    phi1_deg = mechanism.phi1_deg.toPrecision(precision2);
    phi2_deg_1 = mechanism.phi2_deg_1.toPrecision(precision2);
    mechanism.phi2_deg_2.toPrecision(precision2);
    phi3 = mechanism.phi3.toPrecision(precision2);
    omega2 = mechanism.omega2.toPrecision(precision2);
    omega3 = mechanism.omega3.toPrecision(precision2);
    epsilon2 = mechanism.epsilon2.toPrecision(precision2);
    epsilon3 = mechanism.epsilon3.toPrecision(precision2);
    phi4 = mechanism.phi4.toPrecision(precision2);
  }
  if ($$props.k === void 0 && $$bindings.k && k !== void 0)
    $$bindings.k(k);
  if ($$props.showMechanismResults === void 0 && $$bindings.showMechanismResults && showMechanismResults !== void 0)
    $$bindings.showMechanismResults(showMechanismResults);
  if ($$props.precision === void 0 && $$bindings.precision && precision !== void 0)
    $$bindings.precision(precision);
  {
    setMechanismResults(k, precision);
  }
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p class="text-text text-2xl animate-pulse" data-svelte-h="svelte-m0ctst">Loading... Waiting for results</p> `;
    }
    return /* @__PURE__ */ function() {
      return ``;
    }();
  }(mechanism)} ${showMechanismResults ? `<div class="bg-terminal p-4 text-lg font-semibold font-mono"><p class="text-text text-xl font-sans">Rezultate pentru k=<span class="text-blue-200 ">${escape(k)}</span>:</p> <p><span class="text-blue-200 " data-svelte-h="svelte-1imhkw2">Phi 1: </span><span class="text-white">${escape(phi1_deg)}</span><span class="text-blue-200 " data-svelte-h="svelte-it15gw">°</span></p> <p><span class="text-blue-200 " data-svelte-h="svelte-6hnvzy">Phi 2.1: </span><span class="text-white">${escape(phi2_deg_1)}</span><span class="text-blue-200 " data-svelte-h="svelte-it15gw">°</span></p> <p><span class="text-blue-200 " data-svelte-h="svelte-vypk0b">Phi 2.2: </span><span class="text-white">${escape(phi2_deg_1)}</span><span class="text-blue-200 " data-svelte-h="svelte-it15gw">°</span></p> <p class="pt-4"><span class="text-purple-200 " data-svelte-h="svelte-1mqg9si">Phi 3: </span><span class="text-white">${escape(phi3)}</span><span class="text-purple-200 " data-svelte-h="svelte-197p8u6">°</span></p> <p><span class="text-purple-200 " data-svelte-h="svelte-zzbuzd">Omega2: </span><span class="text-white">${escape(omega2)}</span><span class="text-purple-200 " data-svelte-h="svelte-n2inqt">rad/s</span></p> <p><span class="text-purple-200 " data-svelte-h="svelte-rqisv8">Omega3: </span><span class="text-white">${escape(omega3)}</span><span class="text-purple-200 " data-svelte-h="svelte-n2inqt">rad/s</span></p> <p class="pt-4"><span class="text-orange-200 " data-svelte-h="svelte-50pdv4">Epsilon2: </span><span class="text-white">${escape(epsilon2)}</span><span class="text-orange-200 " data-svelte-h="svelte-lidz79">rad/s</span></p> <p><span class="text-orange-200 " data-svelte-h="svelte-vsezy1">Epsilon3: </span><span class="text-white">${escape(epsilon3)}</span><span class="text-orange-200 " data-svelte-h="svelte-lidz79">rad/s</span></p> <p class="pt-4"><span class="text-green-200 " data-svelte-h="svelte-o7f2f4">Phi 4: </span><span class="text-white">${escape(phi4)}</span><span class="text-green-200 " data-svelte-h="svelte-1x3lztn">°</span></p></div>` : ``}`;
});
const css = {
  code: ".langtag.svelte-1w9vok{position:relative}.langtag.svelte-1w9vok::after{content:attr(data-language);position:absolute;top:var(--langtag-top, 0);right:var(--langtag-right, 0);display:flex;align-items:center;justify-content:center;background:var(--langtag-background, inherit);color:var(--langtag-color, inherit);border-radius:var(--langtag-border-radius, 0);padding:var(--langtag-padding, 1em)}",
  map: '{"version":3,"file":"LangTag.svelte","sources":["LangTag.svelte"],"sourcesContent":["<script>\\n  // @ts-check\\n\\n  /** @type {any} */\\n  export let code;\\n\\n  /** @type {string} */\\n  export let highlighted;\\n\\n  /** @type {string} */\\n  export let languageName = \\"plaintext\\";\\n\\n  /** @type {boolean} */\\n  export let langtag = false;\\n<\/script>\\n\\n<pre class:langtag data-language={languageName} {...$$restProps}><code\\n    class:hljs={true}\\n    >{#if highlighted}{@html highlighted}{:else}{code}{/if}</code\\n  ></pre>\\n\\n<style>\\n  .langtag {\\n    position: relative;\\n  }\\n\\n  .langtag::after {\\n    content: attr(data-language);\\n    position: absolute;\\n    top: var(--langtag-top, 0);\\n    right: var(--langtag-right, 0);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    background: var(--langtag-background, inherit);\\n    color: var(--langtag-color, inherit);\\n    border-radius: var(--langtag-border-radius, 0);\\n    padding: var(--langtag-padding, 1em);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsBE,sBAAS,CACP,QAAQ,CAAE,QACZ,CAEA,sBAAQ,OAAQ,CACd,OAAO,CAAE,KAAK,aAAa,CAAC,CAC5B,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,aAAa,CAAC,EAAE,CAAC,CAC1B,KAAK,CAAE,IAAI,eAAe,CAAC,EAAE,CAAC,CAC9B,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,oBAAoB,CAAC,QAAQ,CAAC,CAC9C,KAAK,CAAE,IAAI,eAAe,CAAC,QAAQ,CAAC,CACpC,aAAa,CAAE,IAAI,uBAAuB,CAAC,EAAE,CAAC,CAC9C,OAAO,CAAE,IAAI,iBAAiB,CAAC,IAAI,CACrC"}'
};
const LangTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["code", "highlighted", "languageName", "langtag"]);
  let { code } = $$props;
  let { highlighted } = $$props;
  let { languageName = "plaintext" } = $$props;
  let { langtag = false } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.highlighted === void 0 && $$bindings.highlighted && highlighted !== void 0)
    $$bindings.highlighted(highlighted);
  if ($$props.languageName === void 0 && $$bindings.languageName && languageName !== void 0)
    $$bindings.languageName(languageName);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  $$result.css.add(css);
  return `<pre${spread(
    [
      {
        "data-language": escape_attribute_value(languageName)
      },
      escape_object($$restProps)
    ],
    {
      classes: (langtag ? "langtag" : "") + " svelte-1w9vok"
    }
  )}><code${add_classes("hljs".trim())}>${highlighted ? `<!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END -->` : `${escape(code)}`}</code></pre>`;
});
const LangTag$1 = LangTag;
const Highlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["language", "code", "langtag"]);
  let { language } = $$props;
  let { code } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  let highlighted = "";
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  {
    {
      hljs.registerLanguage(language.name, language.register);
      highlighted = hljs.highlight(code, { language: language.name }).value;
    }
  }
  return `${slots.default ? slots.default({ highlighted }) : ` ${validate_component(LangTag$1, "LangTag").$$render($$result, Object.assign({}, $$restProps, { languageName: language.name }, { langtag }, { highlighted }, { code }), {}, {})} `}`;
});
const Highlight$1 = Highlight;
const cpp = { name: "cpp", register };
const cpp$1 = cpp;
const tokyoNightDark = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}
/*!
  Theme: Tokyo-night-Dark
  origin: https://github.com/enkia/tokyo-night-vscode-theme
  Description: Original highlight.js style
  Author: (c) Henri Vandersleyen <hvandersleyen@gmail.com>
  License: see project LICENSE
  Touched: 2022
*/.hljs-meta,
.hljs-comment{color:#565f89}.hljs-tag,
.hljs-doctag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-template-tag,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_,
.hljs-deletion{color:#f7768e}.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-link{color:#ff9e64}.hljs-built_in,
.hljs-attribute{color:#e0af68}.hljs-selector-tag{color:#2ac3de}.hljs-keyword,
.hljs-title.function_,
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-subst,
.hljs-property{color:#7dcfff}.hljs-selector-tag{color:#73daca}.hljs-quote,
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition{color:#9ece6a}.hljs-code,
.hljs-formula,
.hljs-section{color:#7aa2f7}.hljs-name,
.hljs-keyword,
.hljs-operator,
.hljs-keyword,
.hljs-char.escape_,
.hljs-attr{color:#bb9af7}.hljs-punctuation{color:#c0caf5}.hljs{background:#1a1b26;color:#9aa5ce}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}</style>`;
const tokyoNightDark$1 = tokyoNightDark;
const CodeRenderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code = " int hello_world(){return0;}; " } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `${$$result.head += `<!-- HEAD_svelte-1ug0e8h_START --><!-- HTML_TAG_START -->${tokyoNightDark$1}<!-- HTML_TAG_END --><!-- HEAD_svelte-1ug0e8h_END -->`, ""} ${validate_component(Highlight$1, "Highlight").$$render($$result, { language: cpp$1, code }, {}, {})}`;
});
const CodeService = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { code } = $$props;
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p class="text-text" data-svelte-h="svelte-wtwf34">Loading...</p> `;
    }
    return function(code2) {
      return ` ${validate_component(CodeRenderer, "CodeRenderer").$$render($$result, { code: code2 }, {}, {})} `;
    }(__value);
  }(code)}`;
});
async function loadGithubCode(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    if (error instanceof Error) {
      throw new Error(
        "There was a problem while fetching the C++ code from our GitHub repository: " + error.message
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
const codeCppPreview = "https://github.com/IoanCroitor/IMST-UPB-resources/blob/main/Calculator%20Cinematica%20C%2B%2B/main.cpp";
const CodeWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const codeCPP = loadGithubCode("https://raw.githubusercontent.com/IoanCroitor/IMST-UPB-resources/main/Calculator%20Cinematica%20C%2B%2B/main.cpp");
  loadGithubCode("https://raw.githubusercontent.com/IoanCroitor/IMST-UPB-resources/main/Calculator%20Cinematica%20C%2B%2B/mainWASM.cpp");
  let githubLink = codeCppPreview;
  let styleBTN1 = "bg-opacity-90 backdrop-blur-lg text-gray-800";
  let styleBTN2 = "bg-opacity-10 text-gray-500";
  return `<div class="rounded-xl overflow-hidden bg-terminal/40 backdrop-blur-lg will-change-contents"><div class="flex flex-row h-9 my-2 px-4"><div class="bg-slate-800 rounded-xl overflow-hidden flex items-center"><button${add_attribute("class", `bg-primary h-full flex items-center px-2 font-semibold ${styleBTN1}`, 0)}>C++</button> <button${add_attribute("class", `bg-primary h-full flex items-center px-2 font-semibold ${styleBTN2}`, 0)}>WASM Ready</button></div> <a${add_attribute("href", githubLink, 0)} target="_blank" class="text-text my-auto font-semibold ml-auto">Get it on Github!</a></div> ${validate_component(CodeService, "CodeService").$$render(
    $$result,
    {
      code: codeCPP
    },
    {},
    {}
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let k = 0;
  let precision = 5;
  return `<h1 class="bg-gradient-to-br from-fuchsia-200 to-utext text-transparent bg-clip-text block text-3xl xl:font-4xl font-bold" data-svelte-h="svelte-16k4see">Calculator Cinematica</h1> <article class="text-lg text-text pb-4 pt-6" data-svelte-h="svelte-15qz307">Acest program calculează unghiurile, vitezele și accelerațiile unui mecanism dat, folosind o valoare specifică introdusă de utilizator. Prin aplicarea ecuațiilor matematice și principiilor fizicii, transformă valoarea introdusă într-o serie de rezultate precise care descriu comportamentul mecanismului în spațiu.</article> <div class="bg-terminal/40 rounded-t-xl px-4 pt-4 pb-6 "><div class="w-full flex flex-row items-center justify-between"><h2 class="text-xl text-utext" data-svelte-h="svelte-vmkidp">Valoarea lui k:</h2> <input type="number" min="0" class="bg-text/10 backdrop-blur-lg text-text w-1/2 rounded-xl p-2 focus:outline-accent border-none outline-none"${add_attribute("value", k, 0)}></div> <div class="w-full flex flex-row items-center justify-between pt-4"><h2 class="text-xl text-utext" data-svelte-h="svelte-1s4ilii">Precizie calcul:</h2> <input max="15" min="0" type="number" class="bg-text/10 backdrop-blur-lg text-text w-1/2 rounded-xl p-2 focus:outline-accent border-none outline-none"${add_attribute("value", precision, 0)}></div></div> <div class="rounded-b-xl overflow-hidden will-change-contents"><div class="w-full h-[1px] bg-gradient-to-r from-transparent via-primary"></div> ${validate_component(CalculatorResults, "CalculatorResults").$$render($$result, { k, precision }, {}, {})}</div>  <div class="my-6"><h2 class="text-text text-lg py-1" data-svelte-h="svelte-z8d8gn">Codul sursa ce sta la baza calculatorului</h2> ${validate_component(CodeWrapper, "CodeWrapper").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
