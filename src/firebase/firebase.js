import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKfDCsQ6IYksJUksRB1MOw4JBCLpqxuqI",
  authDomain: "companyform-practice.firebaseapp.com",
  databaseURL: "https://companyform-practice.firebaseio.com",
  projectId: "companyform-practice",
  storageBucket: "companyform-practice.appspot.com",
  messagingSenderId: "821017918488",
  appId: "1:821017918488:web:010b3aa58b979c2876576d",
};
firebase.initializeApp(firebaseConfig);
export default firebaseConfig;
// export const functions = firebase.functions();
