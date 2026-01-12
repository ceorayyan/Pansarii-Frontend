"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "../../Desktop/Sections/Footer";
import { 
  FaCalendar, 
  FaClock,
  FaUser,
  FaTag,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

// This would come from your API/database
const getPostBySlug = (slug: string) => {
  const posts = [
    {
      id: 1,
      slug: "benefits-of-herbal-medicine",
      title: "10 Amazing Benefits of Herbal Medicine",
      excerpt: "Discover how natural herbs can transform your health and wellbeing.",
      image: "/images/blog/herbal-benefits.jpg",
      category: "Herbal Medicine",
      author: {
        name: "Dr. Sarah Ahmed",
        avatar: "/images/authors/sarah.jpg",
        bio: "Dr. Sarah Ahmed is a certified Ayurvedic practitioner with over 10 years of experience in herbal medicine and natural wellness."
      },
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["herbs", "wellness", "health"],
      content: `
        <h2>Introduction to Herbal Medicine</h2>
        <p>Herbal medicine has been used for thousands of years across different cultures and civilizations. From ancient Chinese medicine to Ayurveda, herbs have played a crucial role in healing and maintaining health.</p>
        
        <h2>1. Natural Healing Without Side Effects</h2>
        <p>One of the most significant advantages of herbal medicine is its natural composition. Unlike synthetic drugs, herbs work in harmony with your body's natural processes, minimizing the risk of adverse side effects.</p>
        
        <h2>2. Boosts Immune System</h2>
        <p>Many herbs like Echinacea, Elderberry, and Turmeric are known for their immune-boosting properties. Regular consumption can help your body fight off infections and diseases naturally.</p>
        
        <h2>3. Promotes Better Digestion</h2>
        <p>Herbs like Ginger, Peppermint, and Fennel have been used for centuries to improve digestion, reduce bloating, and alleviate stomach discomfort.</p>
        
        <h2>4. Reduces Stress and Anxiety</h2>
        <p>Adaptogenic herbs such as Ashwagandha, Holy Basil, and Rhodiola help your body adapt to stress and maintain balance in challenging situations.</p>
        
        <h2>5. Anti-Inflammatory Properties</h2>
        <p>Turmeric, Ginger, and Green Tea contain powerful anti-inflammatory compounds that can help reduce inflammation throughout the body.</p>
        
        <h2>Conclusion</h2>
        <p>Incorporating herbal medicine into your daily routine can significantly improve your overall health and wellbeing. Always consult with a healthcare professional before starting any new herbal regimen.</p>
      `
    }
  ];

  return posts.find(post => post.slug === slug) || null;
};

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-[#197B33] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-[#197B33] transition-colors"
          >
            <FaArrowLeft />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="px-4 py-2 bg-green-100 text-[#197B33] text-sm font-medium rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <FaCalendar />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            lineHeight: '1.8',
            fontSize: '1.125rem',
            color: '#374151'
          }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8 pb-8 border-b border-gray-200">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center gap-2"
            >
              <FaTag />
              {tag}
            </span>
          ))}
        </div>

        {/* Share Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaFacebook />
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
            >
              <FaTwitter />
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href={`https://wa.me/?text=${shareTitle} ${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-24 h-24 rounded-full flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">About {post.author.name}</h3>
              <p className="text-gray-700">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Continue Reading
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#197B33] text-white font-semibold rounded-lg hover:bg-[#156529] transition-colors"
          >
            View All Articles
            <FaArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}