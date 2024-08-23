import { useEffect, useState } from "react";
import { RiUploadCloud2Line } from "react-icons/ri";

export default () => {
  const [file, setFile] = useState<string>("");

  useEffect(() => {
    document
      .getElementById("file")
      .addEventListener("change", function (event: any) {
        const filename: string = event.target.files[0].name;
        setFile(filename);
      });
  });

  return (
    <div className="max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center max-w-xs mx-auto w-80 p-5">
      <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
        <RiUploadCloud2Line className="w-10 h-10 mx-auto text-primary" />
        <p className="mt-3 text-gray-700 max-w-xs mx-auto">
          {file === "" ? (
            <>
              Click to{" "}
              <span className="font-medium text-primary">Upload your file</span>{" "}
              or drag and drop your file here
            </>
          ) : (
            <>
              Selected file:{" "}
              <span className="font-medium text-primary">{file}</span>
            </>
          )}
        </p>
      </label>
      <input
        id="file"
        type="file"
        className="hidden"
        accept=".html,.htm,.mdx,.md,.php,.js,.jsx,.tsx,.ts"
      />
    </div>
  );
};
