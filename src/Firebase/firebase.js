// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmh8LnqugtKq0eYnWZzCaaeC-33ZruhW4",
  authDomain: "creaturesnft-caceres.firebaseapp.com",
  projectId: "creaturesnft-caceres",
  storageBucket: "creaturesnft-caceres.appspot.com",
  messagingSenderId: "354764018048",
  appId: "1:354764018048:web:91c979900301f8960d7165",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

// collection ref
export const colRef = collection(db, "products");

// get collection data
export const docsGetter = async () => {
  const snapshot = await getDocs(colRef);
  const docs = snapshot.docs;
  const docsArray = [];
  docs.forEach((doc) => docsArray.push({ ...doc.data(), id: doc.id }));
  return docsArray;
};
export const getOneDoc = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
export const getCategoryDocs = async (category) => {
  const snapshot = await getDocs(colRef);
  const docs = snapshot.docs.filter(
    (prod) => prod.data().category === category
  );
  const docsArray = [];
  docs.forEach((doc) => docsArray.push({ ...doc.data(), id: doc.id }));
  return docsArray;
};
