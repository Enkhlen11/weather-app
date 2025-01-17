import { useEffect, useState } from "react";
import LeftCard from "./LeftCard";

export default function Input({
  city,
  setCityName,
  getCityName,
  searched,
  setSearched,
  getRender,
}) {
  const [cities, setCities] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }
  useEffect(() => {
    getCityName("Ulaanbaatar");
    getData();
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    setInputValue(search);
    const filtered = cities.filter((city) => {
      return city.toLowerCase().includes(search.toLowerCase());
    });
    setSearched(filtered);
  };

  return (
    <div className="z-20 absolute w-[567px] px-6 py-4 text-3xl bg-white  gap-2	rounded-[48px] mx-10 me-[193px] my-10 text-[black]">
      <div className=" flex items-center">
        <img src="./search.svg" alt="" />
        <input
          value={inputValue}
          className="w-100 h-11 outline-none"
          type="text"
          placeholder="Search"
          onChange={searchHandler}
        />
      </div>
      {searched.length > 0 &&
        searched.slice(0, 4).map((city, index) => (
          <div
            key={index}
            className="flex gap-2 h-[56px] py-[16px] text-[28px] hover:bg-[#f8f8f8] cursor-pointer"
            onClick={() => {
              getCityName(city);
              setInputValue("");
            }}
          >
            <img src="location.svg" alt="" />
            <p>{city}</p>
          </div>
        ))}
    </div>
  );
}
