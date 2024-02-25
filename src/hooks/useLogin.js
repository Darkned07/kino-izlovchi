import { useGlobalContext } from "./useGlobalContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useLogin() {
  const { dispatch } = useGlobalContext();

  const login = async (email, password) => {
    dispatch({ type: "isPending", payload: true });
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("xush kelibsiz!");
        dispatch({ type: "LOGIN", payload: userCredential.user });
        dispatch({ type: "ERROR", payload: null });
        dispatch({ type: "isPending", payload: false });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        dispatch({ type: "isPending", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  };

  return { login };
}
