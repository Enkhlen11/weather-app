import RightCard from "../components/RightCard";
import Moon from "../components/Moon";
export default function ({
  city,
  setNightTemp,

  setDate,

  nightCondition,
}) {
  return (
    <div className="h-[100vh] w-[50vw] bg-[#0F141E] m-auto">
      <RightCard
        city={city}
        setNightTemp={setNightTemp}
        setDate={setDate}
        nightCondition={nightCondition}
      />
      <div>
        <Moon />
      </div>
    </div>
  );
}
