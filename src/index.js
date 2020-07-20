import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyAHWlkQps3qEkeSm0pSZQ6rfjx0nOfvNA8",
	authDomain: "calc-cards.firebaseapp.com",
	databaseURL: "https://calc-cards.firebaseio.com",
	projectId: "calc-cards",
	storageBucket: "calc-cards.appspot.com",
	messagingSenderId: "178941691510",
	appId: "1:178941691510:web:b503e8c21514e50f"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
