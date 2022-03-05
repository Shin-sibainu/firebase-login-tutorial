import React from "react";

import "./App.css";
import Home from "./components/Home";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <div className="App">
      <h1>Firebaseでログイン機能を実装しよう</h1>
      <Home />
    </div>
  );
}
