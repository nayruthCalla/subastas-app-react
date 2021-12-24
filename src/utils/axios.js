import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default clienteAxios;
