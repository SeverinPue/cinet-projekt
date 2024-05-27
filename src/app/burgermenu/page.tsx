'use client'

import { useState } from 'react';
import style from '../page.module.css'
import { IconMenu2 } from '@tabler/icons-react';
import Link from 'next/link';
import { Container, Row } from 'react-bootstrap';

export default function BurgerMenu() {

    const [open, setOpen] = useState<boolean>(false)

    function toggleMenu() {
        setOpen(!open)
    }
    return (
        <>
            <div id={style.burgerMenu} >
                <IconMenu2 stroke={2} onClick={toggleMenu} />
                {open &&
                    <Container>
                        <Row>
                            <Link href={"/login"}>Anmelden</Link>
                        </Row>
                        <Row>
                            <Link href={"/addAccount"}>Registrieren</Link>
                        </Row>
                        
                    </Container>
                }
            </div>
        </>
    )
}