import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/LanguageProvider";
import { Space_Grotesk, Space_Mono } from "next/font/google";

// Self-hosted + preloaded by Next; replaces the render-blocking Google Fonts <link>
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Alvin Ade — Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies. Building scalable applications with creativity and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  var resolved = theme;
                  if (theme === 'system') {
                    resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(resolved);
                } catch(e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${grotesk.variable} ${spaceMono.variable} antialiased overflow-x-clip neo-ui`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <div className="pt-16 overflow-x-clip">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js?token=acba4c07-084b-4f61-8a54-801ca52995a1"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
