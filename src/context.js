import { useState, useEffect, createContext } from "react";
import allData from "./phonesData";

const Context = createContext();

function ContextProvider({ children }) {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    // simulating getting data from an api
    setTimeout(() => {
      setDatas(allData);
    }, 1000);
  }, []);

  return <Context.Provider value={{ datas }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
