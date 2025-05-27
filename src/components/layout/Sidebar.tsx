"use client";

import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  Download,
  History,
  Film,
  Gamepad2,
  Radio,
  Trophy,
  Lightbulb,
  Shirt,
  Settings,
  Flag,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils/formatters";

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
  return (
    <button
      className={cn(
        "flex items-center space-x-6 cursor-pointer w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-left",
        active && "bg-gray-100 font-medium"
      )}
    >
      <span className={cn("text-gray-600", active && "text-gray-900")}>
        {icon}
      </span>
      <span className={cn("text-sm text-gray-700", active && "text-gray-900")}>
        {label}
      </span>
    </button>
  );
}

function SidebarSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="py-2">
      {title && (
        <h3 className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 lg:top-16 top-12 h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-3 space-y-1">
          <SidebarSection>
            <SidebarItem
              icon={<Home className="w-5 h-5" />}
              label="Home"
              active
            />
            <SidebarItem
              icon={<Compass className="w-5 h-5" />}
              label="Explore"
            />
            <SidebarItem
              icon={<PlaySquare className="w-5 h-5" />}
              label="Shorts"
            />
            <SidebarItem
              icon={<Radio className="w-5 h-5" />}
              label="Subscriptions"
            />
          </SidebarSection>

          <hr className="border-gray-200" />

          <SidebarSection>
            <SidebarItem
              icon={<History className="w-5 h-5" />}
              label="History"
            />
            <SidebarItem
              icon={<PlaySquare className="w-5 h-5" />}
              label="Your videos"
            />
            <SidebarItem
              icon={<Clock className="w-5 h-5" />}
              label="Watch later"
            />
            <SidebarItem
              icon={<ThumbsUp className="w-5 h-5" />}
              label="Liked videos"
            />
            <SidebarItem
              icon={<Download className="w-5 h-5" />}
              label="Downloads"
            />
          </SidebarSection>

          <hr className="border-gray-200" />

          <SidebarSection title="Explore">
            <SidebarItem icon={<Film className="w-5 h-5" />} label="Movies" />
            <SidebarItem
              icon={<Gamepad2 className="w-5 h-5" />}
              label="Gaming"
            />
            <SidebarItem icon={<Radio className="w-5 h-5" />} label="Live" />
            <SidebarItem icon={<Trophy className="w-5 h-5" />} label="Sports" />
            <SidebarItem
              icon={<Lightbulb className="w-5 h-5" />}
              label="Learning"
            />
            <SidebarItem
              icon={<Shirt className="w-5 h-5" />}
              label="Fashion & Beauty"
            />
          </SidebarSection>

          <hr className="border-gray-200" />

          <SidebarSection>
            <SidebarItem
              icon={<Settings className="w-5 h-5" />}
              label="Settings"
            />
            <SidebarItem
              icon={<Flag className="w-5 h-5" />}
              label="Report history"
            />
            <SidebarItem
              icon={<HelpCircle className="w-5 h-5" />}
              label="Help"
            />
            <SidebarItem
              icon={<MessageSquare className="w-5 h-5" />}
              label="Send feedback"
            />
          </SidebarSection>
        </div>
      </aside>
    </>
  );
}
