import React, { useState } from "react";

function ExamplePage() {

    const [count, setCount] = useState(0);

    return <>
        <p>Clicked : {count} times</p>
        <p>
            <button onClick={()=>{setCount(prevCount => prevCount + 1)}}>
                Increment
            </button>
        </p>
        <p>
            <button onClick={()=>{setCount(prevCount => prevCount - 1)}}>
                Decrement
            </button>
        </p>
    </>;
}

export default ExamplePage;