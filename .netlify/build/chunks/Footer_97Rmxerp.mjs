import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_CyseyClT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Hillsboro Web Designs</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/layouts/Layout.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  __name: 'Header',
  setup(__props, { expose: __expose }) {
  __expose();

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};


const __returned__ = { isOpen, toggleOpen, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-seasalt pt-4 pb-2 sm:flex sm:justify-between sm:items-center font-jakarta" }, _attrs))} data-v-005dc09e><div class="flex items-center justify-between px-4" data-v-005dc09e><div class="p-2" data-v-005dc09e><h2 class="text-gradient text-2xl" data-v-005dc09e><a href="/" data-v-005dc09e>Hillsboro Web Designs</a></h2></div><div class="flex items-center sm:hidden" data-v-005dc09e>`);
  if (!$setup.isOpen) {
    _push(`<button class="p-2" data-v-005dc09e><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" data-v-005dc09e><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-v-005dc09e></path></svg></button>`);
  } else {
    _push(`<!---->`);
  }
  if ($setup.isOpen) {
    _push(`<button class="p-2" data-v-005dc09e><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" data-v-005dc09e><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" data-v-005dc09e></path></svg></button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="${ssrRenderClass([$setup.isOpen ? 'flex' : 'hidden', "px-2 sm:flex items-center justify-around"])}" data-v-005dc09e><a href="/" class="px-4 py-2 block text-slate-700 hover:font-semibold rounded" data-v-005dc09e>Home</a><a href="/about" class="px-4 py-2 block text-slate-700 hover:font-semibold rounded" data-v-005dc09e>About</a><a href="/contact" class="px-4 py-2 block text-slate-700 hover:font-semibold rounded" data-v-005dc09e>Contact</a></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const Header = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1],['__scopeId',"data-v-005dc09e"]]);

const _sfc_main = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer w-full bg-seasalt h-24 font-jakarta flex justify-center items-center z-10" }, _attrs))}><p> © Copyright 2024 | Hillsboro Web Designs</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Footer = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

export { $$Layout as $, Footer as F, Header as H };
