import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((res) => res.json())
      .then((data) => setCoins(data));
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(2)}{" "}
              USD
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
