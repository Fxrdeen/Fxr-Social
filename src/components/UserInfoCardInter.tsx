"use client";

import { switchFollow } from "@/lib/actions";
import { useState } from "react";

const UserInfoCardInter = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSent: boolean;
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    blocked: isUserBlocked,
    followingRequestSent: isFollowingSent,
  });
  const follow = async () => {
    try {
      await switchFollow(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followingRequestSent:
          !prev.following && !prev.followingRequestSent ? true : false,
      }));
    } catch (error) {}
  };
  return (
    <>
      <form action={follow}>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {isFollowing
            ? "Following"
            : userState.followingRequestSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 self-end text-xs cursor-pointer">
          {userState.blocked ? "Unblock User" : "Block User"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInter;
