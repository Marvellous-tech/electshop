import React, { useState } from "react";
import bigbirdfarmlogo from "../assets/bigbirdfarmlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      handleAuthError(error);
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleAuthError = (error) => {
    switch (error.code) {
      case "auth/invalid-credential":
        setError("Invalid email or password combination");
        break;
      case "auth/user-not-found":
        setError("No account found with this email");
        break;
      case "auth/wrong-password":
        setError("Incorrect password");
        break;
      case "auth/too-many-requests":
        setError("Too many attempts. Try again later");
        break;
      default:
        setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="login_container bg-white p-8 rounded-lg shadow-lg w-96">
        <Link to="/" className="block mb-8">
          <div className="flex justify-center">
            <img
              src={bigbirdfarmlogo}
              alt="Big Bird Farm logo"
              className="w-20 h-20"
            />
          </div>
        </Link>

        <div className="w-full bg-white rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Sign In to Big Bird Farm
          </h1>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-lg font-medium text-white ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } transition-colors`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p className="mb-2">Don't have an account?</p>
            <Link
              to="/register"
              className={`text-blue-600 font-medium ${
                loading ? "cursor-not-allowed opacity-50" : "hover:text-blue-700"
              } underline`}
            >
              Create New Account
            </Link>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By continuing, you agree to Big Bird Farm's{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;