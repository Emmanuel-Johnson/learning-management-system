import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      {/* Current Password */}
      <div className="relative">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="currentPassword">
          Current Password
        </label>
        <input
          id="currentPassword"
          type={showCurrent ? "text" : "password"}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowCurrent(!showCurrent)}
          className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
        >
          {showCurrent ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      {/* New Password */}
      <div className="relative">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="newPassword">
          New Password
        </label>
        <input
          id="newPassword"
          type={showNew ? "text" : "password"}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowNew(!showNew)}
          className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
        >
          {showNew ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      {/* Confirm New Password */}
      <div className="relative">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">
          Confirm New Password
        </label>
        <input
          id="confirmPassword"
          type={showConfirm ? "text" : "password"}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
        >
          {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      <button
        type="submit"
        className="px-6 py-2 text-white rounded-lg bg-orange-500 hover:bg-orange-600 transition"
      >
        Update Password
      </button>
    </form>
  );
}
