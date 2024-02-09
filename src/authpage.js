// src/AuthPage.js
import React, { useState } from "react";
import axios from "axios";
import { useHistory,redirect } from "react-router-dom";
import "./";
import qs from "qs";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const datat = {
        client_id: "frontend",
        username: username,
        password: password,
        grant_type: "password",
      };
      const params = new URLSearchParams();
      params.append("client_id", "frontend");
      params.append("username", username);
      params.append("password", password);
      params.append("grant_type", "password");
      

      const response = await axios.post(
        "https://auth.mind2codes.com/auth/realms/defis-devs/protocol/openid-connect/token",params
      );

      const { access_token } = response.data;
      setToken(access_token);
      document.location.href="/dashboard"; 
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <div className=".auth-container">
      <h1>Page d'authentification</h1>
      <div className=".input-container">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Se connecter</button>
      
    </div>
  );
};

export default AuthPage;
