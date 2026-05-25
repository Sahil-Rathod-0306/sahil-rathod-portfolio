import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahil Rathod | Full Stack Developer",
  description:
    "Portfolio of Sahil Rathod, a full stack developer building scalable web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#071827] text-slate-100">
        {children}
      </body>
    </html>
  );
}

