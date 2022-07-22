import Report from "./Report"

export default function ReportList({ reports }) {
  return (
    reports.map(report => {
      return <Report report={report}/>
    })
  )
}