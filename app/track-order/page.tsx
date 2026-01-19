// app/track-order/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// Add these SVG components at the top of your page.tsx file, after imports
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

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const FilterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

// Add more icons as needed
const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const MinusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const DollarSignIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TagIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const HomeIcon2 = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const InformationCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ExclamationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

const CheckBadgeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PencilIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const DocumentTextIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ReceiptRefundIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
  </svg>
);

const QuestionMarkCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const EmojiHappyIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LocationMarkerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Dummy JSON Data - FOR BUYER
const buyerOrders = [
  {
    id: "PANS-789456",
    orderNumber: "ORD-2024-001",
    date: "2024-01-15",
    estimatedDelivery: "2024-01-20",
    status: "out-for-delivery",
    statusText: "Out for Delivery",
    total: 11044,
    items: [
      { 
        id: 1, 
        name: "Organic Cold Pressed Almond Oil", 
        quantity: 2, 
        price: 2499, 
        total: 4998,
        category: "Edible Oils",
        image: "/images/almond-oil.jpg" 
      },
      { 
        id: 2, 
        name: "Pure Desi Ghee (1kg)", 
        quantity: 1, 
        price: 3499, 
        total: 3499,
        category: "Dairy Products",
        image: "/images/desi-ghee.jpg" 
      },
    ],
    deliveryAgent: {
      name: "Ali Hassan",
      phone: "+92 312 9876543",
      vehicle: "TCS Motorcycle #KHI-789"
    },
    tracking: [
      { 
        id: 1, 
        status: "ordered", 
        title: "Order Placed", 
        description: "Your order has been placed successfully", 
        location: "Karachi Warehouse",
        date: "15 Jan, 2024",
        time: "10:30 AM",
        completed: true 
      },
      { 
        id: 2, 
        status: "confirmed", 
        title: "Order Confirmed", 
        description: "We've received your order and payment", 
        location: "Karachi Warehouse",
        date: "15 Jan, 2024",
        time: "11:45 AM",
        completed: true 
      },
      { 
        id: 3, 
        status: "processing", 
        title: "Processing Order", 
        description: "Items are being prepared and packed", 
        location: "Karachi Warehouse",
        date: "15 Jan, 2024",
        time: "02:20 PM",
        completed: true 
      },
      { 
        id: 4, 
        status: "shipped", 
        title: "Order Shipped", 
        description: "Your order is on its way via TCS", 
        location: "Karachi Sorting Facility",
        date: "16 Jan, 2024",
        time: "09:15 AM",
        completed: true 
      },
      { 
        id: 5, 
        status: "out-for-delivery", 
        title: "Out for Delivery", 
        description: "Package is with delivery agent", 
        location: "DHA Phase 5, Karachi",
        date: "17 Jan, 2024",
        time: "08:30 AM",
        completed: true,
        current: true 
      },
      { 
        id: 6, 
        status: "delivered", 
        title: "Delivered", 
        description: "Package delivered successfully", 
        date: "20 Jan, 2024",
        time: "Expected",
        completed: false 
      },
    ],
    canReview: false,
    reviewed: false
  },
  {
    id: "PANS-123456",
    orderNumber: "ORD-2024-002",
    date: "2024-01-10",
    estimatedDelivery: "2024-01-12",
    status: "delivered",
    statusText: "Delivered",
    total: 2049,
    items: [
      { 
        id: 3, 
        name: "Black Seed Oil (120 capsules)", 
        quantity: 1, 
        price: 1899, 
        total: 1899,
        category: "Health Supplements",
        image: "/images/black-seed-oil.jpg" 
      },
    ],
    tracking: [
      { 
        id: 1, 
        status: "ordered", 
        title: "Order Placed", 
        description: "Your order has been placed successfully", 
        date: "10 Jan, 2024",
        time: "02:20 PM",
        completed: true 
      },
      { 
        id: 2, 
        status: "confirmed", 
        title: "Payment Confirmed", 
        description: "Payment received via EasyPaisa", 
        date: "10 Jan, 2024",
        time: "03:30 PM",
        completed: true 
      },
      { 
        id: 3, 
        status: "shipped", 
        title: "Order Shipped", 
        description: "Shipped via Leopard Courier", 
        date: "11 Jan, 2024",
        time: "11:00 AM",
        completed: true 
      },
      { 
        id: 4, 
        status: "delivered", 
        title: "Delivered", 
        description: "Package delivered successfully", 
        location: "Gulberg, Lahore",
        date: "12 Jan, 2024",
        time: "04:45 PM",
        completed: true,
        current: true 
      },
    ],
    canReview: true,
    reviewed: false
  },
  {
    id: "PANS-654321",
    orderNumber: "ORD-2024-003",
    date: "2024-01-05",
    estimatedDelivery: "2024-01-08",
    status: "delivered",
    statusText: "Delivered",
    total: 3394,
    items: [
      { 
        id: 4, 
        name: "Himalayan Pink Salt", 
        quantity: 3, 
        price: 799, 
        total: 2397,
        category: "Spices",
        image: "/images/pink-salt.jpg" 
      },
      { 
        id: 5, 
        name: "Organic Turmeric Powder", 
        quantity: 2, 
        price: 599, 
        total: 1198,
        category: "Spices",
        image: "/images/turmeric.jpg" 
      },
    ],
    tracking: [
      { 
        id: 1, 
        status: "ordered", 
        title: "Order Placed", 
        description: "Your order has been placed successfully", 
        date: "5 Jan, 2024",
        time: "09:15 AM",
        completed: true 
      },
      { 
        id: 2, 
        status: "confirmed", 
        title: "Order Confirmed", 
        description: "Payment confirmed via Credit Card", 
        date: "5 Jan, 2024",
        time: "10:30 AM",
        completed: true 
      },
      { 
        id: 3, 
        status: "processing", 
        title: "Processing Order", 
        description: "Items are being prepared", 
        date: "5 Jan, 2024",
        time: "02:45 PM",
        completed: true 
      },
      { 
        id: 4, 
        status: "shipped", 
        title: "Order Shipped", 
        description: "Shipped via Trax Courier", 
        date: "6 Jan, 2024",
        time: "11:00 AM",
        completed: true 
      },
      { 
        id: 5, 
        status: "delivered", 
        title: "Delivered", 
        description: "Package delivered successfully", 
        location: "F-10/2, Islamabad",
        date: "7 Jan, 2024",
        time: "03:20 PM",
        completed: true,
        current: true 
      },
    ],
    canReview: false,
    reviewed: true,
    reviewRating: 5,
    reviewDate: "2024-01-08"
  },
  {
    id: "PANS-987654",
    orderNumber: "ORD-2024-004",
    date: "2024-01-03",
    estimatedDelivery: "2024-01-07",
    status: "processing",
    statusText: "Processing",
    total: 3149,
    items: [
      { 
        id: 6, 
        name: "Extra Virgin Olive Oil", 
        quantity: 1, 
        price: 2999, 
        total: 2999,
        category: "Edible Oils",
        image: "/images/olive-oil.jpg" 
      },
    ],
    tracking: [
      { 
        id: 1, 
        status: "ordered", 
        title: "Order Placed", 
        description: "Your order has been placed successfully", 
        date: "3 Jan, 2024",
        time: "01:45 PM",
        completed: true 
      },
      { 
        id: 2, 
        status: "confirmed", 
        title: "Order Confirmed", 
        description: "We've received your order", 
        date: "3 Jan, 2024",
        time: "03:20 PM",
        completed: true 
      },
      { 
        id: 3, 
        status: "processing", 
        title: "Processing Order", 
        description: "Items are being prepared and packed", 
        date: "4 Jan, 2024",
        time: "10:15 AM",
        completed: true,
        current: true 
      },
      { 
        id: 4, 
        status: "shipped", 
        title: "Order Shipped", 
        description: "Will be shipped soon", 
        date: "5 Jan, 2024",
        time: "Expected",
        completed: false 
      },
      { 
        id: 5, 
        status: "delivered", 
        title: "Delivered", 
        description: "Estimated delivery date", 
        date: "7 Jan, 2024",
        time: "Expected",
        completed: false 
      },
    ],
    canReview: false,
    reviewed: false
  },
];

type Order = typeof buyerOrders[0];
type TimelineStep = Order['tracking'][0];

export default function TrackOrderPage() {
  const [orders, setOrders] = useState<Order[]>(buyerOrders);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchOrderId, setSearchOrderId] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const filteredOrders = orders.filter(order => {
    if (selectedFilter !== "all" && order.status !== selectedFilter) {
      return false;
    }
    
    if (searchOrderId && !order.id.toLowerCase().includes(searchOrderId.toLowerCase()) && 
        !order.orderNumber.toLowerCase().includes(searchOrderId.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const getStatusColor = (status: string) => {
    const colors: any = {
      "processing": "bg-blue-100 text-blue-800 border-blue-200",
      "out-for-delivery": "bg-orange-100 text-orange-800 border-orange-200",
      "delivered": "bg-green-100 text-green-800 border-green-200",
      "cancelled": "bg-red-100 text-red-800 border-red-200",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusIcon = (status: string) => {
    if (status === "processing") return <PackageIcon />;
    if (status === "out-for-delivery") return <TruckIcon />;
    if (status === "delivered") return <CheckCircleIcon />;
    return <PackageIcon />;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-PK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleViewTimeline = (order: Order) => {
    setSelectedOrder(order);
    setShowTimeline(true);
  };

  const handleCloseTimeline = () => {
    setShowTimeline(false);
    setSelectedOrder(null);
  };

  const handleOpenReview = (order: Order) => {
    setSelectedOrder(order);
    setShowReviewModal(true);
  };

  const handleSubmitReview = () => {
    if (selectedOrder) {
      setOrders(prev => prev.map(order => 
        order.id === selectedOrder.id 
          ? { ...order, reviewed: true, reviewRating: rating }
          : order
      ));
      
      setShowReviewModal(false);
      setRating(0);
      setReviewText("");
    }
  };

  const totalOrders = orders.length;
  const deliveredOrders = orders.filter(o => o.status === "delivered").length;
  const processingOrders = orders.filter(o => o.status === "processing" || o.status === "out-for-delivery").length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="mx-[4%] py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
              <p className="text-gray-600 mt-1">Track and manage all your Pansariin.pk orders</p>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              {/* <LockIcon /> */}
              <span className="font-semibold">Secure Tracking</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[4%] py-8 flex-1">
        {/* Welcome Section */}
        <div className="mb-8 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome Back, Customer!</h2>
              <p className="opacity-90">Track your orders, leave reviews, and download invoices</p>
            </div>
            <Link 
              href="/shop" 
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center whitespace-nowrap"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Statistics Cards - UPDATED FOR BUYER */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <PackageIcon />
              </div>
              <div>
                <p className="text-sm text-gray-600">Your Orders</p>
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
                <p className="text-sm text-gray-600">In Transit</p>
                <p className="text-2xl font-bold text-gray-900">{processingOrders}</p>
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

          <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <StarIcon />
              </div>
              <div>
                <p className="text-sm text-gray-600">To Review</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.filter(o => o.status === "delivered" && o.canReview && !o.reviewed).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Section - SIMPLIFIED FOR BUYER */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Find Your Order</h2>
              <p className="text-gray-600 text-sm mt-1">Track by order ID or filter by status</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchOrderId}
                  onChange={(e) => setSearchOrderId(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 w-full sm:w-64"
                  placeholder="Search Order ID..."
                />
              </div>
              
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
                </select>
                <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Orders Grid - IMPROVED LAYOUT */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Orders ({filteredOrders.length})</h2>
            <div className="flex gap-2">
              <span className="text-sm text-gray-600">Sorted by:</span>
              <select className="text-sm border-none bg-transparent text-green-700 font-medium">
                <option>Most Recent</option>
                <option>Oldest First</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
              </select>
            </div>
          </div>

          {filteredOrders.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Order Header with Status */}
                  <div className={`p-6 ${getStatusColor(order.status)}`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">Order #{order.id}</h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="font-medium">{order.statusText}</span>
                          <span className="text-sm opacity-75">• Ordered on {formatDate(order.date)}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">PKR {order.total.toLocaleString()}</p>
                        <p className="text-sm">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="font-medium text-gray-900 mb-3">Items in this order:</p>
                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg flex items-center justify-center">
                              <PackageIcon className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{item.name}</p>
                              <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span>Qty: {item.quantity}</span>
                                <span>•</span>
                                <span>PKR {item.price.toLocaleString()} each</span>
                              </div>
                            </div>
                            <div className="font-bold text-gray-900">
                              PKR {item.total.toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Info */}
                    {order.deliveryAgent && (
                      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <TruckIcon className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Delivery Agent: {order.deliveryAgent.name}</p>
                            <p className="text-sm text-gray-600">{order.deliveryAgent.phone}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                      <button
                        onClick={() => handleViewTimeline(order)}
                        className="flex-1 bg-green-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition flex items-center justify-center gap-2"
                      >
                        <ClockIcon />
                        Track Order
                      </button>
                      
                      {order.status === "delivered" && order.canReview && !order.reviewed && (
                        <button
                          onClick={() => handleOpenReview(order)}
                          className="flex-1 border-2 border-green-700 text-green-700 py-3 px-4 rounded-lg font-medium hover:bg-green-50 transition flex items-center justify-center gap-2"
                        >
                          <StarIcon />
                          Add Review
                        </button>
                      )}
                      
                      {order.status === "delivered" && order.reviewed && (
                        <div className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-lg">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} className={`w-5 h-5 ${i < (order.reviewRating || 0) ? 'text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-gray-700">Reviewed</span>
                        </div>
                      )}

                      <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
                        <DownloadIcon />
                        Invoice
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <PackageIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Orders Found</h3>
              <p className="text-gray-600 mb-6">
                {searchOrderId ? "No orders match your search criteria." : "You don't have any orders yet."}
              </p>
              <div className="flex gap-3 justify-center">
                <Link
                  href="/shop"
                  className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
                >
                  Start Shopping
                </Link>
                <button
                  onClick={() => {
                    setSearchOrderId("");
                    setSelectedFilter("all");
                  }}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help With Your Orders?</h3>
            <p className="opacity-90 mb-6">
              Our customer support team is available 24/7 to assist you
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
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition flex items-center justify-center gap-2"
              >
                <MailIcon />
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="mx-[4%] py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Pansariin.pk</h3>
              <p className="text-gray-400">
                Your trusted source for authentic Pakistani desi products, organic foods, and traditional remedies.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/shop" className="text-gray-400 hover:text-white transition">Shop Now</Link></li>
                <li><Link href="/categories" className="text-gray-400 hover:text-white transition">Categories</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link href="/track-order" className="text-gray-400 hover:text-white transition">Track Order</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQs</Link></li>
                <li><Link href="/returns" className="text-gray-400 hover:text-white transition">Returns & Refunds</Link></li>
                <li><Link href="/shipping" className="text-gray-400 hover:text-white transition">Shipping Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-white">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <span>+92 21 1234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <span>support@pansariin.pk</span>
                </li>
                <li className="mt-4">
                  <p>Karachi, Pakistan</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Pansariin.pk. All rights reserved.</p>
            <p className="mt-2 text-sm">Authentic Pakistani Products • 100% Quality Guaranteed • Secure Shopping</p>
          </div>
        </div>
      </footer>

      {/* Timeline Modal - KEEP SAME AS BEFORE */}
      {showTimeline && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Order Timeline - #{selectedOrder.id}</h3>
                  <p className="text-gray-600 mt-1">Track your order journey step by step</p>
                </div>
                <button
                  onClick={handleCloseTimeline}
                  className="p-2 hover:bg-gray-100 rounded-lg transition"
                >
                  <XIcon />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-8 bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Order Date</p>
                    <p className="font-medium text-gray-900">{formatDate(selectedOrder.date)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Estimated Delivery</p>
                    <p className="font-medium text-gray-900">{formatDate(selectedOrder.estimatedDelivery)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                    <p className="font-bold text-lg text-gray-900">PKR {selectedOrder.total.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Current Status</p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedOrder.status)}`}>
                      {selectedOrder.statusText}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  {selectedOrder.tracking.map((step, index) => (
                    <div key={step.id} className="relative flex gap-4">
                      <div className={`z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.completed 
                          ? step.current 
                            ? 'bg-green-600 text-white border-4 border-white shadow-lg' 
                            : 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className={`rounded-xl p-6 ${
                          step.current ? 'bg-green-50 border border-green-200' : 'bg-white border border-gray-200'
                        }`}>
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                            <h4 className={`text-lg font-bold ${
                              step.current ? 'text-green-800' : 'text-gray-900'
                            }`}>
                              {step.title}
                            </h4>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <CalendarIcon />
                              <span>{step.date}</span>
                              <span>•</span>
                              <ClockIcon />
                              <span>{step.time}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3">{step.description}</p>
                          {step.location && (
                            <div className="flex items-center gap-2 text-gray-600">
                              <MapPinIcon />
                              <span className="text-sm">{step.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal - KEEP SAME AS BEFORE */}
      {showReviewModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Rate Order #{selectedOrder.id}</h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <XIcon />
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">How was your experience with this order?</p>
            
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="text-4xl hover:scale-110 transition-transform"
                  >
                    {star <= rating ? (
                      <span className="text-yellow-400">★</span>
                    ) : (
                      <span className="text-gray-300">☆</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Share your experience with these products..."
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowReviewModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitReview}
                disabled={rating === 0}
                className={`flex-1 py-3 rounded-lg font-medium transition ${
                  rating === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-700 text-white hover:bg-green-600'
                }`}
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