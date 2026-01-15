// app/track-order/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

// SVG Icons
const LockIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default function TrackOrderPage() {
  const [searchOrderId, setSearchOrderId] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  // User's Orders Data
  const userOrders = [
    {
      id: "PANS-789456",
      date: "15 Jan, 2024",
      items: [
        { name: "Organic Cold Pressed Almond Oil", quantity: 2, price: 2499, image: "/images/almond-oil.jpg" },
        { name: "Pure Desi Ghee (1kg)", quantity: 1, price: 3499, image: "/images/desi-ghee.jpg" },
      ],
      total: 11044,
      status: "out-for-delivery",
      statusText: "Out for Delivery",
      deliveryDate: "20 Jan, 2024",
      deliveryAgent: "Ali Hassan",
      agentPhone: "+92 312 9876543",
      trackingId: "TCS-789456123",
      address: "House 123, Street 45, DHA Phase 5, Karachi",
      canReview: false,
      reviewed: false,
    },
    {
      id: "PANS-123456",
      date: "10 Jan, 2024",
      items: [
        { name: "Black Seed Oil (120 capsules)", quantity: 1, price: 1899, image: "/images/black-seed-oil.jpg" },
      ],
      total: 2049,
      status: "delivered",
      statusText: "Delivered",
      deliveryDate: "12 Jan, 2024",
      address: "Apartment 5B, Gulberg Heights, Lahore",
      canReview: true,
      reviewed: false,
    },
    {
      id: "PANS-654321",
      date: "5 Jan, 2024",
      items: [
        { name: "Himalayan Pink Salt", quantity: 3, price: 799, image: "/images/pink-salt.jpg" },
        { name: "Organic Turmeric Powder", quantity: 2, price: 599, image: "/images/turmeric.jpg" },
      ],
      total: 3394,
      status: "delivered",
      statusText: "Delivered",
      deliveryDate: "8 Jan, 2024",
      address: "Street 7, F-10/2, Islamabad",
      canReview: false,
      reviewed: true,
      reviewRating: 5,
    },
    {
      id: "PANS-987654",
      date: "3 Jan, 2024",
      items: [
        { name: "Extra Virgin Olive Oil", quantity: 1, price: 2999, image: "/images/olive-oil.jpg" },
      ],
      total: 3149,
      status: "processing",
      statusText: "Processing",
      deliveryDate: "7 Jan, 2024",
      address: "Plot 45, Bahria Town, Rawalpindi",
      canReview: false,
      reviewed: false,
    },
    {
      id: "PANS-321654",
      date: "28 Dec, 2023",
      items: [
        { name: "Organic Honey (500g)", quantity: 2, price: 1499, image: "/images/honey.jpg" },
        { name: "Dry Fruits Mix (1kg)", quantity: 1, price: 2499, image: "/images/dry-fruits.jpg" },
      ],
      total: 5497,
      status: "cancelled",
      statusText: "Cancelled",
      address: "Sector G, Phase 2, DHA, Karachi",
      canReview: false,
      reviewed: false,
    },
  ];

  const filterOrders = userOrders.filter(order => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "delivered") return order.status === "delivered";
    if (selectedFilter === "processing") return order.status === "processing";
    if (selectedFilter === "out-for-delivery") return order.status === "out-for-delivery";
    if (selectedFilter === "cancelled") return order.status === "cancelled";
    return true;
  });

  const getStatusColor = (status: string) => {
    const colors: any = {
      "processing": "bg-blue-100 text-blue-800",
      "out-for-delivery": "bg-orange-100 text-orange-800",
      "delivered": "bg-green-100 text-green-800",
      "cancelled": "bg-red-100 text-red-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getStatusIcon = (status: string) => {
    if (status === "processing") return <PackageIcon />;
    if (status === "out-for-delivery") return <TruckIcon />;
    if (status === "delivered") return <CheckCircleIcon />;
    return <PackageIcon />;
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would search for the order
    console.log("Tracking order:", searchOrderId);
  };

  const handleOpenReview = (order: any) => {
    setSelectedOrder(order);
    setShowReviewModal(true);
  };

  const handleSubmitReview = () => {
    // In real app, submit review to backend
    console.log("Review submitted:", { rating, reviewText, orderId: selectedOrder.id });
    setShowReviewModal(false);
    setRating(0);
    setReviewText("");
  };

  const totalOrders = userOrders.length;
  const deliveredOrders = userOrders.filter(o => o.status === "delivered").length;
  const pendingOrders = userOrders.filter(o => o.status === "processing" || o.status === "out-for-delivery").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="mx-[4%] py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Order Tracking</h1>
            <div className="flex items-center gap-2 text-green-700">
              <LockIcon />
              <span className="font-semibold">Secure Tracking</span>
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">
                <CheckIcon />
              </div>
              <span className="font-medium text-gray-900">Track Order</span>
            </div>
            <div className="w-12 h-0.5 bg-green-700"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <span className="font-medium text-gray-900">View Status</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <span className="font-medium text-gray-500">Receive Order</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[4%] py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <PackageIcon />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TruckIcon />
              </div>
              <div>
                <p className="text-sm text-gray-600">Pending Delivery</p>
                <p className="text-2xl font-bold text-gray-900">{pendingOrders}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircleIcon />
              </div>
              <div>
                <p className="text-sm text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-gray-900">{deliveredOrders}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Track Your Orders</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Quick Track Form */}
              <form onSubmit={handleTrackOrder} className="flex gap-2">
                <input
                  type="text"
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 w-full sm:w-64"
                  placeholder="Enter Order ID (e.g., PANS-789456)"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition flex items-center gap-2"
                >
                  <SearchIcon />
                  Track
                </button>
              </form>
              
              {/* Filter Dropdown */}
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 bg-white w-full sm:w-48"
                >
                  <option value="all">All Orders</option>
                  <option value="processing">Processing</option>
                  <option value="out-for-delivery">Out for Delivery</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <FilterIcon />
              </div>
            </div>
          </div>

          {/* Order Status Legend */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Out for Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Cancelled</span>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filterOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              {/* Order Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-gray-900">Order #{order.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(order.status)}
                          {order.statusText}
                        </div>
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <ClockIcon />
                        <span>Ordered: {order.date}</span>
                      </div>
                      {order.deliveryDate && (
                        <div className="flex items-center gap-1">
                          <span>•</span>
                          <span>Expected: {order.deliveryDate}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-xl font-bold text-gray-900">PKR {order.total.toLocaleString()}</p>
                    </div>
                    <button className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2">
                      <EyeIcon />
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Order Items */}
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                            <PackageIcon />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                              <span>Qty: {item.quantity}</span>
                              <span>•</span>
                              <span>PKR {item.price.toLocaleString()} each</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">PKR {(item.price * item.quantity).toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Info & Actions */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Delivery Information</h4>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPinIcon />
                        <span>{order.address}</span>
                      </div>
                    </div>

                    {order.deliveryAgent && (
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Delivery Agent</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <PhoneIcon />
                          <span>{order.deliveryAgent} • {order.agentPhone}</span>
                        </div>
                        {order.trackingId && (
                          <p className="text-sm text-gray-500 mt-1">Tracking ID: {order.trackingId}</p>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row gap-3">
                        {order.status === "delivered" && order.canReview && !order.reviewed && (
                          <button
                            onClick={() => handleOpenReview(order)}
                            className="flex-1 bg-green-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-600 transition flex items-center justify-center gap-2"
                          >
                            <StarIcon />
                            Leave Review
                          </button>
                        )}
                        
                        {order.status === "delivered" && order.reviewed && (
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className={`w-5 h-5 ${i < (order.reviewRating || 0) ? 'text-yellow-400' : 'text-gray-300'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">Reviewed</span>
                          </div>
                        )}

                        <button className="flex-1 border border-green-700 text-green-700 py-2 px-4 rounded-lg font-medium hover:bg-green-50 transition flex items-center justify-center gap-2">
                          <DownloadIcon />
                          Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Orders Found */}
        {filterOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PackageIcon />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Orders Found</h3>
            <p className="text-gray-600 mb-6">You don't have any orders matching your filter criteria.</p>
            <button
              onClick={() => setSelectedFilter("all")}
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
            >
              View All Orders
            </button>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-gradient-to-r from-green-700 to-emerald-800 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help With Your Orders?</h3>
            <p className="opacity-90 mb-6">
              Our customer support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+922112345678"
                className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
              >
                <PhoneIcon />
                Call Support: +92 21 1234 5678
              </a>
              <a
                href="mailto:support@pansariin.pk"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Rate Your Order #{selectedOrder.id}</h3>
            <p className="text-gray-600 mb-6">How was your experience with this order?</p>
            
            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="text-3xl"
                  >
                    {star <= rating ? '★' : '☆'}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Review Text */}
            <div className="mb-6">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Share your experience with these products..."
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowReviewModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                className="flex-1 bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}