import React, { useState } from "react";
import style from "./style.module.css";
import { Container, Link } from "@mui/material";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <div className={style.border}>
        <h1 className={style.title}>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.caixas}>
            <label className={style.label}>Email:</label>
            <input
              className={style.input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.caixas}>
            <label className={style.label}>Senha:</label>
            <input
              className={style.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={style.button} type="submit">
              Entrar
            </button>
          </div>
        </form>
        <span style={{ marginTop: "0.8em" }}>Ainda não possui uma Conta?</span>
        <Link
          href="/register"
          style={{
            cursor: "pointer",
            color: "#168990",
            textDecoration: "none",
          }}
        >
          Cadastre-se
        </Link>
      </div>
    </Container>
  );
};
