import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

export default function burgermenu() {

    const [open, setOpen] = useState<boolean>(false)

    function toggleMenu() {
        setOpen(!open)
    }
    return (
        <>
            <div id={style.burgerMenu} >
                <IconMenu2 stroke={2} onClick={toggleMenu} />
                {open &&
                    <div>
                        <Link href={"/login"}>Anmelden</Link>
                        <Link href={"/addAccount"}>Registrieren</Link>
                    </div>
                }
            </div>
        </>
    )
}