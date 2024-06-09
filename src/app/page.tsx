"use client";

import { useState } from "react";
import Card from "./components/Card";
import BurgerMenu from "./burgermenu/page";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [points, setPoints] = useState(200);

  function toggleMenu() {
    setOpen(!open);
  }

  function handleClick(value: number) {
    let pointsString = "" + (points + value)
    localStorage.setItem("points", pointsString)
    setPoints(points + value);
  }

  return (
    <div>
      <div>
        <BurgerMenu></BurgerMenu>

        <p>HOME</p>

        <div>
          <button onClick={() => handleClick(1)}>+1 Coin</button>
          <button onClick={() => handleClick(-1)}>-1 Coin</button>
          <p>{points}</p>
        </div>

        <Card title="Spiel des Tages" imagePath="svg/logoNoBackground.svg" />
        <Card title="Beliebte Spiele" imagePath="svg/logoNoBackground.svg" />
        <Card title="Punkte einlösen" imagePath="png/cinet_coin.png" />
        <Card
          title="So funktioniert Cinet"
          imagePath="svg/logoNoBackground.svg"
        />
      </div>

      <div>
        <div>
          <p>Punkte Einlösen</p>

          <Card title="Popcorn Gutschein" points="100" footer="Punkte" />
          <Card title="Kino Gutschein" points="500" footer="Punkte" />
          <Card title="Getränk" points="70" footer="Punkte" />
          <Card title="Snack nach Wahl" points="150" footer="Punkte" />
        </div>
      </div>
    </div>
  );
}
