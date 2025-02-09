import{ useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
// import axios from 'axios';
const SignUp = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-[#E35754] before:via-purple-900 before:to-violet-800 
      before:opacity-100 before:animate-gradient flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
        {/* Logo Section */}
        <div className="text-center">
          <Link to="/">
            <img
              className="mx-auto h-16 w-auto mb-6"
              src="/public/img-enhancer.jpeg"
              alt="Logo"
            />
          </Link>

          <h2 className="text-3xl font-bold text-white mb-2">
            {type === "register" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-300 text-sm">
            {type === "register"
              ? "Start creating amazing images today"
              : "Sign in to access your account"}
          </p>
        </div>

        {/* Form Section */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 mt-1
                  border border-gray-500/30 rounded-lg bg-white/10
                  placeholder-gray-400 text-white
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                  backdrop-blur-sm transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 mt-1
                  border border-gray-500/30 rounded-lg bg-white/10
                  placeholder-gray-400 text-white
                  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                  backdrop-blur-sm transition-all duration-200"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer group relative w-full flex justify-center py-2.5 px-4
                border border-transparent rounded-lg text-sm font-medium text-white
                bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2
                focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : type === "register" ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-500/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="cursor-pointer flex justify-center items-center px-4 py-2 border border-gray-500/30 rounded-lg
                bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium
                transition-all duration-200"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
              </svg>
              Google
            </button>

            <button
              type="button"
              className="cursor-pointer flex justify-center items-center px-4 py-2 border border-gray-500/30 rounded-lg
                bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium
                transition-all duration-200"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
SignUp.propTypes = {
  type: PropTypes.string.isRequired
}
export default SignUp;