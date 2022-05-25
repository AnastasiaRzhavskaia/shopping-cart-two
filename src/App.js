import { useState } from "react";
import Cart from "./Components/Cart";
import Nav from "./Components/Nav";
import ProductCard from "./Components/ProductCard";
import HomeScreen from "./screens/HomeScreen";

function App() {

    return (
    <div className="App">
      <Nav/>
      <Cart />
      <HomeScreen />
    </div>
)
}

export default App;
