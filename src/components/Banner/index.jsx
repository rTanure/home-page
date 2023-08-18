import { useState, useEffect } from 'react'

import data from '../../data/data'

import './style.css'

import ProfilePicture from '/img/perfil.png'

export default function Banner() {
  const content = "Richardy Tanure"
  const [title, setTitle] = useState('')

  useEffect(()=>{
    if(title.length < content.length) {
      setTimeout(()=>{
        setTitle(title + content[title.length])
      }, 1000/10)
    }
  }, [title])

  return(
    <div id='home'>
      <div className="center">
        <div className="content">
          <div className="left">
            <div className="title">
              <h1>{title}</h1>
              <span></span>
            </div>
            <p>Desenvolvedor Web</p>
            <div className="social">
              <a href={data.social.instagram_url} target='_blank'>
                <i className="icon fa-brands fa-instagram"></i>
              </a>
              <a href={data.social.linkedin_url} target='_blank'>
                <i className="icon fa-brands fa-linkedin"></i>
              </a>
              <a href={data.social.github_url} target='_blank'>
                <i className="icon fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="right">
            <img src={ProfilePicture} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}