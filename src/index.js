import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './css/index.css'
import App from './conponents/App'
import store from './store'

// Traer productProvider
// import { ProductProvider } from "./context/Product/ProductContext";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
