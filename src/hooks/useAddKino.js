import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";
import { toast } from "react-toastify";

export function useAddKino() {
  const [newKino, setNewKino] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const addKino = async (col, data) => {
    setIsPending(true);
    const docRef = await addDoc(collection(db, col), data);
    setIsPending(false);
    setNewKino(docRef);
    toast.success("Yangi kino qo'shildi!");
  };

  return { addKino, newKino, isPending };
}
