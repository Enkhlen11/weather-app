import Moon from "../components/Moon";
export default function RightCard({ city, year, month, day, setTemp }) {
  return (
    <div className="z-10  relative w-[414px] h-[828px] bg-[#1F2937]/80 rounded-[50px] m-auto my-[14vh]">
      <div className="pl-10 pt-[56px]">
        <p className="text-[18px] text-[#9CA3AF]">
          {day} {month} {year}
        </p>
        <div>
          <h1 className="text-[48px]  text-[#FFFFFF]">{city} </h1>
          <img className="my-[-7vh] pl-[24vh]" src="./location.svg" alt="" />
        </div>
        <img
          className="mx-[3vh] pt-[20vh] pb-[20vh]  "
          src="./faceMoon.png"
          alt=""
        />
        <p className="text-[144px] bg-gradient-to-r from-[#111827] to-[#6B7280]">
          {setTemp?.mintemp_c}
        </p>
      </div>
      <div className="flex justify-around w-[318px] m-auto  ">
        <img src="/home.svg" alt="" />
        <img src="./location.svg" alt="" />
        <img src="./heart.svg" alt="" />
        <img src="./user.svg" alt="" />
      </div>
      <div>
        <Moon />
      </div>
    </div>
  );
}
