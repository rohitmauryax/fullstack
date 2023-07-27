import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const hanndleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid Credentials");
    } else {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      router.push("/");
    }
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={hanndleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={data.password}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link href="/screens/Signup" className="m-3 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </div>
  );
}
