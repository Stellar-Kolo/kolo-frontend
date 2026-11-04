import React from "react";
import Image from "next/image";

interface GroupHeaderProps {
  title: string;
  totalSavings: number;
  activeMembers: number;
}

export const GroupHeader: React.FC<GroupHeaderProps> = ({
  title,
  totalSavings,
  activeMembers,
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex -space-x-2 mr-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?u=1"
                alt="avatar"
                width={32}
                height={32}
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?u=2"
                alt="avatar"
                width={32}
                height={32}
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <Image
                src="https://i.pravatar.cc/150?u=3"
                alt="avatar"
                width={32}
                height={32}
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#5fe3a1] border-2 border-white flex items-center justify-center text-xs font-semibold text-[#148354]">
              +5
            </div>
          </div>
          <span>{activeMembers} Members Active</span>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 text-right">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
          Total Group Savings
        </p>
        <p className="text-2xl font-bold text-[#148354]">
          ₦{totalSavings.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
