export default function RightCard({
  city,
  setNightTemp,

  setDate,

  nightCondition,
}) {
  function changeWeatherIcon(nightCondition) {
    const condition = nightCondition?.toLowerCase();

    switch (true) {
      case condition?.includes("clear"):
        return "faceMoon.png";
      case condition?.includes("rain"):
        return "Rain1.png";
      case condition?.includes("cloudy"):
        return "Clouds1.png";
      case condition?.includes("wind"):
        return "wind1.png";
      case condition?.includes("snow"):
        return "Snow2.png";
      case condition?.includes("thunder"):
        return "thunder1.png";
      case true:
        return "faceMoon.png";
    }
  }
  return (
    <div className="z-10  relative w-[414px] h-[828px] bg-[#1F2937]/80 rounded-[50px] m-auto my-[14vh]">
      <div className="pl-10 pt-[56px] ">
        <p className="text-[18px] text-[#9CA3AF]">{setDate}</p>

        <div>
          <h1 className="text-[48px]  text-[#FFFFFF]">{city} </h1>
          <img
            className="my-[-9vh] pl-[27vh] selection:"
            src="./location.svg"
            alt=""
          />
        </div>
        <div className="flex items-center">
          <img
            className=" pt-[17vh] w-[520px] h-[520px] "
            src={changeWeatherIcon(nightCondition)}
            alt=""
          />
        </div>
        <p className="text-[130px] bg-clip-text text-transparent bg-gradient-to-r from-[#F9FAFB] to-[#1e1f21]">
          {setNightTemp}°
        </p>
        <p className="text-[#777CCE] text-[24px] font-extrabold mt-[-20px]">
          {nightCondition}
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
