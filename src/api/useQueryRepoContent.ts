import { useQuery } from "@apollo/client";
import {
  REPO_CONTENT,
  REPO_FOLDER_CONTENT,
  REPO_FILE_CONTENT,
} from "./gqlQueries";
import {DEFAULT_REPO} from '../constants'

const useQueryRepoContent = (
  user: string = DEFAULT_REPO.USER,
  repo: string = DEFAULT_REPO.REPO,
  branch: string = DEFAULT_REPO.BRANCH
) => {
  const fetchRepoContent = () => {
    return useQuery(REPO_CONTENT, {
      variables: {
        owner: user,
        name: repo,
        branch: `${branch}:`,
      },
    });
  };

  const fetchRepoFolderContent = (folder: string) => {
    return useQuery(REPO_FOLDER_CONTENT, {
      variables: {
        owner: user,
        name: repo,
        branchFolder: `${branch}:${folder}`,
      },
    });
  };

  const fetchRepoFileContent = (file: string) => {
    return useQuery(REPO_FILE_CONTENT, {
      variables: {
        owner: user,
        name: repo,
        branchFile: `${branch}:${file}`,
      },
    });
  };

  return { fetchRepoContent, fetchRepoFolderContent, fetchRepoFileContent };
};

export default useQueryRepoContent;
