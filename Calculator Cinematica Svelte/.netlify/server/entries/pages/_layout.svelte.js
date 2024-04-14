import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-2xl mx-auto px-4 pb-6" data-svelte-h="svelte-t2v9km"><div class="flex text-xl flex-col content-center pt-3"><div class="mx-auto"><p class="text-transparent bg-clip-text font-mono block bg-gradient-to-r font-semibold from-purple-200 to-pink-300">Made with ❤️ by <a href="https://github.com/IoanCroitor" target="_blank" class="italic ">Ioan Croitor</a> using</p></div> <div class="flex-row flex justify-center gap-2 pt-2"><div class="w-8 h-8"><img class="object-contain w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" alt="Svelte Logo"></div> <div class="w-8 h-8"><img class="object-contain w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript Logo"></div> <div class="w-8 h-8"><img class="object-contain w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ Logo"></div> <div class="w-8 h-8"><img class="object-contain w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg" alt="WASM Logo"></div></div> <p class="text-utext mx-auto text-sm pt-4">Copyright © 2024. All rights reserved.</p> <p class="text-utext mx-auto text-xs">Distributed under the MIT License. For more information, see the <a href="https://github.com/IoanCroitor/IMST-UPB-resources/blob/main/LICENSE" target="_blank" class="text-text underline ">license</a>.</p></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-2xl mx-auto px-4 pt-12">${slots.default ? slots.default({}) : ``}</div> <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer>`;
});
export {
  Layout as default
};
