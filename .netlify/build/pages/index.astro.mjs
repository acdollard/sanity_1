/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CyseyClT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { H as Header, F as Footer, $ as $$Layout } from '../chunks/Footer_97Rmxerp.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hillsboro Web Designs", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/components/Header.vue", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="w-100 relative" data-astro-cid-j7pv25f6> <div class="hero-text h-96 flex items-center justify-center bg-darkestblue" data-astro-cid-j7pv25f6> <h1 class="text-seasalt font-jakarta" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Welcome</span> <span class="text-gradient" data-astro-cid-j7pv25f6>home.</span> </h1> </div> <div class="spacer wave-white-to-blue flex w-100 flex-col justify-center items-center h-80" data-astro-cid-j7pv25f6></div> <div class="text-area text-2xl flex w-100 flex-col justify-center items-center font-jakarta bg-seasalt" data-astro-cid-j7pv25f6> <p class="mb-2" data-astro-cid-j7pv25f6>Building lean, beautiful websites.</p> <p class="" data-astro-cid-j7pv25f6>Just for you.</p> </div> <div class="spacer wave-2 h-96" data-astro-cid-j7pv25f6></div> </main> ${renderComponent($$result2, "Footer", Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/index.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
