import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// @ts-ignore
import { useQuery } from "react-query";

import Drawer from "@mui/material/Drawer";
import { LinearProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

// styles
import { Wrapper } from "./App.styles";

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(error);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
