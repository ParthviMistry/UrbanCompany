import * as React from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { selectCategory } from "store/categorySlice";

const filter = createFilterOptions();

const CategorySearch = (props) => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState("");
  const [id, setId] = React.useState("");

  const handleOnChange = (e, value) => {
    setValue1(e.target.value);
    if (typeof value === "string") {
      setValue({
        label: value
      });
    } else if (value && value.inputValue) {
      setValue({
        label: value.inputValue
      });
    } else {
      setValue(value);
    }
  };

  React.useEffect(() => {
    dispatch(selectCategory(id));
  }, [id]);

  const handleFilter = (options, params) => {
    const filtered = filter(options, params);
    const { inputValue } = params;

    const isExisting = options.some((option) => inputValue === option.label);

    if (inputValue !== "" && !isExisting) {
      filtered.push({
        inputValue,
        label: "No Option"
      });
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
      options={value1 ? props?.category : []}
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
