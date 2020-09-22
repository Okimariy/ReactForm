# React-Hooksとnodemailerを使用してGmailにメールを送信する
***
Reactで制作して静的サイトにどうやってフォームを入れようという疑問から制作した
nodemailerを使用すればReactで制作したサイトにフォームを付け加える事が可能

Googleで二段階認証を設定している方はこちらの手順が必要
Googleアカウントにログインする[アカウント]> [サインインとセキュリティ]> [アプリパスワード]に移動します（もう一度サインインして本人であることを確認します）下にスクロールして[アプリを選択]（[パスワードとサインイン方法]ボックス内）に移動し、[その他]（カスタム名）を選択します。 ）このアプリのパスワードに名前を付けます（例： "nodemailer"）[生成]を選択します長い生成されたパスワードをコピーして、実際のGmailパスワードの代わりにNode.jsスクリプトに貼り付けます。


# Recoil
***
[参考サイト](https://recoiljs.org/docs/introduction/getting-started)
[参考サイト](https://tech.stmn.co.jp/entry/2020/05/28/152551)

```fish
npm install recoil
```
##### 親componentを記述しているcomponentに
```
import { RecoilRoot } from "recoil";

<RecoilRoot>
   <StepperPage />
</RecoilRoot>
```
##### データを入力するcomponentでatomとuseRecoilStateを作ってデータを作成する
今回は複数の値を管理する事が理解できていないため、Input一つずつStateを作成した

###### 複数コンポーネントで共有されるステートはatomと呼ぶ
###### atomに更新が入るとそのatomを使用しているコンポーネント全てに再レンダリングが走る
```
import { atom, useRecoilState } from "recoil";


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

//Componentの中で呼び出す
const [nameData, SetnameData] = useRecoilState(nameState);
const [emailData, SetemailData] = useRecoilState(emailState);
const [textData, SettextData] = useRecoilState(textState);
```
##### データを表示するcomponentで先程作成したatomをよびだす
```
import { selector, useRecoilValue } from "recoil";
import { nameState, emailState, textState } from "./InputComponent";

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
///Componentの中で呼び出す
const NameInputData = useRecoilValue(characterNameState);
const EmailInputData = useRecoilValue(characterEmailState);
const TetxInputData = useRecoilValue(characterTextState);

<p>{NameInputData}</p>
<p>{EmailInputData}</p>
<p>{TetxInputData}</p> 
```

本日理解している場所はここまで。
複数Inpuの値を管理したらまら更新する
