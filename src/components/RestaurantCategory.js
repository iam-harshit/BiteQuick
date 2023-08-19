import { MdKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";

//This component called uncontrolled component. Why?
//Because this component have own state and not controlled by it's parent.
//Example -> We want feature in accordion if I click first accordion then next all the accordion is collapsed.
//Or if I click on second accordion title then first will collapsed. This funcationality not build if children of parent,
//controlled the state.

//That's I want to lifting the state up, means I want to give power of collapsed or expand the accordion to the parent not the children.
//If parent controlled the children that will be called controlled component.

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);

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
