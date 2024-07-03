import Image from "next/image";
import Link from "next/link";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"https://picsum.photos/400/400"}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Nigga Man</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src={"/reject.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"https://picsum.photos/400/400"}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Nigga Man</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src={"/reject.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"https://picsum.photos/400/400"}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold">Nigga Man</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            src={"/accept.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <Image
            src={"/reject.png"}
            alt=""
            className="cursor-pointer"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
