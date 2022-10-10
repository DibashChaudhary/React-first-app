import React, {useState} from 'react';
import {FormData} from "./FormData";
import {Input} from "./Input"

export const Form = () => {
    const [str, setStr] = useState("Display");

    const receiveData = (str) => {
        setStr(str);
    }

    // const handleOnChange = (e)=>{
    //     const {value}=e.target;
    //     console.log(value)
    //     setStr(value);
    // };

    // const formTwo =(ev)=>{
    //     const {value}= ev.target;
    //     setStr(value)

    // }

    return (
    <div>
        <div className="display">{str}</div>
        <br />
        <hr />
        <Input receiveData = {receiveData} />
        
    </div>
    )
};