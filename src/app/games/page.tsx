"use client";

import { useState } from "react";
import Card from "../components/Card";
import BurgerMenu from "../burgermenu/page";

export default function Points() {
  const [open, setOpen] = useState<boolean>(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function clickhandler() {
    let points: string | null = localStorage.getItem("points");
    if (points == null) {
      points = "200";
    }

    let pointsNumber: Number = parseInt(points) + 50;
    let pointsString = "" + pointsNumber;
    localStorage.setItem("points", pointsString);
  }

  return (
    <div className="m-5 container">
      <BurgerMenu></BurgerMenu>

      <p className="text-center fs-1 fw-bold">Games</p>

      <a
        className="text-decoration-none"
        onClick={clickhandler}
        href="https://g.co/kgs/dyPrbKY"
      >
        <Card title="Pacman" imagePath="png/pagman.jpeg" footer="Spielen" />
      </a>
      <a
        className="text-decoration-none"
        onClick={clickhandler}
        href="https://g.co/kgs/EshPce7"
      >
        {" "}
        <Card
          title="Minesweeper"
          imagePath="png/minesweeper.png"
          footer="Spielen"
        />
      </a>
      <a
        className="text-decoration-none"
        onClick={clickhandler}
        href="https://www.gamesbasis.com/games/classic/tetris/"
      >
        {" "}
        <Card title="Tetris" imagePath="png/tetris.avif" footer="Spielen" />
      </a>
      <a
        className="text-decoration-none"
        onClick={clickhandler}
        href="https://supermario-game.com/de"
      >
        {" "}
        <Card
          title="Super Mario"
          imagePath="png/super_mario.jpg"
          footer="Spielen"
        />
      </a>
    </div>
  );
}
