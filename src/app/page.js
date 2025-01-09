"use client";
import { use, useState } from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Circle from "../components/Circle";

export default function Home() {
  const [cityName, setCityName] = useState([]);
  const [searched, setSearched] = useState([]);

  const [temp, setTemp] = useState();
  const [text, setText] = useState();

  async function getRender(city) {
    console.log("getting weather data");
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=af4294c0d5c0459c84a21151250801&q=${city}`
    );
    const data = await result.json();
    // console.log(data.forecast.forecastday[0].day);
    setTemp(data.forecast.forecastday[0].day);
    setText(data.forecast.forecastday[0].day.condition.text);
  }

  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getUTCMonth() + 1;
  const day = dateNow.getDate();

  function getCityName(city) {
    setCityName(city);
    setSearched([]);
    getRender(city);
  }

  console.log(year, month, day);
  return (
    <div className="flex relative items-center">
      <Circle />
      <LeftSide
        searched={searched}
        setCityName={setCityName}
        city={cityName}
        year={year}
        month={month}
        day={day}
        getCityName={getCityName}
        setSearched={setSearched}
        setTemp={temp}
        setText={text}
      />
      <RightSide
        setCityName={setCityName}
        city={cityName}
        year={year}
        month={month}
        day={day}
        setTemp={temp}
      />
    </div>
  );
}
