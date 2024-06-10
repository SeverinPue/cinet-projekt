"use client";

import { useState } from "react";
import Card from "../components/Card";
import BurgerMenu from "../burgermenu/page";
import { Container, Row, Col } from "react-bootstrap";

export default function Points() {
  const [open, setOpen] = useState<boolean>(false);

  let pointsOrNull = localStorage.getItem("points");
  let pointsInt;
  if (pointsOrNull == null) {
    pointsInt = 200;
  } else {
    pointsInt = parseInt(pointsOrNull);
  }
  const [points, setPoints] = useState(pointsInt);

  function toggleMenu() {
    setOpen(!open);
  }

  function handleClick(value: number) {
    let pointsString = "" + (points + value);
    localStorage.setItem("points", pointsString);
    setPoints(points + value);
  }

  return (
    <div className="m-5 container">
      <BurgerMenu></BurgerMenu>

      <p className="text-center fs-1 fw-bold">Games</p>
      <p className="text-center">Du hast <strong>{points}</strong> Punkte.</p>

      <Container>
        <Row>
          <Col>
            <a
              target="_blank"
              className="text-decoration-none"
              onClick={() => handleClick(50)}
              href="https://g.co/kgs/dyPrbKY"
            >
              <Card
                title="Pacman"
                imagePath="generalImages/pagman.jpeg"
                footer="Spielen"
              />
            </a>
          </Col>
          <Col>
            <a
              target="_blank"
              className="text-decoration-none"
              onClick={() => handleClick(50)}
              href="https://g.co/kgs/EshPce7"
            >
              {" "}
              <Card
                title="Minesweeper"
                imagePath="generalImages/minesweeper.png"
                footer="Spielen"
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              target="_blank"
              className="text-decoration-none"
              onClick={() => handleClick(50)}
              href="https://www.gamesbasis.com/games/classic/tetris/"
            >
              {" "}
              <Card
                title="Tetris"
                imagePath="generalImages/tetris.avif"
                footer="Spielen"
              />
            </a>
          </Col>
          <Col>
            <a
              target="_blank"
              className="text-decoration-none"
              onClick={() => handleClick(50)}
              href="https://supermario-game.com/de"
            >
              {" "}
              <Card
                title="Super Mario"
                imagePath="generalImages/super_mario.jpg"
                footer="Spielen"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
