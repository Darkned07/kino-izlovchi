import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";


function Navbar() {
  const { user } = useGlobalContext();
  const [value, setValue] = useState("ALL");
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("successufuly logout!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };

  const handleSelect = (e) => {
    const val = e.target.value.toUpperCase();
    setValue(val);
  };

  return (
    <div className="max-container ">
      <div className="navbar bg-base-100 ">
        <div className="flex-none">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <MenuList />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Kino_Izlovchi
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select
              onClick={handleSelect}
              className="select select-bordered join-item"
            >
              <option value="all">All</option>
              <option value="fantastika">Fantastika</option>
              <option value="jangari">Jangari</option>
              <option value="qo'rqinchli">Qo'rqinchli</option>
            </select>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://yt3.googleusercontent.com/XlMhkE1-mnogPMeRqHmhh7TlrbqX5eI_J4Bt1eUREeJocbGQkxcWtZ0EgSHagQ12MfFwuLFdQQ=s176-c-k-c0x00ffffff-no-rj"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <span>{user.displayName}</span>
              </li>
              {user.email === "kinoizlovchi@gmail.com" ? (
                <li>
                  <Link to="/create">Create</Link>
                </li>
              ) : (
                <li></li>
              )}
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
