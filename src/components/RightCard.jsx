export default function RightCard() {
  return (
    <div className="relative w-[414px] h-[828px] bg-blue-500 rounded-[50px] m-auto my-[14vh]">
      <div>
        <p className="text-[18px]">January 7, 2025</p>
        <h1 className="text-[48px]">Ulaanbaatar</h1>
      </div>
      <div>
        <img className="mx-[7vh] py-[12vh]  " src="./faceMoon.png" alt="" />
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
