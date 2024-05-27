'use client'

import { useState } from 'react';
import style from '../page.module.css'
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import Card from '../components/Card';

export default function Points() {
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
         <p></p>
          }
        </div>
        <p>Punkte Einlösen</p>

        <Card title='Popcorn Gutschein' points='100' footer='Punkte' />
        <Card title='Kino Gutschein' points='500' footer='Punkte'/>
        <Card title='Getränk' points='70' footer='Punkte'/>
        <Card title='Snack nach Wahl' points='150' footer='Punkte'/>
      </div>
    </div>
  );
}
