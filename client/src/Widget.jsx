import React from 'react';
import { useState } from "react";
import axios from "axios";

function JwtWidget(){
    const [accountID, setAccountID] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const generateToken = () => {
        if (secretKey.length === 0) {
        alert('Please Enter Your Key')
        }
        if (accountID.length === 0) {
            alert('Please Enter Your Account ID')
        }
        else {
            const iat = new Date().getTime() / 1000;
axios.get(`/jwt?secret=${secretKey}&iat=${iat}&account=${accountID}`).then((res) =>{
    console.log(res.data)
    navigator.clipboard.writeText(res.data).then(() => {
        console.log('something happened')
    }).catch(() => {
        console.log('copying failed')
    })
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
    value={accountID}
    placeholder="Account ID"
    onChange={e => setAccountID(e.target.value)}
    />
    <input 
    type="text"
    value={secretKey}
    placeholder="Secret Key"
    onChange={e => setSecretKey(e.target.value)}
    />
    <button type="button" onClick={generateToken}>Generate Token</button>
    </>
    )
}

export default JwtWidget