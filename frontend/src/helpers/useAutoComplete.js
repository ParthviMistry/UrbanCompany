import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Autocomplete = (props) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const { suggestions } = props;

    const input = e.currentTarget.value;

    const newFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };

  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };

  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                  style={{ display: "flex", paddingLeft: "40px" }}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
  };

  return (
    <>
      <TextField
        fullWidth
        //  className={!props.isBorder ? "inputRounded" : "inputRounded"}
        placeholder={props.isBorder ? "Search Category" : "Search Region"}
        type="text"
        variant="outlined"
        onChange={onChange}
        value={input}
        InputProps={
          props.isBorder
            ? {
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }
            : ""
        }
        inputProps={{ style: { paddingRight: 0 } }}
        autoComplete={"nope"}
      />
      {renderAutocomplete()}
    </>
  );
};

export default Autocomplete;
