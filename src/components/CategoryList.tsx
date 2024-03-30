import React from "react";
import { categories } from "../utils/types";
import { categoryAtom } from "../utils/atoms";
import { useAtom } from "jotai";

export default function CategoryList() {
  const [category, setCategory] = useAtom(categoryAtom);
  return (
    <div className="w-full flex flex-row justify-around">
      {categories.map((local_category) => {
        return (
          <button
            className=" bg-gray-700 hover:bg-gray-800 text-white font-medium py-[5px] px-4 rounded transition duration-200 ease-in-out"
            onClick={() => {
              setCategory(local_category);
            }}
          >
            {local_category}
          </button>
        );
      })}
    </div>
  );
}
