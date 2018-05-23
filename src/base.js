import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAJTtoj130VSlxl7OeJDlNPodkE2qlACMI",
        authDomain: "catch-of-the-day-tim-wilburn.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-tim-wilburn.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;