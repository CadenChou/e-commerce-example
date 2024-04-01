import ItemList from "./ItemList";
import CategoryList from "./CategoryList";
import SwiperBanner from "./SwiperBanner";

export default function HomeScreen() {
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <SwiperBanner />
      <div className="my-10 w-[95%]">
        <CategoryList />
      </div>
      <div className="w-[80%] flex flex-row items-center">
        <ItemList />
      </div>
    </div>
  );
}
