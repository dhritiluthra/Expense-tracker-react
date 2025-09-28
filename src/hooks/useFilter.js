import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useFilter = (datalist, callbackFunc) => {
  const [query, setQuery] = useLocalStorage("FilterQuery", "");

  const filteredData = datalist.filter((data) => {
    console.log(callbackFunc(data));
    if (callbackFunc(data).toLowerCase().includes(query?.toLowerCase())) {
      return true;
    }
    return false;
  });

  return [filteredData, setQuery , query];
};
