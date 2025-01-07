import Input from "../components/Input";
import LeftCard from "../components/LeftCard";

export default function LeftSide() {
  return (
    <div className="h-[100vh] w-[50vw] bg-[#F3F4F6] justify-center">
      <Input />
      {/* <img
        className="mx-[8vh] my-[6vh] w-[176px] h-[176px] absolute"
        src="./sun.png"
        alt=""
      /> */}
      <LeftCard />
    </div>
  );
}
