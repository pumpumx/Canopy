import React, { useState } from 'react';
import { useAuthStore } from '../../../store/userAuth.store';
import { loginUser } from '../api/users.api';
import { useNavigate } from 'react-router-dom';

// Login Component
export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login, toggleMode } = useAuthStore();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password
    }
    try {
      const loginUserResponse = await loginUser(loginData)
      login(email)
      navigate('/dashboard')

    } catch (error) {
      console.warn("Error while login user", error)
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif tracking-tight">
          Welcome Back
        </h2>
        <p className="text-gray-600 text-sm">
          Sign in to continue your journey
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 tracking-wide">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-200"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 tracking-wide">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-200"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
            />
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
              Remember me
            </span>
          </label>
          <a href="#" className="text-violet-600 hover:text-violet-700 font-medium transition-colors">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-violet-600 to-violet-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group mt-6"
        >
          Sign In
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button
          onClick={toggleMode}
          className="text-violet-600 hover:text-violet-700 font-semibold transition-colors hover:underline"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};


