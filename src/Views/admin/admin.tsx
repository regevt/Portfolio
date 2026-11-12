import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import "./admin.css"


const Size: any = Quill.import('attributors/style/size');
const fontSizes = ['12px', '14px', '16px', '18px', '24px', '32px', '48px'];
Size.whitelist = fontSizes;
Quill.register(Size, true);

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['link'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }, { 'align': [] }],
    [{ 'direction': 'rtl' }],
    ['blockquote', 'code-block'],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'size': fontSizes }, { 'font': [] }, { 'color': [] }, { 'background': [] }],
    ['clean']
];


export const Admin = () => {
    const [value, setValue] = useState('');


    return (
        <div className='admin'>
            <style>{`
        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value]::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value]::before {
          content: attr(data-value) !important;
        }
        .ql-snow .ql-picker.ql-size .ql-picker-label:not([data-value])::before,
        .ql-snow .ql-picker.ql-size .ql-picker-item:not([data-value])::before {
          content: 'Normal' !important;
        }
      `}</style>
            <ReactQuill modules={{
                toolbar: toolbarOptions
            }} theme="snow" value={value} onChange={setValue} />

            <button onClick={() => navigator.clipboard.writeText(value.replaceAll('"', "\\\""))}>Copy</button>
        </div>
    )
}