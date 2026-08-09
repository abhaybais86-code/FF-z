import { Tournament, GameMode, Review, FAQItem, LiveNotification } from '../types';

export const INITIAL_TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    title: '4v4 Squad Championship',
    mode: '4v4 Squad Match',
    category: 'cs',
    entryFee: 49,
    prizePool: 25000,
    joinedPlayers: 168,
    maxPlayers: 200,
    isLive: true,
    fairPlayEnabled: true,
    startTime: 'Starts in 12 mins',
    map: 'Desert Arena'
  },
  {
    id: 't2',
    title: '1v1 Duel Pro Cup',
    mode: '1v1 Duel Match',
    category: 'lonewolf',
    entryFee: 25,
    prizePool: 10000,
    joinedPlayers: 92,
    maxPlayers: 100,
    isLive: true,
    fairPlayEnabled: true,
    startTime: 'Starts in 5 mins',
    map: 'Iron Cage'
  },
  {
    id: 't3',
    title: 'Survival Battle Royale Knockout',
    mode: 'Survival BR • Solo',
    category: 'br',
    entryFee: 39,
    prizePool: 50000,
    joinedPlayers: 412,
    maxPlayers: 500,
    isLive: true,
    fairPlayEnabled: true,
    startTime: 'Starts in 25 mins',
    map: 'Tropical Island'
  },
  {
    id: 't4',
    title: 'Solo Survival Elite',
    mode: 'Solo Survival',
    category: 'survival',
    entryFee: 19,
    prizePool: 8000,
    joinedPlayers: 76,
    maxPlayers: 100,
    isLive: true,
    fairPlayEnabled: true,
    startTime: 'Starts in 18 mins',
    map: 'Kalahari'
  },
  {
    id: 't5',
    title: 'Daily Cash Cup',
    mode: 'Squad • 4v4',
    category: 'squad',
    entryFee: 59,
    prizePool: 15000,
    joinedPlayers: 210,
    maxPlayers: 256,
    isLive: true,
    fairPlayEnabled: true,
    startTime: 'Starts in 40 mins',
    map: 'Alpine'
  }
];

export const GAME_MODES: GameMode[] = [
  {
    id: 'gm1',
    name: '4v4 Squad Match',
    subText: '4v4 Squad',
    tag: 'Squad Ranked',
    fairPlay: true,
    iconName: 'Gamepad2',
    category: 'cs'
  },
  {
    id: 'gm2',
    name: '1v1 Duel Match',
    subText: 'Quick Match',
    tag: '1v1 • 2v2',
    fairPlay: true,
    iconName: 'Target',
    category: 'lonewolf'
  },
  {
    id: 'gm3',
    name: 'Survival Battle Royale',
    subText: '50 players',
    tag: 'BR',
    fairPlay: true,
    iconName: 'Flame',
    category: 'br'
  },
  {
    id: 'gm4',
    name: 'Solo Survival',
    subText: 'Solo',
    tag: 'Elite',
    fairPlay: true,
    iconName: 'Crosshair',
    category: 'survival'
  },
  {
    id: 'gm5',
    name: 'Solo Battle',
    subText: 'Ranked',
    tag: '1 Player',
    fairPlay: true,
    iconName: 'User',
    category: 'br'
  },
  {
    id: 'gm7',
    name: '4v4 Team Battle',
    subText: 'Team',
    tag: '4v4',
    fairPlay: true,
    iconName: 'Users2',
    category: 'squad'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Arjun R.',
    location: 'Bengaluru',
    verified: true,
    rating: 5,
    text: 'Won ₹8,400 in a 4v4 Squad Match tournament — withdrew to UPI in under 2 minutes. Incredibly responsive and premium platform.',
    cashWon: 8400,
    avatarColor: 'bg-indigo-600'
  },
  {
    id: 'r2',
    name: 'Priya S.',
    location: 'Mumbai',
    verified: true,
    rating: 5,
    text: 'FairPlay is 100% legitimate. Lobbies are matched correctly based on skill and I have never faced any hackers.',
    cashWon: 3200,
    avatarColor: 'bg-purple-600'
  },
  {
    id: 'r3',
    name: 'Rahul K.',
    location: 'Delhi',
    verified: true,
    rating: 5,
    text: 'This is easily the cleanest UI in competitive eSports. Wallets, matches, customer support are just one click away.',
    cashWon: 15600,
    avatarColor: 'bg-blue-600'
  },
  {
    id: 'r4',
    name: 'Ananya M.',
    location: 'Hyderabad',
    verified: true,
    rating: 5,
    text: 'Had an issue with room ID, support resolved it on WhatsApp in under 2 minutes. Platform support is excellent.',
    cashWon: 2100,
    avatarColor: 'bg-violet-600'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How fast are cash withdrawals processed?',
    answer: 'Instant! Withdrawals are transferred directly to your linked UPI ID (GPay, PhonePe, Paytm) or Bank Account within 2 seconds. No waiting or hidden fees.'
  },
  {
    id: 'f2',
    question: 'How does the anti-cheat system work?',
    answer: 'We use server-side host activity verification, mandatory Game UID linking, client screenshot verification, and automated skill-level lobby matching to ensure 100% fair play.'
  },
  {
    id: 'f3',
    question: 'How do I join a match lobby?',
    answer: 'After joining a contest, your match lobby details and room credentials will be revealed in your active match tab exactly 15 minutes before the match start time.'
  },
  {
    id: 'f4',
    question: 'Is my wallet deposit secure?',
    answer: 'Yes! All user funds are kept in RBI-compliant segregated nodal bank accounts, secured with 256-bit bank grade encryption and instant UPI gateway receipts.'
  }
];

export const RECENT_NOTIFICATIONS: LiveNotification[] = [
  {
    id: 'n1',
    user: 'Karan M.',
    type: 'withdrawal',
    amount: 250,
    timeAgo: '2s ago',
    method: 'UPI'
  },
  {
    id: 'n2',
    user: 'Vikram S.',
    type: 'win',
    amount: 1500,
    timeAgo: '12s ago',
    game: 'CS Championship'
  },
  {
    id: 'n3',
    user: 'Rohit P.',
    type: 'withdrawal',
    amount: 500,
    timeAgo: '35s ago',
    method: 'PhonePe'
  },
  {
    id: 'n4',
    user: 'Deepak G.',
    type: 'withdrawal',
    amount: 1200,
    timeAgo: '1m ago',
    method: 'Paytm'
  }
];
