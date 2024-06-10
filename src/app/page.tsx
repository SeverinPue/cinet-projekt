"use client";

import { useState } from "react";
import Card from "./components/Card";
import BurgerMenu from "./burgermenu/page";
import { Col, Container, Row } from "react-bootstrap";

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

  localStorage.setItem("points", points + "");

  function toggleMenu() {
    setOpen(!open);
  }

  function handleClick(value: number) {
    let pointsString = "" + (points + value);
    localStorage.setItem("points", pointsString);
    setPoints(points + value);
  }

  function clickhandler() {
    alert(
      "Man kann mit Hilfe von Punkten, die man bei dieser Kino-Seite verdienen kann, " +
        "verschiedene Sachen kaufen. Zum Beispiel können diese Punkte gegen Snacks oder Kino-Tickets eingetauscht werden."
    );
  }

  return (
    <div className="container m-5 d-flex flex-column align-items-center">
      <div>
        <BurgerMenu></BurgerMenu>
        <p className="display-1 text-center mt-5 fw-bold">HOME</p>

        <Container className="d-flex flex-column align-items-center">
          <Row>
            <Col>
              <Card
                title="Spiel des Tages"
                imagePath="generalImages/spiel_des_tages.png"
              />
            </Col>
            <Col>
              <Card
                title="Beliebte Spiele"
                imagePath="generalImages/belibte_spiele.jpg"
              />
            </Col>
          </Row>
          <Row >
            <Col onClick={clickhandler}>
              <Card
                title="So funktioniert Cinet"
                imagePath="generalImages/so_funktioniert_cinet.jpeg"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-3 container">
        <p className="fs-2 mt-5 text-center fw-bold">Punkte Einlösen</p>
        <p className="text-center">Du hast <strong>{points}</strong> Punkte.</p>
        
        <Container>
          <Row>
            <Col onClick={() => handleClick(-100)}>
              <Card
                imagePath="generalImages/popcorn.jpg"
                title="Popcorn Gutschein"
                points="100"
                footer="Punkte"
              />
            </Col>
            <Col onClick={() => handleClick(-500)}>
              <Card
                imagePath="generalImages/gutschein.jpg"
                title="Kino Gutschein"
                points="500"
                footer="Punkte"
              />
            </Col>
          </Row>
          <Row>
            <Col onClick={() => handleClick(-70)}>
              <Card
                imagePath="generalImages/getraenk.jpg"
                title="Getränk"
                points="70"
                footer="Punkte"
              />
            </Col>
            <Col onClick={() => handleClick(-150)}>
              <Card
                imagePath="generalImages/popcorn2.jpg"
                title="Snack nach Wahl"
                points="150"
                footer="Punkte"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
