// useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())  // Corrected .json() invocation
      .then((res) => setData(res[currency]))
      .catch((error) => console.log(error))  // Added error handling

  }, [currency]);

  return data
}

export default useCurrencyInfo;
