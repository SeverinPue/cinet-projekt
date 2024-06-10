import { Button, Form } from "react-bootstrap";
import { DatePicker } from "antd";
import Link from "next/link";

export default function AddAccount() {
  return (
    <div className="mt-3">
      <img src="png/logoNoBackground.png" width={"300px"} alt="logo_Sinet" />

      <p className="fs-4 mt-4 fw-bold">Registrieren</p>
      <p className="fw-light">
        Hast du schon ein Account? <Link href={"/login"}>Hier anmelden.</Link>
      </p>

      <Form>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control type="text" id="username" />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email" id="email" />
        <Form.Label htmlFor="inputPassword">Password</Form.Label>
        <Form.Control type="password" id="inputPassword" />
        <div className="d-flex justify-content-between mt-2">
          <Form.Label htmlFor="datepicker">Geburtstag</Form.Label>
          <DatePicker id="datepicker" />
        </div>
        <Button href="/" variant="dark" type="submit" className="w-100 mt-2">
          Registrieren
        </Button>
      </Form>
    </div>
  );
}
