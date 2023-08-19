import { useEffect, useState } from "react";

const UserFunc = (props) => {
    const {name, location} = props;
    const [count, setCount] = useState(0);


    /**
     * Is this setInterval() in useEffect() still works when I leave the page?
     * Yes, it still works when I leave the page.
     * 
     * How can I stop this? when I leave the page I don't want this setInterval run on that page.
     * In useEffect() if we write return() => {} it means we're unmount the component. By using this we can stop 
     * the setInterval().
     */


    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hello");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Unmount the component");
        }

    }, []);

    return(
        <div>
            <h2>Count = {count}</h2>
            <button onClick={() => {setCount(count + 1)}}>Count Increase</button>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
        </div>
    );
}

export default UserFunc;