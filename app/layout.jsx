import { JetBrains_Mono, Oswald, Poppins, Plaster, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
const plaster = Plaster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Plaster",
});
const playfairDisplaySC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfairDisplaySC",
});

export const metadata = {
  title: "Franck Chapelon",
  description: "Modern web development with Next.js Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${jetbrainsMono.variable} ${plaster.variable} ${poppins.variable} ${playfairDisplaySC.variable}`}>
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
