import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Mian, Middle } from "./Styles/Style";

// firebaseのconfigファイルの場所
import firebaseConfig from "./firebase/firebase";
// initializeAppを呼ぶと解決する
// firebase.initializeApp(firebaseConfig);

const firebase = require("firebase");
require("firebase/functions");

const Form = () => {
  const onSubmithandleChange = (e) => {
    e.preventDefault();
    let data = {};
    data.name = e.target.name.value;
    data.email = e.target.email.value;
    data.content = e.target.content.value;
    let sendMail = firebase.functions().httpsCallable("sendMail");
    sendMail(data);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.content.value = "";
    e.target.value = "";
  };
  return (
    <Mian>
      <React.Fragment>
        <Middle>
          <h2>お問い合わせ</h2>
          <form onSubmit={onSubmithandleChange}>
            <TextField
              name="name"
              label="お名前"
              type="text"
              required
              //   style={textFieldStyle}
            />
            <TextField
              name="email"
              label="メールアドレス"
              type="mail"
              required
              //   style={textFieldStyle}
            />
            <TextField
              required
              name="content"
              label="お問い合わせ内容"
              multiline
              rows="8"
              margin="normal"
              variant="outlined"
              //   style={textFieldStyle}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              //   style={textFieldStyle}
            >
              送信
            </Button>
          </form>
        </Middle>
      </React.Fragment>
    </Mian>
  );
};

export default Form;
