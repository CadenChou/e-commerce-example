import React, { useEffect } from "react";
import logo from "./logo.svg";
import SweaterPic from "./assets/sweater.jpg";
import ShirtPic from "./assets/shirt.jpg";
import PantsPic from "./assets/pants.jpg";
import SuitPic from "./assets/suit.jpg";
import "./App.css";
import Navbar from "./components/Navbar";
import SwiperBanner from "./components/SwiperBanner";
import { Item, ItemDict, categories } from "./utils/types";
import { itemsAtom, categoryAtom } from "./utils/atoms";
import { useAtom } from "jotai";
import HomeScreen from "./components/HomeScreen";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useAtom(itemsAtom);
  const [category, setCategory] = useAtom(categoryAtom);

  const categoryImageMapping: Record<string, string> = {
    Suits: SuitPic,
    "Dress Shirts": ShirtPic,
    "Chinos & Casual Pants": PantsPic,
    Sweaters: SweaterPic,
  };

  useEffect(() => {
    const initializeItems = () => {
      const initializedItems: ItemDict = {};
      categories.forEach((category) => {
        // Example: Generate some dummy items for each category
        const numItemsToCreate = Math.floor(Math.random() * 5 + 5);
        const categoryImage = categoryImageMapping[category];
        for (let i = 0; i < numItemsToCreate; i++) {
          const itemId = `${category}-${i}`;
          initializedItems[itemId] = {
            id: itemId,
            photo_refs: [categoryImage],
            name: `${category} ${i}`,
            description: `Description for ${category} ${i}. Hand-crafted in Italy`,
            category: category,
            price: Math.trunc(Math.random() * 100 + 50),
            numItem: 0,
          };
        }
      });
      setItems(initializedItems);
    };
    initializeItems();
    console.log(items);
  }, []);

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/item-page/:id" element={<ItemPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
