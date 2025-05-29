import { Home, QrCode, ClipboardList, Box, User, CreditCard, ShoppingCart } from "lucide-react";
import React from "react";

interface BottomNavProps {
  active?: "home" | "scan" | "orders" | "cart" | "payment";
  onTabChange?: (tab: "home" | "scan" | "orders" | "cart" | "payment") => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ active, onTabChange }) => {
  const navItems = [
    { key: "home", label: "Home", icon: Home },
    { key: "scan", label: "Scan", icon: QrCode },
    { key: "orders", label: "Orders", icon: ClipboardList },
    { key: "cart", label: "Cart", icon: ShoppingCart },
    { key: "payment", label: "Payment", icon: CreditCard },
  ];

  return (
    <nav className="w-full bg-white shadow-xl rounded-b-3xl flex items-center justify-around py-2 px-2 border-t border-slate-100">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.key;
        return (
          <button
            key={item.key}
            className={`flex flex-col items-center flex-1 py-1 transition-colors ${isActive ? "text-[hsl(var(--tomato-curry))] font-bold" : "text-slate-400"}`}
            onClick={() => onTabChange?.(item.key as any)}
            aria-label={item.label}
          >
            <Icon className="w-7 h-7 mb-1" />
            <span className="text-xs">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}; 