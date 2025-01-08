import Input from "../components/Input";
import LeftCard from "../components/LeftCard";

export default function LeftSide({ city, setCityName }) {
  return (
    <div className="h-[100vh] w-[50vw] bg-[#F3F4F6] justify-center">
      <Input setCityName={setCityName} city={city} />

      <LeftCard city={city} />
    </div>
  );
}
