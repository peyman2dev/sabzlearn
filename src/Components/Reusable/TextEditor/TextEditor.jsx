import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const TextEditor = ({ dataSet, data }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={(event, editor) => {
        let d = editor.getData()
        dataSet(d)
      }}
    />
  );
};

export default TextEditor;
