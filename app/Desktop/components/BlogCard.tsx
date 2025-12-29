// components/BlogCard.tsx
export default function BlogCard({ blog }) {
  return (
    <div className="w-[408px] h-[476px] rounded-[14px] border border-gray-300 overflow-hidden flex-shrink-0">
      {/* Image */}
      <div className="w-[384px] h-[217px] mx-auto mt-4 rounded-[14px] overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[239px]">
        <h3 className="font-poppins font-semibold text-[20px] leading-[25.6px] capitalize mb-2">
          {blog.title}
        </h3>
        <p className="font-poppins font-normal text-[15px] leading-[18.6px] capitalize mb-4">
          {blog.content}
        </p>
        <a
          href={blog.link}
          className="font-poppins font-medium text-[18px] underline capitalize"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
