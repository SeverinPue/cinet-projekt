import { Form } from "react-bootstrap";
import { DatePicker } from "antd";

export default function AddAccount() {
  return (
    <>
      <img src="png/logoNoBackground.png" alt="logo_Sinet" />

      <p>Account erstellen</p>
      <p>Hast du schon ein Account? Hier anmelden.</p>

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

      </Form>
    </>
  );
}
