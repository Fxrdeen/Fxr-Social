import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/home.png"
            alt=""
            className="w-10 h-10 rounded-full"
            width={10}
            height={10}
          />
          <span className="font-medium">Matthew</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={"https://picsum.photos/600/600"}
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          eligendi quod ipsam similique commodi magnam tempore, iure atque
          explicabo accusamus officiis velit ipsum voluptatibus ducimus at
          error. Voluptatum, est voluptatem?
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/like.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/comment.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src={"/share.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
