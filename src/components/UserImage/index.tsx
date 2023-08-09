import Image from "next/image";
import UserPNG from "../../../public/assets/user.png";

export const UserImage = () => {
  return (
    <Image
      className="rounded-2xl border border-text-primary"
      src={UserPNG}
      alt={"User Image"}
      width={32}
      height={32}
    ></Image>
  );
};
