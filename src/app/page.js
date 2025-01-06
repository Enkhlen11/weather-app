"use client";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circle from "../components/Circle";
export default function Home() {
  return (
    <div className="flex relative">
      <div className="absolute">Search</div>
      <Circle />
      <LeftSide />
      <RightSide />
      <div className="absolute">Middle circle</div>
    </div>
  );
}
