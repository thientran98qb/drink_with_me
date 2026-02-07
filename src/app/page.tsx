import { Container, BeerBubbles, ScrollToTop } from "@/components/common";
import { Header, Footer } from "@/components/layout";
import {
  LiveFeedTicker,
  HeroSection,
  ProfileCard,
  BookingCalendar,
  Leaderboard,
  FAQSection,
  ReviewsSection,
} from "@/components/features/home";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Floating beer bubbles background */}
      <BeerBubbles />

      <Header />
      {/* Spacer for fixed header */}
      <div className="h-16" />

      <LiveFeedTicker />

      <main className="relative z-10 flex-1">
        <Container>
          {/* Hero + Profile + Calendar Section */}
          <div className="grid gap-8 py-8 lg:grid-cols-2">
            {/* Left column */}
            <div className="space-y-8">
              <HeroSection />
              <ProfileCard />
              <Leaderboard />
            </div>

            {/* Right column - Booking Calendar */}
            <div>
              <BookingCalendar />
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection />

          {/* Reviews Section */}
          <ReviewsSection />
        </Container>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
