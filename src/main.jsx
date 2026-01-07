import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { WatchlistProvider } from "./context/WatchlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoritesProvider>
        <WatchlistProvider>
          <App />
        </WatchlistProvider>
      </FavoritesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
