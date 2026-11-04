import React from "react";
import Image from "next/image";
import { UserPlus } from "lucide-react";

export type MemberStatus =
  | "CONTRIBUTED"
  | "WAITING"
  | "PENDING"
  | "PAYOUT_RECEIVED"
  | "LATE";

export interface Member {
  id: string;
  name: string;
  role: string;
  status: MemberStatus;
  avatarUrl?: string;
}

interface MembersListProps {
  members: Member[];
  onInvite: () => void;
}

export const MembersList: React.FC<MembersListProps> = ({
  members,
  onInvite,
}) => {
  const getStatusStyle = (status: MemberStatus) => {
    switch (status) {
      case "CONTRIBUTED":
        return "bg-[#a3f4cd] text-[#047857]";
      case "PAYOUT_RECEIVED":
        return "bg-blue-100 text-blue-700";
      case "LATE":
        return "bg-red-100 text-red-700";
      case "WAITING":
        return "bg-gray-100 text-gray-500";
      case "PENDING":
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] mb-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Members</h3>
        <button
          onClick={onInvite}
          aria-label="Invite member"
          className="p-2 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors"
        >
          <UserPlus size={18} />
        </button>
      </div>

      <div className="space-y-5">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                {member.avatarUrl ? (
                  <Image
                    src={member.avatarUrl}
                    alt={member.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 font-semibold bg-blue-50">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {member.name}
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                  {member.role}
                </p>
              </div>
            </div>
            <div>
              <span
                className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getStatusStyle(member.status)}`}
              >
                {member.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
