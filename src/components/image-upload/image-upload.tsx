import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node";

import { Image } from "@tiptap/extension-image";
import { EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import * as React from "react";

import "@/components/tiptap-node/image-upload-node/image-upload-node.scss";

export default function EditorWithImageUpload() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: 30,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error("Upload failed:", error),
      }),
    ],
    content: "<p>Try uploading an image!</p>",
  });

  React.useEffect(() => {
    if (!editor) {
      return;
    }

    editor.chain().focus().setImageUploadNode().run();
  }, [editor]);

  return <EditorContent editor={editor} />;
}
