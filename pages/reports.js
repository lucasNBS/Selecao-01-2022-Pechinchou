import Layout from "./components/Layout"
import Report from "./components/Report"
import style from "../styles/Reports.module.css"

export default function Reports() {

  function isLogged() {
    let hasAccess = localStorage.getItem("hasAccess");
    console.log(hasAccess);
    if (hasAccess == true) {
      
    } else {
      alert("Você deve se logar para criar denúncias");
    }
  }

  return (
    <>
      <Layout>
        <div className={style.container}>
          <h2>DENÚNCIAS REALIZADAS</h2>
          <button type="button" onClick={isLogged}>Criar denúncia</button>
          <div className={style.reports}>
            <Report userName="Lucas" date="22/02/2006" local="Centro" time="08:45" description="asdafaf"/>
            <Report userName="Teste02" date="66/02/2006" local="Aqui" time="12:56" description="sorwfeowefwfwefdedwxwxwqx"/>
          </div>
        </div>
      </Layout>
    </>
  )
}