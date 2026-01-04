import Image from 'next/image';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

interface SocialMediaItem {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface ContactInfoProps {
  textStyle: React.CSSProperties;
  buttonColor: string;
  email?: string;
  phone?: string;
  socialMedia?: SocialMediaItem[];
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const defaultSocialMedia: SocialMediaItem[] = [
  { 
    name: 'Facebook', 
    icon: <FaFacebook className="w-5 h-5" />,
    url: 'https://facebook.com'
  },
  { 
    name: 'X', 
    icon: <FaTwitter className="w-5 h-5" />,
    url: 'https://twitter.com'
  },
  { 
    name: 'YouTube', 
    icon: <FaYoutube className="w-5 h-5" />,
    url: 'https://youtube.com'
  },
  { 
    name: 'Instagram', 
    icon: <FaInstagram className="w-5 h-5" />,
    url: 'https://instagram.com'
  }
];

export default function ContactInfo({ 
  textStyle, 
  buttonColor, 
  email = 'pansariinn@gmail.com',
  phone = '+923045779900',
  socialMedia = defaultSocialMedia,
  logoUrl = '/images/logo.png',
  logoAlt = 'Logo',
  logoWidth = 130,
  logoHeight = 40
}: ContactInfoProps) {
  
  return (
    <div className="md:w-1/3 flex flex-col items-start">
      <Image 
        src={logoUrl} 
        alt={logoAlt} 
        width={logoWidth} 
        height={logoHeight} 
        className="mb-3" 
      />
      <p style={{ ...textStyle, fontSize: '14px' }} className="mb-1">
        Email: <a 
          href={`mailto:${email}`} 
          style={{ color: buttonColor, fontSize: '14px' }}
          className="hover:opacity-80 transition-opacity"
        >
          {email}
        </a>
      </p>
      <p style={{ ...textStyle, fontSize: '14px' }} className="mb-3">
        Phone: <a 
          href={`tel:${phone}`} 
          style={{ color: buttonColor, fontSize: '14px' }}
          className="hover:opacity-80 transition-opacity"
        >
          {phone}
        </a>
      </p>
      <p style={{ ...textStyle, fontWeight: 600, fontSize: '14px' }} className="mb-2">
        Follow Our Social Media!
      </p>
      <div className="flex gap-4">
        {socialMedia && socialMedia.length > 0 ? (
          socialMedia.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: buttonColor }}
              className="hover:opacity-80 transition-opacity"
              aria-label={platform.name}
            >
              {platform.icon}
            </a>
          ))
        ) : (
          <p style={{ ...textStyle, fontSize: '12px' }}>No social media links available</p>
        )}
      </div>
    </div>
  );
}