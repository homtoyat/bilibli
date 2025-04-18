import "./styles.scss";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
const MAX_CHARS = 100;
const Tiptap = () => {
  const [charCount, setCharCount] = useState(0);
  const [lastValidContent, setLastValidContent] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "宫廷玉液走一走😊",
      }),
    ],
    onUpdate({ editor }) {
      const currentContent = editor.getHTML();
      const textContent = editor.getText();
      const currentLength = textContent.length;

      // 超过限制时回滚内容
      if (currentLength > MAX_CHARS) {
        editor.commands.setContent(lastValidContent);

        return;
      }

      setCharCount(currentLength);
      setLastValidContent(currentContent);
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
