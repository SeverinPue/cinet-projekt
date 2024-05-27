import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function Login() {
  return (
    <div className="d-flex justify-content-center flex-row">
      <img src={"png/logoNoBackground.png"} alt="Cinet Logo" width={"300px"}/>
      <h1>Login</h1>
      <p>Melde dich an, um fortzufahren.</p>
      
      <div>
        <Form.Label>E-MAIL</Form.Label>
        <Form.Control type="email" />

        <Form.Label>PASSWORD</Form.Label>
        <Form.Control type="password" />

        <Button variant="dark" className="mt-2">anmelden</Button>
      </div>
      <Link href={"/addAccount"}>Noch kein Account?</Link>
    </div>
  );
}