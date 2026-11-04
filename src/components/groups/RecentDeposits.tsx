import React from "react";
import Image from "next/image";

interface Deposit {
  id: string;
  name: string;
  time: string;
  amount: number;
  avatarUrl?: string;
  isCurrentUser?: boolean;
}

interface RecentDepositsProps {
  deposits: Deposit[];
}

export const RecentDeposits: React.FC<RecentDepositsProps> = ({ deposits }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Deposits</h3>
      <div className="space-y-4">
        {deposits.map((deposit) => (
          <div
            key={deposit.id}
            className="flex items-center justify-between p-3 rounded-xl bg-[#f4f7f5] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.04),inset_-4px_-4px_8px_rgba(255,255,255,1)] border border-gray-100 transition-colors"
          >
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden mr-3 ${deposit.isCurrentUser ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
              >
                {deposit.avatarUrl ? (
                  <Image
                    src={deposit.avatarUrl}
                    alt={deposit.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-semibold">
                    {deposit.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {deposit.name}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {deposit.time}
                </p>
              </div>
            </div>
            <div className="font-bold text-[#047857]">
              +₦{deposit.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
