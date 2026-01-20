import { useState } from "react";
import { Lock, Eye, EyeOff, AtSign, Check } from "lucide-react";
import Image from "next/image";

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm = ({ onSwitchToSignup }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className='w-full min-w-xl space-y-4'>
      {/* Heading */}
      <div className='space-y-2'>
        <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#008B82] to-[#00D9A5] bg-clip-text text-transparent'>
          Welcome Back.
        </h2>
        <p className='text-base text-foreground'>
          Please enter your login information to begin your daily activities.
        </p>
      </div>

      {/* Google Sign In Button */}
      <button className='group w-full flex items-center justify-center gap-3 py-3 px-4 bg-transparent text-foreground rounded-full border-[1.5px] cursor-pointer border-white font-medium hover:bg-white hover:text-black transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg'>
        <svg
          className='w-5 h-5 transition-transform duration-300 group-hover:scale-110'
          viewBox='0 0 24 24'
        >
          <path
            fill='#4285F4'
            d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
          />
          <path
            fill='#34A853'
            d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
          />
          <path
            fill='#FBBC05'
            d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
          />
          <path
            fill='#EA4335'
            d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
          />
        </svg>
        Continue with Google
      </button>

      {/* Form Fields */}
      <div className='space-y-3'>
        {/* Username */}
        <div>
          <label className='block text-sm text-foreground mb-1.5'>
            Username
          </label>
          <div className='input-with-icon'>
            <div className='input-icon'>
              <AtSign className='w-4 h-4' />
            </div>
            <input type='text' className='input-field w-full' />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className='block text-sm text-foreground mb-1.5'>
            Password
          </label>
          <div className='input-with-icon'>
            <div className='input-icon'>
              <Lock className='w-4 h-4' />
            </div>
            <div className='relative flex-1'>
              <input
                type={showPassword ? "text" : "password"}
                className='input-field pr-10 w-full'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground z-10'
              >
                {showPassword ? (
                  <EyeOff className='w-4 h-4' />
                ) : (
                  <Eye className='w-4 h-4' />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Remember Me and Forgot Password */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            id='remember'
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className='sr-only'
          />
          <label
            htmlFor='remember'
            className={`flex items-center justify-center w-4 h-4 border-2 rounded cursor-pointer transition-all ${
              rememberMe
                ? "bg-primary border-primary"
                : "border-primary bg-transparent"
            }`}
          >
            {rememberMe && (
              <Check className='w-3 h-3 text-primary-foreground' />
            )}
          </label>
          <label
            htmlFor='remember'
            className='text-sm text-foreground cursor-pointer'
          >
            Remember me
          </label>
        </div>
        <a href='#' className='text-sm text-[#FF0000D1] hover:underline'>
          Forgot password
        </a>
      </div>

      {/* Log in Button */}
      <button className='w-full py-3 px-4 bg-[#002F2E] text-white rounded-full font-medium hover:bg-[#004a48] active:bg-[#001f1e] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-[#002F2E]/50'>
        Log in
      </button>

      {/* Sign Up Link */}
      <p className='text-center text-base text-muted-foreground'>
        Don't have an account?{" "}
        <button
          onClick={onSwitchToSignup}
          className='text-[#FF0000D1] hover:underline font-medium'
        >
          Sign up here
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
