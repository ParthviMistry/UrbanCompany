import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

export default function UsAuto(props) {
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState("");

  return (
    <Autocomplete
      value={value}
      fullWidth
      onInputChange={(event, newValue) => {
        setValue1(event.target.value);
        if (typeof newValue === "string") {
          setValue({
            label: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setValue({
            label: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some(
          (option) => inputValue === option.label
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            label: "No Option",
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={value1 ? props?.category : []}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.label;
      }}
      renderOption={(props, option) =>
        option && <li {...props}>{option.label}</li>
      }
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Category" />
      )}
    />
  );
}