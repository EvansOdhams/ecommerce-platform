// src/components/auth/SocialLogin.jsx
import React from 'react';
import { Facebook, Mail } from 'lucide-react';

const SocialLogin = ({ onGoogleClick, onFacebookClick }) => {
  return (
    <div className="space-y-3">
      <button
        onClick={onGoogleClick}
        className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <Mail className="w-5 h-5" />
        <span>Continue with Google</span>
      </button>
      <button
        onClick={onFacebookClick}
        className="w-full flex items-center justify-center space-x-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <Facebook className="w-5 h-5" />
        <span>Continue with Facebook</span>
      </button>
    </div>
  );
};

export default SocialLogin;