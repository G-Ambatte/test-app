import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { Marked } from "marked"

const marked = new Marked();

function ExamplePage() {

    const [value, setValue] = useState("console.log('hello world!')");
    const onChange = React.useCallback((val, viewUpdate)=>{
        setValue(val);
    }, []);

    function renderMarkdown(markdown) {
        const html = marked.parse(markdown);
        return { __html : html };
    }

    console.log(value);

    return <>
        <CodeMirror value={value} onChange={onChange} style={{position: 'absolute', top: '0px', left: '0px', height: 'calc(100% - 4px)', border: '2px solid black', width: 'calc(50% - 6px)', textAlign: 'left'}}></CodeMirror>
        <div class='divider' style={{position: 'absolute', top: '0px', left: 'calc(50% - 6px)', height: 'calc(100% - 4px)', width: '10px', border: '2px solid black', backgroundColor: 'lightgrey'}}></div>
        <div class='render' dangerouslySetInnerHTML={renderMarkdown(value)} style={{position: 'absolute', top: '0px', left: 'calc(50% + 6px)', height: 'calc(100% - 4px)', border: '2px solid black', width: 'calc(50% - 10px)', textAlign: 'left'}} />
    </>;
}

export default ExamplePage;