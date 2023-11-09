import React, { useState } from 'react'

const Statetutorial = () => {
  const [inputvalue, setInputValue] = useState("Hi! Daniel");


  let onchange = (event) => {
    const newvalue = event.target.value;
    setInputValue(newvalue);
  }

  return (

    <div>
      <input type="text" placeholder='Please input something ........' onChange={onchange} />
    {inputvalue}
    </div>
  )
}

export default Statetutorial






















// import React, { useState } from "react";

// const StateTutorial = () => {
//   const [inputValue, setInputValue] = useState("Pedro");

//   let onChange = (event) => {
//     const newValue = event.target.value;
//     setInputValue(newValue);
//   };

//   return (
//     <div>
//       <input placeholder="enter something..." onChange={onChange} />
//       {inputValue}
//     </div>
//   );
// };

// export default StateTutorial;