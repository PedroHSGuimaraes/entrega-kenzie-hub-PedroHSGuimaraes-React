import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.jsx";
import { TechProvider } from "./providers/TechContext.jsx";
import { ModalProvider } from "./Components/Modals/ModalContext/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </TechProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
