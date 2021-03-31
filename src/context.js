import { useState, useEffect, createContext } from "react";
import allData from "./phonesData";

const Context = createContext();

function ContextProvider({ children }) {
  const [brands, setBrands] = useState([]);
  const [datas, setDatas] = useState([]);
  const [topHits, setTopHits] = useState([]);
  const [topLiked, setTopLiked] = useState([]);

  const urlFy = (string) => string.trim().toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    // simulating getting data from an api
    setTimeout(() => {
      setDatas(allData);
    }, 1000);
  }, []);

  useEffect(() => {
    setTopHits([...datas].sort((a, b) => b.hitsAvg - a.hitsAvg));
    setTopLiked([...datas].sort((a, b) => b.usersLike - a.usersLike));
    setBrands([...new Set(datas.map((item) => item.brand))]);
  }, [datas]);

  return (
    <Context.Provider value={{ datas, brands, topHits, topLiked, urlFy }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
