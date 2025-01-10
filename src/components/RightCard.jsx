export default function RightCard({
  city,
  setTemp,
  setText,
  setDate,
  setNigth,
}) {
  return (
    <div className="z-10  relative w-[414px] h-[828px] bg-[#1F2937]/80 rounded-[50px] m-auto my-[14vh]">
      <div className="pl-10 pt-[56px]">
        <p className="text-[18px] text-[#9CA3AF]">{setDate}</p>
        <div>
          <h1 className="text-[48px]  text-[#FFFFFF]">{city} </h1>
          <img className="my-[-7vh] pl-[27vh]" src="./location.svg" alt="" />
        </div>
        <img className="mx-[3vh] pt-[17vh] " src="./faceMoon.png" alt="" />
        <p className="text-[144px] bg-clip-text bg-gradient-to-b from-[#111827] to-[#6B7280]">
          {setTemp?.mintemp_c}°
        </p>
        <p className="text-[#777CCE] text-[24px] font-extrabold mt-[-20px]">
          {setNigth}
        </p>
      </div>
      <div className="flex justify-around w-[318px] m-auto mt-[20px] ">
        <img src="/home.svg" alt="" />
        <img src="./location.svg" alt="" />
        <img src="./heart.svg" alt="" />
        <img src="./user.svg" alt="" />
      </div>
    </div>
  );
}
