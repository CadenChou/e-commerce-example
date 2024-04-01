import React from "react";
import { categoryAtom, categoriesAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import { isLoadingAtom } from "../utils/atoms";

export default function CategoryList() {
  // This category is a global state category (accessible to all components)
  const [category, setCategory] = useAtom(categoryAtom);
  const [categories, setCategories] = useAtom(categoriesAtom);

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
