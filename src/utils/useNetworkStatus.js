import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [netwrokStatus, setNetworkStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });

    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });
  }, []);

  return netwrokStatus;
};

export default useNetworkStatus;
