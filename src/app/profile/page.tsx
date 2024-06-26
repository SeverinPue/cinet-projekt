"use client";
import Link from "next/link";
import BurgerMenu from "../burgermenu/page";
import { createContext, use, useEffect, useState } from "react";

type PersonalDetails = {
  name: String;
  email: String;
  password: String;
  dateOfBirth: Date;
};

export default function Profile() {
  let pointsOrNull = localStorage.getItem("points");
  let pointsInt;
  if (pointsOrNull == null) {
    pointsInt = 200;
  } else {
    pointsInt = parseInt(pointsOrNull);
  }
  const [points, setPoints] = useState(pointsInt);

  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    name: "Max Muster",
    email: "example@example.ch",
    password: "*******",
    dateOfBirth: new Date("2008-01-27"),
  });

  function dateFormatter(date: Date) {
    return date.getDay + "." + date.getMonth + "." + date.getFullYear;
  }

  return (
    <div className="container m-5">
      <BurgerMenu></BurgerMenu>

      <p className="fs-1 text-center fw-bold">Profil</p>
      <p className="text-center">
        Du hast <strong>{points}</strong> Punkte.
      </p>

      <div className="d-flex justify-content-center">
        <div className="mt-4 w-50">
          <p className="fs-3 text-center">Profilinformationen</p>
          <p><strong>Name:</strong> {personalDetails.name}</p>
          <p><strong>Email:</strong> {personalDetails.email}</p>
          <p><strong>Passwort:</strong> {personalDetails.password}</p>
          <p><strong>Geburtsdatum:</strong> {personalDetails.dateOfBirth.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
