import Input from "../components/Input";
import LeftCard from "../components/LeftCard";
import Sun from "../components/Sun";

export default function LeftSide({
  city,
  setCityName,
  getCityName,
  searched,
  setSearched,
  setTemp,
  setText,
  setDate,
  dayCondition,
}) {
  return (
    <div className="h-[100vh] w-[50vw] bg-[#F3F4F6] justify-center">
      <Input
        setCityName={setCityName}
        city={city}
        getCityName={getCityName}
        searched={searched}
        setSearched={setSearched}
      />
      <Sun />
      <LeftCard
        city={city}
        setTemp={setTemp}
        setText={setText}
        setDate={setDate}
        dayCondition={dayCondition}
      />
    </div>
  );
}
