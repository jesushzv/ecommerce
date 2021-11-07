import React from "react";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";

const OPTIONS_LIMIT = 5;
const defaultFilterOptions = createFilterOptions();
const filterOptions = (options, state) => {
  return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
};

const AutocompleteSearchbar = (props) => {

  const history = useHistory();


  const handleClick = (value) => {

    if(value !== null) {
      history.push(`/${value._id}`);
    }
   
  };


  return (
    <Autocomplete
      filterOptions={filterOptions}
      id="combo-box-demo"
      options={props.items}
      getOptionLabel={(option) => option.product_name}
      style={{ width: 200, border: "none" }}
      clearOnEscape={true}
      fullWidth={true}
      onChange={ (event,value) => handleClick(value) }
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default AutocompleteSearchbar;
