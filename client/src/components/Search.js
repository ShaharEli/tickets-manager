import React from 'react';
import TextField from '@material-ui/core/TextField';

function Search(props) {
  const handleChange = (e) => {
    props.search(e.target.value);
  };
  return (
    <>
      <TextField style={{ marginTop: 100 }} variant="outlined" id="searchInput" autoComplete="off" label="Search ticket" onChange={(e) => handleChange(e)} />
    </>
  );
}

export default Search;
