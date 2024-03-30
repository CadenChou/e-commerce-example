import { useEffect, useState } from "react";
import { Item, ItemDict } from "../utils/types";
import ItemCard from "./ItemCard";

export interface CategoryWrapProps {
  categoryName: string;
  items: ItemDict;
}

export default function ItemList({ categoryName, items }: CategoryWrapProps) {
  const [numEmptyItems, setNumEmptyItems] = useState<number>(0);
  const [windowDim, setWindowDim] = useState<{ width: number; height: number }>(
    { width: 0, height: 0 }
  );
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  function getNumItemsPerRow(width: number) {
    if (width >= 1600) {
      return 5;
    }
    if (width >= 1300) {
      return 4;
    }
    return 3;
  }

  function handleResize() {
    setWindowDim({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  function resizeRows() {
    const numItemsPerRow = getNumItemsPerRow(windowDim.width);
    const leftoverItems = filteredItems.length % numItemsPerRow;
    if (leftoverItems > 0) {
      setNumEmptyItems(numItemsPerRow - leftoverItems);
    } else {
      setNumEmptyItems(0);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Filter items to those in given category
    const filtered: Item[] = Object.values(items).filter(
      (item: Item) => item.category === categoryName
    );
    setFilteredItems(filtered);
    resizeRows(); // Call resizeRows after setting filteredItems
  }, [categoryName, items]);

  useEffect(() => {
    resizeRows();
  }, [filteredItems, windowDim]);

  return (
    <div className="flex flex-col mb-3 h-full">
      <div className="py-3 xl:ml-3 font-bold text-lg mx-auto">
        {categoryName}
      </div>
      {filteredItems.length > 0 ? (
        <div className="w-full mx-auto pb-10">
          <div className="flex flex-row flex-wrap justify-between gap-16">
            {filteredItems.map((item: Item, index: number) => (
              <div key={index}>
                <ItemCard item={item} />
              </div>
            ))}
            {Array.from(Array(numEmptyItems)).map((_, index: number) => (
              <div key={index} className="h-64 w-52"></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-4/5 flex flex-col justify-center items-center">
          <p className="text-xl text-design-font-light">0 Items</p>
        </div>
      )}
    </div>
  );
}
