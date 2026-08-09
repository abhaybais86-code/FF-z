import React, { useState } from 'react';
import { UserProfile, WalletTransaction } from '../../types';
import { X, Wallet, ArrowUpRight, ArrowDownLeft, Banknote, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  user: UserProfile;
  onClose: () => void;
  onDeposit: (amount: number) => void;
  onWithdraw: (amount: number, upiId: string) => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  user,
  onClose,
  onDeposit,
  onWithdraw
}) => {
  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw' | 'history'>('deposit');
  const [depositAmount, setDepositAmount] = useState('100');
  const [withdrawAmount, setWithdrawAmount] = useState('150');
  const [upiId, setUpiId] = useState('player@upi');
  const [selectedUpiApp, setSelectedUpiApp] = useState('gpay');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const [depositSuccess, setDepositSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(depositAmount);
    if (isNaN(amt) || amt < 10) {
      alert('Minimum deposit amount is ₹10');
      return;
    }
    onDeposit(amt);
    setDepositSuccess(true);
    setTimeout(() => {
      setDepositSuccess(false);
    }, 2500);
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(withdrawAmount);
    if (isNaN(amt) || amt < 50) {
      alert('Minimum withdrawal amount is ₹50');
      return;
    }
    if (amt > user.winningBalance) {
      alert(`Maximum withdrawable winnings balance is ₹${user.winningBalance}`);
      return;
    }
    if (!upiId.includes('@')) {
      alert('Please enter a valid UPI ID (e.g. name@upi)');
      return;
    }

    onWithdraw(amt, upiId);
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="flex items-center space-x-2.5 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-purple-400 flex items-center justify-center shadow-xs">
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              FF Arena Wallet
            </h3>
            <span className="text-xs text-slate-500 font-semibold">
              Instant 2s Bank & UPI Transfers
            </span>
          </div>
        </div>

        {/* Total Wallet Balance Card */}
        <div className="bg-slate-950 text-white rounded-2xl p-5 mb-6 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Total Wallet Balance
            </span>
            <span className="text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>Instant Withdrawal Active</span>
            </span>
          </div>

          <div className="text-3xl font-black text-white mb-4">
            ₹{user.walletBalance}
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center text-xs">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Deposit</div>
              <div className="font-extrabold text-slate-200 mt-0.5">₹{user.walletBalance - user.winningBalance - user.bonusBalance}</div>
            </div>
            <div className="border-x border-slate-800">
              <div className="text-[10px] font-bold text-slate-400 uppercase">Winnings</div>
              <div className="font-extrabold text-emerald-400 mt-0.5">₹{user.winningBalance}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Bonus</div>
              <div className="font-extrabold text-purple-400 mt-0.5">₹{user.bonusBalance}</div>
            </div>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex rounded-xl bg-slate-100 p-1 mb-6 text-xs font-extrabold">
          <button
            onClick={() => setActiveTab('deposit')}
            className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'deposit' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Add Money
          </button>
          <button
            onClick={() => setActiveTab('withdraw')}
            className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'withdraw' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Withdraw Cash
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-2 rounded-lg transition-all ${activeTab === 'history' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            History
          </button>
        </div>

        {/* Tab 1: Deposit */}
        {activeTab === 'deposit' && (
          <div>
            {depositSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-base">₹{depositAmount} Added Successfully!</h4>
                <p className="text-xs text-slate-600 font-medium">Your wallet balance has been updated instantly.</p>
              </div>
            ) : (
              <form onSubmit={handleDepositSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Select Amount to Add
                  </label>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {['50', '100', '250', '500'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDepositAmount(amt)}
                        className={`py-2 rounded-xl text-xs font-extrabold border transition-all ${depositAmount === amt ? 'bg-purple-600 text-white border-purple-600 shadow-xs' : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'}`}
                      >
                        +₹{amt}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-black text-base focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter custom amount"
                  />
                </div>

                {/* Payment Option Icons */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Pay Via Instant UPI
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'gpay', label: 'GPay' },
                      { id: 'phonepe', label: 'PhonePe' },
                      { id: 'paytm', label: 'Paytm' },
                      { id: 'bhim', label: 'BHIM UPI' }
                    ].map((app) => (
                      <button
                        key={app.id}
                        type="button"
                        onClick={() => setSelectedUpiApp(app.id)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${selectedUpiApp === app.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                      >
                        {app.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-purple-600/20 transition-all"
                >
                  Pay ₹{depositAmount} & Add to Wallet ⚡
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab 2: Withdraw */}
        {activeTab === 'withdraw' && (
          <div>
            {withdrawSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">₹{withdrawAmount} Transferred in 2 Seconds!</h4>
                <p className="text-xs text-slate-600 font-medium">Money sent directly to UPI ID <strong className="font-bold text-slate-900">{upiId}</strong></p>
              </div>
            ) : (
              <form onSubmit={handleWithdrawSubmit} className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Withdrawal Amount (Max: ₹{user.winningBalance})
                    </label>
                  </div>
                  <input
                    type="number"
                    max={user.winningBalance}
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-black text-base focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                    placeholder="Min ₹50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Enter Linked UPI ID
                  </label>
                  <input
                    type="text"
                    required
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="e.g. mobileNumber@paytm or name@okicici"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 font-semibold text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={user.winningBalance < 50}
                  className={`w-full py-3.5 px-4 rounded-full font-extrabold text-sm sm:text-base tracking-wide transition-all ${user.winningBalance >= 50 ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                >
                  {user.winningBalance >= 50 ? `Instant Withdraw ₹${withdrawAmount} to UPI ⚡` : 'Min Winnings Balance ₹50 Required'}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: History */}
        {activeTab === 'history' && (
          <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
            {[
              { title: 'Welcome Sign Up Bonus', type: 'deposit', amount: 100, date: 'Just now', status: 'SUCCESS' },
              { title: '4v4 Squad Championship Entry', type: 'entry', amount: 49, date: '10 mins ago', status: 'SUCCESS' },
              { title: 'Won 1v1 Duel Pro Cup', type: 'winning', amount: 350, date: '1 hour ago', status: 'SUCCESS' },
              { title: 'Instant UPI Withdrawal', type: 'withdrawal', amount: 200, date: '2 hours ago', status: 'SUCCESS' }
            ].map((tx, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{tx.title}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{tx.date}</div>
                </div>
                <div className={`font-black ${tx.type === 'winning' || tx.type === 'deposit' ? 'text-emerald-600' : 'text-slate-800'}`}>
                  {tx.type === 'winning' || tx.type === 'deposit' ? `+₹${tx.amount}` : `-₹${tx.amount}`}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
