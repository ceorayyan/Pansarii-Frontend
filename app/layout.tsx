import "./globals.css";

export const metadata = {
  title: "Pansari Inn",
  description: "Premium rooms and hospitality",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Google Fonts CDN for Poppins */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: { 
                  extend: { 
                    colors: { primary: '#1C64F2' },
                    fontFamily: { poppins: ['Poppins', 'sans-serif'] },
                  } 
                },
              }
            `,
          }}
        />
      </head>
      <body className="bg-white text-black font-poppins ">
        {children}
      </body>
    </html>
  );
}
