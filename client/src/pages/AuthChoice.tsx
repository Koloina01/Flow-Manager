import { Link } from "react-router-dom";

export default function AuthChoicePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Flow<span className="text-sky-400">Manager</span>
          </h1>
          <p className="text-slate-500 mt-3">
            Get started with your workflow
          </p>
        </div>

        {/* Google Sign In */}
        <button className="w-full border border-slate-300 rounded-lg py-3
                           flex items-center justify-center gap-3
                           hover:bg-slate-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium text-slate-700">
            Continue with Google
          </span>
        </button>

        
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-slate-300" />
          <span className="text-sm text-slate-400">or</span>
          <div className="flex-1 h-px bg-slate-300" />
        </div>

        
        <div className="space-y-4">
          <Link
            to="/register"
            className="block w-full text-center bg-sky-400 text-white
                       py-3 rounded-lg font-semibold hover:bg-sky-500 transition"
          >
            Create an account
          </Link>

          <Link
            to="/login"
            className="block text-center text-sky-400 hover:underline"
          >
            Already have an account? Sign in
          </Link>
        </div>

      </div>
    </div>
  );
}
