import { useState } from 'react'

import "./style.css"

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(0)

  

  function switchMobileMenu() {
    if(mobileMenu === 1) {
      setMobileMenu(0)
    } else {
      setMobileMenu(1)
    }
  }

  return (
    <div>
      
      <header>
        <div className="center">
          <div className="left">
            <span>
              <span className="logo_symbol logo">&lt; </span><span className="logo_text logo">TNR</span><span className="logo_symbol logo"> /&gt;</span>
            </span>
          </div>
          <div className="right">
            <nav className="big_nav">
              <a href="/">Início</a>
              <a href="/about">Sobre Mim</a>
              <a href="/projects">Projetos</a>
              <a href="/abilities">Habilidades</a>
              <a href="/certificates">Certificados</a>
              {/* <a href="#">Contato</a> */}
            </nav>
            <nav className="small_nav">

              <a href="/"><i className="icon fa-solid fa-house"></i></a>
              <a href="/about"><i className="icon fa-solid fa-user"></i></a>
              <a href="/projects"><i className="icon fa-solid fa-folder"></i></a>
              <a href="/abilities"><i className="icon fa-solid fa-code"></i></a>
              <a href="/certificates"><i className="icon fa-solid fa-graduation-cap"></i></a>
              {/* <a href="#"><div className="icon contact"></div></a> */}
            </nav>
            <div className={`mobile_menu ${mobileMenu === 1 ? "" : "closed"}`}>
              <div className="button" onClick={switchMobileMenu}>
                <div className={`btn ${mobileMenu === 1 ? "active" : ""}`}>
                  <div className="btn-left"></div>
                  <div className="btn-right"></div>
                </div>
              </div>
              <div className="menu">
                <nav>
                  <a href="/"><i className="icon fa-solid fa-house"></i></a>
                  <a href="/about"><i className="icon fa-solid fa-user"></i></a>
                  <a href="/projects"><i className="icon fa-solid fa-folder"></i></a>
                  <a href="/abilities"><i className="icon fa-solid fa-code"></i></a>
                  <a href="/certificates"><i className="icon fa-solid fa-graduation-cap"></i></a>
                  {/* <a href="#"><div className="icon contact"></div></a> */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="v-space-60">
        
      </div>
    </div>
  )
}