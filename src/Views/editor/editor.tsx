import { useRef } from "react";
import grapesjs, { Editor as GjsEditorType } from "grapesjs";
import GjsEditor from "@grapesjs/react";
import blocksBasic from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";

export const Editor = () => {
    const editorRef = useRef<GjsEditorType | null>(null);

    const handleCopy = () => {
        const editor = editorRef.current;
        if (!editor) return;

        const html = `<style>${editor.getCss()}</style>${editor.getHtml()}`;
        navigator.clipboard.writeText(JSON.stringify(html));
    };

    return (
        <div className="admin">
            <GjsEditor
                grapesjs={grapesjs}
                options={{
                    height: "85vh",
                    storageManager: false,
                    protectedCss: "",
                    plugins: [
                        (editor) => blocksBasic(editor, { flexGrid: true }),
                    ],
                    // Starter content so there is something to click and edit
                    components: `
                        <h1>Project name</h1>
                        <p>Double-click to edit this text.</p>
                    `,
                }}
                onEditor={(editor) => {
                    editorRef.current = editor;

                    const rte = editor.RichTextEditor;
                    rte.remove("link"); // drop the default action
                    rte.add("link", {
                        icon: "<b>🔗</b>",
                        attributes: { title: "Link" },
                        result: (rte: any) => {
                            const url = prompt("Link URL (empty to remove the link):", "https://");
                            if (url && url !== "https://") {
                                rte.exec("createLink", url);
                            } else {
                                rte.exec("unlink");
                            }
                        },
                    });
                }}
            />
            <button style={{ marginTop: 10 }} onClick={handleCopy}>Copy</button>
        </div>
    );
};