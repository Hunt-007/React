import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { app } from "./config";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//obtiene items
export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
};

//obtiene items por categoria
export const getItemsByCategory = async (category) => {
  const q = query(collection(db, "items"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
};

//obtiene un item
export const getItem = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    //existe id de producto
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    console.log("no document");
  }
};

export const createOrder = async (order) => {
  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id; //devuelve el ID
};
