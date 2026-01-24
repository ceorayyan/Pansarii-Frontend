"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLock, FaCreditCard, FaCheckCircle, FaPhone, FaChevronDown } from 'react-icons/fa';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('+92');
  const [selectedCity, setSelectedCity] = useState('');

  // Pakistani cities data - can be fetched from API in real application
  const pakistaniCities = [
    // Punjab
    { value: 'lahore', label: 'Lahore', province: 'Punjab' },
    { value: 'faisalabad', label: 'Faisalabad', province: 'Punjab' },
    { value: 'rawalpindi', label: 'Rawalpindi', province: 'Punjab' },
    { value: 'multan', label: 'Multan', province: 'Punjab' },
    { value: 'gujranwala', label: 'Gujranwala', province: 'Punjab' },
    { value: 'sialkot', label: 'Sialkot', province: 'Punjab' },
    { value: 'bahawalpur', label: 'Bahawalpur', province: 'Punjab' },
    { value: 'sargodha', label: 'Sargodha', province: 'Punjab' },
    
    // Sindh
    { value: 'karachi', label: 'Karachi', province: 'Sindh' },
    { value: 'hyderabad', label: 'Hyderabad', province: 'Sindh' },
    { value: 'sukkur', label: 'Sukkur', province: 'Sindh' },
    { value: 'larkana', label: 'Larkana', province: 'Sindh' },
    { value: 'navabshah', label: 'Nawabshah', province: 'Sindh' },
    
    // KPK
    { value: 'peshawar', label: 'Peshawar', province: 'KPK' },
    { value: 'mardan', label: 'Mardan', province: 'KPK' },
    { value: 'abbottabad', label: 'Abbottabad', province: 'KPK' },
    { value: 'swat', label: 'Swat', province: 'KPK' },
    { value: 'nowshera', label: 'Nowshera', province: 'KPK' },
    
    // Balochistan
    { value: 'quetta', label: 'Quetta', province: 'Balochistan' },
    { value: 'gwadar', label: 'Gwadar', province: 'Balochistan' },
    { value: 'turbat', label: 'Turbat', province: 'Balochistan' },
    
    // Islamabad & AJK
    { value: 'islamabad', label: 'Islamabad', province: 'Islamabad Capital Territory' },
    { value: 'muzaffarabad', label: 'Muzaffarabad', province: 'Azad Jammu & Kashmir' },
    { value: 'mirpur', label: 'Mirpur', province: 'Azad Jammu & Kashmir' },
  ];

  const cartItems = [
    {
      id: 1,
      img: '/images/product.png',
      nameEn: 'Cold Pressed Almond Oil',
      price: 899,
      quantity: 2,
      size: '30ml'
    },
    {
      id: 2,
      img: '/images/product.png',
      nameEn: 'Organic Coconut Oil',
      price: 749,
      quantity: 1,
      size: '50ml'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 200;
  const total = subtotal + shipping;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Ensure it starts with +92
    if (!value.startsWith('+92')) {
      value = '+92 ' + value.replace(/^\+92\s?/, '');
    }
    
    // Format: +92 XXX XXXXXXX
    const cleaned = value.replace(/\D/g, '').substring(1); // Remove + and non-digits
    if (cleaned.length > 0) {
      const formatted = cleaned.replace(/(\d{2})(\d{3})(\d{7})/, '+$1 $2 $3');
      setPhoneNumber(formatted);
    } else {
      setPhoneNumber('+92 ');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order placement
    console.log('Order placed!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="mx-[4%] py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
            <div className="flex items-center gap-2 text-green-700">
              <FaLock className="w-5 h-5" />
              <span className="font-semibold">Secure Checkout</span>
            </div>
          </div>
          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">
                <FaCheckCircle />
              </div>
              <span className="font-medium text-gray-900">Cart</span>
            </div>
            <div className="w-12 h-0.5 bg-green-700"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <span className="font-medium text-gray-900">Checkout</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <span className="font-medium text-gray-500">Complete</span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mx-[4%] py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="Ahmed Khan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="ahmed@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaPhone className="text-gray-400" />
                        <span className="ml-2 text-gray-600">PK</span>
                      </div>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        required
                        className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                        placeholder="300 1234567"
                        pattern="\+92\s\d{3}\s\d{7}"
                        title="Format: +92 XXX XXXXXXX"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-xs text-gray-500">🇵🇰</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Format: +92 XXX XXXXXXX (Pakistani number)
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="House/Flat no, Street name, Area"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <div className="relative">
                        <select
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 appearance-none bg-white"
                        >
                          <option value="">Select your city</option>
                          <optgroup label="Punjab">
                            {pakistaniCities.filter(city => city.province === 'Punjab').map(city => (
                              <option key={city.value} value={city.value}>
                                {city.label}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Sindh">
                            {pakistaniCities.filter(city => city.province === 'Sindh').map(city => (
                              <option key={city.value} value={city.value}>
                                {city.label}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Khyber Pakhtunkhwa">
                            {pakistaniCities.filter(city => city.province === 'KPK').map(city => (
                              <option key={city.value} value={city.value}>
                                {city.label}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Balochistan">
                            {pakistaniCities.filter(city => city.province === 'Balochistan').map(city => (
                              <option key={city.value} value={city.value}>
                                {city.label}
                              </option>
                            ))}
                          </optgroup>
                          <optgroup label="Other">
                            {pakistaniCities.filter(city => 
                              city.province === 'Islamabad Capital Territory' || 
                              city.province === 'Azad Jammu & Kashmir'
                            ).map(city => (
                              <option key={city.value} value={city.value}>
                                {city.label}
                              </option>
                            ))}
                          </optgroup>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <FaChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Area/Sector
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                        placeholder="Gulshan, DHA, etc."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="75500"
                      pattern="\d{5}"
                      title="5-digit postal code"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Instructions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      placeholder="e.g., Call before delivery, Leave at reception, etc."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                <div className="space-y-4">
                  {/* Cash on Delivery */}
                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === 'cod' ? 'border-green-700 bg-green-50' : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-green-700"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          💵
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Cash on Delivery</p>
                          <p className="text-sm text-gray-600">Pay when you receive</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Online Payment */}
                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === 'online' ? 'border-green-700 bg-green-50' : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="online"
                      checked={paymentMethod === 'online'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-green-700"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FaCreditCard className="text-2xl text-gray-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Online Payment</p>
                          <p className="text-sm text-gray-600">Credit/Debit Card, JazzCash, EasyPaisa</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Bank Transfer */}
                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition ${
                    paymentMethod === 'bank' ? 'border-green-700 bg-green-50' : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-green-700"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          🏦
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Bank Transfer</p>
                          <p className="text-sm text-gray-600">Direct bank deposit</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 border-b pb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img 
                            src={item.img}
                            alt={item.nameEn}
                            className="w-full h-full object-cover rounded-lg border"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{item.nameEn}</h4>
                          <p className="text-xs text-gray-500">Size: {item.size}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            PKR {(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-semibold">PKR {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-semibold">PKR {shipping}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total</span>
                        <span>PKR {total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button 
                    type="submit"
                    className="w-full bg-green-700 text-white py-4 rounded-full font-bold text-lg hover:bg-green-600 transition shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Place Order
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    By placing your order, you agree to our terms and conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}