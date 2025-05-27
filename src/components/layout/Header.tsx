"use client";

import { Search, Menu, Mic, Video, Bell } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <Button variant="icon" onClick={onMenuClick} className="lg:block">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center space-x-1">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
              <div className="w-5 h-4 bg-white rounded-sm relative">
                <div className="absolute inset-1 bg-red-600 rounded-sm"></div>
              </div>
            </div>
            <span className="text-xl font-semibold hidden sm:block">
              YouTube
            </span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4 hidden md:flex">
          <div className="flex w-full">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <Button className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100">
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
          <Button variant="icon" className="ml-2">
            <Mic className="w-5 h-5" />
          </Button>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <Button variant="icon" className="md:hidden">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="icon" className="hidden sm:flex">
            <Video className="w-5 h-5" />
          </Button>
          <Button variant="icon" className="hidden sm:flex">
            <Bell className="w-5 h-5" />
          </Button>
          <Avatar src="/avatars/user.jpg" alt="User Avatar" size="md" />
        </div>
      </div>
    </header>
  );
}
