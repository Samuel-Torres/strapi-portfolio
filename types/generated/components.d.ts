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
      'code-block.code-block': CodeBlockCodeBlock;
      'content-aside.content-aside': ContentAsideContentAside;
      'socials.socials': SocialsSocials;
      'text.text': TextText;
    }
  }
}
