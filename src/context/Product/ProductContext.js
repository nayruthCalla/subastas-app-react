import { createContext, useContext, useState } from "react";
import axios from "../../utils/axios";

// Crear el contexto
const ProductContext = createContext();

// Crear componente de Provider, State

export const ProductProvider = ({ children }) => {
  // State
  const [productContex, setProductContex] = useState([]);
  const [timePrC, setTimePrC] = useState({});
  const [data, setData] = useState({});
  const [dis, setDis] = useState();

  const getProducts = async () => {
    try {
      const res = await axios.get("products");
      setProductContex(res.data);
      // console.log(res.data);
    } catch (e) {
      // console.log(e)
    }
  };
  return (
    <ProductContext.Provider
      value={{
        // states
        productContex,
        timePrC,
        data,
        dis,
        // functio
        setProductContex,
        setTimePrC,
        getProducts,
        setData,
        setDis,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Crear custom Hook que retorna el contexto, si hay
export const useStateProduct = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useStateAuth must be used within a AuthProvider");
  }

  return context;
};
