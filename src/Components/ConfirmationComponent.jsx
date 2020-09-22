import React from "react";
import { selector, useRecoilValue } from "recoil";
import { nameState, emailState, textState } from "./InputComponent";
import Button from "@material-ui/core/Button";

import styled from "styled-components";
import {
  Mian,
  Middle,
  Pagetitle,
  SubPagetitle,
  FormFlex,
} from "../Styles/Style";

// firebaseのconfigファイルの場所
import firebaseConfig from "../firebase/firebase";
// initializeAppを呼ぶと解決する
// firebase.initializeApp(firebaseConfig);

const firebase = require("firebase");
require("firebase/functions");

//*******************************************************************//
// 確認用のcomponent
const characterNameState = selector({
  key: "characterNameState",
  get: ({ get }) => {
    const text = get(nameState);
    return text;
  },
});
const characterEmailState = selector({
  key: "characterEmailState",
  get: ({ get }) => {
    const text = get(emailState);
    return text;
  },
});
const characterTextState = selector({
  key: "characterTextState",
  get: ({ get }) => {
    const text = get(textState);
    return text;
  },
});

// 値は親componentからもってくる
//*******************************************************************//
const ConfirmationComponent = () => {
  // useRecoilStateで値だけ取る場合
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
  const NameInputData = useRecoilValue(characterNameState);
  const EmailInputData = useRecoilValue(characterEmailState);
  const TetxInputData = useRecoilValue(characterTextState);
  return (
    <Mian>
      <React.Fragment>
        <Middle>
          <Pagetitle>
            <SubPagetitle>CONFIRMATION</SubPagetitle>
            <br></br>
            確認画面
          </Pagetitle>
          <FormFlex onSubmit={onSubmithandleChange}>
            <input type="text" name="name" value={NameInputData} />
            <input type="mail" name="email" value={EmailInputData} />
            <input type="text" name="content" value={TetxInputData} />
            {/* <p>{NameInputData}</p>
            <p>{EmailInputData}</p>
            <p>{TetxInputData}</p> */}
            <Button variant="contained" color="primary" type="submit">
              お問い合わせする
            </Button>
          </FormFlex>
        </Middle>
      </React.Fragment>
    </Mian>
  );
};
export default ConfirmationComponent;
