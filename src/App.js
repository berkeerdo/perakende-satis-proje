import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Products from "./Products";
import { CartProvider } from "react-use-cart";
import Navbar from "./components/Navbar";
import Wrapper from "./layouts/Wrapper";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Wrapper>
          <Products />
          <Cart />
        </Wrapper>
      </CartProvider>
    </>
  );
}

export default App;
