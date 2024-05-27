import { useState } from "react";

export default function Coins() {
    const [coins, setCoins] = useState(200)

    return (
        <p>
            {coins}
        </p>
    );
}