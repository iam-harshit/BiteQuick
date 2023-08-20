import grocery_mart from "../asset/grocery-mart.png";

const Grocery = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center ">
        <img src={grocery_mart} alt="" />
        <h2 className="font-bold text-3xl pb-7">
          Welcome to our grocery store
        </h2>
      </div>
    </div>
  );
};

export default Grocery;
