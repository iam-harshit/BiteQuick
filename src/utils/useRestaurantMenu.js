import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const[resInfo, setResInfo] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            const output = await response.json();
            setResInfo(output.data);

        } catch (error) {
            console.log("Something went wrong");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return resInfo;
}

export default useRestaurantMenu;