import { MdKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const clickHandler = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-[#fdfdff] rounded-xl p-4">
        <div
          className="flex justify-between cursor-pointer text-left"
          onClick={clickHandler}
        >
          <span className="font-bold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-lg">{<MdKeyboardArrowDown />}</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
