import React, { useState } from "react";

const useCounter =(initionalvalue,val) => {
    const[count, setCount] = useState(initionalvalue)
    
    
const increment=(value) =>{
    if(isNaN(value)){
    setCount(count+val);
    } else {
        setCount(count+value);

    }

}

const decrement=() =>{
    setCount(count-val)
    
}

const reset=() =>{
    setCount(0)
    
}
return [count,increment,decrement,reset]
}
export default useCounter;