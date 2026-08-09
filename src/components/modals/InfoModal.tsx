import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Phone, MessageSquare, Send } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  tab: 'about' | 'privacy' | 'terms' | 'contact';
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  tab: initialTab,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'privacy' | 'terms' | 'contact'>(initialTab);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Sync state if modal reopens with a different requested tab
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Tab Navigation */}
        <div className="flex items-center space-x-1 border-b border-slate-200 pb-3 mb-6 pr-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'about'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'terms'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'contact'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Contact Support
          </button>
        </div>

        {activeTab === 'about' && (
          <div className="space-y-4 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              About FF Arena
            </h3>
            <p>
              FF Arena is India's leading skill-based esports platform built exclusively for mobile gaming and survival battle players. Founded in 2024, our platform connects gaming enthusiasts across India in daily, weekly, and championship esports events.
            </p>
            <p>
              Our mission is to empower mobile gamers by offering a transparent, secure, and competitive environment where pure gaming skill is rewarded with real cash prizes and instant withdrawals.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 text-purple-900 space-y-2">
              <h4 className="font-extrabold text-sm">Our Key Pillars:</h4>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li>100% FairPlay Guarantee with anti-cheat lobby verifications</li>
                <li>Instant 2-second withdrawals to UPI & Nodal Bank Accounts</li>
                <li>Automatic Host Activity Detection & transparent match IDs</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-4 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h3>
            <p>
              At FF Arena, protecting your privacy and personal data is our top priority.
            </p>
            <h4 className="font-extrabold text-slate-900 text-sm">1. Information We Collect</h4>
            <p>
              We collect minimal required profile data such as your mobile number for OTP verification, In-Game UID, Character Name, and linked UPI details for cash payout processing.
            </p>
            <h4 className="font-extrabold text-slate-900 text-sm">2. Security & Encryption</h4>
            <p>
              All user communication and financial transactions are encrypted using 256-bit bank-grade SSL encryption. User deposit and winning funds are kept strictly in segregated nodal accounts compliant with Indian regulations.
            </p>
            <h4 className="font-extrabold text-slate-900 text-sm">3. Data Non-Disclosure</h4>
            <p>
              We do not sell, rent, or share user personal information with third parties. Your account information is strictly utilized to process contest entry and distribute prizes.
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Terms of Service & Eligibility
            </h3>
            <p>
              By accessing or participating in contests on FF Arena, you agree to abide by the following terms, conditions, and eligibility rules:
            </p>

            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 text-slate-800 space-y-2">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-900 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Legal & State Restrictions Policy</span>
              </h4>
              <p className="text-xs leading-relaxed">
                <strong>Age Restriction:</strong> Participation in paid tournaments is strictly restricted to individuals who are 18 years of age or older.
              </p>
              <p className="text-xs leading-relaxed">
                <strong>State Restrictions:</strong> Users residing in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana are strictly prohibited from entering paid contests based on local laws.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-extrabold text-slate-900 text-sm">1. Skill-Based Gaming</h4>
              <p className="text-xs">
                Contests hosted on FF Arena qualify as games of skill under applicable Indian laws. Outcomes are entirely dependent on superior tactical gameplay, aim precision, and team coordination.
              </p>

              <h4 className="font-extrabold text-slate-900 text-sm">2. FairPlay & Anti-Cheat Policy</h4>
              <p className="text-xs">
                FF Arena maintains a zero-tolerance policy against cheating. Use of third-party hacks, mod menus, emulators, auto-aim scripts, or multi-accounting will result in immediate permanent account suspension and forfeiture of tournament earnings.
              </p>

              <h4 className="font-extrabold text-slate-900 text-sm">3. User Self-Declaration</h4>
              <p className="text-xs">
                By entering any contest, users self-declare that they are at least 18 years old and not residing in any restricted Indian state. Users are solely responsible for ensuring compliance with their regional legislation.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
              Contact 24×7 Support
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Need help with room join IDs, wallet withdrawals, or match results? Our team responds within 2 minutes!
            </p>

            {contactSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-slate-900 text-sm">Message Sent!</h4>
                <p className="text-xs text-slate-600 font-medium">Our support agent will message you back on WhatsApp shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Your Name</label>
                  <input required type="text" placeholder="Gamer Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">WhatsApp / Phone Number</label>
                  <input required type="tel" placeholder="+91 9876543210" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">How can we help?</label>
                  <textarea required rows={3} placeholder="Describe your query..." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold" />
                </div>
                <button type="submit" className="w-full py-3 px-4 bg-purple-600 text-white font-extrabold text-sm rounded-full shadow-md">
                  Submit Support Ticket
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center space-x-1.5 text-emerald-600 hover:underline">
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (24x7)</span>
              </a>
              <span className="text-slate-400 font-normal">support@ffarena.in</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
