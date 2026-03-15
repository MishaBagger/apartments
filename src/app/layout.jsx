import { Inter, Antic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const antic = Antic({
  variable: "--font-antic-mono",
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Ремонт квартир в Вологде",
  description: "Ремонт квартир в Вологде",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${inter.variable} ${antic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
