"use client";

import { Search, Mic, Video, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <Button variant="icon" onClick={onMenuClick} className="lg:hidden ">
            <Menu className="w-5 h-5" />
          </Button>
          <Link href={"/"}>
            <div className="flex items-center space-x-1 relative w-20 xl:w-72 h-full">
              <Image
                width={250}
                height={220}
                src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
                alt="YouTube Logo"
                className="h-16 xl:h-16 md:h-14 left-0 absolute sm:h-6 object-contain"
              />
            </div>
          </Link>
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
            <Button
              variant="none"
              className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100"
            >
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
          <Avatar
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="User Avatar"
            size="md"
          />
        </div>
      </div>
    </header>
  );
}
