import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahela Fashion Design",
  description: "Authentic Afrocentric fashion blending Ethiopian heritage with modern style.",
  icons: {
    icon: "/assets/logo.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
