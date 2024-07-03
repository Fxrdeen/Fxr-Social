import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import Leftmenu from "@/components/Leftmenu";
import Rightmenu from "@/components/Rightmenu";
import Stories from "@/components/Stories";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <Leftmenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Rightmenu />
      </div>
      <div></div>
    </div>
  );
};

export default Homepage;
