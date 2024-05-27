'use client'
import Link from "next/link";
import BurgerMenu from "../burgermenu/page";
import { createContext, use, useState } from "react";

type PersonalDetails = {
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date
}


export default function Profile(){
    const [points, setPoints] = useState<number>(200);
    const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
        {name: "livio",
        email: "livio.thommen@axa.ch",
        password: "*******",
        dateOfBirth: new Date('2008-01-27')});

        function dateFormatter(date: Date){
            return date.getDay+"."+date.getMonth+"."+date.getFullYear;
        }


    return(
        <div>
            <BurgerMenu></BurgerMenu>
            <h1>Profile</h1>
            <div>
                du hast {points} Punkte
            </div>
            <h2>Profilinformationen</h2>
            <p>Name: {personalDetails.name}</p>
            <p>Email: {personalDetails.email}</p>
            <p>Passwort: {personalDetails.password}</p>
            <p>Geburtsdatum: {personalDetails.dateOfBirth.toDateString()}</p>
        </div>
    )
}