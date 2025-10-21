import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ProfileSetting() {
  const [showPassword, setShowPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Handle file selection
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  return (
    <form className="space-y-4 max-w-md mx-auto p-4 bg-white rounded-xl shadow-md">
      
      {/* Profile Photo */}
      <div className="flex flex-col items-center">
        {profilePhoto ? (
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-2"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
            <span className="text-gray-400">No Photo</span>
          </div>
        )}
        <label className="cursor-pointer px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-600 transition">
          Upload Photo
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </label>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      {/* Password with show/hide toggle */}
      <div className="relative">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
        </button>
      </div>

      <div>
  <label class="block text-gray-700 font-medium mb-1" for="interests">
    Interests
  </label>
  <div id="interests-container" class="flex flex-wrap gap-2 mb-2">
  </div>
  <input
    id="interests"
    type="text"
    placeholder="Enter your interests here"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
  />
</div>


      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 text-white rounded-lg bg-orange-500 hover:bg-orange-600 transition"
      >
        Update Profile
      </button>
    </form>
  );
}
