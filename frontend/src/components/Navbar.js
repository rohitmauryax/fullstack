import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "../Modal";
import Cart from "./Cart";
import { useCart } from "./ContextReducer";
import { Badge } from "@mui/material";

export default function Navbar() {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const router = useRouter();
  const [item, setItem] = useState("");
  useEffect(() => {
    setItem(localStorage.getItem("authToken"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/screens/Home");
  };
  console.log(data);
  console.log(item);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <a className="navbar-brand fs-1 fst-italic" href="/">
            FoodHub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-1">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              {item ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    href={"/screens/MyOrder"}
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!item ? (
              <div className="d-flex">
                <Link
                  className="btn bg-white text-success mx-1"
                  href={"/screens/Login"}
                >
                  Login
                </Link>

                <Link
                  className="btn bg-white text-success mx-1"
                  href={"/screens/Signup"}
                >
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-2"
                  onClick={() => {
                    setCartView(true);
                  }}
                >
                  <Badge color="secondary" badgeContent={data?.length}>
                    <ShoppingCartIcon />
                  </Badge>
                  {"  "}
                  Cart
                  {/* <Badge pill bg="danger">
                    {data?.length !== undefined ? data.length : ""}
                  </Badge> */}
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : (
                  ""
                )}
                <button
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
