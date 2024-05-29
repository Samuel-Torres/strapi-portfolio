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

export interface MediaAndAsideMediaAndAside extends Schema.Component {
  collectionName: 'components_media_and_aside_media_and_asides';
  info: {
    displayName: 'media-and-aside';
    icon: 'layout';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    text: Attribute.Blocks & Attribute.Required;
    isFlipped: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface MediaAsideMediaAside extends Schema.Component {
  collectionName: 'components_media_aside_media_asides';
  info: {
    displayName: 'media-aside';
    icon: 'layout';
  };
  attributes: {
    isFlipped: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    text: Attribute.Blocks & Attribute.Required;
    media: Attribute.Media & Attribute.Required;
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
      'content-aside.content-aside': ContentAsideContentAside;
      'media-and-aside.media-and-aside': MediaAndAsideMediaAndAside;
      'media-aside.media-aside': MediaAsideMediaAside;
      'text.text': TextText;
    }
  }
}
