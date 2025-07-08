import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata = {
  title: "Welth App",
  description: "One stop Finance platform",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/* header */}
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>
        <Toaster richColors/>
        {/* Footer */}
        <footer className="bg-blue-50 py-10">
          <div className="container mx-auto text-center text-gray-600">
            <p>Made with ❤️ by Manisha</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
