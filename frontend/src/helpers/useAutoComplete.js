import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import "../styles/Dropdown.css";
import { Country, State, City } from "country-state-city";

const Autocomplete = () => {
  const [lazyItvaems, setLazyItems] = useState([]);
  const [value, setValue] = useState("");
  const [lazyLoading, setLazyLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const Countrylist =
    Country.getAllCountries().length > 0 &&
    Country.getAllCountries().map((item) => {
      return { name: item.name, code: item.isoCode };
    });

  const Statelist =
    City.getAllCities().length > 0 &&
    City.getAllCities().map((item) => {
      return { name: item.name, code: item.isoCode };
    });

  useEffect(() => {
    setLazyItems(Array.from({ length: 100000 }));
    setLazyLoading(false);
  }, []);

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

  const handleSelect = (e) => {
    setValue(e.target.value);
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
          onSelect={handleSelect}
          showClear
          filterBy="name"
          placeholder="Select a Country"
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
        />
      </div>
    </div>
  );
};
export default Autocomplete;
