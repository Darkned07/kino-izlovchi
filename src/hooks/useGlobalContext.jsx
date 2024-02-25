import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext() must be in the GlobalContextProvider()"
    );
  }

  return context;
}
