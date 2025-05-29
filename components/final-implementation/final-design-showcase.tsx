"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Clock, MapPin, Search, Heart, Users, ClipboardList, Percent, QrCode } from "lucide-react"
import { BottomNav } from "../ui/BottomNav"

export function FinalDesignShowcase() {
  const [activeDesign, setActiveDesign] = useState(0)

  const designs = [
    {
      id: "discovery",
      title: "Discovery Screen",
      description: "Enhanced home screen with improved visual hierarchy and intuitive navigation",
    },
    {
      id: "scan",
      title: "Scan to Pay",
      description: "Scan a QR code to pay or join a table.",
    },
    {
      id: "cart",
      title: "Your Cart",
      description: "Review your order, adjust quantities, and proceed to checkout.",
    },
    {
      id: "orders",
      title: "Your Orders",
      description: "View your current and past orders, track status, and reorder easily.",
    },
    {
      id: "restaurant",
      title: "Restaurant Details",
      description: "Detailed restaurant view with menu categories and item information",
    },
    {
      id: "split",
      title: "Split Bill",
      description: "Advanced bill splitting with multiple options and user management",
    },
    {
      id: "checkout",
      title: "Checkout Flow",
      description: "Streamlined checkout with address and payment confirmation",
    },
  ]

  const nextDesign = () => {
    setActiveDesign((prev) => (prev + 1) % designs.length)
  }

  const prevDesign = () => {
    setActiveDesign((prev) => (prev - 1 + designs.length) % designs.length)
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Final Design Showcase</h3>
          <p className="text-slate-600 mb-6">
            Polished visual designs representing the final implementation of the CHEQ mobile app redesign
          </p>
        </div>

        {/* Design Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          {designs.map((design, index) => (
            <button
              key={design.id}
              onClick={() => setActiveDesign(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                index === activeDesign
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {design.title}
            </button>
          ))}
        </div>

        {/* Design Showcase */}
        <div className="flex justify-center items-center gap-8">
          <button onClick={prevDesign} className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative">
            <div className="w-96 h-[800px] bg-[#F5F5F7] rounded-[3rem] p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] flex flex-col">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col h-full">
                <div className="flex-1 overflow-y-auto">
                  {activeDesign === 0 && <DiscoveryDesign />}
                  {activeDesign === 1 && <ScanDesign />}
                  {activeDesign === 2 && <CartDesign />}
                  {activeDesign === 3 && <OrdersDesign />}
                  {activeDesign === 4 && <RestaurantDesign />}
                  {activeDesign === 5 && <SplitBillDesign />}
                  {activeDesign === 6 && <CheckoutDesign />}
                </div>
                {/* iOS Home Indicator */}
                <div className="w-24 h-1.5 rounded-full bg-slate-400/60 mx-auto my-2" />
                <BottomNav
                  active={
                    activeDesign === 0 ? "home" :
                    activeDesign === 1 ? "scan" :
                    activeDesign === 2 ? "cart" :
                    activeDesign === 3 ? "orders" :
                    activeDesign === 4 ? "home" :
                    activeDesign === 5 ? "orders" :
                    "payment"
                  }
                  onTabChange={(tab) => {
                    if (tab === "home") setActiveDesign(0);
                    else if (tab === "scan") setActiveDesign(1);
                    else if (tab === "cart") setActiveDesign(2);
                    else if (tab === "orders") setActiveDesign(3);
                    else if (tab === "payment") setActiveDesign(6);
                  }}
                />
              </div>
            </div>
          </div>

          <button onClick={nextDesign} className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Design Description */}
        <div className="text-center mt-8">
          <h4 className="text-lg font-semibold text-slate-800 mb-2">{designs[activeDesign].title}</h4>
          <p className="text-slate-600">{designs[activeDesign].description}</p>
        </div>

        {/* Design Features */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {getDesignFeatures(activeDesign).map((feature) => (
            <div key={feature.title} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h5 className="font-semibold text-slate-800 text-sm">{feature.title}</h5>
              </div>
              <p className="text-xs text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Individual Design Components
function DiscoveryDesign() {
  // Featured restaurants data (for empty state demo)
  const featuredRestaurants = [
    {
      name: "Ben's Artisan Pizza",
      image: "/images/pizza-eating.gif",
      logoBg: "bg-green-500",
      logoText: "BEN'S",
      rating: 4.8,
      reviews: 200,
      cuisine: "Italian • Pizza • $$",
      time: "15-25 min",
      distance: "1.2 mi",
      tags: ["Free Delivery", "Organic", "Wood-fired"],
      offer: "20% OFF",
      status: "NEW",
      logoColor: "bg-green-500",
      infoBg: "#E9D8C8",
      infoBorder: "#E2CDB6",
      logoLeft: "left-8",
      logoBottom: "-bottom-10",
      logoZ: "z-30",
      fillTop: "calc(100% - 4.5rem)",
      fillHeight: "4.5rem",
      logoShadow: "shadow-lg",
      logoTextColor: "text-white",
      logoTextSize: "text-sm",
      logoFont: "font-bold",
      logoBorder: "border-4 border-white",
      logoOuterBg: "bg-white",
      logoOuterRadius: "rounded-2xl",
      logoInnerRadius: "rounded-xl",
      logoInnerSize: "w-16 h-16",
      logoOuterSize: "w-20 h-20",
      infoSectionPadding: "p-5 pt-14",
      infoSectionBorder: "border-t border-[#E2CDB6]",
      infoSectionShadow: "shadow-[0_-4px_16px_0_rgba(0,0,0,0.04)]",
      infoSectionRadius: "rounded-b-2xl",
      infoSectionZ: "relative z-20",
      infoSectionBg: "bg-[#E9D8C8]",
      infoSectionText: "text-slate-800",
      infoSectionSubText: "text-gray-500",
      infoSectionTag: "bg-gray-100 text-gray-600",
      infoSectionTagText: "text-sm",
      infoSectionTagPadding: "px-3 py-1",
      infoSectionTagRadius: "rounded-full",
      infoSectionTagGap: "gap-2",
      infoSectionTagWrap: "flex flex-wrap",
      infoSectionTagMargin: "mt-3",
      infoSectionIcon: "w-4 h-4 text-slate-500 mr-2",
      infoSectionIconGap: "gap-2",
      infoSectionIconRow: "flex items-center text-base text-gray-500 mt-3",
      infoSectionOffer: "bg-primary text-white text-sm font-bold px-3 py-2 rounded-lg shadow-sm",
      infoSectionOfferPos: "absolute bottom-4 right-4",
      infoSectionStatus: "bg-primary text-white rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
      infoSectionStatusPos: "absolute top-4 left-4 flex flex-wrap gap-2",
      infoSectionHeart: "absolute top-4 right-4",
      infoSectionHeartBtn: "w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm",
      infoSectionHeartIcon: "w-6 h-6 text-red-500 fill-current",
      infoSectionRating: "bg-white rounded-lg px-3 py-2 flex items-center shadow-md border border-slate-100",
      infoSectionRatingIcon: "w-4 h-4 text-yellow-500 mr-2 fill-current",
      infoSectionRatingText: "font-bold text-slate-800 text-base",
      infoSectionRatingSubText: "ml-1 text-slate-500 text-base font-medium",
    },
    // ...repeat for Sushi and Burger, or use your existing array
  ];

  return (
    <div className="h-full flex flex-col bg-app-gradient">
      <div className="h-full flex flex-col">
        {/* Status Bar */}
        <div className="flex-shrink-0">
          <div className="flex justify-between items-center px-8 py-5 bg-white">
            <div className="text-base font-normal text-black tracking-widest">9:41</div>
            <div className="flex items-center space-x-3">
              <div className="text-sm font-medium flex items-center">
                <div className="flex items-center gap-1 mr-3">
                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                </div>
                <span className="mr-2">100%</span>
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="black"></rect>
                  <rect x="2" y="2" width="19" height="10" rx="1" fill="black"></rect>
                </svg>
              </div>
            </div>
          </div>

          {/* Location Header */}
          <div className="px-6 py-4 flex justify-between items-center border-b border-gray-100">
            <div>
              <p className="text-sm text-gray-500 mb-1">Your Location</p>
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-xl">New York</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-3 bg-gray-100 rounded-full text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-qr-code"
                >
                  <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                  <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                  <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                  <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                  <path d="M21 21v.01"></path>
                  <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                  <path d="M3 12h.01"></path>
                  <path d="M12 3h.01"></path>
                  <path d="M12 16v.01"></path>
                  <path d="M16 12h1"></path>
                  <path d="M21 12v.01"></path>
                  <path d="M12 21v-1"></path>
                </svg>
              </button>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart text-gray-700 cursor-pointer"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                <span className="absolute -top-2 -right-2 bg-primary text-white text-sm rounded-full w-6 h-6 flex items-center justify-center font-medium">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24" style={{ scrollbarWidth: "none", height: "calc(100% - 120px)" }}>
          {/* Promotional Banner - Exact Match */}
          <div className="mx-6 mt-6 mb-6 rounded-[2rem] overflow-hidden">
            <div className="relative h-72">
              {/* Restaurant Image Background */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <img
                  src="/images/delivery_driver.jpg"
                  alt="Delivery driver"
                  className="w-full h-full object-cover rounded-[2rem]"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 rounded-[2rem]"></div>
              </div>

              {/* Content positioned over the image */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-start">
                  {/* LIMITED TIME Badge */}
                  <div className="bg-primary text-white px-3 py-1 rounded-md text-sm font-bold">LIMITED TIME</div>
                </div>

                <div>
                  {/* Main Headline */}
                  <h2 className="text-white text-3xl font-bold mb-2 leading-tight">Free Delivery Week</h2>

                  {/* Subtitle */}
                  <p className="text-white text-base mb-1 font-medium">No fees on all orders over $15</p>
                  <p className="text-white text-base mb-6 font-medium">+ earn 5% back on pickup</p>

                  {/* CTA Button */}
                  <button className="bg-primary text-white font-bold px-6 py-3 rounded-full flex items-center">
                    Order Now
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Filter Chips - Exact Match */}
          <div className="px-6 mb-2">
            <h4 className="font-bold text-xl text-slate-800 mb-3">Food Categories</h4>
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 px-1">
              {[
                {
                  name: "Pizza",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-pizza-l8j30VpI2AkWQ2lM6VvbhyUgWCYjVl.png",
                },
                {
                  name: "Thai",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-thai-pRM3ZBaWa6IcMivZGiJoD7zpukApdO.png",
                },
                {
                  name: "Sushi",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-sushi-ytu3KXWqzfsEvMVSe7s5rr9NXfmVwr.png",
                },
                {
                  name: "Burger",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-burger-HDXm03aX8hjjkFUQqEnjihU5J1AJyq.png",
                },
                {
                  name: "More",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/category-dessert-nsMK8Ag9ZIyJWNQu7Q4KcTqE3UGKAb.png",
                },
              ].map((category, index) => (
                <div key={category.name} className="flex flex-col items-center flex-shrink-0" style={{ minWidth: 80 }}>
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <span className={`text-sm mt-2 font-medium ${index === 0 ? "text-primary" : "text-slate-600"}`}>
                    {category.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Restaurants */}
          <div className="px-6 py-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-xl">Featured Restaurants</h3>
              <button className="text-primary text-base font-bold rounded-lg px-4 py-2 transition-colors hover:bg-primary/10">View all</button>
            </div>
            {featuredRestaurants.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <img src="/images/empty-orders.svg" alt="No featured restaurants" className="w-32 h-32 mb-6" loading="lazy" />
                <div className="text-slate-800 font-bold text-lg mb-2">No featured restaurants</div>
                <div className="text-slate-500 text-base mb-6">Check back soon for new and exciting options!</div>
                <button className="bg-primary text-white font-bold px-6 py-3 rounded-full">Browse Categories</button>
              </div>
            ) : (
              <div className="space-y-6 pb-6">
                {/* Ben's Artisan Pizza */}
                <div className="border border-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm relative">
                  <div className="relative h-56">
                    <div className="absolute inset-0">
                      <img src="/images/pizza-eating.gif" alt="People eating pizza" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <div className="bg-white rounded-lg px-3 py-2 flex items-center shadow-md border border-slate-100">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
                        <span className="font-bold text-slate-800 text-base">4.8</span>
                        <span className="ml-1 text-slate-500 text-base font-medium">(200+)</span>
                      </div>
                      <div className="bg-primary text-white rounded-lg px-3 py-2 text-sm font-medium shadow-sm">NEW</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                      </button>
                    </div>
                    <div className="absolute left-8 -bottom-10 z-30">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                        <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">BEN'S</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary text-white text-sm font-bold px-3 py-2 rounded-lg shadow-sm">
                      20% OFF
                    </div>
                  </div>
                  {/* Enhanced Siesta Tan fill for the gap */}
                  <div className="absolute left-0 right-0" style={{top: 'calc(100% - 4.5rem)', height: '4.5rem', background: '#E9D8C8', zIndex: 10}} />
                  <div className="p-5 pt-14 bg-[#E9D8C8] rounded-b-2xl relative z-20 border-t border-[#E2CDB6] shadow-[0_-4px_16px_0_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xl">Ben's Artisan Pizza</h4>
                        <p className="text-base text-gray-500">Italian • Pizza • $$</p>
                      </div>
                    </div>
                    <div className="flex items-center text-base text-gray-500 mt-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>15-25 min</span>
                      <span className="mx-3">•</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>1.2 mi</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Free Delivery</span>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Organic</span>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Wood-fired</span>
                    </div>
                  </div>
                </div>
                {/* Sushi Restaurant */}
                <div className="border border-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm relative">
                  <div className="relative h-56">
                    <div className="absolute inset-0">
                      <img src="/images/friends_suishi.jpg" alt="Sushi restaurant" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <div className="bg-white rounded-lg px-3 py-2 flex items-center shadow-md border border-slate-100">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
                        <span className="font-bold text-slate-800 text-base">4.7</span>
                        <span className="ml-1 text-slate-500 text-base font-medium">(150+)</span>
                      </div>
                      <div className="bg-primary text-white rounded-lg px-3 py-2 text-sm font-medium shadow-sm">NEW</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                      </button>
                    </div>
                    <div className="absolute left-8 -bottom-10 z-30">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                        <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">SUSHI</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary text-white text-sm font-bold px-3 py-2 rounded-lg shadow-sm">
                      10% OFF
                    </div>
                  </div>
                  {/* Enhanced Siesta Tan fill for the gap */}
                  <div className="absolute left-0 right-0" style={{top: 'calc(100% - 4.5rem)', height: '4.5rem', background: '#E9D8C8', zIndex: 10}} />
                  <div className="p-5 pt-14 bg-[#E9D8C8] rounded-b-2xl relative z-20 border-t border-[#E2CDB6] shadow-[0_-4px_16px_0_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xl">Sushi Place</h4>
                        <p className="text-base text-gray-500">Japanese • Sushi • $$</p>
                      </div>
                    </div>
                    <div className="flex items-center text-base text-gray-500 mt-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>20-30 min</span>
                      <span className="mx-3">•</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>0.8 mi</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Free Delivery</span>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Fresh</span>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Handmade</span>
                    </div>
                  </div>
                </div>
                {/* Burger Restaurant */}
                <div className="border border-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm relative">
                  <div className="relative h-56">
                    <div className="absolute inset-0">
                      <img src="/images/burger_restaurant.jpg" alt="Burger restaurant" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <div className="bg-white rounded-lg px-3 py-2 flex items-center shadow-md border border-slate-100">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
                        <span className="font-bold text-slate-800 text-base">4.6</span>
                        <span className="ml-1 text-slate-500 text-base font-medium">(180+)</span>
                      </div>
                      <div className="bg-primary text-white rounded-lg px-3 py-2 text-sm font-medium shadow-sm">NEW</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                        <Heart className="w-6 h-6 text-red-500 fill-current" />
                      </button>
                    </div>
                    <div className="absolute left-8 -bottom-10 z-30">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
                        <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                          <span className="text-white text-sm font-bold">BURGER</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary text-white text-sm font-bold px-3 py-2 rounded-lg shadow-sm">
                      15% OFF
                    </div>
                  </div>
                  {/* Enhanced Siesta Tan fill for the gap */}
                  <div className="absolute left-0 right-0" style={{top: 'calc(100% - 4.5rem)', height: '4.5rem', background: '#E9D8C8', zIndex: 10}} />
                  <div className="p-5 pt-14 bg-[#E9D8C8] rounded-b-2xl relative z-20 border-t border-[#E2CDB6] shadow-[0_-4px_16px_0_rgba(0,0,0,0.04)]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xl">Burger Joint</h4>
                        <p className="text-base text-gray-500">American • Burgers • $$</p>
                      </div>
                    </div>
                    <div className="flex items-center text-base text-gray-500 mt-3">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>10-20 min</span>
                      <span className="mx-3">•</span>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>2.0 mi</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Free Delivery</span>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Grass-fed</span>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Handmade</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ScanDesign() {
  // Simulate scan error state (for demo)
  const [scanError, setScanError] = useState(false);

  return (
    <div className="h-full flex flex-col bg-app-gradient">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-8 py-5 bg-white">
        <div className="text-base font-normal text-black tracking-widest">9:41</div>
        <div className="flex items-center space-x-3">
          <div className="text-sm font-medium flex items-center">
            <div className="flex items-center gap-1 mr-3">
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <span className="mr-2">100%</span>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="black"></rect>
              <rect x="2" y="2" width="19" height="10" rx="1" fill="black"></rect>
            </svg>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="px-6 py-6 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Scan to Pay</h2>
        <p className="text-slate-600 text-base mb-6">Align the QR code within the frame to scan and pay or join a table.</p>
        <div className="flex justify-center items-center">
          <div
            className="w-64 h-64 rounded-3xl relative flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary animate-scan-pulse"
            aria-label="QR code scan area"
            tabIndex={0}
          >
            {/* Animated rotating dashed border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 256 256" className="w-full h-full">
                <rect x="6" y="6" width="244" height="244" rx="32" fill="none" stroke="#F45B2A" strokeWidth="6" strokeDasharray="16 12" />
              </svg>
            </div>
            {/* Pulse background */}
            <div className="absolute inset-0 rounded-3xl bg-[#FAFAFC] shadow-lg animate-scan-pulse" style={{zIndex:1}} />
            <QrCode className="w-24 h-24 text-primary relative z-10" />
          </div>
        </div>
        {/* Error state message */}
        {scanError && (
          <div className="mt-4 text-red-600 font-medium text-base">Scan failed. Please try again.</div>
        )}
        <div className="mt-8">
          <button
            className="text-primary font-semibold underline text-base px-4 py-2 rounded-lg transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setScanError(!scanError)}
          >
            Enter code manually
          </button>
        </div>
      </div>
      {/* Add scan area animation keyframes */}
      <style>{`
        @keyframes scan-pulse {
          0% { box-shadow: 0 0 0 0 rgba(244,91,42,0.15), 0 4px 24px 0 rgba(0,0,0,0.08); }
          70% { box-shadow: 0 0 0 16px rgba(244,91,42,0), 0 4px 24px 0 rgba(0,0,0,0.08); }
          100% { box-shadow: 0 0 0 0 rgba(244,91,42,0.15), 0 4px 24px 0 rgba(0,0,0,0.08); }
        }
        .animate-scan-pulse {
          animation: scan-pulse 1.6s infinite;
        }
      `}</style>
    </div>
  );
}

function RestaurantDesign() {
  return (
    <div className="h-full flex flex-col bg-app-gradient">
      {/* Status Bar & Header */}
      <div className="flex-shrink-0">
        <div className="flex justify-between items-center px-8 py-5 bg-white">
          <div className="text-base font-normal text-black tracking-widest">9:41</div>
          <div className="flex items-center space-x-3">
            <div className="text-sm font-medium flex items-center">
              <div className="flex items-center gap-1 mr-3">
                <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              </div>
              <span className="mr-2">100%</span>
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="black"></rect>
                <rect x="2" y="2" width="19" height="10" rx="1" fill="black"></rect>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100">
          <ChevronLeft className="w-5 h-5 text-slate-800" />
          <div className="flex-1 text-center">
            <h3 className="font-semibold text-slate-800">Ben's Artisan Pizza</h3>
          </div>
          <div className="relative">
            <Heart className="w-5 h-5 text-slate-800" />
          </div>
        </div>
      </div>

      {/* Cover Image with Overlapping Logo */}
      <div className="relative">
        <img
          src="/images/pizza-eating.gif"
          alt="Two people eating pizza at a restaurant"
          className="w-full h-72 object-cover"
          loading="lazy"
        />
        <div className="absolute left-8 -bottom-10 z-30">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white">
            <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-sm font-bold">BEN'S</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Scrollable Content */}
      <div className="flex-1 overflow-y-auto pt-20 px-6 pb-6 space-y-10" style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Restaurant Info */}
        <div className="bg-white rounded-2xl shadow-lg p-7 -mt-14 mb-8 text-left">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Ben's Artisan Pizza</h2>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
            <MapPin className="w-4 h-4" />
            <span>123 Main Street, New York</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>4.8 (200+ ratings)</span>
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-base font-semibold text-slate-800">15-25 min</div>
              <div className="text-xs text-slate-500">Delivery time</div>
            </div>
            <div>
              <div className="text-base font-semibold text-slate-800">$0.00</div>
              <div className="text-xs text-slate-500">Delivery fee on $12+</div>
            </div>
          </div>
        </div>
        {/* Promo Card */}
        <div className="bg-base rounded-2xl p-6 flex gap-4 shadow-lg text-left items-stretch">
          <img src="/images/promo.jpg" alt="Promo burger" className="w-20 h-auto min-h-[72px] max-h-[110px] rounded-2xl object-cover mr-4 shadow self-center" style={{alignSelf:'stretch'}} loading="lazy" />
          <div className="flex flex-col justify-between py-1">
            <div className="font-semibold text-slate-800 mb-1">Deals for Days</div>
            <div className="text-sm text-slate-600 mb-3">Get $0 delivery fee on your first order over $10!</div>
            <button className="bg-primary text-white text-xs font-bold px-5 py-2 rounded-full">Learn more</button>
          </div>
        </div>
        {/* Popular Items - horizontal scroll */}
        <div>
          <div className="font-bold text-xl text-slate-800 mb-3">Popular Items</div>
          <div className="flex gap-5 overflow-x-auto pb-2 no-scrollbar">
            {[
              {
                name: "Classic Cheese Pizza",
                price: "$12.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cheese-pizza-pull-eqRrAX7woPc0FwDrP5UNTaWcRyOguB.png",
              },
              {
                name: "Pepperoni Pizza",
                price: "$14.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepperoni-pizza-34NURgsLPyASNk5pLUCUR7nEjTNnR7.png",
              },
              {
                name: "Gourmet Mushroom Pizza",
                price: "$16.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mushroom-pizza-F79t6MMKBuoxlozDsAH1tOYUfeD2jy.png",
              },
              {
                name: "Margherita Pizza",
                price: "$13.99",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cheese-pizza-gT7UelkVmCyoomcJZ15u2wyITiZfvk.png",
              },
            ].map((item, idx) => (
              <div key={idx} className="min-w-[170px] max-w-[180px] bg-white rounded-2xl shadow-lg flex flex-col items-stretch p-4 relative">
                <div className="flex justify-center items-center mb-4 mt-2">
                  <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded-xl" loading="lazy" />
                </div>
                <div className="font-semibold text-slate-800 text-base mb-1 truncate text-left">{item.name}</div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-slate-800 font-medium text-base">{item.price}</span>
                  <button className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary text-lg ml-2">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Traditional Menu - Masonry Layout */}
        <div>
          <div className="font-bold text-xl text-slate-800 mb-3">Menu</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: "Tiramisu",
                desc: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.",
                price: "$6.99",
                image: "/images/tiramisu.jpg",
              },
              {
                name: "Garlic Knots",
                desc: "Fresh-baked knots brushed with garlic butter and herbs.",
                price: "$5.99",
                image: "/images/garlic_knots.jpg",
              },
              {
                name: "Caprese Salad",
                desc: "Fresh mozzarella, tomatoes, basil, olive oil, and balsamic glaze.",
                price: "$8.99",
                image: "/images/caprese.jpg",
              },
              {
                name: "Caesar Salad",
                desc: "Romaine, parmesan, croutons, and house Caesar dressing.",
                price: "$9.49",
                image: "/images/caesar_salad.jpg",
              },
              {
                name: "Spaghetti Carbonara",
                desc: "Classic pasta with pancetta, egg, parmesan, and black pepper.",
                price: "$13.99",
                image: "/images/carbonara.jpg",
              },
              {
                name: "Truffle Fries",
                desc: "Crispy fries tossed in truffle oil, parmesan, and herbs.",
                price: "$7.99",
                image: "/images/truffle_fries.jpg",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg flex flex-col p-4">
                <img src={item.image} alt={item.name} className="w-full h-36 object-cover rounded-xl mb-3" loading="lazy" />
                <div className="font-semibold text-slate-800 text-base mb-1">{item.name}</div>
                <div className="text-slate-600 text-sm mb-2">{item.desc}</div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-slate-800 font-medium text-base">{item.price}</span>
                  <button className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary text-lg ml-2">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SplitBillDesign() {
  return (
    <div className="h-full flex flex-col bg-app-gradient">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-8 py-5 bg-white">
        <div className="text-base font-normal text-black tracking-widest">9:41</div>
        <div className="flex items-center space-x-3">
          <div className="text-sm font-medium flex items-center">
            <div className="flex items-center gap-1 mr-3">
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <span className="mr-2">100%</span>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="black"></rect>
              <rect x="2" y="2" width="19" height="10" rx="1" fill="black"></rect>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-8">
        {/* Who's splitting section */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-4">Who's splitting?</h4>
          <div className="flex flex-wrap gap-3">
            {[
              { id: "you", name: "You", color: "bg-blue-500", selected: true },
              { id: "alex", name: "Alex", color: "bg-green-500", selected: true },
              { id: "taylor", name: "Taylor", color: "bg-purple-500", selected: true },
              { id: "jordan", name: "Jordan", color: "bg-orange-500", selected: false },
            ].map((user) => (
              <button
                key={user.id}
                className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-primary font-medium text-base
                  ${user.selected
                    ? "border-[hsl(var(--tomato-curry))] bg-[hsl(var(--tomato-curry)/.08)] text-slate-800 shadow-md hover:bg-[hsl(var(--tomato-curry)/.15)]"
                    : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"}
                `}
                tabIndex={0}
              >
                <div className={`w-9 h-9 ${user.color} rounded-full flex items-center justify-center text-base`}>
                  <span className="text-white font-semibold">{user.name[0]}</span>
                </div>
                <span className="text-base font-semibold text-slate-800">{user.name}</span>
                {!user.selected && (
                  <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 text-xs">+</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
        <hr className="my-6 border-slate-100" />

        {/* How to split section */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-4">How do you want to split?</h4>
          <div className="grid grid-cols-3 gap-4">
            {[
              { id: "equal", label: "Equal", icon: <Users className="w-8 h-8" />, selected: true },
              { id: "item", label: "By Item", icon: <ClipboardList className="w-8 h-8" />, selected: false },
              { id: "percent", label: "By %", icon: <Percent className="w-8 h-8" />, selected: false },
            ].map((method) => (
              <button
                key={method.id}
                className={`py-4 px-4 min-w-[100px] rounded-2xl border-2 transition-all flex flex-col items-center shadow-sm gap-2 focus:outline-none focus:ring-2 focus:ring-primary
                  ${method.selected
                    ? "border-[hsl(var(--tomato-curry))] bg-[hsl(var(--tomato-curry)/.08)] shadow-md hover:bg-[hsl(var(--tomato-curry)/.15)]"
                    : "border-slate-200 bg-white hover:bg-slate-50"}
                `}
                tabIndex={0}
              >
                <div className={`${method.selected ? "text-[hsl(var(--tomato-curry))]" : "text-slate-400"}`}>{method.icon}</div>
                <div className={`text-sm font-semibold whitespace-nowrap ${method.selected ? "text-[hsl(var(--tomato-curry))]" : "text-slate-800"} mt-1`}>
                  {method.label}
                </div>
              </button>
            ))}
          </div>
        </div>
        <hr className="my-6 border-slate-100" />

        {/* Split details */}
        <div>
          <h4 className="font-semibold text-slate-800 mb-4">Split Details</h4>
          <div className="divide-y divide-slate-200 rounded-xl overflow-hidden bg-[#FAFAFC]">
            {[
              { id: "you", name: "You", color: "bg-blue-500", amount: "$9.33" },
              { id: "alex", name: "Alex", color: "bg-green-500", amount: "$9.33" },
              { id: "taylor", name: "Taylor", color: "bg-purple-500", amount: "$9.33" },
            ].map((user, idx) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-transparent">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${user.color} rounded-full flex items-center justify-center text-base`}>
                    <span className="text-white font-semibold">{user.name[0]}</span>
                  </div>
                  <span className="font-semibold text-slate-800">{user.name}</span>
                </div>
                <span className={`font-bold text-lg ${user.id === 'you' ? 'text-[hsl(var(--tomato-curry))]' : 'text-slate-800'}`}>{user.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutDesign() {
  return (
    <div className="h-full flex flex-col bg-app-gradient">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-8 py-5 bg-white">
        <div className="text-base font-normal text-black tracking-widest">9:41</div>
        <div className="flex items-center space-x-3">
          <div className="text-sm font-medium flex items-center">
            <div className="flex items-center gap-1 mr-3">
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <span className="mr-2">100%</span>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="black"></rect>
              <rect x="2" y="2" width="19" height="10" rx="1" fill="black"></rect>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
        {/* Delivery Address */}
        <div>
          <h4 className="font-bold text-xl text-slate-800 mb-3">Delivery Address</h4>
          <div className="flex items-start gap-3 p-4 bg-[#FAFAFC] rounded-lg">
            <MapPin className="w-5 h-5 text-slate-500 mt-1" />
            <div>
              <p className="font-medium text-slate-800">123 Main Street</p>
              <p className="text-sm text-slate-600">Apt 4B</p>
              <p className="text-sm text-slate-600">New York, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-xl text-slate-800">Payment Method</h4>
            <button className="text-primary font-semibold underline text-sm px-3 py-1 rounded-lg transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary">Change</button>
          </div>
          <div className="flex items-center gap-3 p-4 bg-[#FAFAFC] rounded-lg">
            <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-base font-bold tracking-widest">VISA</span>
            </div>
            <div>
              <p className="font-medium text-slate-800">Visa ending in 4242</p>
              <p className="text-sm text-slate-500">Default payment method</p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h4 className="font-bold text-xl text-slate-800 mb-4">Order Summary</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>$27.98</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Delivery Fee</span>
              <span>$2.99</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Tax</span>
              <span>$2.24</span>
            </div>
            <div className="border-t border-slate-200 pt-3">
              <div className="flex justify-between text-lg font-bold text-slate-800">
                <span>Total</span>
                <span>$33.21</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDesign() {
  // Simulate cart items (for empty state demo)
  const [cartItems, setCartItems] = useState([
    {
      name: "Classic Cheese Pizza",
      image: "/images/cheese-pizza.jpg",
      size: "Medium",
      quantity: 1,
      price: 12.99,
    },
    {
      name: "Pepperoni Pizza",
      image: "/images/pepperoni-pizza.jpg",
      size: "Medium",
      quantity: 1,
      price: 14.99,
    },
  ]);

  // Remove item handler
  const removeItem = (index: number) => {
    setCartItems((items) => items.filter((_, i) => i !== index));
  };

  // Quantity change handler
  const changeQuantity = (index: number, delta: number) => {
    setCartItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length > 0 ? 2.99 : 0;
  const tax = cartItems.length > 0 ? 2.24 : 0;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className="h-full flex flex-col bg-app-gradient">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-8 py-5 bg-white">
        <div className="text-base font-normal text-black tracking-widest">9:41</div>
        <div className="flex items-center space-x-3">
          <div className="text-sm font-medium flex items-center">
            <div className="flex items-center gap-1 mr-3">
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <span className="mr-2">100%</span>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="black"></rect>
              <rect x="2" y="2" width="19" height="10" rx="1" fill="black"></rect>
            </svg>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
        <ChevronLeft className="w-5 h-5 text-slate-800" />
        <h3 className="font-semibold text-slate-800">Your Cart ({cartItems.length})</h3>
      </div>
      {/* Cart Items */}
      <div className="px-5 py-4 space-y-4">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img src="/images/empty-orders.svg" alt="Empty cart" className="w-32 h-32 mb-6" loading="lazy" />
            <div className="text-slate-800 font-bold text-lg mb-2">Your cart is empty</div>
            <div className="text-slate-500 text-base mb-6">Add some delicious food to get started!</div>
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-full">Browse Restaurants</button>
          </div>
        ) : (
          cartItems.map((item, idx) => (
            <div key={idx} className="flex items-center bg-white rounded-xl shadow-sm p-3 border border-slate-100 gap-3">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover shadow-md" loading="lazy" />
              <div className="flex-1">
                <div className="font-semibold text-slate-800">{item.name}</div>
                <div className="text-xs text-slate-500">Size: {item.size}</div>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold shadow transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => changeQuantity(idx, -1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >-</button>
                  <span className="font-semibold text-slate-800">{item.quantity}</span>
                  <button
                    className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                    onClick={() => changeQuantity(idx, 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >+</button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 ml-3">
                <div className="font-semibold text-slate-800">${(item.price * item.quantity).toFixed(2)}</div>
                <button
                  className="text-xs text-red-500 font-semibold underline hover:text-red-700 focus:outline-none"
                  onClick={() => removeItem(idx)}
                  aria-label={`Remove ${item.name} from cart`}
                >Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Order Summary */}
      {cartItems.length > 0 && (
        <div className="px-5 mt-6">
          <div className="flex justify-between text-slate-600 mb-1">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 mb-1">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600 mb-3">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-slate-800 border-t border-slate-200 pt-3 mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex gap-3 mt-2">
            <button className="flex-1 border-2 border-primary text-primary font-bold py-3 rounded-full bg-white transition-colors hover:bg-primary/10">Split Bill</button>
            <button className="flex-1 bg-primary text-white font-bold py-3 rounded-full transition-colors hover:bg-primary/90">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

function OrdersDesign() {
  // Simulate orders (for empty state demo)
  const [orders, setOrders] = useState([
    {
      restaurant: "Ben's Artisan Pizza",
      image: "/images/pizza-eating.gif",
      orderId: "#12345",
      time: "Today, 6:15pm",
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-800",
      statusText: "In Progress",
      eta: "Estimated: 15 min",
      type: "Delivery",
      items: [
        { name: "Classic Cheese Pizza x1" },
        { name: "Pepperoni Pizza x1" },
      ],
      actions: [
        { label: "Track Order", color: "text-primary", underline: true },
      ],
    },
    {
      restaurant: "Sushi Place",
      image: "/images/friends_suishi.jpg",
      orderId: "#12298",
      time: "Yesterday, 7:02pm",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
      statusText: "Delivered",
      eta: "Delivered: 32 min",
      type: "Pickup",
      items: [
        { name: "Salmon Roll x2" },
        { name: "Miso Soup x1" },
      ],
      actions: [
        { label: "Reorder", color: "text-primary", underline: true },
        { label: "View Receipt", color: "text-slate-500", underline: true },
      ],
    },
  ]);

  return (
    <div className="h-full flex flex-col bg-app-gradient">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-8 py-5 bg-white">
        <div className="text-base font-normal text-black tracking-widest">9:41</div>
        <div className="flex items-center space-x-3">
          <div className="text-sm font-medium flex items-center">
            <div className="flex items-center gap-1 mr-3">
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            </div>
            <span className="mr-2">100%</span>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="black"></rect>
              <rect x="2" y="2" width="19" height="10" rx="1" fill="black"></rect>
            </svg>
          </div>
        </div>
      </div>
      {/* Orders List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img src="/images/empty-orders.svg" alt="No orders" className="w-32 h-32 mb-6" loading="lazy" />
            <div className="text-slate-800 font-bold text-lg mb-2">No orders yet</div>
            <div className="text-slate-500 text-base mb-6">Your orders will appear here once you place them.</div>
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-full">Browse Restaurants</button>
          </div>
        ) : (
          orders.map((order, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img src={order.image} alt={order.restaurant} className="w-14 h-14 rounded-xl object-cover border-2 border-white shadow" loading="lazy" />
                  <div className="min-w-0">
                    <div className="font-bold text-lg text-slate-800 truncate whitespace-nowrap">{order.restaurant}</div>
                    <div className="text-slate-500 text-sm truncate">Order {order.orderId} • {order.time}</div>
                  </div>
                </div>
                <span className={`min-w-[90px] h-8 flex items-center justify-center px-4 text-xs font-bold rounded-full ml-2 ${order.statusColor}`}>{order.statusText}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                <Clock className="w-4 h-4" />
                <span>{order.eta}</span>
                <span className="mx-2">•</span>
                <MapPin className="w-4 h-4" />
                <span>{order.type}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {order.items.map((item, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-medium">{item.name}</span>
                ))}
              </div>
              <div className="flex justify-end mt-4 gap-2">
                {order.actions.map((action, i) => (
                  <button
                    key={i}
                    className={`font-semibold text-sm px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${action.color} ${action.underline ? "underline" : ""} hover:bg-primary/10`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function getDesignFeatures(designIndex: number) {
  const features = [
    [
      { title: "Visual Hierarchy", description: "Clear information architecture with prominent promotional content" },
      { title: "Intuitive Navigation", description: "Bottom tab bar with clear iconography and active states" },
      { title: "Category Browsing", description: "Visual food categories with recognizable imagery for quick access" },
    ],
    [
      { title: "Restaurant Branding", description: "Prominent restaurant logo and consistent brand representation" },
      { title: "Menu Organization", description: "Categorized menu with search functionality and visual indicators" },
      { title: "Item Details", description: "Clear pricing, descriptions, and one-tap add to cart functionality" },
    ],
    [
      { title: "User Selection", description: "Visual user chips with avatars for easy identification" },
      { title: "Split Options", description: "Three distinct splitting methods with clear visual differentiation" },
      { title: "Cost Breakdown", description: "Transparent per-person cost calculation with user avatars" },
    ],
    [
      { title: "Address Verification", description: "Clear delivery information with visual map pin indicator" },
      { title: "Payment Security", description: "Secure payment method display with card type visualization" },
      { title: "Order Transparency", description: "Complete cost breakdown with itemized pricing before payment" },
    ],
  ]

  if (features[designIndex]) return features[designIndex];
  return [
    { title: "Coming Soon", description: "Feature details for this screen will be added in a future update." }
  ];
}
