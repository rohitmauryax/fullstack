import "@/styles/globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);
  return <Component {...pageProps} />;
}
