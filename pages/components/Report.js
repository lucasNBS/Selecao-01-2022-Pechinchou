import style from "../../styles/Report.module.css"

export default function Report({ report }) {
  return (
    <div className={style.container}>
      <h4 id={style.loca}>{report.local}</h4>
      <h4 id={style.dat}>{report.date}</h4>
      <h4 id={style.tim}>{report.time}</h4>
      <p id={style.descriptio}>{report.description}</p>
    </div>
  )
}