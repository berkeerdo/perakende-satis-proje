import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Home from "./Home";
import { CartProvider } from "react-use-cart";
import Layout from "./layouts/Layout";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Layout>
          <Home />
          <Cart />
        </Layout>
      </CartProvider>
    </>
  );
}

export default App;
