import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: `${APP_NAME} - ${APP_DESCRIPTION}`,
  keywords: ["developer", "drinking", "networking", "booking", "vietnam"],
  authors: [{ name: "DrinkWithMe Team" }],
  openGraph: {
    title: APP_NAME,
    description: `${APP_NAME} - ${APP_DESCRIPTION}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased`}
      >
        <NextTopLoader color="#f45925" height={3} showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
