export default function LeftCard() {
  return (
    <div className="relative w-[414px] h-[828px] bg-[#F9FAFB]/80 m-auto rounded-[50px]">
      <div className="pl-10 pt-[56px]">
        <p className="text-[18px] text-[#6B7280]">January 7, 2025</p>
        <h1 className="text-[48px] text-[#111827]">Ulaanbaatar</h1>
        <div className="my-[-11vh] ">
          <img className="pl-[47vh] " src="./location.svg" alt="" />
        </div>
        <img
          className="mx-[7vh] pt-[27vh] pb-[20vh] "
          src="./faceSun.png"
          alt=""
        />
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
