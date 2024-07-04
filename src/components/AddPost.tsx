import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const AddPost = () => {
  const { userId } = auth();
  return (
    <div className="p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm">
      <Image
        src="/home.png"
        alt=";"
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      <div className="flex-1">
        <form action="" className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-200 rounded-lg p-2"
            name="desc"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=";"
            className="w-5 h-5 cursor-pointer self-end"
            width={48}
            height={48}
          />
          <button>Send</button>
        </form>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap2 cursor-pointer">
            <Image
              src="/addImage.png"
              alt=";"
              className="w-5 h-5 object-cover rounded-full"
              width={20}
              height={20}
            />
            Photo
          </div>
          <div className="flex items-center gap2 cursor-pointer">
            <Image
              src="/addVideo.png"
              alt=";"
              className="w-5 h-5 object-cover rounded-full"
              width={20}
              height={20}
            />
            Video
          </div>
          <div className="flex items-center gap2 cursor-pointer">
            <Image
              src="/addevent.png"
              alt=";"
              className="w-5 h-5 object-cover rounded-full"
              width={20}
              height={20}
            />
            Event
          </div>
          <div className="flex items-center gap2 cursor-pointer">
            <Image
              src="/poll.png"
              alt=";"
              className="w-5 h-5 object-cover rounded-full"
              width={20}
              height={20}
            />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
