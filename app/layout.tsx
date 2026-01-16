import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Navbar MUST be inside Providers */}
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Footer />

          {/* Global Toasts */}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "var(--background)",
                color: "var(--foreground)",
                border: "1px solid var(--muted)",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}