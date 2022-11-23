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

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          {/* <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        {/* <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} /> */}
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="dropdown-demo">
      <div className="card">
        <Dropdown
          style={{ width: "100%", padding: "4px" }}
          value={selectedCountry}
          options={[...Countrylist, ...Statelist]}
          onChange={onCountryChange}
          virtualScrollerOptions={{ itemSize: 38 }}
          optionLabel="name"
          filter
          showClear
          filterBy="name"
          placeholder="Select Country"
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
        />
      </div>
    </div>
  );
};
export default Autocomplete;
