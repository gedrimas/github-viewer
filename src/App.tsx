import "./App.css";
import { useState } from "react";
export { REPO_CONTENT } from "./api/gqlQueries";
import useQueryRepoContent from "./api/useQueryRepoContent";
import RepoTree from "./components/RepoTree";
import FileContent from "./components/FileContent";
import ChooseRepo from "./components/ChooseRepo";

const App: React.FC = () => {
  const [fileName, setFileName] = useState("");
  const [name, setName] = useState("");
  const [repo, setRepo] = useState("");
  const [branch, setBranch] = useState("");
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
