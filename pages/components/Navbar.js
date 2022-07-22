import styles from "../../styles/Navbar.module.css"

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div>
        <h1>Sistema de Combate à Crimes Ambientais</h1>
      </div>
      <ul>
        <li>
          <a href="./">Página inicial</a>
        </li>
        <li>
          <a href="./reports">Denúncias</a>
        </li>
      </ul>
    </nav>
  )
}