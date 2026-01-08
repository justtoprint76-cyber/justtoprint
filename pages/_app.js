import "../styles/globals.css";
import { CartProvider } from "../components/CartContext";
import CartDrawer from "../components/CartDrawer";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <CartDrawer />
      <Component {...pageProps} />
    </CartProvider>
  );
}
