'use client';

import { useState } from "react";
import { FaUser } from "react-icons/fa6";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;


    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Kiri - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <h1 className="text-4xl font-bold mb-2 text-[#DE5D5B]">
          Get <span className="text-[#29303A]">Started</span>
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Already have an account?{" "}
          <a href="#" className="text-red-500 font-semibold">
            Sign in
          </a>
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-[#29303A] text-[13px] font-medium mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 text-[#29303A] placeholder-[#A0A0A0] outline-none bg-transparent"
              />
              <FaUser className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-[#29303A] text-[13px] font-medium mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 text-[#29303A] placeholder-[#A0A0A0] outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none ml-2"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3l18 18" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M10.6 10.6a3 3 0 0 0 4.2 4.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.1 5.1A9.96 9.96 0 0 1 12 5c4.477 0 8.268 2.943 9.542 7a9.969 9.969 0 0 1-4.333 5.17M6.16 6.16A9.963 9.963 0 0 0 2.458 12c1.04 3.313 3.63 5.98 6.942 6.914"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end -mt-2 pb-2">
            <a
              href="#"
              className="text-sm text-gray-400 underline underline-offset-2 hover:text-gray-600 transition"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!email || !password}
            className={`w-full text-white font-medium py-2 rounded-xl transition ${email && password
              ? "bg-[#DE5D5B] hover:bg-red-500"
              : "bg-[#DE5D5B] cursor-not-allowed"
              }`}
          >
            Login
          </button>
        </form>
      </div>

      {/* Kanan - Gambar */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center px-3">
        <div className="w-full h-[95vh] overflow-hidden rounded-[10px]">
          <img
            src="/image/loginpage.png"
            alt="Train"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
