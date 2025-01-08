"use client";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circle from "../components/Circle";

export default function Home() {
  return (
    <div className="flex relative items-center">
      <Circle />
      <LeftSide />
      <RightSide />
    </div>
  );
}
