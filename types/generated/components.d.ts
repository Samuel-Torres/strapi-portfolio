import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleHeroArticleHero extends Schema.Component {
  collectionName: 'components_article_hero_article_heroes';
  info: {
    displayName: 'article-hero';
    icon: 'picture';
    description: '';
  };
  attributes: {
    imageSource: Attribute.Media & Attribute.Required;
    linkUrl: Attribute.String;
    ImageCreatorsName: Attribute.String;
  };
}

export interface ArticleImageArticleImage extends Schema.Component {
  collectionName: 'components_article_image_article_images';
  info: {
    displayName: 'articleImage';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    imageSource: Attribute.Media & Attribute.Required;
    ImageCreatorsName: Attribute.String;
    linkUrl: Attribute.String;
    alt: Attribute.String;
  };
}

export interface CodeBlockCodeBlock extends Schema.Component {
  collectionName: 'components_code_block_code_blocks';
  info: {
    displayName: 'code-block';
    icon: 'layer';
  };
  attributes: {
    code: Attribute.Blocks & Attribute.Required;
  };
}

export interface ContentAsideContentAside extends Schema.Component {
  collectionName: 'components_content_aside_content_asides';
  info: {
    displayName: 'content-aside';
    icon: 'layout';
  };
  attributes: {
    isFlipped: Attribute.Boolean;
    text: Attribute.Blocks & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
    orientation: Attribute.Enumeration<['row', 'column']> &
      Attribute.Required &
      Attribute.DefaultTo<'row'>;
  };
}

export interface EmbeddedArticleCardEmbeddedArticleCard
  extends Schema.Component {
  collectionName: 'components_embedded_article_card_embedded_article_cards';
  info: {
    displayName: 'embeddedArticleCard';
    icon: 'medium';
  };
  attributes: {
    null: Attribute.String;
  };
}

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'socials';
    icon: 'manyToMany';
  };
  attributes: {
    ignore: Attribute.Boolean;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
    icon: 'bold';
  };
  attributes: {
    text: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article-hero.article-hero': ArticleHeroArticleHero;
      'article-image.article-image': ArticleImageArticleImage;
      'code-block.code-block': CodeBlockCodeBlock;
      'content-aside.content-aside': ContentAsideContentAside;
      'embedded-article-card.embedded-article-card': EmbeddedArticleCardEmbeddedArticleCard;
      'socials.socials': SocialsSocials;
      'text.text': TextText;
    }
  }
}
