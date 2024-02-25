import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useDeleteKino() {
  const deleteKino = async (col, id) => {
    await deleteDoc(doc(db, col, id));
    toast.success("kino o'chirildi!");
  };
  return { deleteKino };
}
