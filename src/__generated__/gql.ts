/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  ": types.HeaderGeneralSettingsFragmentFragmentDoc,
    "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  ": types.PrimaryMenuItemFragmentFragmentDoc,
    "\n        fragment HeroSectionBlocks on HeroSectionBlocks {\n            __typename\n            heroDescription\n            heroTitle\n            heroCta {\n            ctaLink {\n              target\n              title\n              url\n            }\n            ctaText\n          }\n        }\n    ": types.HeroSectionBlocksFragmentDoc,
    "\n        fragment HeroVideo on HeroVideo {\n            __typename\n            heroVideoUri\n          }\n    ": types.HeroVideoFragmentDoc,
    "\n        fragment BlocksWhoWeAre on BlocksWhoWeAre {\n            __typename\n            subtitleWwa\n            titleWwa\n            descriptionWwa\n            ctaWwa {\n            ctaWwaLink {\n              target\n              title\n              url\n            }\n            ctaWwaTitle\n          }\n        }\n    ": types.BlocksWhoWeAreFragmentDoc,
    "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetExamplePageDocument,
    "\n  query GetArchive($uri: String!) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetArchiveDocument,
    "\nquery GetHomePage {\n  generalSettings {\n    title\n    description\n  }\n  primaryMenuItems: menuItems(where: {location: PRIMARY}) {\n    nodes {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  }\n  nickelBronxHeader {\n    config {\n      ctaText\n      ctaLink\n      brandLogo {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n  page(id: \"cG9zdDoyMw==\") {\n    editorBlocks {\n      ... on AcfHeroSection {\n        heroSectionBlocks {\n          heroCta {\n            ctaLink {\n              target\n              title\n              url\n            }\n            ctaText\n          }\n          heroDescription\n          heroTitle\n        }\n        clientId\n      }\n     ... on AcfHeroVideoSection {  \n         heroVideo {\n          heroVideoUri\n        }\n        clientId\n      }\n\n       ... on AcfWhoWeAreSection {\n        blocksWhoWeAre {\n           ctaWwa {\n            ctaWwaLink {\n              target\n              title\n              url\n            }\n            ctaWwaTitle\n          }\n         subtitleWwa\n            titleWwa\n            descriptionWwa\n        }\n        clientId\n      }\n\n    }\n  }\n}\n": types.GetHomePageDocument,
    "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPageDocument,
    "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.GetPostDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  "): (typeof documents)["\n    fragment HeaderGeneralSettingsFragment on GeneralSettings {\n      title\n      description\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment PrimaryMenuItemFragment on MenuItem {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        fragment HeroSectionBlocks on HeroSectionBlocks {\n            __typename\n            heroDescription\n            heroTitle\n            heroCta {\n            ctaLink {\n              target\n              title\n              url\n            }\n            ctaText\n          }\n        }\n    "): (typeof documents)["\n        fragment HeroSectionBlocks on HeroSectionBlocks {\n            __typename\n            heroDescription\n            heroTitle\n            heroCta {\n            ctaLink {\n              target\n              title\n              url\n            }\n            ctaText\n          }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        fragment HeroVideo on HeroVideo {\n            __typename\n            heroVideoUri\n          }\n    "): (typeof documents)["\n        fragment HeroVideo on HeroVideo {\n            __typename\n            heroVideoUri\n          }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        fragment BlocksWhoWeAre on BlocksWhoWeAre {\n            __typename\n            subtitleWwa\n            titleWwa\n            descriptionWwa\n            ctaWwa {\n            ctaWwaLink {\n              target\n              title\n              url\n            }\n            ctaWwaTitle\n          }\n        }\n    "): (typeof documents)["\n        fragment BlocksWhoWeAre on BlocksWhoWeAre {\n            __typename\n            subtitleWwa\n            titleWwa\n            descriptionWwa\n            ctaWwa {\n            ctaWwaLink {\n              target\n              title\n              url\n            }\n            ctaWwaTitle\n          }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetExamplePage {\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetArchive($uri: String!) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArchive($uri: String!) {\n    nodeByUri(uri: $uri) {\n      archiveType: __typename\n      ... on Category {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n      ... on Tag {\n        name\n        posts {\n          nodes {\n            id\n            title\n            uri\n          }\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetHomePage {\n  generalSettings {\n    title\n    description\n  }\n  primaryMenuItems: menuItems(where: {location: PRIMARY}) {\n    nodes {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  }\n  nickelBronxHeader {\n    config {\n      ctaText\n      ctaLink\n      brandLogo {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n  page(id: \"cG9zdDoyMw==\") {\n    editorBlocks {\n      ... on AcfHeroSection {\n        heroSectionBlocks {\n          heroCta {\n            ctaLink {\n              target\n              title\n              url\n            }\n            ctaText\n          }\n          heroDescription\n          heroTitle\n        }\n        clientId\n      }\n     ... on AcfHeroVideoSection {  \n         heroVideo {\n          heroVideoUri\n        }\n        clientId\n      }\n\n       ... on AcfWhoWeAreSection {\n        blocksWhoWeAre {\n           ctaWwa {\n            ctaWwaLink {\n              target\n              title\n              url\n            }\n            ctaWwaTitle\n          }\n         subtitleWwa\n            titleWwa\n            descriptionWwa\n        }\n        clientId\n      }\n\n    }\n  }\n}\n"): (typeof documents)["\nquery GetHomePage {\n  generalSettings {\n    title\n    description\n  }\n  primaryMenuItems: menuItems(where: {location: PRIMARY}) {\n    nodes {\n      id\n      uri\n      path\n      label\n      parentId\n      cssClasses\n      menu {\n        node {\n          name\n        }\n      }\n    }\n  }\n  nickelBronxHeader {\n    config {\n      ctaText\n      ctaLink\n      brandLogo {\n        node {\n          sourceUrl\n        }\n      }\n    }\n  }\n  page(id: \"cG9zdDoyMw==\") {\n    editorBlocks {\n      ... on AcfHeroSection {\n        heroSectionBlocks {\n          heroCta {\n            ctaLink {\n              target\n              title\n              url\n            }\n            ctaText\n          }\n          heroDescription\n          heroTitle\n        }\n        clientId\n      }\n     ... on AcfHeroVideoSection {  \n         heroVideo {\n          heroVideoUri\n        }\n        clientId\n      }\n\n       ... on AcfWhoWeAreSection {\n        blocksWhoWeAre {\n           ctaWwa {\n            ctaWwaLink {\n              target\n              title\n              url\n            }\n            ctaWwaTitle\n          }\n         subtitleWwa\n            titleWwa\n            descriptionWwa\n        }\n        clientId\n      }\n\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {\n    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {\n    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {\n      title\n      content\n      date\n      author {\n        node {\n          name\n        }\n      }\n    }\n    generalSettings {\n      title\n      description\n    }\n    primaryMenuItems: menuItems(where: { location: PRIMARY }) {\n      nodes {\n        id\n        uri\n        path\n        label\n        parentId\n        cssClasses\n        menu {\n          node {\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;