export interface Tournament {
  id: string;
  title: string;
  mode: string; // e.g. "4v4 Squad Match", "1v1 Duel Match", "Survival BR • Solo", etc.
  category: 'cs' | 'lonewolf' | 'br' | 'survival' | 'squad';
  entryFee: number;
  prizePool: number;
  joinedPlayers: number;
  maxPlayers: number;
  isLive: boolean;
  fairPlayEnabled: boolean;
  startTime: string;
  map?: string;
}

export interface GameMode {
  id: string;
  name: string;
  subText: string;
  tag: string;
  fairPlay: boolean;
  iconName: string;
  category: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  verified: boolean;
  rating: number;
  text: string;
  cashWon: number;
  avatarColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  freeFireUid: string;
  walletBalance: number;
  winningBalance: number;
  bonusBalance: number;
  isLoggedIn: boolean;
}

export interface WalletTransaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'entry_fee' | 'winning';
  amount: number;
  title: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  date: string;
}

export interface LiveNotification {
  id: string;
  user: string;
  type: 'withdrawal' | 'win';
  amount: number;
  timeAgo: string;
  method?: string;
  game?: string;
}
