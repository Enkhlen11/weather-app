import Input from "../components/Input";
import LeftCard from "../components/LeftCard";
import { useState } from "react";

export default function LeftSide() {
  const [cityName, setCityName] = useState([]);
  return (
    <div className="h-[100vh] w-[50vw] bg-[#F3F4F6] justify-center">
      <Input setCityName={setCityName} city={cityName} />

      <LeftCard city={cityName} />
    </div>
  );
}
