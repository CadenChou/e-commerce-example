import { Item } from "../utils/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }: { item: Item }) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="group relative h-64 w-52 border-[1.5px] border-[#EBEBEB] hover:border-design-gray-300 flex flex-col rounded-md overflow-hidden bg-white duration-300">
      <Link to={`/item-page/${item.id}`} className="h-full w-full">
        <div className="relative w-full h-3/4 overflow-hidden border-b-[1.5px] border-[#EBEBEB] bg-gradient-to-br from-tiffany-200 to-design-purple">
          {item.photo_refs != undefined && item.photo_refs.length > 0 && (
            <img
              className={
                "object-cover object-center h-full w-full duration-300 bg-[#F2F2F2] " +
                (!imageLoaded ? "opacity-0" : "opacity-100")
              }
              src={item.photo_refs[0]}
              alt={"Item" + item.name}
              onLoad={() => setImageLoaded(true)}
            />
          )}
        </div>
        <div className="mt-3 flex flex-row justify-between text-xs mx-0.5 px-3 pb-2">
          <p className="w-3/4 line-clamp-2">{item.name}</p>
          <p className="w-1/4 flex flex-row justify-end">${item.price}</p>
        </div>
      </Link>
      <Link
        to={`/item-page/${item.id}`}
        className="absolute group-hover:opacity-100 opacity-0 duration-300 group-hover:pointer-events-auto pointer-events-none top-1 right-1 w-fit h-fit"
      >
        {item.numItem && item.numItem > 0 ? (
          <FavoriteIcon fontSize="medium" className="text-white" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" className="text-white" />
        )}
      </Link>
    </div>
  );
}
