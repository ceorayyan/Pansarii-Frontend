// components/footer/LinkColumns.tsx

interface LinkColumnsProps {
  textStyle: React.CSSProperties;
  buttonColor: string;
}

const linkGroups = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Our Story', 'Ingredients', 'Blog', 'Careers']
  },
  {
    title: 'Shop',
    links: ['Skincare', 'Haircare', 'Oils', 'Supplements', 'Best Sellers']
  },
  {
    title: 'Customer Service',
    links: ['Track Order', 'Returns', 'Shipping Info', 'FAQs']
  }
];

export default function LinkColumns({ textStyle, buttonColor }: LinkColumnsProps) {
  return (
    <div className="md:w-1/3 flex flex-col sm:flex-row justify-between gap-8">
      {linkGroups.map((group) => (
        <div key={group.title}>
          <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins' }}>
            {group.title}
          </h4>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link}>
                <a 
                  href="#" 
                  style={textStyle} 
                  className={`hover:text-[#197B33]`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}