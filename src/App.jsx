import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import ResetPassword from "./pages/ResetPassword";
import Create from "./pages/Create";
import Kino from "./pages/Kino";


function App() {
  const { user, isAuthReady, dispatch } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "create",
          element:
            user && user.email === "kinoizlovchi@gmail.com" ? (
              <Create />
            ) : (
              <Navigate to="/" />
            ),
        },
        {
          path: "kino/:name/:id",
          element: <Kino />,
        },
       
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
    {
      path: "/reset-password",
      element: user ? <Navigate to="/" /> : <ResetPassword />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY", payload: true });

      console.log(user);
    });
  }, []);

  return isAuthReady && <RouterProvider router={routes} />;
}

export default App;
