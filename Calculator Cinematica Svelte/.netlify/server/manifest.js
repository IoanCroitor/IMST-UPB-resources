export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CZGJf1LW.js","app":"_app/immutable/entry/app.Cnv2RMcM.js","imports":["_app/immutable/entry/start.CZGJf1LW.js","_app/immutable/chunks/entry.JtoETAeL.js","_app/immutable/chunks/scheduler.GlOTkYKu.js","_app/immutable/entry/app.Cnv2RMcM.js","_app/immutable/chunks/scheduler.GlOTkYKu.js","_app/immutable/chunks/index.gx05mnzi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
