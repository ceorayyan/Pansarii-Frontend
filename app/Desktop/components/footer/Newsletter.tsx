interface NewsletterProps {
  textStyle: React.CSSProperties;
  buttonColor: string;
}

export default function Newsletter({ textStyle, buttonColor }: NewsletterProps) {
  return (
    <div className="md:w-1/3 flex flex-col">
      <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'Poppins' }}>
        Join Our Mailing List
      </h3>
      <p style={{ ...textStyle, fontSize: '14px' }} className="mb-3">
        Find out all about our latest offers, new products, and the science of Ayurveda in our newsletters!
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="E-mail"
          className="p-2 rounded text-gray-900 flex-1 w-full sm:w-auto text-sm"
          style={{ backgroundColor: '#D9D9D9A6', ...textStyle, fontSize: '14px' }}
        />
        <button
          type="submit"
          className="text-white mt-2 sm:mt-0 hover:opacity-90 transition-opacity text-sm"
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
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}