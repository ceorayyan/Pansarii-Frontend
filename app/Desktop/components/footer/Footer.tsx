// components/footer/Footer.tsx
'use client'; // Add if using useState for form

import ContactInfo from './ContactInfo';
import LinkColumns from './LinkColumns';
import Newsletter from './Newsletter';

export default function Footer() {
  const textStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '16px',
    lineHeight: '29px',
    letterSpacing: '0%',
  };

  const buttonColor = '#197B33';

  return (
    <footer className="bg-white text-gray-900 px-6 sm:px-12 py-12">
      {/* Top Section: Contact + Links + Newsletter */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-8">
        <ContactInfo textStyle={textStyle} buttonColor={buttonColor} />
        <LinkColumns textStyle={textStyle} buttonColor={buttonColor} />
        <Newsletter textStyle={textStyle} buttonColor={buttonColor} />
      </div>
      
      {/* Optional: Bottom Section for Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-300 text-center">
        <p style={textStyle}>
          © {new Date().getFullYear()} Pansari Inn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}