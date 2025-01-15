export default function RightCard({
  city,
  setNightTemp,
  setText,
  setDate,
  setNigth,
  nightCondition,
}) {
  function changeWeatherIcon(nightCondition) {
    const condition = nightCondition.toLowerCase();

    switch (true) {
      case condition.includes("clear"):
        return "faceMoon.png";
      case condition.includes("rain"):
        return "rain1.png";
      case condition.includes("cloudy"):
        return "clouds1.png";
      case condition.includes("wind"):
        return "wind1.png";
      case condition.includes("snow"):
        return "snow1.png";
      case true:
        return "Moon.png";
    }
  }
  return (
    <div className="z-10  relative w-[414px] h-[828px] bg-[#1F2937]/80 rounded-[50px] m-auto my-[14vh]">
      <div className="pl-10 pt-[56px]">
        <p className="text-[18px] text-[#9CA3AF]">{setDate}</p>
        <div>
          <h1 className="text-[48px]  text-[#FFFFFF]">{city} </h1>
          <img className="my-[-7vh] pl-[27vh]" src="./location.svg" alt="" />
        </div>
        <img
          className="mx-[3vh] pt-[17vh] "
          src={changeWeatherIcon(nightCondition)}
          alt=""
        />
        <p className="text-[130px] bg-clip-text text-transparent bg-gradient-to-r from-[#F9FAFB] to-[#1e1f21]">
          {setNightTemp}°
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
