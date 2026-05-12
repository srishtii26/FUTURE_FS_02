import {
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

export default function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await axios.post(
            "https://future-fs-02-crm-backend.onrender.com/api/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "token",
          res.data.token
        );

        navigate("/");

      } catch (error) {

        console.log(error);

        alert(
          "Invalid credentials"
        );

      }
    };

  return (

    <div className="auth-page">

      <div className="auth-container">

        <h1>
          CRM Login
        </h1>

        <p>
          Welcome back to CRM Pro
        </p>

        <form
          onSubmit={handleLogin}
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );
}