"use client";

import { useState } from "react";
import style from "../page.module.css";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { Button, Container, Row } from "react-bootstrap";

export default function BurgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <>
      <div id={style.burgerMenu}>
        <IconMenu2 stroke={2} size={30} onClick={toggleMenu} />
        {open && (
          <Container>
            <Row>
              <Button variant="dark" className="w-100 mt-2" href="/">
                Home
              </Button>
            </Row>
            <Row>
              <Button variant="dark" className="w-100 mt-2" href="/login">
                Anmelden
              </Button>
            </Row>
            <Row>
              <Button variant="dark" className="w-100 mt-2" href="/addAccount">
                Registrieren
              </Button>
            </Row>
            <Row>
              <Button variant="dark" className="w-100 mt-2" href="/games">
                Spiele
              </Button>
            </Row>
            <Row>
              <Button variant="dark" className="w-100 mt-2" href="/profile">
                Profil
              </Button>
            </Row>
          </Container>
        )}
      </div>
    </>
  );
}
