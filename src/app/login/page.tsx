import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <img src={"png/logoNoBackground.png"} alt="Cinet Logo" width={'300px'}/>
      <p>Login</p>
      <p>Melde dich an, um fortzufahren.</p>
      <Link href={""}>Noch kein Account?</Link>
      <div>
        <Form.Label>E-MAIL</Form.Label>
        <Form.Control type="email" />

        <Form.Label>PASSWORD</Form.Label>
        <Form.Control type="password" />

        <Button variant="dark">anmelden</Button>
      </div>
    </div>
  );
}
