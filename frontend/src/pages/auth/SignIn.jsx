// src/pages/auth/SignUp.jsx
import React from 'react';
import SignUpForm from '../../components/auth/SignUpForm';
import AuthLayout from '../../components/auth/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;