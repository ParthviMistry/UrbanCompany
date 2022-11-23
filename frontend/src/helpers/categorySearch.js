import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { selectCategory, searchCategory } from "store/categorySlice";

const filter = createFilterOptions();

//Use MUI Autocomplete for category search and store selected category data on redux
const CategorySearch = (props) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state?.category?.search);
  console.log("search==>", data);

  const [value, setValue] = useState(null);
  const [option, setOption] = useState("");
  const [id, setId] = useState("");

  console.log("option.....", option);

  const handleOnChange = (e, value) => {
    if (e.target.value.length > 3)
      dispatch(searchCategory({ title: e.target.value }));

    setOption(
      data.map((i) => {
        return { label: i.title };
      })
    );

    if (typeof value === "string") {
      setValue({ label: value });
    } else if (value && value.inputValue) {
      setValue({ label: value.inputValue });
    } else {
      setValue(value);
    }
  };

  useEffect(() => {
    if (id !== "") dispatch(selectCategory(id));
  }, [dispatch, id]);

  const handleFilter = (options, params) => {
    let filtered = filter(options, params);
    const { inputValue } = params;

    const isExisting = options.some((option) => inputValue === option.label);

    if (inputValue !== "" && !isExisting) {
      filtered = [
        ...filtered,
        {
          inputValue,
          label: "No Option"
        }
      ];
    }

    return filtered;
  };

  return (
    <Autocomplete
      onInputChange={handleOnChange}
      filterOptions={handleFilter}
      onChange={(event, value) => setId(value)}
      value={value}
      fullWidth
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
      options={option ? option : []}
      renderOption={(props, option) =>
        option && <li {...props}>{option.label}</li>
      }
      renderInput={(params) => (
        <TextField {...params} label="Search Category" />
      )}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.label;
      }}
    />
  );
};

export default CategorySearch;
