import { useEffect, useState } from "react";
import expenseData from "../expenseData.js";

export const useLocalStorage = (key, initialData) => {
  const [data, setData] = useState(() => {
    const existingData = localStorage.getItem(key);
    if (existingData) return JSON.parse(existingData);
    localStorage.setItem(key, JSON.stringify(initialData));
    return initialData;
  });

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
      setData(newData(data));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
      setData(newData);
    }
  };

  return [data, updateLocalStorage];
};
