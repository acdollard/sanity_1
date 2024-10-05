/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CyseyClT.mjs';
import 'kleur/colors';
import 'html-escaper';
import { H as Header, F as Footer, $ as $$Layout } from '../chunks/Footer_97Rmxerp.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_CpiY735q.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const alex = new Proxy({"src":"/_astro/alex.Dp0plkBN.JPG","width":706,"height":1318,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/assets/alex.JPG";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/components/Header.vue", "client:component-export": "default", "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<div class="min-h-screen" data-astro-cid-kh7btl4r> <div class="hero-text flex items-center justify-center bg-darkestblue" data-astro-cid-kh7btl4r> <h1 class="text-seasalt pt-8" data-astro-cid-kh7btl4r> <span data-astro-cid-kh7btl4r>About</span> <span class="text-gradient" data-astro-cid-kh7btl4r>me</span> </h1> </div> <div class="section white" data-astro-cid-kh7btl4r> <div class="blue-wave-divider" data-astro-cid-kh7btl4r> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-astro-cid-kh7btl4r> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" data-astro-cid-kh7btl4r></path> </svg> </div> <div class="flex justify-center mb-16 mt-8" data-astro-cid-kh7btl4r> <div class="text-area text-wrap text-xl font-jakarta gap-5 w-4/5 md:w-1/2" data-astro-cid-kh7btl4r> <div class="" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": alex, "alt": "Alex Dollard, founder", "height": "400", "class": "rounded-full float-left pr-6", "data-astro-cid-kh7btl4r": true })} </div> <p class="font-jakarta" data-astro-cid-kh7btl4r>
Now listen, I'm not here to throw stones. There are many automatic
            site builders out there that will let you spin up a semi-functional
            website quickly and do a fine job of it. Take WordPress, for
            example.
<br data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>
WordPress has been the backbone of the internet for as long as I can
            remember, and as I write this, it accounts for over 40% of all websites,
            so it's safe to say that it isn't going anywhere. But technology doesn't
            age the same way as great novels, or art. Art ages like wine. Technology
            ages like cheese.
<br data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>
What I do is build websites from scratch, using the most up-to-date tooling,
            and best practices learned in my 4+ years of professional experience
            as a software developer. In my experience as a freelancer, I've learned
            that there's a heavy price to be paid for the convenience that comes
            with services like WordPress, Squarespace, and Wix. These technologies
            are slow, bloated from old code, and vulnerable to attack from bad actors.
            They're written on top of legacy codebases that have grown so complex
            hardly anyone understands them anymore. And you can get something that
            looks <em data-astro-cid-kh7btl4r>okay</em>, but it's never exactly what you want.
<br data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>
By building my websites from scratch and using modern CMS alternatives
            like Sanity.io, I get rid of the need for WordPress its bloated competitors.
            My websites are stripped down from the groud up, which results in minimal
            load times and easier updates. I'm here to trim off the fat and give
            you exactly the website you want, one that's lean, performant, and beautiful.
            One that's easy to maintain and will help your small business get more
            visitors, more traffic, and more revenue.
<br data-astro-cid-kh7btl4r> <br data-astro-cid-kh7btl4r>
All I want to do is build great websites. Let me build one for you.
</p> <p class="text-sm italic mt-4" data-astro-cid-kh7btl4r>- Alex Dollard (pictured)</p> </div> </div> </div> </div> ${renderComponent($$result2, "Footer", Footer, { "data-astro-cid-kh7btl4r": true })} ` })} `;
}, "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/about.astro", void 0);

const $$file = "/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
