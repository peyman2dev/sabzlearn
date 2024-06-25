import React, { useEffect } from "react";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

const TextEditor = ({ setValue }) => {
  const { quill, quillRef } = useQuill();
  useEffect(() => {
    if (quill) {
      quill.format("align", "right");
      quill.on("text-change", () => setValue(quill.root.innerHTML)); // Get innerHTML using quill)
    }
  }, [quill]);

  return (
    <div className="w-full ">
      <div ref={quillRef}></div>
    </div>
  );
};

export default TextEditor;
