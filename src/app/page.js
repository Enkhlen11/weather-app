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
  const [date, setDate] = useState();
  const [nigthText, setNigthText] = useState();

  async function getRender(city) {
    console.log("getting weather data");
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=af4294c0d5c0459c84a21151250801&q=${city}`
    );
    const data = await result.json();
    console.log(data.forecast.forecastday[0].hour[21].condition.text);
    setTemp(data.forecast.forecastday[0].day);
    setText(data.forecast.forecastday[0].day.condition.text);
    setDate(data.forecast.forecastday[0].date);
    setNigthText(data.forecast.forecastday[0].hour[21].condition.text);
  }

  function getCityName(city) {
    setCityName(city);
    setSearched([]);
    getRender(city);
  }

  return (
    <div className="flex relative items-center">
      <Circle />
      <LeftSide
        searched={searched}
        setCityName={setCityName}
        city={cityName}
        getRender={getRender}
        getCityName={getCityName}
        setSearched={setSearched}
        setTemp={temp}
        setText={text}
        setDate={date}
      />
      <RightSide
        setCityName={setCityName}
        city={cityName}
        setTemp={temp}
        setText={text}
        setDate={date}
        setNigth={nigthText}
      />
    </div>
  );
}
