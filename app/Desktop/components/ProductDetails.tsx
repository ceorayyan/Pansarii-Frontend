// app/Desktop/components/ProductDetails.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { 
  FaStar, 
  FaCheckCircle, 
  FaShoppingCart, 
  FaSearchPlus, 
  FaSearchMinus,
  FaWhatsapp,
  FaHeart,
  FaRegHeart
} from "react-icons/fa";

interface FeatureItem {
  text: string;
  icon?: string;
  hasCheck?: boolean;
}

interface ProductDetailsProps {
  product: {
    img: string;
    additionalImages?: string[];
    nameEn: string;
    nameUr: string;
    description: string;
    rating: number;
    reviews: number;
    price: number;
    oldPrice?: number;
    sale?: string;
    features?: FeatureItem[];
    sizes?: string[];
    points?: number;
    benefits?: string[];
    infoLines?: string[];
    productId?: string;
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(product.img);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '15ml');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Zoom state
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  
  const imageRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);

  const additionalImages = product.additionalImages || [];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsZoomed(false);
    setZoomLevel(1.5);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Handle mouse move for zoom effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageRef.current || !zoomRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentage position
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    
    // Ensure the position stays within bounds
    const boundedX = Math.max(0, Math.min(100, percentX));
    const boundedY = Math.max(0, Math.min(100, percentY));
    
    setPosition({ x: boundedX, y: boundedY });
    
    // Update zoom lens position
    if (zoomRef.current) {
      zoomRef.current.style.backgroundPosition = `${boundedX}% ${boundedY}%`;
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
    if (!isZoomed) {
      setIsZoomed(true);
      setShowZoom(true);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel <= 1) {
      setIsZoomed(false);
      setShowZoom(false);
    } else {
      setZoomLevel(prev => Math.max(prev - 0.5, 1));
    }
  };

  const toggleZoom = () => {
    if (isZoomed) {
      setIsZoomed(false);
      setShowZoom(false);
      setZoomLevel(1.5);
    } else {
      setIsZoomed(true);
      setShowZoom(true);
    }
  };

  // Toggle wishlist
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // Here you would typically make an API call to update wishlist on server
    // For now, we'll just show a toast notification
    const message = !isWishlisted 
      ? "Product added to wishlist!" 
      : "Product removed from wishlist!";
    
    // Show a simple alert for now - you can replace with a proper toast notification
    alert(message);
    
    // In a real app, you would use:
    // toast.success(message);
  };

  // WhatsApp share/order function
  const handleWhatsAppOrder = () => {
    const productName = encodeURIComponent(product.nameEn);
    const productPrice = product.price;
    const selectedSizeText = selectedSize;
    const quantityText = quantity;
    
    // Construct the message
    const message = `Hello! I would like to order:\n\n` +
      `Product: ${product.nameEn}\n` +
      `Price: PKR ${productPrice}\n` +
      `Size: ${selectedSizeText}\n` +
      `Quantity: ${quantityText}\n\n` +
      `Please confirm availability and proceed with my order.`;
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  // Close zoom when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isZoomed && zoomRef.current && !zoomRef.current.contains(e.target as Node)) {
        setIsZoomed(false);
        setShowZoom(false);
      }
    };

    if (isZoomed) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isZoomed]);

  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <div className="h-full max-h-full flex flex-col lg:flex-row gap-2 lg:gap-3 p-2">
        
        {/* Left Column - Images */}
        <div className="lg:w-2/5 h-full flex flex-col relative">
          {/* Wishlist Button - Top Left */}
          <button
            onClick={toggleWishlist}
            className="absolute top-2 left-2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110"
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            {isWishlisted ? (
              <FaHeart className="w-4 h-4 text-red-500" />
            ) : (
              <FaRegHeart className="w-4 h-4 text-gray-700" />
            )}
          </button>

          {/* Zoom Controls - Top Right */}
          <div className="absolute top-2 right-2 z-10 flex flex-col gap-1">
            <button
              onClick={toggleZoom}
              className="bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all z-20"
              title={isZoomed ? "Disable zoom" : "Enable zoom"}
            >
              {isZoomed ? (
                <FaSearchMinus className="w-3 h-3 text-gray-700" />
              ) : (
                <FaSearchPlus className="w-3 h-3 text-gray-700" />
              )}
            </button>
            
            {isZoomed && (
              <div className="flex flex-col bg-white/90 rounded-full shadow-md overflow-hidden">
                <button
                  onClick={handleZoomIn}
                  className="px-1.5 py-1 hover:bg-gray-100 transition-colors"
                  title="Zoom in"
                >
                  <span className="text-xs font-bold text-gray-700">+</span>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="px-1.5 py-1 hover:bg-gray-100 transition-colors"
                  title="Zoom out"
                >
                  <span className="text-xs font-bold text-gray-700">-</span>
                </button>
              </div>
            )}
          </div>

          {/* Main Image Container */}
          <div 
            ref={imageRef}
            className={`h-[60vh] lg:h-[70vh] rounded-lg overflow-hidden relative cursor-${isZoomed ? 'zoom-in' : 'pointer'}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => isZoomed && setShowZoom(true)}
            onMouseLeave={() => isZoomed && setShowZoom(false)}
            onClick={toggleZoom}
          >
            <img
              src={selectedImage}
              alt={product.nameEn}
              className={`w-full h-full object-cover transition-transform duration-200 ${
                isZoomed ? 'scale-105' : ''
              }`}
            />
            
            {/* Zoom Lens Overlay (shows on hover when zoomed) */}
            {isZoomed && (
              <>
                {/* Magnifying Glass Effect - Shows on hover */}
                {showZoom && (
                  <div 
                    ref={zoomRef}
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      backgroundImage: `url(${selectedImage})`,
                      backgroundSize: `${zoomLevel * 100}%`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: `${position.x}% ${position.y}%`,
                      opacity: 0.9,
                    }}
                  />
                )}
                
                {/* Zoom Level Indicator */}
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-[10px]">
                  {zoomLevel.toFixed(1)}x
                </div>
              </>
            )}
          </div>

          {additionalImages.length > 0 && (
            <div className="flex gap-1 mt-3 overflow-x-auto pb-1 flex-shrink-0">
              {[product.img, ...additionalImages].map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(image)}
                  className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border transition-all ${
                    selectedImage === image 
                      ? 'border-[#197B33] border-2 scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.nameEn} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Product Info */}
        <div className="lg:w-3/5 h-full overflow-y-auto">
          <div className="space-y-2">
            {/* Product Names */}
            <div className="mt-2">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">{product.nameEn}</h1>
              <p className="text-xs text-gray-700 mt-0.5">{product.nameUr}</p>
            </div>
            
            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="text-gray-600 text-[10px] flex flex-wrap items-center gap-x-1 mt-2">
                {product.benefits.map((benefit, index) => (
                  <span key={index}>
                    {benefit}
                    {index < product.benefits!.length - 1 && (
                      <span className="mx-1 text-gray-300">|</span>
                    )}
                  </span>
                ))}
              </div>
            )}

            {/* Rating & Reviews */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <FaStar className="w-3 h-3 text-yellow-400" />
                <span className="font-semibold text-gray-900 text-xs">{product.rating}</span>
              </div>
              
              <div className="flex items-center gap-1">
                <FaCheckCircle className="w-3 h-3 text-green-500" />
                <span className="text-gray-700 text-[10px]">{product.reviews} Reviews</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-2">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-lg font-bold text-gray-900">PKR {product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">PKR {product.oldPrice}</span>
                )}
                {product.sale && (
                  <span className="px-1.5 py-0.5 bg-red-100 text-red-600 rounded-full text-[10px] font-medium">
                    {product.sale}
                  </span>
                )}
              </div>
            </div>

            {/* Ayurvedic Info Section */}
            {product.infoLines && product.infoLines.length > 0 && (
              <div className="mt-2">
                <div className="flex flex-wrap gap-1">
                  {product.infoLines.map((line, index) => (
                    <div 
                      key={index} 
                      className="text-gray-800 text-[10px] border border-[#5F5F5F] rounded px-2 py-1 bg-white"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-1">
                  {product.features.map((feature, index) => {
                    const hasCheck = feature.hasCheck !== undefined 
                      ? feature.hasCheck 
                      : feature.text.startsWith('✓');
                    
                    const featureText = feature.hasCheck !== undefined
                      ? feature.text
                      : feature.text.replace('✓', '').trim();
                    
                    return (
                      <div 
                        key={index} 
                        className="rounded p-1 flex items-center gap-1 bg-white hover:bg-gray-50 transition-colors"
                      >
                        {/* Left side - Icon */}
                        <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                          {feature.icon ? (
                            <img 
                              src={feature.icon} 
                              alt={featureText}
                              className="w-3 h-3 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = hasCheck ? 
                                  '<div class="text-green-600 font-bold text-xs">✓</div>' : 
                                  '<div class="text-gray-400 font-bold text-xs">○</div>';
                              }}
                            />
                          ) : (
                            hasCheck ? (
                              <div className="text-green-600 font-bold text-xs">✓</div>
                            ) : (
                              <div className="text-gray-400 font-bold text-xs">○</div>
                            )
                          )}
                        </div>
                        
                        {/* Right side - Text */}
                        <span className="text-gray-700 text-[10px] font-medium flex-1 leading-tight">
                          {featureText}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Pansari Points */}
            {product.points && (
              <div className="mt-2">
                <div className="bg-[#6464641A] rounded p-1.5 flex items-center justify-between">
                  <span className="text-gray-800 text-[10px]">
                    Earn Upto {product.points} Pansari Inn Points On This Purchase
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[#646464] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[8px] font-bold">!</span>
                  </div>
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-2">
                <h3 className="font-semibold text-gray-900 text-xs mb-1">Size</h3>
                <div className="flex flex-wrap gap-1">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-2 py-0.5 rounded-full border text-[10px] font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-[#197B33] text-white border-[#197B33]'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#197B33]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-2">
              <h3 className="font-semibold text-gray-900 text-xs mb-1">Quantity</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={decreaseQuantity}
                    className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-2 py-0.5 border-x border-gray-300 min-w-[40px] text-center font-semibold text-xs">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-2 py-0.5 text-gray-600 hover:bg-gray-100 text-xs"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons - Now with WhatsApp */}
            <div className="mt-2 pt-2">
              {/* Primary Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-1.5 mb-2">
                <button className="flex-1 flex items-center justify-center gap-1 me-bgcolor-g text-white font-semibold py-2 px-3 rounded-full hover:opacity-90 transition-opacity text-xs">
                  <FaShoppingCart className="w-3 h-3" />
                  Add to cart
                </button>
                <button className="flex-1 flex items-center justify-center me-bgcolor-y text-gray-900 font-semibold py-2 px-3 rounded-full hover:opacity-90 transition-opacity text-xs">
                  Buy it now
                </button>
              </div>
              
              {/* WhatsApp Button Row */}
              <div className="w-full">
                <button 
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-2 px-3 rounded-full hover:bg-[#1da851] transition-colors text-xs"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}