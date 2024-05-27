import Coins from "../components/Coins";

export default function handleCoin() {
    function handleClick(value: number) {
        
    }

    return(
        <div>
            <button onClick={() => handleClick(1)}>+1 Coin</button>
            <button onClick={() => handleClick(-1)}>-1 Coin</button>
            <Coins></Coins>
        </div>
    );
}