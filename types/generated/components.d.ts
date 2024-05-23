import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleHeroArticleHero extends Schema.Component {
  collectionName: 'components_article_hero_article_heroes';
  info: {
    displayName: 'article-hero';
    icon: 'picture';
  };
  attributes: {
    imageSource: Attribute.Media & Attribute.Required;
  };
}

export interface MediaAndAsideMediaAndAside extends Schema.Component {
  collectionName: 'components_media_and_aside_media_and_asides';
  info: {
    displayName: 'media-and-aside';
    icon: 'layout';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    text: Attribute.Blocks;
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
      'media-and-aside.media-and-aside': MediaAndAsideMediaAndAside;
      'text.text': TextText;
    }
  }
}
