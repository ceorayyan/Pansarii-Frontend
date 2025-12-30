// app/pages/aboutus.tsx
"use client";

import BlogCard from "../Desktop/components/BlogCard";
import ReviewCard from "../Desktop/components/ReviewCard";
import Footer from "../Desktop/Sections/Footer";
import { FaCheckCircle, FaLeaf, FaShippingFast, FaShieldAlt, FaGift, FaHeadset, FaMedkit } from "react-icons/fa";

export default function AboutUsPage() {
  // Blog posts data matching your BlogCard structure
  const blogPosts = [
    {
      id: 1,
      img: "/images/blog/herbal-benefits.jpg",
      title: "Benefits of Herbal Medicine",
      content: "Discover how natural herbs can transform your health and wellbeing through ancient wisdom and modern science combined.",
      link: "/blog/herbal-benefits"
    },
    {
      id: 2,
      img: "/images/blog/ayurveda-guide.jpg",
      title: "Complete Guide to Ayurveda",
      content: "Learn about the ancient Indian healing system and how to incorporate it into your modern lifestyle effectively.",
      link: "/blog/ayurveda-guide"
    },
    {
      id: 3,
      img: "/images/blog/skin-care-herbs.jpg",
      title: "Natural Skin Care Herbs",
      content: "Top 10 herbs for glowing skin and how to use them effectively in your daily beauty routine.",
      link: "/blog/skin-care-herbs"
    },
    {
      id: 4,
      img: "/images/blog/detox-teas.jpg",
      title: "Detoxifying Herbal Teas",
      content: "Prepare natural detox teas at home using these powerful herbs for complete body cleanse and rejuvenation.",
      link: "/blog/detox-teas"
    }
  ];

  // Testimonials data matching your ReviewCard structure
  const testimonials = [
    {
      id: 1,
      title: "Life Changing Experience",
      text: "Pansari Inn's products have transformed my health completely. The quality is exceptional and I feel the difference in my energy levels. Highly recommended!",
      name: "Sarah Khan",
      designation: "Regular Customer for 2 years",
      img: "/images/reviewers/sarah.jpg",
      rating: 5.0
    },
    {
      id: 2,
      title: "Pure & Authentic Products",
      text: "Finally found a place that delivers 100% pure herbs. The packaging is professional and products are exactly as described. Will buy again!",
      name: "Ali Ahmed",
      designation: "Ayurveda Practitioner",
      img: "/images/reviewers/ali.jpg",
      rating: 5.0
    },
    {
      id: 3,
      title: "Excellent Customer Service",
      text: "Their customer support team is amazing. Helped me choose the right herbs for my needs and followed up to ensure satisfaction. Great experience!",
      name: "Fatima Noor",
      designation: "Wellness Coach",
      img: "/images/reviewers/fatima.jpg",
      rating: 5.0
    },
    {
      id: 4,
      title: "Trustworthy & Reliable",
      text: "As someone who values authenticity, I can confidently say Pansari Inn delivers what they promise. Highly recommended for herbal products!",
      name: "Hamza Riaz",
      designation: "Naturopath",
      img: "/images/reviewers/hamza.jpg",
      rating: 5.0
    }
  ];

  // Features/Values
  const features = [
    { icon: <FaLeaf />, title: "100% Natural", description: "No artificial colors, fragrances or harmful additives" },
    { icon: <FaCheckCircle />, title: "Quality Assured", description: "Authentic & genuine products with no adulteration" },
    { icon: <FaShippingFast />, title: "Fast Delivery", description: "Doorstep delivery across Pakistan" },
    { icon: <FaShieldAlt />, title: "Secure Shopping", description: "100% secure payment with buyer protection" },
    { icon: <FaGift />, title: "Surprise Gifts", description: "Special gifts & coupons for regular customers" },
    { icon: <FaHeadset />, title: "24/7 Support", description: "Customer care support always available" },
    { icon: <FaMedkit />, title: "Health Focus", description: "Products curated for better health without side effects" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-[#197B33]">Pansari Inn</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for 100% pure natural herbs and herbal products
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Story</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Pansari Inn came into existence to eliminate problems of consumers regarding availability of natural herbs and herbal products to their doorsteps without being double crossed by local shops providing un-hygiene herbs sometimes end up as disappointment to consumer.
              </p>
              <p>
                In the same aspects consumers are being troubled and frustrated in availability of certain herbs in local market. Pansari Inn rationality is to give access of pure herbs and herbal product to each and every individuals in Pakistan beyond boundaries.
              </p>
              <p>
                With the tremendous collection of the finest branded Natural herbs for those who are looking for a better health without any side effects. Pansari Inn constantly provides description with innovative solutions and support for today's health and nutrition related natural herbs for our consumers.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/about-us/hero.jpg"
              alt="Pansari Inn Herbs Collection"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Quality</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Products at PansariInn are 100% pure natural and healthy living. The herbs are hygienic and cleaned perfectly in accordance to enhance the maximum benefits.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl text-[#197B33] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To bring the world class techniques and practices for ensuring customer happiness and complete satisfaction through Online Shopping with us.
            </p>
          </div>

          {/* Motto */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Motto</h3>
            <p className="text-gray-700">
              To Provide Superior Quality Of All Kind Of Ancient Herbal Products, Herbal Medicine, Raw Herbs, and Dried Medicinal Plants at Competitive Price Directly Within A Click.
            </p>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-700">
              PansariInn is Pure. Our treatments are 100% natural, vegetarian and use the highest quality of natural ingredients.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                No artificial colors
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                No artificial fragrance
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                No harmful additives
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Pansari Inn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Widest Collection across Categories",
              "Unbelievable Prices",
              "Doorstep Delivery",
              "Fast shipping through recognized courier agency",
              "100% Secure Payment through renowned Payment Gateway",
              "Safe and secure portal with SSL registration",
              "Product Returns & refund*",
              "Customer Care Support",
              "Surprise gifts / coupons for the regular customers",
              "Track your Order status & history",
              "Cash on Delivery Available",
              "Free Shipping On Order Above 5000"
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <ReviewCard review={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest From Our Blog</h2>
            <button className="px-6 py-3 bg-[#197B33] text-white rounded-lg hover:bg-[#156529] transition-colors">
              View All Articles
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex justify-center">
                <BlogCard blog={post} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#197B33] to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            "YOUR HEALTH IS IN RELIABLE HANDS"
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Pansari Inn is dedicated to promote uses of Natural herbs and bringing their magical benefits to common man.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#197B33] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}