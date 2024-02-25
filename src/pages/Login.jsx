import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login } = useLogin();
  const { signUpWithGoogleProvider } = useSignup();
  const email = useRef();
  const password = useRef();
  const handleGoogleLogin = () => {
    signUpWithGoogleProvider();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Tizimga Kirish!</h1>
          <p className="py-6">
            Kinolarni Trailerini korishni istasangiz tizimga kiring! Bu veb sayt
            hozirda demo variant bolgani uchun kinolarni telegramdan tomosha
            qilasizlar!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                ref={email}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                ref={password}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/reset-password"
                  className="label-text-alt link link-hover"
                >
                  Parolni esdan chiqardizmi?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary btn-outline">Kirish</button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-dark btn-outline mt-2"
              >
                Google
              </button>

              <Link
                to="/signup"
                className="btn btn-secondary btn-outline  mt-2"
              >
                Ro'yxatdan o'tish
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
