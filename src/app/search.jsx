"use client";

import { AutoComplete, Input } from "antd";
import { useState } from "react";
import DisplayJob from "./DisplayJob";

const Search = ({ data }) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();

  const searchResult = (value) => {
    return data
      .filter(({ job_name }) => {
        const val = value.toLowerCase();
        const name = job_name.toLowerCase();

        return name.indexOf(val) !== -1;
      })
      .map(({ job_name }) => {
        return { label: job_name, value: job_name };
      });
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value) => {
    const selectedVal = data.filter((d) => {
      return d.job_name === value;
    })[0];
    setSelected(selectedVal);
  };

  return (
    <>
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{
          width: 300,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search
          size="large"
          placeholder="Search by job name, location or company..."
          enterButton
        />
      </AutoComplete>
      {selected && <DisplayJob data={selected} />}
    </>
  );
};

export default Search;
