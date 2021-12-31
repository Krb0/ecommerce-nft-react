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
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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
