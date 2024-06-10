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
                <IconMenu2 stroke={2} size={30} onClick={toggleMenu} />
                {open &&
                    <Container className='mt-1'>
                        <Row>
                            <Link href={"/"} className='text-decoration-none'>Home</Link>
                        </Row>
                        <Row>
                            <Link href={"/login"} className='text-decoration-none'>Anmelden</Link>
                        </Row>
                        <Row>
                            <Link href={"/addAccount"} className='text-decoration-none'>Registrieren</Link>
                        </Row>
                        <Row>
                            <Link href={"/games"} className='text-decoration-none'>Spiele</Link>
                        </Row>
                        <Row>
                            <Link href={"/profile"} className='text-decoration-none'>Profil</Link>
                        </Row>
                    </Container>
                }
            </div>
        </>
    )
}