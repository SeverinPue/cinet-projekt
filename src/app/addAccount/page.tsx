import { Button, Form } from "react-bootstrap";
import { DatePicker } from "antd";
import Link from "next/link";

export default function AddAccount() {
  return (
    <>
      <img src="png/logoNoBackground.png" width={"300px"} alt="logo_Sinet" />

      <p>Account erstellen</p>
      <p>Hast du schon ein Account? <Link href={"/login"}>Hier anmelden.</Link></p>

      <Form>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control type="text" id="username" />
        <Form.Label htmlFor="inputPassword">Password</Form.Label>
        <Form.Control type="password" id="inputPassword" />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email" id="email" />
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email" id="email" />
        <Form.Label htmlFor="datepicker">Geburtstag</Form.Label>
        <DatePicker id="datepicker"/>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </>
  );
}
