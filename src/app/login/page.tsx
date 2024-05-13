import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <img src={"png/logoNoBackground.png"} alt="Cinet Logo" />
      <p>Login</p>
      <p>Melde dich an, um fortzufahren.</p>
      <Link href={""}>Noch kein Account?</Link>
      <form>
        <label>E-MAIL</label>
        <input type="email" />

        <Form.Label>PASSWORD</Form.Label>
        <Form.Control
          type="password"
        />
        
        <button type="submit">anmelden</button>
      </form>
    </div>
  );
}
