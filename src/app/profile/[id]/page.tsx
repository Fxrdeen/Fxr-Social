import Feed from "@/components/Feed";
import Leftmenu from "@/components/Leftmenu";
import Rightmenu from "@/components/Rightmenu";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <Leftmenu />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <Rightmenu userId="skjdfghdfg" />
      </div>
      <div></div>
    </div>
  );
};

export default ProfilePage;
