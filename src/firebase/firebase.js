import firebase from "firebase";

import { FirebaseConfig } from "./firebaseConfig";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const ordersRef = databaseRef.child("orders");