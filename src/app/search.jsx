'use client'

import { AutoComplete, Input } from 'antd';
import {useState} from 'react';

const Search = ({data}) => {
    const [options, setOptions] = useState([]);


    const searchResult = (value) => {
        return data.filter(({job_name}) => {
            return job_name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
        }).map((({job_name}) => {
            return {label: job_name, value: job_name}
        }));

    }

    const handleSearch = (value) => {
        console.log(value);
        setOptions(value ? searchResult(value) : []);
        console.log(options)
    };
    const onSelect = (value) => {
      console.log('onSelect', value);
    };

    return (
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 300,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search size="large" placeholder="Search by job name, location or company..." enterButton />
      </AutoComplete>
    )
}

export default Search;