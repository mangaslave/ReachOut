import React, {useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";
import {twMerge} from "tailwind-merge";

export default function Dropzone() {
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
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // TODO: Do we want to store this as binary string or just the whole pdf?
        const binaryStr = reader.result;
      };
      reader.readAsArrayBuffer(file);
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
