export interface ChatHistoryItem {
  id: string;
  title: string;
  timestamp: string;
  isActive?: boolean;
}

export interface Dashboard {
  id: string;
  name: string;
  icon: string;
}

export interface Assistant {
  id: string;
  name: string;
  model: string;
  icon: string;
}

export interface ExampleCard {
  id: string;
  title: string;
  icon: string;
}

export const chatHistory: ChatHistoryItem[] = [
  { id: "1", title: "New Chat", timestamp: "Today", isActive: true },
  { id: "2", title: "New Chat", timestamp: "2 days ago" },
  {
    id: "3",
    title: "Q3 Running Shoes Performance Analysis",
    timestamp: "2 days ago",
  },
  {
    id: "4",
    title: "Compare winter jacket prices vs competitors",
    timestamp: "2 days ago",
  },
];

export const dashboards: Dashboard[] = [
  { id: "1", name: "Dashboard 1", icon: "grid" },
  { id: "2", name: "Dashboard 2", icon: "trending" },
  { id: "3", name: "Dashboard 3", icon: "chart" },
];

export const assistants: Assistant[] = [
  { id: "1", name: "Analytics Pro", model: "GPT-4 Turbo", icon: "📊" },
  { id: "2", name: "Price Monitor", model: "Claude 3.5", icon: "📊" },
  { id: "3", name: "Market Insight", model: "GPT-4", icon: "📊" },
  { id: "4", name: "Competitor Track", model: "Gemini Pro", icon: "📊" },
];

export const exampleCards: ExampleCard[] = [
  {
    id: "1",
    title: "Compare Decathlon running shoes vs Nike & Adidas",
    icon: "compare",
  },
  {
    id: "2",
    title: "Track competitor pricing trends for cycling gear",
    icon: "chart",
  },
  {
    id: "3",
    title: "Generate market share report for sports equipment",
    icon: "report",
  },
  {
    id: "4",
    title: "Alert me when competitors change camping prices",
    icon: "bell",
  },
];

export const profileMenuItems = [
  { id: "1", label: "Dark Mode", icon: "moon", action: "toggle-dark" },
  { id: "2", label: "Settings", icon: "settings", action: "settings" },
  { id: "3", label: "Upgrade Plan", icon: "upgrade", action: "upgrade" },
  { id: "4", label: "Help", icon: "help", action: "help" },
  { id: "5", label: "Send Feedback", icon: "feedback", action: "feedback" },
  {
    id: "6",
    label: "Log Out",
    icon: "logout",
    action: "logout",
    isDanger: true,
  },
];

export const userProfile = {
  name: "Salah Nacef",
  email: "snacef@futuretail.ai",
  avatar: "/avatar.jpg",
};
