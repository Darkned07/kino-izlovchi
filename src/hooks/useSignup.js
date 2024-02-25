import { useGlobalContext } from "./useGlobalContext";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export function useSignup() {
  const { dispatch } = useGlobalContext();

  const signup = async (displayName, email, password) => {
    dispatch({ type: "isPending", payload: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName,
        });
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

  const signUpWithGoogleProvider = () => {
    dispatch({ type: "isPending", payload: true });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        toast.success("welcome!");
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "isPending", payload: false });
        dispatch({ type: "ERROR", payload: null });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
        dispatch({ type: "isPending", payload: false });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  };
  return { signUpWithGoogleProvider, signup };
}
