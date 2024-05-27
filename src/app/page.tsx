'use client'

import { useState } from 'react';
import Card from './components/Card';
import BurgerMenu from './burgermenu/page'
import Coins from './components/Coins';

export default function Home() {
  const [open, setOpen] = useState<boolean>(false)

  function toggleMenu() {
    setOpen(!open)
  }

  return (
    <div>
      <div>
        <BurgerMenu></BurgerMenu>
        
        <p>HOME</p>

        <Coins></Coins>

        <Card title='Spiel des Tages' imagePath='svg/logoNoBackground.svg' />
        <Card title='Beliebte Spiele' imagePath='svg/logoNoBackground.svg' />
        <Card title='Punkte einlösen' imagePath='png/cinet_coin.png'/>
        <Card title='So funktioniert Cinet' imagePath='svg/logoNoBackground.svg' />
      </div>
    </div>
  );
}
