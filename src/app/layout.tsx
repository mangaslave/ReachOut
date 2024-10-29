
import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReachOut",
  description: "ReachOut App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
