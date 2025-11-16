import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

type HeaderProps = {
  onNavigate: (page: 'home' | 'maluku' | 'malang' | 'bali' | 'bandung') => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="burnt-cocoa-bg p-2 rounded-lg">
              <MapPin size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl burnt-cocoa">Must Visit Indonesia</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <button onClick={() => onNavigate('home')} className="hover:text-burnt-cocoa transition-colors text-gray-700">Home</button>
            <button onClick={() => onNavigate('bandung')} className="hover:text-burnt-cocoa transition-colors text-gray-700">Bandung</button>
            <button onClick={() => onNavigate('malang')} className="hover:text-burn