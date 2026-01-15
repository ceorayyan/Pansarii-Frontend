
// Desktop/components/footer/Newsletter.tsx
interface NewsletterProps {
  textStyle: React.CSSProperties;
  buttonColor: string;
}

export default function Newsletter({ textStyle, buttonColor }: NewsletterProps) {
  return (
    <div className="md:w-1/4 flex flex-col">
      <h3 
        className="text-sm font-bold mb-2" 
        style={{ 
          fontFamily: 'Poppins',
          letterSpacing: '0.4px',
          textTransform: 'uppercase'
        }}
      >
        Newsletter
      </h3>
      <p 
        style={{ 
          ...textStyle, 
          fontSize: '12px',
          lineHeight: '1.5',
          letterSpacing: '0.1px',
          fontWeight: 400 
        }} 
        className="mb-3"
      >
        Get updates on new products and exclusive offers!
      </p>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded text-gray-900 w-full text-xs"
          style={{ 
            backgroundColor: '#D9D9D9A6', 
            ...textStyle, 
            fontSize: '12px',
            letterSpacing: '0.1px',
            fontWeight: 400 
          }}
        />
        <button
          type="submit"
          className="text-white hover:opacity-90 transition-opacity font-semibold w-full"
          style={{
            height: '36px',
            borderRadius: '30px',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '100%',
            backgroundColor: buttonColor,
            letterSpacing: '0.2px'
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
