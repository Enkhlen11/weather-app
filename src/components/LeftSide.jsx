import Input from "../components/Input";
import LeftCard from "../components/LeftCard";

export default function LeftSide({
  city,
  setCityName,
  year,
  month,
  day,
  getCityName,
  searched,
  setSearched,
  setTemp,
  setText,
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

      <LeftCard
        city={city}
        year={year}
        month={month}
        day={day}
        setTemp={setTemp}
        setText={setText}
      />
    </div>
  );
}
