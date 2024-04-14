

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CcBk0mUq.js","_app/immutable/chunks/scheduler.GlOTkYKu.js","_app/immutable/chunks/index.gx05mnzi.js"];
export const stylesheets = ["_app/immutable/assets/0.B3Jo9yF9.css"];
export const fonts = [];
