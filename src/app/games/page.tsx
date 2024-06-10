"use client";

import { useState } from "react";
import Card from "../components/Card";
import BurgerMenu from "../burgermenu/page";
import { Container, Row, Col } from "react-bootstrap";

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

      <Container>
        <Row>
          <Col>
            <a
              className="text-decoration-none"
              onClick={clickhandler}
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
              className="text-decoration-none"
              onClick={clickhandler}
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
              className="text-decoration-none"
              onClick={clickhandler}
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
              className="text-decoration-none"
              onClick={clickhandler}
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
