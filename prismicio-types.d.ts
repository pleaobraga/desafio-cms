// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *posts → content*
 */
export interface PostsDocumentDataContentItem {
  /**
   * heading field in *posts → content*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.content[].heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * body field in *posts → content*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.content[].body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * Content for posts documents
 */
interface PostsDocumentData {
  /**
   * title field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * subtitle field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * author field in *posts*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * banner field in *posts*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>;

  /**
   * content field in *posts*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: posts.content[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  content: prismic.GroupField<Simplify<PostsDocumentDataContentItem>>;
}

/**
 * posts document from Prismic
 *
 * - **API ID**: `posts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PostsDocumentData>, 'posts', Lang>;

export type AllDocumentTypes = PostsDocument;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type { PostsDocument, PostsDocumentData, AllDocumentTypes };
  }
}
