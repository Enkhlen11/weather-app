import Sun from "../components/Sun";
export default function LeftCard({ city, year, month, day, setTemp, setText }) {
  return (
    <div className="relative w-[414px] h-[828px] bg-[#F9FAFB]/80 m-auto my-[14vh] rounded-[50px] text-[black] ">
      <Sun />
      <div className="pl-10 pt-[56px]">
        <p className="text-[18px] text-[#6B7280]">
          {day} {month} {year}
        </p>
        <div>
          <h1 className="text-[48px] text-[#111827]">{city}</h1>
          <img className="my-[-70px] pl-[24vh]" src="./location.svg" alt="" />
        </div>
        <div className="my-[-11vh] "></div>
        <img
          clas
          className=" mx-[3vh] pt-[20vh] pb-[20vh] "
          src="./faceSun.png"
          alt=""
        />
        <p className="text-[144px] bg-gradient-to-r from-[#111827] to-[#6B7280]">
          {setTemp?.maxtemp_c}
        </p>
        <p>{setText}</p>
      </div>
      <div className="flex justify-around w-[318px] m-auto  ">
        <img src="/home.svg" alt="" />
        <img src="./location.svg" alt="" />
        <img src="./heart.svg" alt="" />
        <img src="./user.svg" alt="" />
      </div>
    </div>
  );
}
