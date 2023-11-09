import React, { useState } from 'react'

const ReducerTutorial = () => {
    const [count, setCount] = useState(0);
    const [showText, setshowText] = useState(true);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount(count + 1)
            setshowText(!showText)
        }}
        >
        Click Here 
        </button>
        {showText &&  <p>This is the Text</p> }
    </div>
  )
}

export default ReducerTutorial