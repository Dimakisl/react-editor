import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContext } from '../../context/context';




const  HtmlEditor = ()  => {
    const {html, setHtml} = useContext(EditorContext);
    return (
        <AceEditor
            placeholder="Напишите тут ваш HTML-код"
            mode="html"
            theme="monokai"
            name="editor_html"
            value={html}
            onChange={value => setHtml(value)}
            fontSize={16}
            height={'100%'}
            wodth={'100%'}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 2,
                useWorker: false
            }}
        />
    )
}

export default HtmlEditor;
