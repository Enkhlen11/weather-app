export default function LeftCard({ city, setTemp, setText, setDate, dayIcon }) {
  return (
    <div className="z-10 relative w-[414px] h-[828px] bg-[#F9FAFB]/80 m-auto my-[14vh] rounded-[50px] text-[black] ">
      <div className="pl-10 pt-[56px]">
        <p className="text-[18px] text-[#6B7280]">{setDate}</p>
        <div>
          <h1 className="text-[48px] text-[#111827]">{city}</h1>
          <img className="my-[-70px] pl-[27vh]" src="./location.svg" alt="" />
        </div>
        <div className="my-[-11vh] "></div>
        <img clas className=" mx-[3vh] pt-[20vh] " src="./faceSun.png" alt="" />
        <p className="text-[144px] bg-clip-text text-transparent bg-gradient-to-r from-[#111827] to-[#7d8391]">
          {setTemp}°
        </p>
        <p className="text-[#FF8E27] text-[24px] font-extrabold mt-[-20px]">
          {setText}
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
