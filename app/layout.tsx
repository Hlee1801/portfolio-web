import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ThemeSwitch from "@/components/common/ThemeSwitch";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lê Việt Hoàng | Java Developer Portfolio",
  description: "Lê Việt Hoàng is an experienced Java Developer with expertise in Spring Boot, microservices, and cloud technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-[#f7f5f3] text-[#4a4a4a] relative dark:bg-[#0f0f0f] dark:text-gray-50 transition-colors`}
      >
        {/* Light mode gradients */}
        <div className="bg-gradient-to-br from-[#f7f5f3] via-[#f1ede8] to-[#e8e0d6] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"></div>
        
        <div className="bg-gradient-to-br from-[#e8e0d6] via-[#d4a574] to-[#c49660] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-purple-900/20 dark:via-gray-900 dark:to-gray-900"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main className="pt-[4rem]">
              {children}
            </main>
            <Footer />
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: '#ffffff',
                  color: '#4a4a4a',
                  border: '1px solid #e8e0d6',
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
