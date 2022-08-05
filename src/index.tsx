import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// @ts-ignore
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
