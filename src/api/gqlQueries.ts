import {gql} from '../__generated__/gql'

export const REPO_FILE_CONTENT = gql(`
query RepoFileContent($owner: String!, $name: String!, $branchFile: String) {
  repository(owner: $owner, name: $name) {
    file: object(expression: $branchFile) {
      ... on Blob {
        text
        byteSize
      }
    }
  }
}
`);

export const REPO_CONTENT = gql(`
  query RepoContent($owner: String!, $name: String!, $branch: String) {
    repository(owner: $owner, name: $name) {
      files: object(expression: $branch) {
        ... on Tree {
          entries {
            name
            mode
          }  
        }
      }
    }
  }
`);

export const REPO_FOLDER_CONTENT = gql(`
  query RepoFolderContent($owner: String!, $name: String!, $branchFolder: String) {
    repository(owner: $owner, name: $name) {
      files: object(expression: $branchFolder) {
        ... on Tree {
          entries {
            name
            mode
          }  
        }
      }
    }
  }
`);