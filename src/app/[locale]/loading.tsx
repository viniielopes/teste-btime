import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <>
      <div className="flex w-full items-center justify-center bg-primary ">
        <div className="w-16"></div>
        <Skeleton
          count={1}
          width={"12.5rem"}
          height={"2.5rem"}
          containerClassName="border-none py-5"
        ></Skeleton>

        <div className="w-16 pl-8"></div>
      </div>
      <div className="background-tabbar sticky top-0 z-50 flex justify-center bg-opacity-80 py-5">
        <Skeleton
          count={3}
          inline
          width={"11.5rem"}
          height={"3rem"}
          containerClassName="border-none py-5"
          className="mr-3"
        ></Skeleton>
      </div>
      <div className="mx-14">
      </div>
    </>
  );
}
