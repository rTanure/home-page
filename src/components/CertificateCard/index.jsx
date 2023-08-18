import './style.css'

export default function CertificateCard({data}) {
  const { title, school, time, instructor, conclusion, certificate } = data
  return (
    <div className='certificateCard'>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="infos">
        <div className="single-info">
          <div className="icon-box">
          <i className="icon fa-solid fa-school"></i>
          </div>
          <span>{school}</span>
        </div>
        <div className="single-info">
          <div className="icon-box">
            <i className="icon fa-solid fa-clock"></i>
          </div>
          <span>{time} horas</span>
        </div>
        <div className="single-info">
          <div className="icon-box">
            <i className="icon fa-solid fa-user"></i>
          </div>
          <span>{instructor}</span>
        </div>
        <div className="single-info">
          <div className="icon-box">
            <i className="icon fa-solid fa-calendar"></i>
          </div>
          <span>{conclusion}</span>
        </div>
      </div>
      <a href={certificate} target='_blank'>
        <button>certificado</button>
      </a>
    </div>
  )
}