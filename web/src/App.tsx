import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import Routers from "./routes";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routers />
    </>
  );
}

export default App;
