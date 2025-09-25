import { useState } from "react";

export const useFilter = (datalist , callbackFunc) => {

  const [query, setQuery] =  useState('');

  const filteredData =  datalist.filter((data) => {
    console.log(callbackFunc(data));
    if ( callbackFunc(data).toLowerCase().includes(query?.toLowerCase())) {
      return true;
    }
    return false;
  })

  return [filteredData,setQuery];
};
