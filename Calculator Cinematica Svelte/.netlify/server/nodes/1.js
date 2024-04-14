

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1._cK1lWgo.js","_app/immutable/chunks/scheduler.GlOTkYKu.js","_app/immutable/chunks/index.gx05mnzi.js","_app/immutable/chunks/entry.JtoETAeL.js"];
export const stylesheets = [];
export const fonts = [];
