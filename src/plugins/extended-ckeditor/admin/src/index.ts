import * as yup from "yup";

export default {
	register(app) {
		app.customFields.register({
			name: "Customed-CKEditor",
			type: "richtext",
			pluginId: "extended-ckeditor",
			intlLabel: {
				id: "ckeditor.label",
				defaultMessage: "Customed CKEditor"
			},
			intlDescription: {
				id: "ckeditor.description",
				defaultMessage: "The rich text editor for every use case"
			},
			components: {
				Input: async () => await import( "./components/CKEditorProvider" )
			},
			options: {
				base: [
					{
						intlLabel: {
							id: "ckeditor.licenseKey.label",
							defaultMessage: "License key",
						},
						description: {
							id: "ckeditor.licenseKey.description",
							defaultMessage: "Don't have a license key? Visit https://portal.ckeditor.com/checkout?plan=free to receive it.",
						},
						name: "options.licenseKey",
						type: "text",
					},
					{
						intlLabel: {
							id: "ckeditor.preset.label",
							defaultMessage: "Choose editor version",
						},
						description: {
							id: "ckeditor.preset.description",
							defaultMessage: "Do you need more or less features?",
						},
						name: "options.preset",
						type: "select",
						options: [
							{
								key: "light",
								value: "light",
								metadatas: {
									intlLabel: {
										id: "ckeditor.preset.light.label",
										defaultMessage: "Light version"
									}
								}
							},
							{
								key: "standard",
								value: "standard",
								metadatas: {
									intlLabel: {
										id: "ckeditor.preset.standard.label",
										defaultMessage: "Standard version"
									}
								}
							},
							{
								key: "rich",
								value: "rich",
								metadatas: {
									intlLabel: {
										id: "ckeditor.preset.rich.label",
										defaultMessage: "Rich version"
									}
								}
							}
						],
					},
				],
				advanced: [
					{
						sectionTitle: null,
						items: [
							{
								name: "required",
								type: "checkbox",
								intlLabel: {
									id: "ckeditor.required.label",
									defaultMessage: "Required field",
								},
								description: {
									id: "ckeditor.required.description",
									defaultMessage: "You won't be able to create an entry if this field is empty",
								},
							},
							// Note: We can't call it simply "maxLength" because then Strapi
							// applies this to the length of HTML string automatically.
							// We want to apply this to the number of characters in the editor,
							// hence – a unique name.
							{
								name: "options.maxLengthCharacters",
								type: "checkbox-with-number-field",
								intlLabel: {
									id: "ckeditor.maxLength.label",
									defaultMessage: "Maximum length (characters)",
								}
							}
						],
					},
				],
				validator: args => ({
					preset: yup.string().required({
						id: "ckeditor.preset.error.required",
						defaultMessage: "Editor preset is required",
					}),
					licenseKey: yup.string().required({
						id: "ckeditor.licenseKey.error.required",
						defaultMessage: "Editor license key is required. Visit https://portal.ckeditor.com/checkout?plan=free to receive it.",
					}),
				}),
			},
		});
	},
	async registerTrads({locales}) {
		const importedTrads = await Promise.all(
			locales.map((locale) => {
				return import( `./translations/${locale}.json` )
					.then(({default: data}) => {
						return {
							data: data,
							locale,
						};
					})
					.catch(() => {
						return {
							data: {},
							locale,
						};
					});
			})
		);

		return Promise.resolve(importedTrads);
	},
};
