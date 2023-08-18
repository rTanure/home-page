import './style.css'

import data from '../../data/data'

export default function Footer() {
  return(
    <footer>
      <div>
        <div className="top center">
          <a href="#">Richardy R. Tanure</a>
        </div>
      </div>
      <div>
        <div className="content center">
          <div>
            <h4>Social</h4>
            <ul>
              <li><a target='__blank' href={data.social.github_url}>GitHub</a></li>
              <li><a target='__blank' href={data.social.linkedin_url}>Linkedin</a></li>
              <li><a target='__blank' href={data.social.instagram_url}>Instagram</a></li>
            </ul>
          </div>
          <div className="left">
            <h4>Contato</h4>
            <ul>
              <li>{data.social.email}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="bottom center">
          <span>Desenvolvido por: <span className='author'><a href={data.social.github_url}>Richardy Tanure</a></span></span>
          <span><a target='__blank' href={data.page.repository_url}>Acessar Repositório</a></span>
        </div>
      </div>
    </footer>
  ) 
}