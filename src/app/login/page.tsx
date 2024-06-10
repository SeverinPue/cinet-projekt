import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function Login() {


  return (
    <div className="mt-3 container">
      <img src={"png/logoNoBackground.png"} alt="Cinet Logo" width={'300px'}/>
      <p className="fs-4 mt-4 fw-bold">Login</p>
      <p className="fw-light">Melde dich an, um fortzufahren. <Link href={"/addAccount"}>Noch kein Account?</Link></p>
      
      <div>
        <Form.Label>E-MAIL</Form.Label>
        <Form.Control type="email" />

        <Form.Label>PASSWORD</Form.Label>
        <Form.Control type="password" />

        <Button href="/" variant="dark" className="w-100 mt-2">anmelden</Button>
      </div>
    </div>
  );
}