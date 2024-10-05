/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CyseyClT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { H as Header, F as Footer, $ as $$Layout } from '../chunks/Footer_97Rmxerp.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  const form = document.getElementById("form");\n  const result = document.getElementById("result");\n\n  form.addEventListener("submit", function (e) {\n    const formData = new FormData(form);\n    e.preventDefault();\n\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    result.innerHTML = "Please wait...";\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        let json = await response.json();\n        if (response.status == 200) {\n          result.innerHTML = json.message;\n        } else {\n          console.log(response);\n          result.innerHTML = json.message;\n        }\n      })\n      .catch((error) => {\n        console.log(error);\n        result.innerHTML = "Something went wrong!";\n      })\n      .then(function () {\n        form.reset();\n        setTimeout(() => {\n          result.style.display = "none";\n        }, 3000);\n      });\n  });\n</script> '])), renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro..", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/components/Header.vue", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true })} ${maybeRenderHead()}<div class="hero-text pt-8 flex items-center justify-center bg-darkestblue" data-astro-cid-uw5kdbxl> <h1 class="text-seasalt" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>Contact</span> <span class="text-gradient" data-astro-cid-uw5kdbxl>me</span> </h1> </div> <div class="section white relative" data-astro-cid-uw5kdbxl> <div class="blue-wave-divider" data-astro-cid-uw5kdbxl> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-astro-cid-uw5kdbxl> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" data-astro-cid-uw5kdbxl></path> </svg> </div> <div class="text-area text-xl p-8 flex w-auto flex-col justify-start items-center font-jakarta bg-seasalt" data-astro-cid-uw5kdbxl> <p class="m-2" data-astro-cid-uw5kdbxl>email: alexdollard141@gmail.com</p> <p class="m-2 pb-2" data-astro-cid-uw5kdbxl>phone: 770-542-9231</p> </div> <form method="POST" id="form" class="flex flex-col bg-transparent gap-1 max-w-md mx-auto px-8 rounded-md" data-astro-cid-uw5kdbxl> <input type="hidden" name="access_key"${addAttribute("58177190-04ce-4344-a245-ad51baeecf68", "value")} data-astro-cid-uw5kdbxl> <label for="name" class="text-slate-100 pl-2" data-astro-cid-uw5kdbxl>Name</label> <input type="text" name="name" required class="mb-2 mx-2 rounded-sm p-1" data-astro-cid-uw5kdbxl> <label for="email" class="text-slate-100 pl-2" data-astro-cid-uw5kdbxl>Email</label> <input type="email" name="email" required class="mb-2 mx-2 rounded-sm p-1" data-astro-cid-uw5kdbxl> <label for="message" class="text-slate-100 pl-2" data-astro-cid-uw5kdbxl>Message</label> <textarea name="message" required class="mb-2 mx-2 rounded-sm p-4" data-astro-cid-uw5kdbxl></textarea> <button type="submit" class="text-slate-100 p-2 my-2 mx-auto w-1/3 rounded-md border border-slate-100 hover:scale-110" data-astro-cid-uw5kdbxl>Holler at me!</button> <div id="result" class="text-slate-100 pl-2" data-astro-cid-uw5kdbxl></div> </form> </div> ${renderComponent($$result2, "Footer", Footer, { "class": "footer", "data-astro-cid-uw5kdbxl": true })} ` }));
}, "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/contact.astro", void 0);
const $$file = "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
