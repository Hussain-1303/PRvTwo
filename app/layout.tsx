import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Hussain Vahora | Portfolio",
  description: "Full-stack developer and leadership enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}