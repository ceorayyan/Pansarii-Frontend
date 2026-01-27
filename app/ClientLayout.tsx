"use client";

import { useState } from 'react';
import Navbar from "./Desktop/components/navbar";
import PansariinnSidebar from "./Desktop/components/sidebar/page";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCartClick = () => {
    console.log("Cart button clicked, opening sidebar");
    setIsSidebarOpen(true);
  };

  return (
    <>
      <Navbar onCartClick={handleCartClick} />
      <main className="min-h-screen bg-white relative">
        {children}
      </main>
      
      {/* Sidebar */}
      <PansariinnSidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}