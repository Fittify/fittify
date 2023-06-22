export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["home.jpg","lobby_form_photos/basketball_photo.png","lobby_form_photos/cycling_photo.png","lobby_form_photos/football_photo.png","lobby_form_photos/jogging_photo.png","lobby_form_photos/swimming_photo.png","lobby_form_photos/tennis_photo.png","lobby_form_photos/volleyball_photo.png","lobby_form_photos/yoga_photo.png","logo.png","log_in.jpg","sign_up.jpg","sport_icons/basketball_icon.png","sport_icons/cycling_icon.png","sport_icons/football_icon.png","sport_icons/jogging_icon.png","sport_icons/swimming_icon.png","sport_icons/tennis_icon.png","sport_icons/volleyball_icon.png","sport_icons/yoga_icon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.873d5f6b.js","app":"_app/immutable/entry/app.79c53eec.js","imports":["_app/immutable/entry/start.873d5f6b.js","_app/immutable/chunks/index.a4282f4a.js","_app/immutable/chunks/singletons.cbcf4755.js","_app/immutable/chunks/index.a108b02c.js","_app/immutable/entry/app.79c53eec.js","_app/immutable/chunks/index.a4282f4a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/create-lobby",
				pattern: /^\/create-lobby\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/lobbies",
				pattern: /^\/lobbies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
