// components/BlogCard.tsx
import React from 'react';
import Link from 'next/link';

interface Blog {
  id: string | number;
  img: string;
  title: string;
  content: string;
  link: string;
}

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="w-[408px] h-[476px] rounded-[14px] border border-gray-300 overflow-hidden flex-shrink-0 hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="w-[384px] h-[217px] mx-auto mt-4 rounded-[14px] overflow-hidden">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[239px]">
        <h3 className="font-poppins font-semibold text-[20px] leading-[25.6px] capitalize mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="font-poppins font-normal text-[15px] leading-[18.6px] capitalize mb-4 line-clamp-3">
          {blog.content}
        </p>
        <Link
          href={blog.link}
          className="font-poppins font-medium text-[18px] underline capitalize hover:text-blue-600 transition-colors inline-flex items-center"
        >
          Read More
          <span className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}