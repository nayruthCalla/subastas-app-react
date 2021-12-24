import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./conponents/App";

// Traer productProvider
import { ProductProvider } from "./context/Product/ProductContext";

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
