import react from "react";
import jwt from "jsonwebtoken";
import { useState } from "react/cjs/react.production.min";

function jwtWidget(){
    const [textBox, setTextBox] = useState('')
    const generateToken = () => {
        if (textBox.length === 0) {

        }

    };

    return  (
    <>
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