import { Inter } from "next/font/google";
import Home from "./screens/Home";
import { CartProvider } from "../components/ContextReducer";
//import "../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}
