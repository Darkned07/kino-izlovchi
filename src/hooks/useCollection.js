import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export function useCollection() {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "kino"), (snapshot) => {
      const result = [];
      snapshot.docs.forEach((doc) => {
        const kino = { id: doc.id, ...doc.data() };
        result.push(kino);
      });
      setDocument(result);
    });
    return () => unsubscribe();
  }, []);

  return { document };
}
