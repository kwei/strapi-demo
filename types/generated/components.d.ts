import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    intro: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::extended-ckeditor.Customed-CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzA1MDg3OTksImp0aSI6ImVjYWU3NDE2LWQ5NTEtNDJiZi04ZDE0LTgzNzFmZWI4YWI1OSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiZTJhZWY4YTEifQ.ve5Dc20Gd1bit1GR0SbYp2TJowkbmTvGBQl1J9L6CXocvQsHcWKgDLlSBdOLuW1wRv1G91kOIMppSmUpym3L1Q';
          preset: 'light';
        }
      >;
    list: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::extended-ckeditor.Customed-CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzA1MDg3OTksImp0aSI6ImVjYWU3NDE2LWQ5NTEtNDJiZi04ZDE0LTgzNzFmZWI4YWI1OSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiZTJhZWY4YTEifQ.ve5Dc20Gd1bit1GR0SbYp2TJowkbmTvGBQl1J9L6CXocvQsHcWKgDLlSBdOLuW1wRv1G91kOIMppSmUpym3L1Q';
          preset: 'rich';
        }
      >;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    props_cons: Schema.Attribute.Component<'pros-cons.pros-and-cons', false>;
    section_content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::extended-ckeditor.Customed-CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzA1MDg3OTksImp0aSI6ImVjYWU3NDE2LWQ5NTEtNDJiZi04ZDE0LTgzNzFmZWI4YWI1OSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiZTJhZWY4YTEifQ.ve5Dc20Gd1bit1GR0SbYp2TJowkbmTvGBQl1J9L6CXocvQsHcWKgDLlSBdOLuW1wRv1G91kOIMppSmUpym3L1Q';
          preset: 'rich';
        }
      >;
    section_title: Schema.Attribute.String;
    table: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::extended-ckeditor.Customed-CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzA1MDg3OTksImp0aSI6ImVjYWU3NDE2LWQ5NTEtNDJiZi04ZDE0LTgzNzFmZWI4YWI1OSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiZTJhZWY4YTEifQ.ve5Dc20Gd1bit1GR0SbYp2TJowkbmTvGBQl1J9L6CXocvQsHcWKgDLlSBdOLuW1wRv1G91kOIMppSmUpym3L1Q';
          preset: 'rich';
        }
      >;
  };
}

export interface FaqProduct extends Struct.ComponentSchema {
  collectionName: 'components_faq_products';
  info: {
    description: '';
    displayName: 'Product';
  };
  attributes: {
    prodId: Schema.Attribute.Integer;
    prodVerList: Schema.Attribute.Component<'faq.version', true>;
  };
}

export interface FaqVersion extends Struct.ComponentSchema {
  collectionName: 'components_faq_versions';
  info: {
    description: '';
    displayName: 'Version';
  };
  attributes: {
    prodVerId: Schema.Attribute.Integer;
  };
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProsConsProsAndCons extends Struct.ComponentSchema {
  collectionName: 'components_pros_cons_pros_and_cons';
  info: {
    displayName: 'Pros & Cons';
  };
  attributes: {
    cons: Schema.Attribute.JSON;
    pros: Schema.Attribute.JSON;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog': BlogBlog;
      'faq.product': FaqProduct;
      'faq.version': FaqVersion;
      'media.media': MediaMedia;
      'pros-cons.pros-and-cons': ProsConsProsAndCons;
      'section.section': SectionSection;
    }
  }
}
