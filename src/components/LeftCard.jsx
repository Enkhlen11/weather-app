export default function LeftCard({
  city,
  setTemp,
  setText,
  setDate,
  dayCondition,
}) {
  function changeWeatherIcon(dayCondition) {
    console.log(dayCondition);
    const condition = dayCondition?.toLowerCase();

    switch (true) {
      case condition?.includes("sun"):
        return "faceSun.png";
      case condition?.includes("rain"):
        return "rain.png";
      case condition?.includes("cloudy"):
        return "clouds.png";
      case condition?.includes("wind"):
        return "wind.png";
      case condition?.includes("snow"):
        return "snow.png";
      case condition?.includes("thunder"):
        return "thunder.png";
      case true:
        return "faceSun.png";
    }
  }
  return (
    <div className="z-10 relative w-[414px] h-[828px] bg-[#F9FAFB]/80 m-auto my-[14vh] rounded-[50px] text-[black] ">
      <div className="pl-10 pt-[56px]">
        <p className="text-[18px] text-[#6B7280]">{setDate}</p>
        <div>
          <h1 className="text-[48px] text-[#111827]">{city}</h1>
          <img className="my-[-70px] pl-[27vh]" src="./location.svg" alt="" />
        </div>
        <div className="my-[-11vh] "></div>
        <div className="flex items-center">
          <img
            className="  pt-[20vh] w-[520px] h-[520px]  "
            src={changeWeatherIcon(dayCondition)}
            alt=""
          />
        </div>
        <p className="text-[130px] bg-clip-text text-transparent bg-gradient-to-r from-[#111827] to-[#7d8391]">
          {setTemp}°
        </p>
        <p className="text-[#FF8E27] text-[24px] font-extrabold mt-[-20px]">
          {dayCondition}
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
