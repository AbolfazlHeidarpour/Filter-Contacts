import { useState } from "react";
import {FilterBy} from '../enum/FilterBy';

export default function useFilter() {
  const [searchContent, setSearchContent] = useState('');
  const [filterBy, setFilterBy] = useState(FilterBy.NAME);

  const onChange = e => setSearchContent(e.target.value);

  const onFilterChange = e => setFilterBy(e.target.value);

  const filter = (data) => {
    const lowerSearchContact = searchContent.toLowerCase();

    function handleFilter(c) {
      if (filterBy === FilterBy.NAME && c.name.toLowerCase().includes(lowerSearchContact))
        return c;
      else if (filterBy === FilterBy.EMAIL && c.email.toLowerCase().includes(lowerSearchContact))
        return c;
      else if (filterBy === FilterBy.COMPANY && c.company.toLowerCase().includes(lowerSearchContact))
        return c;
      else if (filterBy === FilterBy.AGE && c.age.toLowerCase().includes(lowerSearchContact))
        return c;
    }

    if (searchContent === '')
      return data;

    return data.filter(c => handleFilter(c));
  };

  return {searchContent, onChange, filter, onFilterChange, filterBy};
}