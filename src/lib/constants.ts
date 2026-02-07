// App constants and configuration
export const APP_NAME = "DrinkWithMe.dev";
export const APP_TAGLINE = "Senior Developer by day, Professional Drinker by night";
export const APP_DESCRIPTION =
    "Code có thể bug, nhưng bia thì không bao giờ thiếu bọt.";

// Navigation links
export const NAV_LINKS = [
    { href: "/schedule", label: "Lịch nhậu" },
    { href: "/#leaderboard", label: "BXH Thần Cồn" },
    { href: "/#faq", label: "Hỏi xoáy đáp xoay" },
] as const;

// Drinker levels
export const DRINKER_LEVELS = [
    "Fresher Drinker",
    "Junior Drinker",
    "Mid-level Drinker",
    "Senior Drinker",
    "Principal Drinker",
    "Staff Drinker",
    "Thần Cồn",
] as const;

// Menu options for booking
export const MENU_OPTIONS = [
    { value: "bia-hoi", label: "Bia hơi vỉa hè (Classic)" },
    { value: "lau-long", label: "Lẩu lòng" },
    { value: "bo-nuong", label: "Bò nướng tảng" },
    { value: "craft-beer", label: "Craft Beer" },
    { value: "hai-san", label: "Hải sản" },
    { value: "nuoc-loc", label: "Nước lọc (cho người yếu)" },
] as const;

// Profile tags
export const PROFILE_TAGS = [
    "Lẩu lòng",
    "Bò nướng tảng",
    "Craft Beer",
    "No Bugs allowed",
] as const;

// Footer
export const FOOTER_TEXT = `© ${new Date().getFullYear()} ${APP_NAME}. Made with 🍺 and lots of bugs.`;
