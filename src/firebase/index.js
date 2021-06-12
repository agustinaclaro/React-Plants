import firebase from 'firebase';
import 'firebase/firestore';

const app = firebase.initializeApp({ 
    apiKey: "AIzaSyBnrfw8b8FIVTKQ3hTRNLTB_6NeTYteK1M",
    authDomain: "pequeno-respiro.firebaseapp.com",
    projectId: "pequeno-respiro",
    storageBucket: "pequeno-respiro.appspot.com",
    messagingSenderId: "878297731167",
    appId: "1:878297731167:web:157d3e2a916c076b104bea"

});
export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)