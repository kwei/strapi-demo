import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'faq.product': FaqProduct;
      'faq.version': FaqVersion;
    }
  }
}
