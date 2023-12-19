import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { Bicycle, CartItem } from '../@types/types';
import { I18nLang } from '../@types/types';

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env
  .VITE_FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function insertOrder(
  metadata: { name: string; email: string; phone: string },
  items: CartItem[]
) {
  const order_date = new Date();

  try {
    const docRef = await addDoc(collection(db, 'order'), {
      order_date: order_date,
      name: metadata.name,
      email: metadata.email,
      phone: metadata.phone,
      item: items,
    });
    return docRef.id;
  } catch (e) {
    return e;
  }
}

export async function getOrder(orderId: string) {
  const docRef = doc(db, 'order', orderId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
}

export async function getBikes(locale: I18nLang) {
  const snapshot = await getDocs(collection(db, `bike_${locale}`));
  const bikes = snapshot.docs.map((doc) => doc.data());

  return bikes as Bicycle[];
}

export async function getBike(locale: I18nLang, bikeId: string) {
  const docRef = doc(db, `bike_${locale}`, bikeId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Bicycle;
  } else {
    return null;
  }
}
