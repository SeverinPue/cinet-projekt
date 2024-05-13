import Link from "next/link";

export default function Login() {
    return (
      <div>
        <img src={'png/logoNoBackground.png'} alt="Cinet Logo" />
        <p>Login</p>
        <p>Melde dich an, um fortzufahren.</p>
        <Link href={""}>Noch kein Account</Link>
        <form>
            <label>E-MAIL</label>
            <input type="email" />
            <label>PASSWORT</label>
            <input type="password" />
            <button type="submit">anmelden</button>
        </form>
      </div>
    );
  }