export default () => ({
	documentation: {
		enabled: true,
		config: {
			openapi: '3.0.0',
			info: {
				version: '0.0.1',
				title: 'Blog CMS API',
				description: 'The generated APIs for the Blog CMS.',
				termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',
				contact: {
					name: 'KW Yeh (RD-CL.com)',
					email: 'kw_yeh@cyberlink.com',
				},
				license: {
					name: 'Apache 2.0',
					url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
				},
			},
			'x-strapi-config': {
				// Leave empty to ignore plugins during generation
				plugins: [ 'upload', 'users-permissions'],
				path: '/documentation',
			},
			servers: [{ url: 'http://localhost:1337/api', description: 'Development server' }],
			externalDocs: {
				description: 'Find out more',
				url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
			},
			security: [ { bearerAuth: [] } ]
		}
	},
	'extended-ckeditor': {
		enabled: true,
		resolve: './src/plugins/extended-ckeditor'
	},
});
