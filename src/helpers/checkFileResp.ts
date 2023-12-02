interface IFile {
  __typename?: "Blob" | undefined;
  text?: string | null | undefined;
  byteSize: number;
}

function checkText(f: unknown | IFile): f is IFile {
  return !!(f as IFile)?.text;
}

export const checkFileResp = (file: unknown | IFile) => {
    if(checkText(file)) {
        return file.text
    }
};

