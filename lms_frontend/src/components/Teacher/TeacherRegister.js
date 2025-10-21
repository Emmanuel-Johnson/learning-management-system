import { useState } from 'react';
import { Eye, EyeOff, User, Lock, Mail, Sparkles } from 'lucide-react';

function TeacherRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestsArray = interests.split(',').map(i => i.trim()).filter(i => i);
    console.log('Register submitted', { interests: interestsArray });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-red-200 pt-9 pb-9">
      <div className="relative z-10 w-full max-w-md mx-4 bg-amber-300 rounded-3xl">
        <div className="backdrop-blur-xl bg-white/80 border border-white/60 rounded-3xl p-8 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-400 mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Teacher Register</h2>
            <p className="text-gray-600">Join and start your journey</p>
          </div>

          <div className="space-y-5">
            {/* Full Name */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-red-500" />
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-red-500" />
                </div>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                />
              </div>
            </div>

            {/* Username */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-red-500" />
                </div>
                <input
                  type="text"
                  placeholder="your.username"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password */}
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-red-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-orange-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Interests as input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills (comma separated)</label>
              <input
                type="text"
                placeholder="Python, Django, SQL"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition-all duration-300"
              />
            </div>

            {/* Register Button */}
            <button
              onClick={handleSubmit}
              className="relative w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 shadow-lg hover:shadow-orange-300/50 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">Register</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="#" className="text-red-500 font-semibold hover:text-orange-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeacherRegister;
