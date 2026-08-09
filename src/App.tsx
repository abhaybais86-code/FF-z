import React, { useState, useEffect } from 'react';
import { UserProfile, Tournament } from './types';
import { INITIAL_TOURNAMENTS, RECENT_NOTIFICATIONS } from './data/mockData';
import { Header } from './components/Header';
import { NavDrawer } from './components/NavDrawer';
import { HeroSection } from './components/HeroSection';
import { StatsGrid } from './components/StatsGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { GameModesSection } from './components/GameModesSection';
import { LiveTournamentsSection } from './components/LiveTournamentsSection';
import { HowToPlaySection } from './components/HowToPlaySection';
import { ScoreboardSection } from './components/ScoreboardSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { CommunitySection } from './components/CommunitySection';
import { DownloadBanner } from './components/DownloadBanner';
import { ResponsibleGamingBanner } from './components/ResponsibleGamingBanner';
import { Footer } from './components/Footer';

import { DownloadModal } from './components/modals/DownloadModal';
import { BrowserDownloadPromptModal } from './components/modals/BrowserDownloadPromptModal';
import { JoinTournamentModal } from './components/modals/JoinTournamentModal';
import { AuthModal } from './components/modals/AuthModal';
import { WalletModal } from './components/modals/WalletModal';
import { InfoModal } from './components/modals/InfoModal';
import { Zap, CheckCircle2, Trophy, X } from 'lucide-react';

export default function App() {
  // User State
  const [user, setUser] = useState<UserProfile>({
    name: 'Player',
    phone: '9876543210',
    freeFireUid: '2481920192',
    walletBalance: 250,
    winningBalance: 150,
    bonusBalance: 50,
    isLoggedIn: true
  });

  // Tournaments State
  const [tournaments, setTournaments] = useState<Tournament[]>(INITIAL_TOURNAMENTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modals State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isBrowserPromptOpen, setIsBrowserPromptOpen] = useState(false);
  const [infoTab, setInfoTab] = useState<'about' | 'privacy' | 'terms' | 'contact'>('about');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // APK Direct Download Handler
  const handleTriggerApkDownload = () => {
    const dummyApkContent = new Blob([
      "FF Arena Official Android Application Package (APK)\nVersion: 2.4.0\nPlatform: Mobile Gaming Esports India\nPackage: com.ffarena.esports"
    ], { type: "application/vnd.android.package-archive" });
    const url = URL.createObjectURL(dummyApkContent);
    const a = document.createElement("a");
    a.href = url;
    a.download = "FFArena.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Floating Live Ticker Notification
  const [currentNotifIndex, setCurrentNotifIndex] = useState(0);
  const [showNotif, setShowNotif] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowNotif(false);
      setTimeout(() => {
        setCurrentNotifIndex((prev) => (prev + 1) % RECENT_NOTIFICATIONS.length);
        setShowNotif(true);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Handlers
  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLoginSuccess = (userData: Partial<UserProfile>) => {
    setUser((prev) => ({
      ...prev,
      ...userData,
      isLoggedIn: true
    }));
  };

  const handleLogout = () => {
    setUser((prev) => ({
      ...prev,
      isLoggedIn: false
    }));
  };

  const handleOpenInfoModal = (tab: 'about' | 'privacy' | 'terms' | 'contact') => {
    setInfoTab(tab);
    setIsInfoModalOpen(true);
  };

  const handleJoinTournamentClick = (t: Tournament) => {
    setSelectedTournament(t);
    setIsJoinModalOpen(true);
  };

  const handleConfirmJoinTournament = (t: Tournament, ffUid: string, ign: string) => {
    // Deduct entry fee
    setUser((prev) => ({
      ...prev,
      walletBalance: Math.max(0, prev.walletBalance - t.entryFee),
      freeFireUid: ffUid,
      name: ign
    }));

    // Update player count
    setTournaments((prev) =>
      prev.map((item) =>
        item.id === t.id
          ? { ...item, joinedPlayers: Math.min(item.maxPlayers, item.joinedPlayers + 1) }
          : item
      )
    );
  };

  const handleDeposit = (amount: number) => {
    setUser((prev) => ({
      ...prev,
      walletBalance: prev.walletBalance + amount
    }));
  };

  const handleWithdraw = (amount: number, _upiId: string) => {
    setUser((prev) => ({
      ...prev,
      walletBalance: Math.max(0, prev.walletBalance - amount),
      winningBalance: Math.max(0, prev.winningBalance - amount)
    }));
  };

  const scrollToTournaments = () => {
    const el = document.getElementById('tournaments-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeNotif = RECENT_NOTIFICATIONS[currentNotifIndex];

  return (
    <div className="min-h-screen bg-[#0B0C10] text-gray-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Fixed Header */}
      <Header
        user={user}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenAuth={handleOpenAuth}
        onOpenWallet={() => setIsWalletModalOpen(true)}
        onOpenDownload={() => setIsDownloadModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroSection
          onDownloadApp={() => setIsBrowserPromptOpen(true)}
          onStartPlaying={scrollToTournaments}
        />

        {/* Stats Grid & Quick Feature Badges */}
        <StatsGrid />

        {/* Features Section */}
        <FeaturesSection />

        {/* Game Modes Filter Section */}
        <GameModesSection
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToTournaments();
          }}
        />

        {/* Live Tournaments Grid */}
        <LiveTournamentsSection
          tournaments={tournaments}
          onJoinTournament={handleJoinTournamentClick}
          selectedCategory={selectedCategory}
        />

        {/* How To Play & Comparison Section */}
        <HowToPlaySection />

        {/* Scoreboard Statistics Section */}
        <ScoreboardSection />

        {/* Verified Reviews Section */}
        <ReviewsSection />

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Community Social Links Section */}
        <CommunitySection />

        {/* Download Banner Callout */}
        <DownloadBanner
          onDownloadAndroid={() => setIsBrowserPromptOpen(true)}
        />

        {/* 18+ Responsible Gaming & Compliance Notice Banner */}
        <ResponsibleGamingBanner
          onOpenTerms={() => handleOpenInfoModal('terms')}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenInfoModal={handleOpenInfoModal}
        onOpenDownload={() => setIsBrowserPromptOpen(true)}
      />

      {/* FLOATING REAL-TIME ACTIVITY TOAST TICKER */}
      {showNotif && activeNotif && (
        <div className="fixed bottom-5 left-4 z-40 max-w-xs sm:max-w-sm bg-slate-950/95 text-white border border-slate-800 rounded-2xl p-3 shadow-2xl backdrop-blur-md flex items-center justify-between animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {activeNotif.type === 'withdrawal' ? (
                <Zap className="w-4 h-4 text-emerald-400" />
              ) : (
                <Trophy className="w-4 h-4 text-amber-400" />
              )}
            </div>
            <div>
              <div className="text-xs font-extrabold text-white flex items-center space-x-1">
                <span>{activeNotif.user}</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-1 rounded">
                  {activeNotif.type === 'withdrawal' ? `₹${activeNotif.amount} Withdrawn` : `₹${activeNotif.amount} Won`}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-medium">
                {activeNotif.method ? `Via ${activeNotif.method}` : activeNotif.game} • {activeNotif.timeAgo}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowNotif(false)}
            className="text-slate-500 hover:text-white p-1 ml-2"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* MODALS & DRAWERS */}
      
      {/* Slide-over Navigation Drawer */}
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        user={user}
        onOpenAuth={handleOpenAuth}
        onOpenInfoModal={handleOpenInfoModal}
        onOpenWallet={() => setIsWalletModalOpen(true)}
        onOpenDownload={() => setIsBrowserPromptOpen(true)}
        onLogout={handleLogout}
      />

      {/* APK Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      {/* Browser Download Confirmation Prompt ("Download file again? FFArena.apk (24.10 MB)") */}
      <BrowserDownloadPromptModal
        isOpen={isBrowserPromptOpen}
        onClose={() => setIsBrowserPromptOpen(false)}
        onConfirmDownload={handleTriggerApkDownload}
      />

      {/* Tournament Registration Prompt Modal (Prompts to download app to play) */}
      <JoinTournamentModal
        tournament={selectedTournament}
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        onDownloadApp={() => {
          setIsJoinModalOpen(false);
          setIsBrowserPromptOpen(true);
        }}
      />

      {/* Auth Login/Signup Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        mode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Wallet Deposit/Withdrawal Modal */}
      <WalletModal
        isOpen={isWalletModalOpen}
        user={user}
        onClose={() => setIsWalletModalOpen(false)}
        onDeposit={handleDeposit}
        onWithdraw={handleWithdraw}
      />

      {/* Info Modal (About, Privacy, Terms, Contact) */}
      <InfoModal
        isOpen={isInfoModalOpen}
        tab={infoTab}
        onClose={() => setIsInfoModalOpen(false)}
      />

    </div>
  );
}
