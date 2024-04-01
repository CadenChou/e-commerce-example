import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemsAtom } from "../utils/atoms";
import { Item } from "../utils/types";
import { toast } from "react-toastify";

export default function ItemPage() {
  const { id } = useParams();
  const [items, setItems] = useAtom(itemsAtom);
  const selectedItem = id ? items[id] : undefined;

  const [itemCount, setItemCount] = useState(
    selectedItem && selectedItem.numItem ? selectedItem.numItem : 0
  );

  const incrementNumber = () => {
    setItemCount((prevNumber) => prevNumber + 1);
  };

  const decrementNumber = () => {
    if (itemCount > 0) {
      setItemCount((prevNumber) => prevNumber - 1);
    }
  };

  /**
   * Updated the number of items for this item to reflect
   * the number of items the users selected
   */
  const addToCart = () => {
    if (selectedItem && selectedItem.id) {
      const updatedItems = { ...items };
      updatedItems[selectedItem.id] = {
        ...selectedItem,
        numItem: itemCount,
      };
      setItems(updatedItems);
      toast.success("Item has been added to cart");
    } else {
      toast.error("Error adding item to cart");
    }
  };

  if (!selectedItem) {
    return (
      <div className="flex justify-center items-center">
        <p>Item not found</p>
      </div>
    );
  }
  return (
    <div className="w-full h-[80vh] flex flex-row items-center justify-center">
      <div className="w-[50%] flex justify-center">
        {selectedItem.photo_refs && (
          <img className=" h-96" src={selectedItem.photo_refs[0]} />
        )}
      </div>
      <div className="w-[50%] h-full flex flex-col items-center justify-center pr-32 space-y-5">
        <h1 className="text-3xl font-semibold">{selectedItem.name}</h1>
        <p className="text-xl">{selectedItem.description}</p>
        <p className="text-xl">Price: ${selectedItem.price}</p>
        <div className="flex items-center">
          <button
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-l text-lg"
            onClick={decrementNumber}
          >
            -
          </button>
          <span className="px-6 py-2 bg-gray-200 text-gray-700 text-lg">
            {itemCount}
          </span>
          <button
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-r text-lg"
            onClick={incrementNumber}
          >
            +
          </button>
        </div>
        <div className="pt-8">
          {" "}
          <button
            onClick={addToCart}
            className=" bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition duration-200 ease-in-out"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
