// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
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
const productsColRef = collection(db, "products");

// adding order to db
export const addOrder = async (order) => {
  const newOrder = await addDoc(collection(db, "orders"), { ...order });
  return newOrder.id;
};

// getting all products
export const docsGetter = async () => {
  const snapshot = await getDocs(productsColRef);
  const docs = snapshot.docs;
  const docsArray = [];
  docs.forEach((doc) => docsArray.push({ ...doc.data(), id: doc.id }));
  return docsArray;
};

// getting product by id
export const getOneDoc = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

// getting order by id
export const getOrder = async (id) => {
  const docRef = doc(db, "orders", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
// getting products by category
export const getCategoryDocs = async (category) => {
  const snapshot = await getDocs(productsColRef);
  const docs = snapshot.docs.filter(
    (prod) => prod.data().category === category
  );
  const docsArray = [];
  docs.forEach((doc) => docsArray.push({ ...doc.data(), id: doc.id }));
  return docsArray;
};
