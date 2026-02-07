// User types
export interface User {
    id: string;
    username: string;
    displayName: string;
    email?: string;
    avatar?: string;
    bio?: string;
    level: string;
    rating: number;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

// Booking types
export type BookingStatus = "PENDING" | "CONFIRMED" | "REJECTED" | "COMPLETED";

export interface Booking {
    id: string;
    userId: string;
    guestName: string;
    date: Date;
    menuType: string;
    notes?: string;
    status: BookingStatus;
    createdAt: Date;
}

// Review types
export interface Review {
    id: string;
    authorName: string;
    authorTitle?: string;
    authorAvatar?: string;
    content: string;
    userId: string;
    createdAt: Date;
}

// Leaderboard entry
export interface LeaderboardEntry {
    rank: number;
    user: Pick<User, "id" | "displayName" | "username" | "avatar">;
    description?: string;
    isTrophy?: boolean;
}

// Live feed item
export interface LiveFeedItem {
    id: string;
    message: string;
    type: "accept" | "reject" | "complete";
    timestamp: Date;
}

// FAQ item
export interface FAQItem {
    question: string;
    answer: string;
}
