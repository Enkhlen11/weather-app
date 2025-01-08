"use client";
import { useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circle from "../components/Circle";

export default function Home() {
  const [cityName, setCityName] = useState([]);

  return (
    <div className="flex relative items-center">
      <Circle />
      <LeftSide setCityName={setCityName} city={cityName} />
      <RightSide setCityName={setCityName} city={cityName} />
    </div>
  );
}
