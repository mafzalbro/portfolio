import type { Metadata } from "next";
import ThemeProviderClient from "@/components/theme-provider";
import TopNav from "@/components/layout/top-nav";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Afzal.MERN - MERN Stack Developer Portfolio",
  description:
    "Portfolio of Muhammad Afzal, a MERN stack developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme'); if(t==='dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)){ document.documentElement.classList.add('dark'); document.documentElement.classList.remove('light'); } else { document.documentElement.classList.add('light'); document.documentElement.classList.remove('dark'); }}catch(e){} })()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProviderClient>
          <TopNav />
          <main className="p-4 md:p-6 lg:p-8">{children}</main>
          <Toaster />
        </ThemeProviderClient>
        <Analytics />
      </body>
    </html>
  );
}
