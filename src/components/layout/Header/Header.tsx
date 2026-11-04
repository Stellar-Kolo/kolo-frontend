"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, Bell, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-[#f4f7f5] border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="text-gray-600 hover:text-gray-900 mr-4"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Kolo</h1>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          href="/payments"
          aria-label="Wallet"
          className="text-gray-500 hover:text-green-600"
        >
          <Wallet size={20} />
        </Link>
        <button
          aria-label="Notifications"
          className="text-gray-500 hover:text-green-600 relative"
        >
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden border border-gray-200">
          <Image
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="Profile"
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};
