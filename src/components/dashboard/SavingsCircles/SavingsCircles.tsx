"use client";

import React from "react";
import Image from "next/image";
import { Home, Plane, Plus, ChevronRight } from "lucide-react";
import type { SavingsGroup } from "@/hooks/useGroups";
import { ProgressRing } from "@/components/dashboard/ProgressRing";

interface SavingsCirclesProps {
  groups: SavingsGroup[];
  isLoading?: boolean;
}

export function SavingsCircles({
  groups,
  isLoading = false,
}: SavingsCirclesProps) {
  if (isLoading) {
    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-4 animate-pulse"
            >
              <div className="flex justify-between items-center w-full">
                <div className="w-9 h-9 rounded-full bg-gray-200"></div>
                <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
              </div>
              <div className="w-28 h-28 rounded-full bg-gray-200"></div>
              <div className="w-full text-center space-y-1.5">
                <div className="h-4 w-28 bg-gray-200 rounded mx-auto"></div>
                <div className="h-3 w-20 bg-gray-200 rounded mx-auto"></div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          My Savings Circles
        </h3>
        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center">
          View All <ChevronRight className="w-4 h-4 ml-0.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => {
          const progress = Math.min((group.saved / group.target) * 100, 100);

          // Helper to get icon based on tag
          const getIcon = () => {
            if (group.tag.includes("HOME"))
              return <Home className="w-5 h-5 text-emerald-700" />;
            if (group.tag.includes("TRAVEL"))
              return <Plane className="w-5 h-5 text-emerald-700" />;
            return <Home className="w-5 h-5 text-emerald-700" />;
          };

          return (
            <div
              key={group.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center w-full">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center">
                  {getIcon()}
                </div>
                <span className="text-[10px] font-bold tracking-wider text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full uppercase">
                  {group.tag}
                </span>
              </div>

              <ProgressRing progress={progress} className="w-28 h-28">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">
                    {Math.round(progress)}%
                  </p>
                  <p className="text-[10px] font-medium text-gray-400">
                    of goal
                  </p>
                </div>
              </ProgressRing>

              <div className="w-full text-center">
                <h4 className="text-base font-bold text-gray-900 mb-0.5">
                  {group.name}
                </h4>
                <p className="text-sm text-gray-500">
                  ${group.saved.toLocaleString()} saved
                </p>
              </div>

              <div className="flex justify-between items-center w-full text-xs font-medium text-gray-500">
                <span>Next: {group.nextDate}</span>
                <div className="flex -space-x-1.5">
                  {group.avatars.map((avatar, idx) =>
                    avatar.startsWith("+") ? (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600 z-10"
                      >
                        {avatar}
                      </div>
                    ) : (
                      <Image
                        key={idx}
                        src={avatar}
                        alt="Member"
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border-2 border-white object-cover z-20"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* New Circle Card */}
        <button className="bg-gray-50/50 rounded-2xl p-5 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center h-full min-h-[200px] hover:bg-gray-50 hover:border-gray-300 transition-colors group">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
            <Plus className="w-6 h-6 text-emerald-600" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-1">New Circle</h4>
          <p className="text-xs text-gray-500 font-medium">
            Start a community savings plan with friends.
          </p>
        </button>
      </div>
    </div>
  );
}
