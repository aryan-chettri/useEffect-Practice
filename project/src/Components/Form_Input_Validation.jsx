import React, { useEffect, useState } from 'react'

function Form_Input_Validation() {

    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    useEffect(()=>{

        console.log(inputValue);


    },[inputValue, setInputValue])

    const setInputValueFunction = (e) => {
            setInputValue(e.target.value);
        }

  return (
    <div>
      <input type="text" value={inputValue} onChange={setInputValueFunction}/>
      <h1>{inputValue}</h1>
    </div>
  )
}

export default Form_Input_Validation
