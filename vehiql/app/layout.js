import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Vehicle",
  description: "Find Your Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-blue-50 py-12">
            <div className="contain mx-auto px-5 text-center text-gray-500">
              <p>Made In India Car Marketplace</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
