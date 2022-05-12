import { useEffect, useState } from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [selectedCoin, setSelectedCoin] = useState("");
    useEffect( () => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
        .then((Response)=> Response.json())
        .then(json => 
            // console.log(json));
            setCoins(json));
            setLoading(false);
    } , [])

    const onChangeMoney = (event) => {
        setMoney(event.target.value);
        console.log(event.target.value);
    }
    const onChangeCoin = (event) => {
        setSelectedCoin(event.target.value);
        console.log(event.target.value);
        // console.log("change!")
    }

    return (
    <div>
        <h1> The Coins{loading ? "" : `(${coins.length})`}</h1>
        {loading ? (
            <strong>
                Loading ... 
            </strong> 
            ):(
            <div>
                <input value={money} placeholder="please write down the amount of dollars you want " onChange={onChangeMoney}></input>
            <select onChange={onChangeCoin}>
                {coins.map((coin) => (
                    <option value = {coin.quotes.USD.price} key={coin.name} > 
                        {coin.name} {coin.symbol} : {coin.quotes.USD.price} 
                    </option>
                ))}
            </select>
                <div> You Can Buy {money/selectedCoin}</div>
            </div>
            )
        }
    </div>
    )
}


export default App;
