import { QueryResult } from "@apollo/client/react/types/types";
import { useEffect, useState } from "react";
import "../App.css";
import { IEntries, normalizeData } from "../helpers/normalizeData";
import {
  Exact,
  InputMaybe,
  RepoContentQuery,
  RepoFolderContentQuery,
} from "../__generated__/graphql";

interface IProps {
  fetchRepoContent: () => QueryResult<
    RepoContentQuery,
    Exact<{
      owner: string;
      name: string;
      branch?: InputMaybe<string> | undefined;
    }>
  >;
  fetchRepoFolderContent: (folder: string) => QueryResult<
    RepoFolderContentQuery,
    Exact<{
      owner: string;
      name: string;
      branchFolder?: InputMaybe<string> | undefined;
    }>
  >;
  setFileName: (name: string) => void;
}

const RepoTree: React.FC<IProps> = ({
  fetchRepoContent,
  fetchRepoFolderContent,
  setFileName,
}) => {
  const [repoTree, setRepoTree] = useState<any>([]);
  const [folderName, setFolderName] = useState("");
  const fetchRepoContentResult = fetchRepoContent();
  const repoContent = normalizeData(fetchRepoContentResult.data);
  useEffect(() => {
    setRepoTree(repoContent as any);
  }, [repoContent.length]);

  const fetchRepoFolderContentResult = fetchRepoFolderContent(folderName);
  const repoNodeContent = normalizeData(fetchRepoFolderContentResult.data);

  const updateTree = (currentRepoTree: any[]) => {
    for (let itm in currentRepoTree) {
      if (
        currentRepoTree[itm].name === folderName ||
        currentRepoTree[itm]?.path === folderName
      ) {
        if (currentRepoTree[itm]?.node?.length > 0) continue;

        repoNodeContent.forEach((f) => {
          const name = f.name;
          const newName = `${folderName}/${name}`;
          f.path = newName;
          currentRepoTree[itm].node.push(f);
        });
      } else if (currentRepoTree[itm]?.node?.length) {
        updateTree(currentRepoTree[itm]?.node);
      }
    }
    return currentRepoTree;
  };
  const updatedTree = updateTree(repoTree);
  useEffect(() => {
    setRepoTree(updatedTree);
  }, [folderName]);

  const handlerOpenFolder = (folder: string) => {
    setFolderName(folder);
  };
  const handlerOpenFile = (file: string) => {
    setFileName(file);
  };

  const getTree = (repo: IEntries["entries"]) => {
    return repo.map((itm, inx) => {
      if (itm.mode === 16384) {
        return (
          <li key={itm.name + inx} style={{ listStyleType: "none" }}>
            <ul key={itm.name + inx} style={{ listStyleType: "none" }}>
              <button
                key={itm.name + inx}
                onClick={() => handlerOpenFolder(itm?.path || itm.name)}
              >
                {itm.name}
              </button>
              {getTree(itm.node)}
            </ul>
          </li>
        );
      } else {
        return (
          <ul key={itm.name + inx} style={{ listStyleType: "none" }}>
            <li
              key={itm.name + inx}
              style={{ listStyleType: "none", cursor: "pointer" }}
              onClick={() => handlerOpenFile(itm?.path || itm.name)}
            >
              {itm.name}
            </li>
          </ul>
        );
      }
    });
  };

  const repoTreeJSX = getTree(repoTree);

  return <div className="treeBlock">{repoTreeJSX}</div>;
};

export default RepoTree;
