import React from 'react';
import { useState } from "react";
import axios from "axios";

function JwtWidget(){
    const [textBox, setTextBox] = useState('')
    const url = 'http://localhost:3000/'

    const generateToken = () => {
        if (textBox.length === 0) {
        alert('Please Enter Your Key')
        }
        else {
axios.get(`/jwt?secret=${textBox}`).then((res) =>{
    console.log(res)
}).catch((err) => {
    console.log(err)
})
        }
    };

    return  (
    <>
    <p>Check</p>
    <input 
    type="text"
    value={textBox}
    placeholder="Secret Key"
    onChange={e => setTextBox(e.target.value)}
    />
    <button type="button" onClick={generateToken}>Generate Token</button>
    </>
    )
}

export default JwtWidget