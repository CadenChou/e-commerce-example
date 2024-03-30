import React, { useState } from "react";
import { useAtom } from "jotai";
import { itemsAtom } from "../utils/atoms";
import { Item } from "../utils/types";
import { toast } from "react-toastify";

export default function Cart() {
  const [items, setItems] = useAtom(itemsAtom);

  // Function to increment item quantity
  const incrementQuantity = (id: string) => {
    setItems((prevItems) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        numItem: (prevItems[id].numItem || 0) + 1,
      },
    }));
  };

  // Function to decrement item quantity
  const decrementQuantity = (id: string) => {
    setItems((prevItems) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        numItem: Math.max((prevItems[id].numItem || 0) - 1, 1),
      },
    }));
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => ({
      ...prevItems,
      [id]: {
        ...prevItems[id],
        numItem: 0,
      },
    }));
    toast.info("Item removed from cart");
  };

  // Filter items with numItem >= 1
  const cartItems = Object.values(items).filter(
    (item) => item.numItem && item.numItem >= 1
  );

  return (
    <div className="w-[63%] my-10 pb-10">
      <div className="flex flex-row justify-between mb-5">
        <h1 className="text-4xl font-semibold mb-4">Cart</h1>
        <button className=" max-h-12 bg-gray-700 hover:bg-gray-800 text-white font-medium px-4 rounded transition duration-200 ease-in-out">
          Checkout
        </button>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="border-b pb-7 mb-7 justify-between">
          <div className="flex items-center justify-between">
            <div className="w-1/4">
              {item.photo_refs && (
                <img
                  className="h-48"
                  src={item.photo_refs[0]}
                  alt={item.name}
                />
              )}
            </div>
            <div className="w-[35%] px-4 space-y-3">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-lg">{item.description}</p>
              <p className="text-lg">Price: ${item.price}</p>
              <div className="flex items-center">
                <button
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-l"
                  onClick={() => decrementQuantity(item.id ? item.id : "")}
                >
                  -
                </button>
                <span className="px-3 py-1 bg-gray-200 text-gray-700">
                  {item.numItem}
                </span>
                <button
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-r"
                  onClick={() => incrementQuantity(item.id ? item.id : "")}
                >
                  +
                </button>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => removeFromCart(item.id ? item.id : "")}
                  className=" bg-gray-700 hover:bg-gray-800 text-white font-medium py-[5px] px-4 rounded transition duration-200 ease-in-out"
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
