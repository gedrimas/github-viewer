import "../App.css";

interface IProps {
  setName: (name: string) => void;
  name: string;
  setRepo: (repo: string) => void;
  repo: string;
  setBranch: (branch: string) => void;
  branch: string;
  setSubmit: (creds: string[]) => void;
}

const ChooseRepo: React.FC<IProps> = ({
  setName,
  name,
  setRepo,
  repo,
  setBranch,
  branch,
  setSubmit,
}) => {
  return (
    <>
      <label>
        Your Github name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Your Github repo:{" "}
        <input
          type="text"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
      </label>
      <label>
        Your Repo branch:{" "}
        <input
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        />
      </label>
      <input
        type="submit"
        value="Search"
        onClick={() => setSubmit([name, repo, branch])}
      />
    </>
  );
};

export default ChooseRepo;
