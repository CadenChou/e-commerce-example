import React, { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Item, ItemDict } from "./utils/types";
import { itemsAtom, categoriesAtom, isLoadingAtom } from "./utils/atoms";
import { useAtom } from "jotai";
import HomeScreen from "./components/HomeScreen";
import { Routes, Route } from "react-router-dom";
import ItemPage from "./components/ItemPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useAtom(itemsAtom);
  const [categories, setCategories] = useAtom(categoriesAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  useEffect(() => {
    /**
     * Fetch data from API endpoint and store in atom state
     */
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        // Store items in a mapping from id to Item for easier access
        const transformedItems: ItemDict = {};

        data.products.forEach((itemData: any) => {
          const itemId: number = itemData.id;
          const itemIdStr: string = itemId.toString();
          const transformedItem: Item = {
            id: itemIdStr,
            name: itemData.title,
            description: itemData.description,
            price: itemData.price,
            category: itemData.category,
            photo_refs: itemData.images,
            numItem: 0,
          };

          transformedItems[itemData.id] = transformedItem;
        });

        // Update the itemsAtom state with the transformed items
        setItems(transformedItems);
      } catch (e) {
        console.log("error fetching data, ", e);
      } finally {
        setIsLoading(false);
      }
    };

    /**
     * Fetch the categories of the products form API endpoint
     */
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      // Slice (0,4) to get 4 categories (just to simplify the website)
      const truncatedCategories = data.slice(0, 4);
      setCategories(truncatedCategories);
    };
    fetchData();
    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div>loading...</div>
      </div>
    );
  }

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
