import React, { useState } from 'react';
import { X, Smartphone, ShieldCheck, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'signup';
  onClose: () => void;
  onLoginSuccess: (userData: Partial<UserProfile>) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  mode,
  onClose,
  onLoginSuccess
}) => {
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [freeFireUid, setFreeFireUid] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert('Please enter a valid 10-digit Indian phone number');
      return;
    }
    setStep('otp');
    setOtp('1234'); // Simulated pre-filled OTP
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp !== '1234' && otp.length < 4) {
      alert('Please enter a 4-digit OTP');
      return;
    }
    setStep('profile');
  };

  const handleCompleteProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess({
      name: name.trim() || `Player_${phone.slice(-4)}`,
      phone,
      freeFireUid: freeFireUid.trim() || `248${Math.floor(100000 + Math.random() * 900000)}`,
      walletBalance: mode === 'signup' ? 100 : 250, // ₹100 Signup Bonus or existing balance
      winningBalance: mode === 'signup' ? 0 : 150,
      bonusBalance: 50,
      isLoggedIn: true
    });
    setStep('phone');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={() => { setStep('phone'); onClose(); }}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-purple-400 flex items-center justify-center mx-auto mb-3 shadow-md border border-slate-800 overflow-hidden">
            <img src="/1000005890.png" alt="Logo" className="object-contain h-10 w-auto" />
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {mode === 'login' ? 'Welcome Back to FF Arena' : 'Create Your FF Arena Profile'}
          </h3>

          <p className="text-xs text-slate-500 font-medium mt-1">
            {mode === 'signup' ? 'Get ₹100 Welcome Bonus on registration' : 'Log in using your mobile number'}
          </p>
        </div>

        {step === 'phone' && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Mobile Number
              </label>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-2.5 bg-slate-100 border border-slate-200 rounded-xl font-extrabold text-xs sm:text-sm text-slate-700">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="Enter 10-digit number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-semibold text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-md transition-all flex items-center justify-center space-x-2"
            >
              <span>Get OTP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Enter 4-Digit OTP
                </label>
                <span className="text-[11px] text-purple-600 font-bold">Auto-filled: 1234</span>
              </div>
              <input
                type="text"
                required
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full text-center tracking-widest text-lg font-black py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm tracking-wide shadow-md transition-all"
            >
              Verify OTP & Continue
            </button>
          </form>
        )}

        {step === 'profile' && (
          <form onSubmit={handleCompleteProfile} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Your Player Name / Gamer Tag
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Phoenix_Rider"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-semibold text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Game In-App UID (8-10 digits)
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 2481938102"
                value={freeFireUid}
                onChange={(e) => setFreeFireUid(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-semibold text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm tracking-wide shadow-md transition-all"
            >
              Complete Registration & Enter Arena ⚡
            </button>
          </form>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs font-medium text-slate-500">
          By continuing, you accept our{' '}
          <span className="text-slate-900 font-bold">Terms of Service</span> &{' '}
          <span className="text-slate-900 font-bold">FairPlay Policy</span>.
        </div>

      </div>
    </div>
  );
};
