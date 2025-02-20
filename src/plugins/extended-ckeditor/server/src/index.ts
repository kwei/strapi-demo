import type { Core } from '@strapi/strapi';

export default {
  register: ({ strapi }: { strapi: Core.Strapi }) => {
    strapi.customFields.register({
      name: 'Customed-CKEditor',
      plugin: 'extended-ckeditor',
      type: 'richtext',
    });
  },
};
