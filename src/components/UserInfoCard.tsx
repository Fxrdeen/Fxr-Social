import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import UserInfoCardInter from "./UserInfoCardInter";
import UpdateUser from "./UpdateUser";

const UserInfoCard = async ({ user }: { user: User }) => {
  const date = new Date(user.createdAt);
  const formatdate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowingSent = false;
  const { userId: currentUser } = auth();
  if (currentUser) {
    const blockResponse = await prisma.block.findFirst({
      where: {
        blockerId: currentUser,
        blockedId: user.id,
      },
    });
    blockResponse ? (isUserBlocked = true) : (isUserBlocked = false);
    const followResponse = await prisma.follower.findFirst({
      where: {
        followerId: currentUser,
        followingId: user.id,
      },
    });
    followResponse ? (isFollowing = true) : (isFollowing = false);
    const followRequests = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUser,
        recieverId: user.id,
      },
    });
    followRequests ? (isFollowingSent = true) : (isFollowingSent = false);
  }
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        {currentUser === user.id ? (
          <UpdateUser user={user} />
        ) : (
          <Link href={"/"} className="text-blue-500 text-xs">
            See All
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {user?.name && user.surname
              ? `${user.name} ${user.surname}`
              : user?.username}
          </span>
          <span className="text-sm">@{user?.username}</span>
        </div>

        {user?.desc && <p>{user.desc}</p>}

        <div className="flex items-center gap-2">
          {user.city && (
            <div>
              <Image src={"/city.png"} alt="" width={16} height={16} />
              <span>{user.city}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {user.school && (
            <div>
              <Image src={"/school.png"} alt="" width={16} height={16} />
              <span>{user.school}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {user.work && (
            <div>
              <Image src={"/work.png"} alt="" width={16} height={16} />
              <span>{user.work}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          {user.website && (
            <div className="flex gap-1 items-center">
              <Image src={"/link.png"} alt="" width={16} height={16} />
              <Link
                href={"https://fardeen-shaikh.netlify.app"}
                className="text-blue-500"
              >
                {user?.website}
              </Link>
            </div>
          )}
          <div className="flex gap-1 items-center">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span>Joined {formatdate}</span>
          </div>
        </div>
        {currentUser && currentUser !== user.id && (
          <UserInfoCardInter
            userId={user.id}
            currentUserId={currentUser}
            isUserBlocked={isUserBlocked}
            isFollowing={isFollowing}
            isFollowingSent={isFollowingSent}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
