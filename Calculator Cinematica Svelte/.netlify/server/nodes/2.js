

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DgsVrQu6.js","_app/immutable/chunks/scheduler.GlOTkYKu.js","_app/immutable/chunks/index.gx05mnzi.js"];
export const stylesheets = ["_app/immutable/assets/2.DC0tRSs2.css"];
export const fonts = [];