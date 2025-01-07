import { useState } from "react";

export default function Input() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
    // cities: (8)[
    //   ("Herat",
    //   "Kabul",
    //   "Kandahar",
    //   "Molah",
    //   "Rana",
    //   "Shar",
    //   "Sharif",
    //   "Wazir Akbar Khan")
    // ];
    // country: "Afghanistan";
    // iso2: "AF";
    // iso3: "AFG";
  }

  getData();
  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearched(filtered);
  };
  return (
    <div className="w-[567px] px-6 py-4 text-3xl bg-white  gap-2	rounded-[48px] mx-10 me-[193px] my-10 text-[black]">
      <div className=" flex items-center">
        <img src="./search.svg" alt="" />
        <input
          className="w-100 h-11"
          type="text"
          placeholder="Search"
          onChange={searchHandler}
        />
      </div>
      {searched.length > 0 &&
        searched.slice(0, 10).map((city) => <p>{city}</p>)}
    </div>
  );
}
