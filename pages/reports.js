import ReportList from "./components/ReportList";
import Layout from "./components/Layout"
import Report from "./components/Report"
import styles from "../styles/Reports.module.css"
import { useState, useEffect } from "react";

export default function Reports() {

  let [reports, setReports] = useState([]);

  function handleShow() {
    let date = new Date();
    document.getElementById('post').style.display="block";
    document.getElementsByTagName('input')[0].value = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    document.getElementsByTagName('input')[1].value = date.getHours() + ":" + date.getMinutes();
    navigator.geolocation.getCurrentPosition(showPositionLa);
    navigator.geolocation.getCurrentPosition(showPositionLo);

  }

  function showPositionLa(position) {
    document.getElementsByTagName('input')[3].value = position.coords.latitude;
  }

  function showPositionLo(position) {
    document.getElementsByTagName('input')[4].value = position.coords.longitude;
  }

  function handleClose() {
    document.getElementById('post').style.display="none";
    document.getElementsByTagName('input')[0].value="";
    document.getElementsByTagName('input')[1].value="";
    document.getElementsByTagName('input')[2].value="";
    document.getElementsByTagName('input')[3].value="";
    document.getElementsByTagName('input')[4].value="";
    document.getElementsByTagName('textarea')[0].value="";
  }

  function handleCriar() {
    let date = document.getElementsByTagName('input')[0].value;
    let hour = document.getElementsByTagName('input')[1].value;
    let local = document.getElementsByTagName('input')[2].value;
    let latitude = document.getElementsByTagName('input')[3].value;
    let longitude = document.getElementsByTagName('input')[4].value;
    let description = document.getElementsByTagName('textarea')[0].value;

    setReports(prevReports => {
      return [...prevReports,  { date: date, time: hour, local: local, latitude: latitude, longitude: longitude, description: description }];
    })

    localStorage.setItem("reports", JSON.stringify(reports));
    handleClose();
  }

  useEffect(() => {
    let storedReports = JSON.parse(localStorage.getItem("reports"));
    setReports(storedReports);
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <h2>DENÚNCIAS REALIZADAS</h2>
          <button type="button" onClick={handleShow}>Criar denúncia</button>
          <div className={styles.reports}>
            <ReportList reports={reports}/>
          </div>
        </div>
        <div className={styles.post} id="post">
          <form className={styles.postcontent} autoComplete="off">
            <h3>PREENCHA AS INFORMAÇÕES</h3>
            <div className={styles.time}>
              <label htmlFor="date">
                Data:<input type="text" id="report-date" name="date" required/>
              </label>
              <label htmlFor="hour">
               Hora:<input type="text" id="report-hour" name="hour" required/>
              </label>
            </div>
            <div className={styles.local}>
              <label htmlFor="local">
                Local:<input type="e-mail" id="report-local" name="local" required/>
              </label>
              <label htmlFor="latitude">
                Latitude:<input readOnly type="e-mail" id="report-latitude" name="latitude" required/>
              </label>
              <label htmlFor="longitude">
                Longitude:<input readOnly type="e-mail" id="report-longitude" name="longitude" required/>
              </label>
            </div>
            <div className={styles.description}>
              <label htmlFor='description'>Descrição do crime:</label>
              <textarea type="password" id={styles.reportdescription} name="description" required/>
            </div>
            <button onClick={handleCriar} type="button">PUBLICAR</button>
            <button onClick={handleClose} type="button">CANCELAR</button>
          </form>
        </div>
      </Layout>
    </>
  )
}