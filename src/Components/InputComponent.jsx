import React, { Component, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { RecoilRoot, atom, useRecoilState } from "recoil";
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
export const okimari = atom({
  key: "okimari",
  default: {
    name: "",
    email: "",
    content: "",
  },
});
export const okimariState = atom({
  key: "okimariState",
  default: {
    name: "",
    email: "",
    content: "",
  },
});

// firebaseのconfigファイルの場所
// import firebaseConfig from "../firebase/firebase";
// initializeAppを呼ぶと解決する
// firebase.initializeApp(firebaseConfig);
const firebase = require("firebase");
require("firebase/functions");

// const useOjectFunction = () => {
//   const [objectOkimari, setObject] = useRecoilState(okimari);
//   const handleChange = (e) => {
//     let keyNmaeTwice = e.target.name;
//     let newobjectOkimari = objectOkimari;
//     newobjectOkimari[keyNmaeTwice] = e.target.value;
//     // setObject((newobjectOkimari[keyNmaeTwice] = e.target.value));
//     setObject(newobjectOkimari);
//   };
//   return [objectOkimari, handleChange];
// };

function InputComponent() {
  const [nameData, SetnameData] = useRecoilState(nameState);
  const [emailData, SetemailData] = useRecoilState(emailState);
  const [textData, SettextData] = useRecoilState(textState);
  const [okimari, setOkimari] = useRecoilState(okimariState);
  // const [objectOkimari, handleChange] = useOjectFunction();

  // const onChangeName = (event) => {
  //   SetnameData(event.target.value);
  // };
  // const onChange = (e) => {
  //   SetnameData({ ...okimari, [e.target.name]: e.target.value });
  // };
  // const onChangeEmail = (event) => {
  //   SetemailData(event.target.value);
  // };
  // const onChangeText = (event) => {
  //   SettextData(event.target.value);
  // };

  // ↓いける
  const onChange = (e) => {
    setOkimari({ ...okimari, [e.target.name]: e.target.value });
  };
  console.log(okimari);
  // console.log(objectOkimari);
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
              value={okimari.name}
              //   onChange={(e) => SetJobData(e.target.value)}
              //   onChange={(e) =>
              //     SetJobData({ ...JobFormData, jobname: e.target.value })
              //   }
              onChange={onChange}
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
              value={okimari.email}
              onChange={onChange}
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
              value={okimari.content}
              onChange={onChange}
              //   onChange={handleChange("jobtext")}
              //   onChange={(e) => SetJobData(e.target.value)}
            />
          </FormFlex>
          <p>名前:{okimari.name}</p>
          <p>メールアドレス:{okimari.email}</p>
          <p>内容:{okimari.content}</p>
        </Middle>
      </React.Fragment>
    </Mian>
  );
}
export default InputComponent;
