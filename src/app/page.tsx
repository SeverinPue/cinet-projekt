'use client'

import { useState } from 'react';
import style from './page.module.css'
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import Card from './components/Card';

export default function Home() {
  const [open, setOpen] = useState<boolean>(false)

  function toggleMenu() {
    setOpen(!open)
  }

  return (
    <div>
      <div>
        <div id={style.burgerMenu} >
          <IconMenu2 stroke={2} onClick={toggleMenu} />

          { open &&
            <div>
              <Link href={"/login"}>Anmelden</Link>
              <Link href={"/addAccount"}>Registrieren</Link>
            </div>
          }
        </div>
        <p>HOME</p>

        <Card title='Spiel des Tages' imagePath='svg/logoNoBackground.svg' />
        <Card title='Beliebte Spiele' imagePath='svg/logoNoBackground.svg' />
        <Card title='Punkte einlösen' imagePath='svg/logoNoBackground.svg' />
        <Card title='So funktioniert Cinet' imagePath='svg/logoNoBackground.svg' />
      </div>
    </div>
  );
}
