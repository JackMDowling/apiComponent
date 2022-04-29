import React from "react";
import { useState } from "react";
import axios from "axios";

function JwtWidget() {
  const [accountID, setAccountID] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [hiddenMessage, setHiddenMessage] = useState(
    "Enter Your Account ID & Secret Token"
  );
  const [modalClass, setModalClass] = useState("messageModal");

  const generateToken = () => {
    if (accountID.length === 0) {
      setHiddenMessage("Please Enter Your Account ID");
      toggleAnimation();
      return;
    }
    if (secretKey.length === 0) {
      setHiddenMessage("Please Enter Your Secret Token");
      toggleAnimation();
      return;
    } else if (accountID.length && secretKey.length) {
      setHiddenMessage("Copied to Clipboard");
      toggleAnimation();
      const iat = new Date().getTime() / 1000;
      // When implementing this into our codebase, change the URL of the get request to our own backend
      axios
        .get(`/jwt?secret=${secretKey}&iat=${iat}&account=${accountID}`)
        .then((res) => {
          navigator.clipboard
            .writeText(res.data)
            .then(() => {
              console.log("copy successful");
            })
            .catch(() => {
              console.log("copy failed");
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const toggleAnimation = () => {
    setModalClass("messageModalAnimation");
    setTimeout(() => {
      setModalClass("messageModal");
    }, 1500);
  };

  return (
    <div className="jwt_widget_container">
      <input
        id="accountBar"
        type="text"
        value={accountID}
        placeholder="Account ID"
        onChange={(e) => setAccountID(e.target.value)}
      />
      <input
        id="secretBar"
        type="text"
        value={secretKey}
        placeholder="Secret Token"
        onChange={(e) => setSecretKey(e.target.value)}
      />
      <br></br>
      <button type="button" id="tokenButton" onClick={generateToken}>
        Generate JWT
      </button>
      <p className={modalClass}>{hiddenMessage}</p>
    </div>
  );
}

export default JwtWidget;
