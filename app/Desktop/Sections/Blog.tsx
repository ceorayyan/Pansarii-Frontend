import BlogCard from "@components/BlogCard";

interface BlogItem {
  id: string | number;
  img: string;
  title: string;
  content: string;
  link: string;
}

export default function Blog() {
  const blogimg = '/images/whisk.png';
  
  const blogs: BlogItem[] = [
    {
      id: 1,
      img: blogimg,
      title: "Essential Supplements That Support Busy Lifestyles",
      content:
        "It can be hard to live a healthy life in today's fast-paced environment...",
      link: "#",
    },
    {
      id: 2,
      img: blogimg,
      title: "Natural Herbal Remedies for Daily Wellness",
      content:
        "Discover how herbal remedies can help you maintain a balanced lifestyle...",
      link: "#",
    },
    {
      id: 3,
      img: blogimg,
      title: "Boost Your Immunity Naturally",
      content:
        "Learn the best natural ways to strengthen your immune system...",
      link: "#",
    },
  ];

  return (
    <section className="my-12 mx-[4%]">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-poppins font-semibold text-[45px] leading-[25.6px] capitalize">
          Wellness Blog
        </h2>
        <a
          href="#"
          className="font-inter font-normal text-[14.88px] leading-[25.6px] text-black hover:text-[#197B33] transition-colors"
        >
          View All
        </a>
      </div>

      {/* Blog Cards */}
      <div 
        className="flex gap-6 overflow-x-auto no-scrollbar py-2" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}