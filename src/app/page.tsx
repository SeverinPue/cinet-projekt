"use client";

import { useState } from "react";
import Card from "./components/Card";
import BurgerMenu from "./burgermenu/page";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  let pointsOrNull = localStorage.getItem("points");
  let pointsInt;
  if (pointsOrNull == null) {
    pointsInt = 200;
  } else {
    pointsInt = parseInt(pointsOrNull);
  }
  const [points, setPoints] = useState(pointsInt);

  localStorage.setItem("points", points + "")
  
  function toggleMenu() {
    setOpen(!open);
  }

  function handleClick(value: number) {
    let pointsString = "" + (points + value);
    localStorage.setItem("points", pointsString);
    setPoints(points + value);
  }

  return (
    <div className="container m-5">
      <div>
        <BurgerMenu></BurgerMenu>
        <p className="display-1 text-center mt-5 fw-bold">HOME</p>

        <div>
          <button onClick={() => handleClick(1)}>+1 Coin</button>
          <button onClick={() => handleClick(-1)}>-1 Coin</button>
          <p>{points}</p>
        </div>

        <Card title="Spiel des Tages" imagePath="svg/logoNoBackground.svg" />
        <Card title="Beliebte Spiele" imagePath="svg/logoNoBackground.svg" />
        <Card
          title="So funktioniert Cinet"
          imagePath="svg/logoNoBackground.svg"
        />
      </div>

      <div className="pt-3">
        <p className="fs-2 mt-5 text-center fw-bold">Punkte Einlösen</p>


        <Card imagePath='generalImages/popcorn.jpg' title="Popcorn Gutschein" points="100" footer="Punkte" />
        <Card imagePath="generalImages/gutschein.jpg" title="Kino Gutschein" points="500" footer="Punkte" />
        <Card imagePath="generalImages/getraenk.jpg" title="Getränk" points="70" footer="Punkte" />
        <Card imagePath="generalImages/popcorn2.jpg" title="Snack nach Wahl" points="150" footer="Punkte" />
      </div>
    </div>
  );
}
