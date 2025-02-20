export default [
  'strapi::logger',
  'strapi::errors',
	{
		name: 'strapi::security',
		config: {
			contentSecurityPolicy: {
				useDefaults: true,
				directives: {
					'script-src': ['https://cdn.ckeditor.com'],
					'connect-src': ["'self'", 'https:', 'https://proxy-event.ckeditor.com'],
					'img-src': ["'self'", 'data:', 'https://assist.cyberlink.com'],
				},
			},
		},
	},
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
