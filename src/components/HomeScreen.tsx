import React from "react";
import { itemsAtom, categoryAtom } from "../utils/atoms";
import { useAtom } from "jotai";
import ItemList from "./ItemList";
import CategoryList from "./CategoryList";
import SwiperBanner from "./SwiperBanner";

export default function HomeScreen() {
  const [items, setItems] = useAtom(itemsAtom);
  const [category, setCategory] = useAtom(categoryAtom);
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <SwiperBanner />
      <div className="my-10 w-[95%]">
        <CategoryList />
      </div>
      <div className="w-[80%] flex flex-row items-center">
        <ItemList categoryName={category} items={items} />
      </div>
      {/* You can now use the items state in your components */}
    </div>
  );
}
