import style from "../../styles/Report.module.css"

export default function Report({userName, local, date, time, description}) {
  return (
    <div className={style.container}>
      <h3 id={style.name}>{userName}</h3>
      <h4 id={style.local}>{local}</h4>
      <h4 id={style.date}>{date}</h4>
      <h4 id={style.time}>{time}</h4>
      <p id={style.description}>{description}</p>
    </div>
  )
}