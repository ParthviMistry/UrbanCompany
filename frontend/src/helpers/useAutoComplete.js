import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { Country, State, City } from "country-state-city";

import "../styles/Dropdown.css";

//Use PrimeReact library for select country and use country-state-city npm package for get all country state city data
const Autocomplete = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const Countrylist = Country.getAllCountries().map((item) => {
    return { name: item.name, code: item.isoCode };
  });

  const Statelist = City.getAllCities().map((item) => {
    return { name: item.name, code: item.isoCode };
  });

  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  };

  return (
    <div className="dropdown-demo">
      <div className="card">
        <Dropdown
          className="countrySearch"
          value={selectedCountry}
          options={[...Countrylist, ...Statelist]}
          onChange={onCountryChange}
          virtualScrollerOptions={{ itemSize: 38 }}
          optionLabel="name"
          filter
          showClear
          filterBy="name"
          placeholder="Select Country"
        />
      </div>
    </div>
  );
};
export default Autocomplete;
