import react from "react";
import firebase, { db, auth } from "./config";
import { doc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore'



export const addDocument = (collection, data) => {
    const query = db.collection(collection);

    query.add({
        ...data,

    });
};

export const delDocument = async (collection, docId) => {
    const docRef = doc(db, collection, docId)
    await deleteDoc(docRef)
}

