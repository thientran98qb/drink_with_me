import type { User, LeaderboardEntry, FAQItem, Review, LiveFeedItem } from "@/types";

// Mock user profile
export const mockUser: User = {
    id: "1",
    username: "dev_uong_bia",
    displayName: "Dev Hay Nhậu",
    email: "dev@drinkwithme.dev",
    avatar: "/images/avatar.png",
    bio: "Senior Developer by day, Professional Drinker by night",
    level: "Senior Drinker",
    rating: 4.5,
    tags: ["Lẩu lòng", "Bò nướng tảng", "Craft Beer", "No Bugs allowed"],
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date(),
};

// Mock leaderboard data
export const mockLeaderboard: LeaderboardEntry[] = [
    {
        rank: 1,
        user: {
            id: "101",
            displayName: "@SharkHung",
            username: "sharkhung",
            avatar: "/images/leaderboard-1.png",
        },
        description: "Đại gia bao sập nhất",
        isTrophy: true,
    },
    {
        rank: 2,
        user: {
            id: "102",
            displayName: "@TuanTuuLuong",
            username: "tuantuuluong",
            avatar: "/images/leaderboard-2.png",
        },
        description: "Chiến thần không say",
    },
    {
        rank: 3,
        user: {
            id: "103",
            displayName: "@NamLayLoi",
            username: "namlayloi",
            avatar: "/images/leaderboard-3.png",
        },
        description: "Đóng đi điệt mồi",
    },
];

// Mock FAQ data
export const mockFAQs: FAQItem[] = [
    {
        question: "Có cho nợ không?",
        answer: "Có, nhưng lãi suất tính bằng số chai bia phạt lần sau.",
    },
    {
        question: "Say rồi có code tiếp không?",
        answer: "Code được nhưng deploy lên Production thì hên xui.",
    },
    {
        question: "Uống yếu có bị kì thị không?",
        answer: "Không, nhưng sẽ được ưu tiên ngồi cạnh thùng đá.",
    },
    {
        question: "Mang laptop đi nhậu được không?",
        answer: "Được, để kê chân bàn cho đỡ cập kênh.",
    },
];

// Mock reviews data
export const mockReviews: Review[] = [
    {
        id: "r1",
        authorName: "@longdev",
        authorTitle: "CTO @ TechStartup",
        authorAvatar: "LD",
        content:
            '"Code say, deploy tỉnh. Thanh niên này uống bia như uống nước là. 10/10 would drink again."',
        userId: "1",
        createdAt: new Date("2023-10-15"),
    },
    {
        id: "r2",
        authorName: "@hacode",
        authorTitle: "Frontend Lead",
        authorAvatar: "HC",
        content:
            '"Tưởng rủ đi cafe ai dè đi nhậu tới 2h sáng. Uy tín nhưng hơi tốn mồi."',
        userId: "1",
        createdAt: new Date("2023-10-10"),
    },
];

// Mock live feed data
export const mockLiveFeed: LiveFeedItem[] = [
    {
        id: "lf1",
        message: "Vừa chốt kèo Lẩu Dê (2 phút trước)",
        type: "accept",
        timestamp: new Date(),
    },
    {
        id: "lf2",
        message: "Vừa từ chối 1 kèo nước lọc (5 phút trước)",
        type: "reject",
        timestamp: new Date(),
    },
    {
        id: "lf3",
        message: "Đã nốc 3 chai Craft Beer (10 phút trước)",
        type: "complete",
        timestamp: new Date(),
    },
];

// Hot dates for calendar (example: dates that are popular)
export const hotDates = [5, 12, 19]; // Days of month that show as "hot"
export const selectedDates = [11]; // Currently selected/booked dates
