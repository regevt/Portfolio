import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import QuillResizeImage from 'quill-resize-image';
import "./editor.css";

const Size: any = Quill.import('attributors/style/size');
const fontSizes = ['12px', '14px', '16px', '18px', '24px', '32px', '48px'];
Size.whitelist = fontSizes;
Quill.register(Size, true);
Quill.register('modules/resize', QuillResizeImage);

const toolbarOptions = [
    ['template'],
    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'image'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
    [{ 'direction': 'rtl' }],
    ['blockquote', 'code-block'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'size': fontSizes }, { 'font': [] }, { 'color': [] }, { 'background': [] }],
    ['clean']
];

export const Editor = () => {
    const [value, setValue] = useState('');

    return (
        <div className='admin'>
            <div>
                <ReactQuill
                    modules={{
                        toolbar: {
                            container: toolbarOptions,
                            handlers: {
                                image: function (this: any) {
                                    const input = prompt('Enter image path (e.g., <project name>/pic.png) or full URL:', "deck/0.png");
                                    if (input) {
                                        let finalUrl = input;
                                        if (!input.startsWith('http') && !input.startsWith('data:')) {
                                            const publicUrl = process.env.PUBLIC_URL || '';
                                            const cleanPath = input.startsWith('/') ? input.slice(1) : input;
                                            finalUrl = `${publicUrl}/images/${cleanPath}`;
                                        }

                                        const quill = this.quill as Quill;
                                        const range = quill.getSelection(true);
                                        quill.insertEmbed(range.index, 'image', finalUrl, 'user');
                                        quill.setSelection(range.index + 1);
                                    }
                                },
                                template: function (this: any) {
                                    const quill = this.quill;
                                    const range = quill.getSelection(true);

                                    const templateHtml = `
                                        <h1 class="ql-align-center"><span style="color: rgb(24, 24, 22); background-color: rgb(255, 255, 255);"> Project Name </span></h1>
                                        <br>
                                        <span style="background-color: rgb(255, 255, 255); color: rgb(24, 24, 22); font-size: 16px;"> description </span>
                                    `;

                                    quill.clipboard.dangerouslyPasteHTML(range.index, templateHtml);
                                }
                            }
                        },
                        resize: {
                            locale: {},
                        },
                    }}
                    theme="snow"
                    value={value}
                    onChange={setValue}
                />
                <button
                    style={{ marginTop: '10px' }}
                    onClick={() => {
                        const div = document.createElement('div');
                        div.innerHTML = value;
                        div.querySelectorAll('img').forEach((img: HTMLImageElement) => {
                            img.setAttribute('data-image-path', img.src);
                        });
                        navigator.clipboard.writeText(div.innerHTML.replaceAll('"', "\\\""));
                    }}
                >
                    Copy
                </button>
            </div>
        </div>
    );
};