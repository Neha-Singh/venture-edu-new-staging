import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenu } from "@/components/ui/navigation";
import { FooterSection } from "@/components/ui/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Welcome to VenturEdu | Launch Your Venture with Us\t",
  description:
    "Discover VenturEdu, your go-to platform for entrepreneurial education and support. Explore our programs, resources, and community initiatives designed to help you launch and grow your venture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // system | dark | light
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenu />
          {/* reverted: let each page control its own width */}
          <main className="flex flex-col md:mt-20 mt-15 min-h-[calc(100vh-160px)]">
            {children}
          </main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
