import { RepoContentQuery } from "../__generated__/graphql";

export interface IEntries {
  __typename?: "Tree" | undefined;
  entries: {
    __typename?: "TreeEntry" | undefined;
    name: string;
    mode: number;
    path: string;
    node: IEntries["entries"][];
  }[];
}

const isEntries = (content: unknown | IEntries): content is IEntries => {
  return (content as IEntries)?.__typename === "Tree";
};

export const normalizeData = (data: RepoContentQuery | undefined) => {
  let repoContent: IEntries["entries"] = [];

  const content = data?.repository?.files;

  if (isEntries(content)) {
    repoContent = content.entries.map((itm) => {
      return { ...itm, node: [] };
    });
  }
  return repoContent;
};

