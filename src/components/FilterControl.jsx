import React from 'react'
import { FilterBy } from '../enum/FilterBy';
import { useEffect, useRef } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField} from '@mui/material';

export default function FilterControl({ searchContent, onChange, onFilterChange, filterBy }) {
  const inputSearch = useRef(null);

  useEffect(() => {
    inputSearch.current.focus();
  }, []);

  return (
    <>
      <TextField
        placeholder='Search by name'
        label='Search by name'
        inputRef={inputSearch}
        value={searchContent}
        onChange={onChange}
        sx={{width: 200}}
        size='small'
      />
      <FormControl>
        <InputLabel id='filter-by'>Filter By</InputLabel>
        <Select
          onChange={onFilterChange}
          labelId="filter-by"
          label="Filter By"
          value={filterBy}
          id="filter-by"
          size='small'
        >
          <MenuItem value={FilterBy.NAME}>Name</MenuItem>
          <MenuItem value={FilterBy.EMAIL}>Email</MenuItem>
          <MenuItem value={FilterBy.COMPANY}>Company</MenuItem>
          <MenuItem value={FilterBy.AGE}>Age</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
