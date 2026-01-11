interface NewsletterProps {
  textStyle: React.CSSProperties;
  buttonColor: string;
}

export default function Newsletter({ textStyle, buttonColor }: NewsletterProps) {
  return (
    <div className="md:w-1/3 flex flex-col">
      <h3 
        className="text-base font-bold mb-3 whitespace-nowrap" 
        style={{ 
          fontFamily: 'Poppins',
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}
      >
        Join Our Mailing List
      </h3>
      <p 
        style={{ 
          ...textStyle, 
          fontSize: '14px',
          lineHeight: '1.4',
          letterSpacing: '0.1px',
          fontWeight: 400 
        }} 
        className="mb-3"
      >
        Find out all about our latest offers, new products, and the science of Ayurveda in our newsletters!
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded text-gray-900 flex-1 w-full sm:w-auto text-sm"
          style={{ 
            backgroundColor: '#D9D9D9A6', 
            ...textStyle, 
            fontSize: '14px',
            letterSpacing: '0.1px',
            fontWeight: 400 
          }}
        />
        <button
          type="submit"
          className="text-white mt-2 sm:mt-0 hover:opacity-90 transition-opacity font-semibold"
          style={{
            width: '100%',
            maxWidth: '311px',
            height: '42px',
            borderRadius: '37px',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '14px',
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