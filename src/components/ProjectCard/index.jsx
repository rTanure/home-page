import './style.css'

export default function ProjectCard({ data }) {
  return (
    <div className="project-card">
      <div className="thumb" style={{
        backgroundImage: `url(/img/projects/${data.thumb})`
      }}>
        <div className="background">
        </div>
        <div className="status">
          <span>{ data.status }</span>
        </div>
      </div>
      <div className="data">
        <div className="techs">
          {
            data.techs.map((tech) => {
              return (
                <span>{tech}</span>
              )
            })
          }
        </div>
        <div className="description">
          <h3>{ data.title }</h3>
          <p>{data.description}</p>
        </div>
        <div className="buttons">
          {
            data.app_url && <a href={data.app_url}><button className="light">ACESSAR</button></a>
          }
          <a href={data.rep_url}><button className="dark">REPOSITÓRIO</button></a>
        </div>
      </div>
    </div>
  )
}