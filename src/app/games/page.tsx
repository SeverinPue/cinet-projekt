"use client";

import { useState } from "react";
import style from "../page.module.css";
import { IconMenu2 } from "@tabler/icons-react";
import Card from "../components/Card";

export default function Points() {
  const [open, setOpen] = useState<boolean>(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function clickhandler() {

    
  }

  return (
    <div>
      <div>
        <div id={style.burgerMenu}>
          <IconMenu2 stroke={2} onClick={toggleMenu} />

          {open && <p></p>}
        </div>
        <p>Games</p>

        <a onClick={clickhandler} href="https://g.co/kgs/dyPrbKY">
          <Card title="Pacman" imagePath="png/pagman.jpeg" footer="Spielen" />
        </a>
        <a onClick={clickhandler} href="https://g.co/kgs/EshPce7">
          {" "}
          <Card
            title="Minesweeper"
            imagePath="png/minesweeper.png"
            footer="Spielen"
          />
        </a>
        <a onClick={clickhandler} href="https://www.gamesbasis.com/games/classic/tetris/">
          {" "}
          <Card title="Tetris" imagePath="png/tetris.avif" footer="Spielen" />
        </a>
        <a onClick={clickhandler} href="https://supermario-game.com/de">
          {" "}
          <Card
            title="Super Mario"
            imagePath="png/super_mario.jpg"
            footer="Spielen"
          />
        </a>
      </div>
    </div>
  );
}
