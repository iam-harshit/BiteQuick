import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//This below code for helps the optimising the react app
//From this code we are load the grocery component when anyone click on the link or open the url.
//Means on-demand or dynamic import.
//We can also called lazy loading, dynamic import, code spiliting, chunking, dynamic bundling, on-demand loading

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Harshit Kumar",
    };
    setUserName(data.name);
  }, []);

  //If we're wrap with our root component with Context_Name.Provider. So now the value of the context is display
  //all over the project where it is use.

  return (
    <Provider store={appStore}>
      {/* This value use for all over the project */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* This value use for only header part */}
          {/* <UserContext.Provider value={{loggedInUser: "Harshit Kumar Saxena"}}> */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", //This ':' makes our route dynamic
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
