import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assmae Essabbahy – Industrial Engineering & Logistics",
  description:
    "Industrial Engineering & Logistics graduate seeking my first professional opportunity. Specializing in process optimization, supply chain management, and continuous improvement.",
  keywords: [
    "Industrial Engineering", "Logistics", "Supply Chain",
    "Process Optimization", "Lean Manufacturing",
    "Continuous Improvement", "Assmae Essabbahy",
  ],
  authors: [{ name: "Assmae Essabbahy" }],
  icons: { icon: "/favocan.svg" },
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
            __html: `(function(){var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.add('light')}else{document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}