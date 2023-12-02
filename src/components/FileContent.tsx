import { QueryResult } from "@apollo/client/react/types/types"
import "../App.css"
import { checkFileResp } from "../helpers/checkFileResp";
import { Exact, InputMaybe, RepoFileContentQuery } from "../__generated__/graphql"

interface IProps {
    fetchRepoFileContent: (file: string) => QueryResult<RepoFileContentQuery, Exact<{
        owner: string;
        name: string;
        branchFile?: InputMaybe<string> | undefined;
    }>>
    fileName: string
}

const FileContent: React.FC<IProps> = ({fetchRepoFileContent, fileName}) => {
    const fetchRepoFileContentResult = fetchRepoFileContent(fileName);
    const repoFileContent = checkFileResp(
      fetchRepoFileContentResult?.data?.repository?.file
    );
    return (
        <>
            {repoFileContent}
        </>
    )
}

export default FileContent