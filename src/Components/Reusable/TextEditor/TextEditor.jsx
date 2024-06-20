import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import '@ckeditor/ckeditor5-build-classic/build/translations/fa';

const TextEditor = ({ dataSet, data }) => {
  return (
    <CKEditor
      
      editor={ClassicEditor}
      data={data}
      onChange={(event, editor) => {
        let d = editor.getData()
        dataSet("description",d)
      }}
      config={{
        placeholder: "توضیحات محصول را وارد نمائید ..",
        language: 'fa',
      }}
      
    />
  );
};

export default TextEditor;
