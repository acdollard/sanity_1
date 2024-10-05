import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_CyseyClT.mjs';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/alexanderdollard/Development/Astro%20sites/blue-binary/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CEa6ZRly.css"},{"type":"inline","content":".container[data-astro-cid-kh7btl4r]{font-size:20px;line-height:1.6;flex-grow:auto}h1[data-astro-cid-kh7btl4r]{font-size:4rem;font-weight:600;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-kh7btl4r]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.text-area[data-astro-cid-kh7btl4r]{@media (max-width: 900px){display:flex;flex-direction:column;align-items:center}}.blue-wave-divider[data-astro-cid-kh7btl4r] .shape-fill[data-astro-cid-kh7btl4r]{fill:#13151a}.white-wave-divider[data-astro-cid-kh7btl4r]{position:absolute;top:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.white-wave-divider[data-astro-cid-kh7btl4r] svg[data-astro-cid-kh7btl4r]{position:relative;display:block;width:calc(267% + 1.3px);height:194px;transform:rotateY(180deg)}.wave[data-astro-cid-kh7btl4r] svg[data-astro-cid-kh7btl4r]{position:relative;display:block;width:calc(149% + 1.3px);height:194px}.section[data-astro-cid-kh7btl4r]{width:100%;@media (max-width: 500px){min-height:400px}}.dark-blue[data-astro-cid-kh7btl4r]{background:#13151a}span[data-astro-cid-kh7btl4r]{display:inline-block;opacity:0;filter:blur(4px)}span[data-astro-cid-kh7btl4r]:nth-child(1){animation:fade-in .8s .1s forwards cubic-bezier(.11,0,.5,0)}span[data-astro-cid-kh7btl4r]:nth-child(2){animation:fade-in .8s .2s forwards cubic-bezier(.11,0,.5,0)}@keyframes fade-in{to{opacity:1;filter:blur(0)}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CEa6ZRly.css"},{"type":"inline","content":"main[data-astro-cid-uw5kdbxl]{font-size:20px;line-height:1.6}h1[data-astro-cid-uw5kdbxl]{font-size:4rem;font-weight:600;line-height:1;text-align:center;margin-bottom:1em}.text-gradient[data-astro-cid-uw5kdbxl]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.blue-wave-divider[data-astro-cid-uw5kdbxl] .shape-fill[data-astro-cid-uw5kdbxl]{fill:#13151a}.white-wave-divider[data-astro-cid-uw5kdbxl]{position:absolute;top:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.white-wave-divider[data-astro-cid-uw5kdbxl] svg[data-astro-cid-uw5kdbxl]{position:relative;display:block;width:calc(267% + 1.3px);height:194px;transform:rotateY(180deg)}.white-wave-divider[data-astro-cid-uw5kdbxl] .shape-fill[data-astro-cid-uw5kdbxl]{fill:#f9f9f9}.wave[data-astro-cid-uw5kdbxl] svg[data-astro-cid-uw5kdbxl]{position:relative;display:block;width:calc(149% + 1.3px);height:194px}.section[data-astro-cid-uw5kdbxl]{width:100%;min-height:350px;@media (max-width: 500px){min-height:400px}}.white[data-astro-cid-uw5kdbxl]{background:#f9f9f9}.dark-blue[data-astro-cid-uw5kdbxl]{background:#13151a}span[data-astro-cid-uw5kdbxl]{display:inline-block;opacity:0;filter:blur(4px)}span[data-astro-cid-uw5kdbxl]:nth-child(1){animation:fade-in .8s .1s forwards cubic-bezier(.11,0,.5,0)}span[data-astro-cid-uw5kdbxl]:nth-child(2){animation:fade-in .8s .2s forwards cubic-bezier(.11,0,.5,0)}@keyframes fade-in{to{opacity:1;filter:blur(0)}}.footer[data-astro-cid-uw5kdbxl]{position:fixed;bottom:0;left:0}\n"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CEa6ZRly.css"},{"type":"external","src":"/_astro/index.DCxWbztG.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/alexanderdollard/Development/Astro sites/blue-binary/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bf4V69J-.mjs","/Users/alexanderdollard/Development/Astro sites/blue-binary/src/components/Header.vue":"_astro/Header.BsnndZsz.js","@astrojs/vue/client.js":"_astro/client.XTNhJ-EQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/alex.Dp0plkBN.JPG","/_astro/lily-script-one-latin-400-normal.D7lMaEhK.woff2","/_astro/plus-jakarta-sans-vietnamese-wght-normal.Bnh6xcKr.woff2","/_astro/plus-jakarta-sans-latin-wght-normal.BD2oGHtS.woff2","/_astro/plus-jakarta-sans-latin-ext-wght-normal.Ch-K9LVU.woff2","/_astro/jetbrains-mono-cyrillic-wght-normal.BptiBwAt.woff2","/_astro/jetbrains-mono-greek-wght-normal.BW1JPxja.woff2","/_astro/jetbrains-mono-vietnamese-wght-normal.By-yputv.woff2","/_astro/jetbrains-mono-latin-wght-normal.Ajscav9D.woff2","/_astro/jetbrains-mono-latin-ext-wght-normal.Com2F4yK.woff2","/_astro/lily-script-one-latin-400-normal.Ceq9_LxC.woff","/_astro/about.CEa6ZRly.css","/_astro/index.DCxWbztG.css","/favicon.svg","/_astro/Header.BsnndZsz.js","/_astro/about.2s71Padu.css","/_astro/client.XTNhJ-EQ.js","/_astro/runtime-core.esm-bundler.su0T4a3W.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"XnIxfW3eiroe01TKdEuPCynYg9npMwboSGUPmwfDGfQ=","experimentalEnvGetSecretEnabled":false});

export { manifest };
