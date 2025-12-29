// components/footer/ContactInfo.tsx
import Image from 'next/image';
// import Logo from '@assets/images/logo.png';

interface ContactInfoProps {
  textStyle: React.CSSProperties;
  buttonColor: string;
}

export default function ContactInfo({ textStyle, buttonColor }: ContactInfoProps) {
    const Logo = '/images/logo.png';
  return (
    <div className="md:w-1/3 flex flex-col items-start">
      <Image src={Logo} alt="Logo" width={150} height={50} className="mb-4" />
      <p style={textStyle} className="mb-1">
        Email: <a href="mailto:pansariinn@gmail.com" style={{ color: buttonColor }}>
          pansariinn@gmail.com
        </a>
      </p>
      <p style={textStyle} className="mb-4">
        Phone: <a href="tel:+923045779900" style={{ color: buttonColor }}>
          0304 577 9900
        </a>
      </p>
      <p style={{ ...textStyle, fontWeight: 600 }} className="mb-2">
        Follow Our Social Media!
      </p>
      <div className="flex gap-4">
        {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
          <a
            key={platform}
            href="#"
            style={{ ...textStyle, color: buttonColor }}
            className="hover:opacity-80"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
}