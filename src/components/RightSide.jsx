import RightCard from "../components/RightCard";
import Moon from "../components/Moon";
export default function ({ city, setTemp, setText, setDate, setNigth }) {
  return (
    <div className="h-[100vh] w-[50vw] bg-[#0F141E] m-auto">
      <RightCard
        city={city}
        setTemp={setTemp}
        setText={setText}
        setDate={setDate}
        setNigth={setNigth}
      />
      <div>
        <Moon />
      </div>
    </div>
  );
}
