import Image from "next/image";

const Comments = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src="https://picsum.photos/500/500"
          alt=""
          className="w-8 h-8 rounded-full"
          width={32}
          height={32}
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="https://picsum.photos/500/500"
            alt=""
            className="w-10 h-10 rounded-full"
            width={32}
            height={32}
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Nigga</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              doloremque in, quisquam ducimus tenetur eos saepe iusto quae
              possimus asperiores nobis rem sapiente, ullam earum numquam sed
              fugit culpa doloribus.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex gap-4 items-center">
                <Image
                  src="/like.png"
                  alt=""
                  className="w-4 h-4 rounded-full cursor-pointer"
                  width={10}
                  height={10}
                />
              </div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-500">123 Likes</div>
              <div>Reply</div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
