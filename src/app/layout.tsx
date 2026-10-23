import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pius Lucky | Fullstack Developer & SQA Engineer",
  description:
    "Portfolio of Pius Lucky — fullstack developer skilled in React, Next.js, React Native, Expo, Java, Spring Boot, C#, and Node.js, with manual and automation testing experience.",
  keywords: [
    "Pius Lucky",
    "Fullstack Developer",
    "SQA",
    "React",
    "Next.js",
    "React Native",
    "Expo",
    "Mobile Development",
    "Java",
    "Spring Boot",
    "C#",
    "Node.js",
    "Test Automation",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="atmosphere min-h-full flex flex-col font-sans text-ink"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
