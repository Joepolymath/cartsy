import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
// @ts-ignore
import { useQuery } from "react-query";

import Drawer from "@mui/material/Drawer";
import { LinearProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

// styles
import { StyledButton, Wrapper } from "./App.styles";
import Item from "./components/Item";

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount?: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  // const result = useQuery<CartItemType[]>("products", () =>
  //   axios.get("https://fakestoreapi.com/products")
  // );
  // // console.log(data, isLoading, error);
  // console.log(result);

  const [items, setItems] = useState<CartItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCartOpen, setIsCartOpen] = useState(false as boolean);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  const getTotalItems = (items: CartItemType[]) => null;
  // items.reduce((ack: number, item: CartItemType) => ack + item, 0);
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        Cart details will be here...
      </Drawer>

      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={5} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {items?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
