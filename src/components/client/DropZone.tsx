import React, {Dispatch, SetStateAction, useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";
import {twMerge} from "tailwind-merge";

export default function Dropzone({
  setFileData,
  resumeName,
  setResumeName,
}: {
  setFileData: Dispatch<SetStateAction<File | undefined>>;
  resumeName: string;
  setResumeName: Dispatch<SetStateAction<string>>;
}) {
  const [dragOver, setDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileDropped, setFileDropped] = useState(false);
  if (resumeName.length > 0) {
    setResumeName(resumeName);
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setDragOver(false);
    setFileDropped(true);
    setIsLoading(true);
    // TODO: Get rid of this forEach loop - only allow 1 resume file
    acceptedFiles.forEach((file: File) => {
      if (file.type !== "application/pdf") {
        alert("Wrong file type, only pdf files allowed");
        setFileDropped(false);
        setIsLoading(false);
        return;
      }
      setResumeName(file.name);
      setFileDropped(true);
      setFileData(file);
    });
    setIsLoading(false);
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div
      {...getRootProps()}
      onDragOver={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
      className={twMerge(
        "w-full h-full flex items-center justify-center border-dashed rounded-lg border-gray-200 border-2 hover:cursor-pointer",
        dragOver ? " border-caribbeanCurrant border-2" : "",
        isLoading ? "cursor-not-allowed" : ""
      )}
    >
      <input {...getInputProps()} />
      <p>
        {resumeName.length > 0
          ? `Resume attached: ${resumeName}`
          : "Drag 'n' drop resume here, or click to select files"}
      </p>
    </div>
  );
}
