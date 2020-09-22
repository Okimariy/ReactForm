import React, { Component, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { atom, useRecoilState, selector } from "recoil";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {
  Mian,
  Middle,
  Pagetitle,
  SubPagetitle,
  FormFlex,
} from "../Styles/Style";

export const nameState = atom({
  key: "nameState",
  default: "",
});
export const emailState = atom({
  key: "emailState",
  default: "",
});
export const textState = atom({
  key: "textState",
  default: "",
});

// firebaseのconfigファイルの場所
// import firebaseConfig from "../firebase/firebase";
// initializeAppを呼ぶと解決する
// firebase.initializeApp(firebaseConfig);
const firebase = require("firebase");
require("firebase/functions");

function InputComponent() {
  const [nameData, SetnameData] = useRecoilState(nameState);
  const [emailData, SetemailData] = useRecoilState(emailState);
  const [textData, SettextData] = useRecoilState(textState);

  const onChangeName = (event) => {
    SetnameData(event.target.value);
  };
  const onChangeEmail = (event) => {
    SetemailData(event.target.value);
  };
  const onChangeText = (event) => {
    SettextData(event.target.value);
  };

  //   const onChangeName = (event) => {
  //     SetJobData(...JobFormData, event.target.value);
  //   };
  //   const onChangeEmail = (event) => {
  //     SetJobData(...JobFormData, event.target.value);
  //   };
  //   const onChangeText = (event) => {
  //     SetJobData(...JobFormData, event.target.value);
  //   };
  //   const onChange = e => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  return (
    <Mian>
      <React.Fragment>
        <Middle>
          <Pagetitle>
            <SubPagetitle>CONTACT</SubPagetitle>
            <br></br>
            お問い合わせ
          </Pagetitle>
          <FormFlex>
            <TextField
              name="name"
              label="お名前"
              type="text"
              required
              value={nameData}
              //   onChange={(e) => SetJobData(e.target.value)}
              //   onChange={(e) =>
              //     SetJobData({ ...JobFormData, jobname: e.target.value })
              //   }
              onChange={onChangeName}
              //   onChange={handleChange}
              //   KeyboardButtonProps={{
              //     "aria-label": "change jobname",
              //   }}
            />
            <TextField
              name="email"
              label="メールアドレス"
              type="mail"
              required
              value={emailData}
              onChange={onChangeEmail}
              //   onChange={handleChange("jobmail")}
              //   onChange={(e) => SetJobData(e.target.value)}
            />
            <TextField
              required
              name="content"
              label="お問い合わせ内容"
              multiline
              rows="8"
              margin="normal"
              variant="outlined"
              value={textData}
              onChange={onChangeText}
              //   onChange={handleChange("jobtext")}
              //   onChange={(e) => SetJobData(e.target.value)}
            />
          </FormFlex>
          <p>名前:{nameData}</p>
          <p>メールアドレス:{emailData}</p>
          <p>内容:{textData}</p>
        </Middle>
      </React.Fragment>
    </Mian>
  );
}
export default InputComponent;
