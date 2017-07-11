import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD6h6lRpDHtoxqr3R_uy323RgIJgGG1VMU",
  authDomain: "rnrn-9ea8d.firebaseapp.com",
  databaseURL: "https://rnrn-9ea8d.firebaseio.com",
  projectId: "rnrn-9ea8d",
  storageBucket: "rnrn-9ea8d.appspot.com",
  messagingSenderId: "832272213584"
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase;