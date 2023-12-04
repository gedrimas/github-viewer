import "./App.css";
import { useState } from "react";
import useQueryRepoContent from "./api/useQueryRepoContent";
import RepoTree from "./components/RepoTree";
import FileContent from "./components/FileContent";
import ChooseRepo from "./components/ChooseRepo";
import {DEFAULT_REPO} from './constants'


const App: React.FC = () => {
  const [fileName, setFileName] = useState("");
  const [name, setName] = useState<string>(DEFAULT_REPO.USER);
  const [repo, setRepo] = useState<string>(DEFAULT_REPO.REPO);
  const [branch, setBranch] = useState<string>(DEFAULT_REPO.BRANCH);
  const [submit, setSubmit] = useState<string[]>([])

  const { fetchRepoContent, fetchRepoFolderContent, fetchRepoFileContent } =
    useQueryRepoContent(...submit);
 

  return (
    <>
      <div className="chooseRepo">
        <ChooseRepo
          setName={setName}
          name={name}
          setRepo={setRepo}
          repo={repo}
          setBranch={setBranch}
          branch={branch}
          setSubmit={setSubmit}
        />
      </div>
      <div className="viewerBlockWrapper">
        <RepoTree
          fetchRepoContent={fetchRepoContent}
          fetchRepoFolderContent={fetchRepoFolderContent}
          setFileName={setFileName}
        />
        <div className="fileContentBlock">
          <FileContent
            fetchRepoFileContent={fetchRepoFileContent}
            fileName={fileName}
          />
        </div>
      </div>
    </>
  );
};

export default App;
