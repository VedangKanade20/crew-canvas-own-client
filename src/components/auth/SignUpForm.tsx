/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signUp, validateEmail, validatePassword, validateFullName, type SignUpFormData } from '@/lib/auth';

interface SignUpFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function SignUpForm({ onSuccess, onError }: SignUpFormProps) {
  const [fullName, setFullName] = useState('John Doe');
  const [email, setEmail] = useState('name@example.com');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    
    // Client-side validation
    if (!validateFullName(fullName)) {
      const errorMsg = 'Full name must be at least 2 characters';
      setLocalError(errorMsg);
      onError?.(errorMsg);
      return;
    }
    
    if (!validateEmail(email)) {
      const errorMsg = 'Please enter a valid email address';
      setLocalError(errorMsg);
      onError?.(errorMsg);
      return;
    }
    
    if (!validatePassword(password)) {
      const errorMsg = 'Password must be at least 8 characters';
      setLocalError(errorMsg);
      onError?.(errorMsg);
      return;
    }
    
    if (!agreeToTerms) {
      const errorMsg = 'Please agree to the Terms of Service and Privacy Policy';
      setLocalError(errorMsg);
      onError?.(errorMsg);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await signUp({ fullName, email, password, agreeToTerms });
      
      if (response.success) {
        onSuccess?.();
      }
    } catch (error: any) {
      const errorMsg = error.message || 'Sign up failed. Please try again.';
      setLocalError(errorMsg);
      onError?.(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
          placeholder="John Doe"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
          placeholder="name@example.com"
          required
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
          placeholder="••••••••"
          required
          minLength={8}
          disabled={isLoading}
        />
        <p className="mt-1 text-sm text-gray-400">Must be at least 8 characters long</p>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="agreeToTerms"
          checked={agreeToTerms}
          onChange={(e) => setAgreeToTerms(e.target.checked)}
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-600 bg-gray-700 rounded mt-0.5"
          required
          disabled={isLoading}
        />
        <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-300">
          I agree to the{' '}
          <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition duration-200">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition duration-200">
            Privacy Policy
          </Link>
        </label>
      </div>

      {localError && (
        <div className="p-3 bg-red-900/50 border border-red-500 rounded-lg">
          <p className="text-red-300 text-sm">{localError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!agreeToTerms || isLoading}
        className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        {isLoading ? 'Creating Account...' : 'Create account'}
      </button>
    </form>
  );
}