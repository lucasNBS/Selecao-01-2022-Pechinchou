import Link from "next/link"
import Image from "next/image"

import styles from "../../styles/Navbar.module.css"

export default function Navbar({hasAcess}) {

  function isLogged() {
    let hasAccess = hasAcess;
    if (hasAccess == "true") {
      sessionStorage.setItem("hasAccess", JSON.stringify(hasAccess));
    } else {
      sessionStorage.setItem("hasAccess", "false");
    }
  }

  return (
    <nav className={styles.navbar}>
      <div>
        <h1>Sistema de Combate à Crimes Ambientais</h1>
      </div>
      <ul>
        <li>
          <a href="./" onClick={isLogged}>Página inicial</a>
        </li>
        <li>
          <a href="./reports" onClick={isLogged}>Denúncias</a>
        </li>
      </ul>
    </nav>
  )
}