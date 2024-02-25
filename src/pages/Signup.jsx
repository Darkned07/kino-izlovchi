import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useRef } from "react";

function Signup() {
  const displayName = useRef();
  const email = useRef();
  const password = useRef();
  const { signUpWithGoogleProvider, signup } = useSignup();
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signUpWithGoogleProvider();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Ro'yxatdan o'ting!</h1>
          <p className="py-6">
            Kinolarni Trailerini korishni istasangiz tizimga kiring! Bu veb sayt
            hozirda demo variant bolgani uchun kinolarni telegramdan tomosha
            qilasizlar!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ismingiz</span>
              </label>
              <input
                ref={displayName}
                type="text"
                placeholder="Ismingiz"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary btn-outline">
                Ro'yxatdan o'tish
              </button>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-danger btn-outline mt-2"
              >
                Google
              </button>

              <Link to="/login" className="btn btn-secondary btn-outline mt-2">
                Avval ro'yxatdan o'tganmisiz?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
