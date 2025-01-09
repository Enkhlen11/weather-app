import RightCard from "../components/RightCard";
export default function ({ city, year, day, month, setTemp }) {
  return (
    <div className="h-[100vh] w-[50vw] bg-[#0F141E] m-auto">
      <RightCard
        city={city}
        year={year}
        month={month}
        day={day}
        setTemp={setTemp}
      />
    </div>
  );
}
