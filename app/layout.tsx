// app/layout.tsx
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishList";
import Navbar from "./Desktop/components/navbar";
import Footer from "./Desktop/components/footer";
// import PansariinnSidebar from "./Desktop/components/sidebar/index";

export const metadata = {
  title: "Pansari Inn - Premium Ayurvedic & Herbal Products",
  description: "100% Pure Ayurvedic & Herbal Products. Premium quality natural products for health, beauty, and wellness.",
  keywords: "ayurvedic, herbal, natural products, wellness, health, beauty, Pakistan",
  authors: [{ name: "Pansari Inn" }],
  openGraph: {
    title: "Pansari Inn - Premium Ayurvedic & Herbal Products",
    description: "100% Pure Ayurvedic & Herbal Products for health and wellness",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white text-gray-900 font-poppins antialiased">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="min-h-screen bg-white pt-44">
              {children}
            </main>
            <Footer />
            {/* <PansariinnSidebar /> */}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}