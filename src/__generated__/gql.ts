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
    "\nquery RepoFileContent($owner: String!, $name: String!, $branchFile: String) {\n  repository(owner: $owner, name: $name) {\n    file: object(expression: $branchFile) {\n      ... on Blob {\n        text\n        byteSize\n      }\n    }\n  }\n}\n": types.RepoFileContentDocument,
    "\n  query RepoContent($owner: String!, $name: String!, $branch: String) {\n    repository(owner: $owner, name: $name) {\n      files: object(expression: $branch) {\n        ... on Tree {\n          entries {\n            name\n            mode\n          }  \n        }\n      }\n    }\n  }\n": types.RepoContentDocument,
    "\n  query RepoFolderContent($owner: String!, $name: String!, $branchFolder: String) {\n    repository(owner: $owner, name: $name) {\n      files: object(expression: $branchFolder) {\n        ... on Tree {\n          entries {\n            name\n            mode\n          }  \n        }\n      }\n    }\n  }\n": types.RepoFolderContentDocument,
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
export function gql(source: "\nquery RepoFileContent($owner: String!, $name: String!, $branchFile: String) {\n  repository(owner: $owner, name: $name) {\n    file: object(expression: $branchFile) {\n      ... on Blob {\n        text\n        byteSize\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery RepoFileContent($owner: String!, $name: String!, $branchFile: String) {\n  repository(owner: $owner, name: $name) {\n    file: object(expression: $branchFile) {\n      ... on Blob {\n        text\n        byteSize\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query RepoContent($owner: String!, $name: String!, $branch: String) {\n    repository(owner: $owner, name: $name) {\n      files: object(expression: $branch) {\n        ... on Tree {\n          entries {\n            name\n            mode\n          }  \n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query RepoContent($owner: String!, $name: String!, $branch: String) {\n    repository(owner: $owner, name: $name) {\n      files: object(expression: $branch) {\n        ... on Tree {\n          entries {\n            name\n            mode\n          }  \n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query RepoFolderContent($owner: String!, $name: String!, $branchFolder: String) {\n    repository(owner: $owner, name: $name) {\n      files: object(expression: $branchFolder) {\n        ... on Tree {\n          entries {\n            name\n            mode\n          }  \n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query RepoFolderContent($owner: String!, $name: String!, $branchFolder: String) {\n    repository(owner: $owner, name: $name) {\n      files: object(expression: $branchFolder) {\n        ... on Tree {\n          entries {\n            name\n            mode\n          }  \n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;