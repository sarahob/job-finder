'use client'

import { AutoComplete, Input } from 'antd';
import {useState} from 'react';

const Search = ({data}) => {
    const [options, setOptions] = useState([]);
    

console.log('data',data)
    // const searchResult = (value) => {
    //     return data.filter(({job_name, company_name, country}) => {
    //         return job_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 
    //         ||
    //         company_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    //         .toLowerCase().indexOf(value.toLowerCase()) !== -1;
    //     }).map((({job_name, company, country}) => {
    //       if (!null)  {
    //         return {label: job_name, value: job_name}} else {
    //           return {
    //           label: empty, value: "No matching job!"}
    //           }
    //     }));

    // }

    const searchResult = (value) => {
      return data.filter(({job_name, country}) => {
        return job_name.toLowerCase().includes(value.toLowerCase()) ||
        country.toLowerCase().includes(value.toLowerCase()) }).map(({job_name, country}) => {
          return ({label: job_name, value: job_name})})}

    const handleSearch = (value) => {
        console.log('value',value);
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
          width: 500,
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