import { useState, useEffect } from 'react'

import Title from '../Title'
import ProjectCard from '../ProjectCard'

import './style.css'

import data from '../../data/data'
const projects = data.projects

export default function Projects() {
  let indexList = []
       
  switch (projects.length) {
    case 1:
      indexList = [0, 0, 0, 0]
      break;
    case 2:
      indexList = [0, 1, 0, 1]
      break;
    case 3:
      indexList = [0, 1, 2, 0, 1, 2]
      break;
    default:
      for(let c = 0; c < projects.length; c++) {
        indexList.push(c)
      }
      break;
  }

  const [selected, setSelected] = useState(0)
  const [rightCard, setRightCard] = useState(1)
  const [leftCard, setLeftCard] = useState(indexList.length - 1)

  const [touchStartX, settouchStartX] = useState(undefined)
  const [touchEndX, setTouchEndX] = useState(undefined)


  function updateLeft(selected) {
    if(selected - 1 < 0) {
      setLeftCard(indexList.length - 1)
    } else {
      setLeftCard(selected - 1)
    }
  }

  function updateRight(selected) {
    if(selected + 1 <= indexList.length - 1) {
      setRightCard(selected + 1)
    } else {
      setRightCard(0)
    }
  }

  function previousCard() {
    let nextSelected

    if(selected - 1 < 0) {
      nextSelected = indexList.length - 1
    } else {
      nextSelected = selected - 1
    }

    updateLeft(nextSelected)
    updateRight(nextSelected)

    setSelected(nextSelected)
  }

  function nextCard() {
    let nextSelected

    if(selected + 1 < indexList.length) {
      nextSelected = selected + 1
    } else {
      nextSelected = 0
    }
    
    updateLeft(nextSelected)
    updateRight(nextSelected)

    setSelected(nextSelected)    
  }

  function calcTouchEvent() {
    const minDistance = 50
    let distance = touchEndX - touchStartX

    if(Math.abs(distance) < minDistance && touchEndX != undefined) return

    if(distance > 0) previousCard()
    if(distance < 0) nextCard()

    setTouchEndX(undefined)
    settouchStartX(undefined)
  }
  
  return (
    <div id="projects">
      <div className="center">
        <Title value="PROJETOS"/>
        <div className="content">
          <div className="carousel">

            <div className="left-arrow arrow" onClick={()=> previousCard()}>
              <span>←</span>
            </div>
            <div className="cards-container" 
                onTouchStart={(e) => settouchStartX(e.touches[0].clientX)} 
                onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
                onTouchEnd={() => calcTouchEvent()}
              >
              {
                indexList.map((index, id)=>{
                  return (
                    <div className={`card-box ${id === selected ? "selected" : ""} ${id === leftCard ? "left" : ""} ${id === rightCard ? "right" : ""}`}>
                      <ProjectCard data = { projects[index] }/>
                    </div>
                  )
                })  
              }
            </div>
            <div className="right-arrow arrow" onClick={()=> nextCard()}>
              <span>→</span>
            </div>
          </div>
          <a href="/projects"><button className='light'>VEJA MAIS PROJETOS</button></a>
        </div>
      </div>
    </div>
  )
}