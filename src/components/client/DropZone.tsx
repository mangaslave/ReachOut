import React, {Dispatch, SetStateAction, useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";
import {twMerge} from "tailwind-merge";

export default function Dropzone({setFileData}: {setFileData: Dispatch<SetStateAction<File | undefined>>}) {
  const [dragOver, setDragOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setDragOver(false);
    setIsLoading(true);
    acceptedFiles.forEach((file: File) => {
      if (file.type !== "application/pdf") {
        alert("Wrong file type, only pdf files allowed");
        setIsLoading(false);
        return;
      }
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
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}
