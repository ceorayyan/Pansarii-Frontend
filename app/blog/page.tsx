"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "../Desktop/Sections/Footer";
import { 
  FaSearch, 
  FaCalendar, 
  FaUser, 
  FaClock,
  FaArrowRight,
  FaTag
} from "react-icons/fa";

// Dynamic blog data configuration
const blogData = {
  hero: {
    title: "Our",
    highlight: "Blog",
    subtitle: "Discover natural wellness tips, herbal remedies, and healthy living advice"
  },
  categories: [
    { id: "all", name: "All Posts", count: 12 },
    { id: "herbal-medicine", name: "Herbal Medicine", count: 5 },
    { id: "ayurveda", name: "Ayurveda", count: 3 },
    { id: "skin-care", name: "Skin Care", count: 2 },
    { id: "nutrition", name: "Nutrition", count: 2 }
  ],
  posts: [
    {
      id: 1,
      slug: "benefits-of-herbal-medicine",
      title: "10 Amazing Benefits of Herbal Medicine",
      excerpt: "Discover how natural herbs can transform your health and wellbeing through ancient wisdom and modern science combined. Learn about the most powerful herbs and their healing properties.",
      content: "Full article content here...",
      image: "/images/blog/herbal-benefits.jpg",
      category: "herbal-medicine",
      categoryName: "Herbal Medicine",
      author: {
        name: "Dr. Sarah Ahmed",
        avatar: "/images/authors/sarah.jpg",
        bio: "Ayurvedic Practitioner"
      },
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["herbs", "wellness", "health"],
      featured: true
    },
    {
      id: 2,
      slug: "complete-guide-to-ayurveda",
      title: "Complete Guide to Ayurveda for Beginners",
      excerpt: "Learn about the ancient Indian healing system and how to incorporate it into your modern lifestyle effectively. Understanding doshas and their balance.",
      content: "Full article content here...",
      image: "/images/blog/ayurveda-guide.jpg",
      category: "ayurveda",
      categoryName: "Ayurveda",
      author: {
        name: "Ali Hassan",
        avatar: "/images/authors/ali.jpg",
        bio: "Wellness Coach"
      },
      date: "2024-01-12",
      readTime: "8 min read",
      tags: ["ayurveda", "lifestyle", "balance"],
      featured: true
    },
    {
      id: 3,
      slug: "natural-skin-care-herbs",
      title: "Top 10 Herbs for Glowing Skin",
      excerpt: "Top 10 herbs for glowing skin and how to use them effectively in your daily beauty routine. Natural alternatives to chemical products.",
      content: "Full article content here...",
      image: "/images/blog/skin-care-herbs.jpg",
      category: "skin-care",
      categoryName: "Skin Care",
      author: {
        name: "Fatima Khan",
        avatar: "/images/authors/fatima.jpg",
        bio: "Beauty Expert"
      },
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["skincare", "beauty", "herbs"],
      featured: false
    },
    {
      id: 4,
      slug: "detoxifying-herbal-teas",
      title: "5 Detoxifying Herbal Teas You Must Try",
      excerpt: "Prepare natural detox teas at home using these powerful herbs for complete body cleanse and rejuvenation. Simple recipes included.",
      content: "Full article content here...",
      image: "/images/blog/detox-teas.jpg",
      category: "nutrition",
      categoryName: "Nutrition",
      author: {
        name: "Ahmed Raza",
        avatar: "/images/authors/ahmed.jpg",
        bio: "Nutritionist"
      },
      date: "2024-01-08",
      readTime: "4 min read",
      tags: ["detox", "tea", "cleanse"],
      featured: false
    },
    {
      id: 5,
      slug: "turmeric-health-benefits",
      title: "Turmeric: The Golden Spice of Life",
      excerpt: "Explore the incredible health benefits of turmeric and how this ancient spice can boost your immunity and fight inflammation naturally.",
      content: "Full article content here...",
      image: "/images/blog/turmeric.jpg",
      category: "herbal-medicine",
      categoryName: "Herbal Medicine",
      author: {
        name: "Dr. Sarah Ahmed",
        avatar: "/images/authors/sarah.jpg",
        bio: "Ayurvedic Practitioner"
      },
      date: "2024-01-05",
      readTime: "7 min read",
      tags: ["turmeric", "immunity", "inflammation"],
      featured: false
    },
    {
      id: 6,
      slug: "ashwagandha-stress-relief",
      title: "Ashwagandha: Nature's Stress Reliever",
      excerpt: "Learn how Ashwagandha can help reduce stress, improve sleep quality, and boost your overall mental wellbeing naturally.",
      content: "Full article content here...",
      image: "/images/blog/ashwagandha.jpg",
      category: "herbal-medicine",
      categoryName: "Herbal Medicine",
      author: {
        name: "Ali Hassan",
        avatar: "/images/authors/ali.jpg",
        bio: "Wellness Coach"
      },
      date: "2024-01-03",
      readTime: "5 min read",
      tags: ["stress", "ashwagandha", "mental-health"],
      featured: false
    }
  ],
  popularTags: [
    "Herbs", "Wellness", "Ayurveda", "Natural Remedies", 
    "Skincare", "Detox", "Immunity", "Mental Health"
  ]
};

export default function BlogPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search
  const filteredPosts = blogData.posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogData.posts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {blogData.hero.title} <span className="text-[#197B33]">{blogData.hero.highlight}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {blogData.hero.subtitle}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#197B33] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200 sticky top-0 bg-white z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {blogData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#197B33] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#197B33] text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#197B33] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.bio}</p>
                      </div>
                    </div>
                    <FaArrowRight className="text-[#197B33] group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === "all" ? "All Articles" : 
               blogData.categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">{filteredPosts.length} articles found</p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#197B33] text-xs font-medium rounded-full">
                        {post.categoryName}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <FaCalendar />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#197B33] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-xs font-medium text-gray-900">{post.author.name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Popular Tags */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Tags</h2>
        <div className="flex flex-wrap gap-3">
          {blogData.popularTags.map((tag, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#197B33] hover:text-white transition-colors"
            >
              <FaTag className="inline mr-2" />
              {tag}
            </button>
          ))}
        </div>
      </section>

      

      <Footer />
    </div>
  );
}

