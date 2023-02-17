import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	// apiKey: "AIzaSyAJTtoj130VSlxl7OeJDlNPodkE2qlACMI",
	// authDomain: "catch-of-the-day-tim-wilburn.firebaseapp.com",
	// databaseURL: "https://catch-of-the-day-tim-wilburn.firebaseio.com",
	apiKey: "AIzaSyAJTtoj130VSlxl7OeJDlNPodkE2qlACMI",
	authDomain: "catch-of-the-day-tim-wilburn.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-tim-wilburn.firebaseio.com",
	projectId: "catch-of-the-day-tim-wilburn",
	storageBucket: "catch-of-the-day-tim-wilburn.appspot.com",
	messagingSenderId: "499144298125",
	appId: "1:499144298125:web:25ae41b51235c5fde75cc4",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
