import { useState } from "react";
import { useAuthStore } from "../../../store/userAuth.store";
import { registerUser, type registerUserType } from "../api/users.api";
import { useNavigate } from "react-router-dom";
// Signup Component
export const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { signup, toggleMode } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const navigate = useNavigate();

    const formData: registerUserType = {
      email: email,
      fullName: name,
      password: password,
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!'); //Make a proper notification system or use react forms for future
      return;
    }
    if (!acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }

    try {
      const data = await registerUser(formData)
      //Toast the response here
      signup(name, email)
      navigate('/dashboard')
      //Redirect to home page
    } catch (error: any) {
      console.warn(error.response?.data?.error)
    }
  };

  return (
    <div className="w-full animate-fadeIn">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif tracking-tight">
          Create Account
        </h2>
        <p className="text-gray-600 text-sm">
          Join us and start your journey today
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 tracking-wide">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-200"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-email" className="block text-sm font-semibold text-gray-700 tracking-wide">
            Email Address
          </label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-200"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-password" className="block text-sm font-semibold text-gray-700 tracking-wide">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-200"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-700 tracking-wide">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all duration-200"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="w-4 h-4 mt-0.5 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
          />
          <label className="text-sm text-gray-600 cursor-pointer">
            I accept the{' '}
            <a href="#" className="text-violet-600 hover:text-violet-700 font-medium transition-colors">
              terms and conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-violet-600 to-violet-700 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group mt-6"
        >
          Create Account
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
        Already have an account?{' '}
        <button type="submit"
          onClick={toggleMode}
          className="text-violet-600 hover:text-violet-700 font-semibold transition-colors hover:underline"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
