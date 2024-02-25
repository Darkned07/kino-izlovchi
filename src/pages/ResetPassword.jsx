import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Parolni Tiklash!</h1>
          <p className="mb-5">
            Parolni faqatgina admin orqali tiklash mumkun pastdagi adminga
            murojat tugmasini bosing va adminga murojat qiling!
          </p>
          <div className="flex flex-col gap-2">
            <Link
              to="https://t.me/Cyber_0719"
              target="_blank"
              rel="noopener noreferrer"
              className="btn  btn-dark"
            >
              Adminga murojat!
            </Link>
            <Link to="/login" className="btn  btn-secondary">
              orqaga qaytish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
