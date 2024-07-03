import Image from "next/image";
import Link from "next/link";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href={"/"} className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Nigga Man</span>
          <span className="text-sm">@Nigga</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          atque porro expedita nobis earum officiis incidunt fugiat ut sunt
          molestias, at quidem? Eum totam ex expedita, nostrum doloribus
          repellat accusamus.
        </p>
        <div className="flex items-center gap-2">
          <Image src={"/map.png"} width={16} height={16} alt="" />
          <span>
            Living in <b>Bangalore</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/school.png"} width={16} height={16} alt="" />
          <span>
            Went to <b>PES University</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/work.png"} width={16} height={16} alt="" />
          <span>
            Works at <b>Google</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link
              href={"https://fardeen-shaikh.netlify.app"}
              className="text-blue-500"
            >
              fardeen.dev
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-500 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
