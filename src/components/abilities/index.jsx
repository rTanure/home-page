import { useState, useRef, useEffect } from 'react'

import Icon from '../Icon'

import './style.css'

import data from '../../data/data'
import Title from '../Title'
import Anchor from '../Anchor'

export default function Abilities() {
  const [touchStartX, settouchStartX] = useState(undefined)
  const [touchEndX, setTouchEndX] = useState(undefined)

  const [ selected, setSelected ] = useState(Math.floor(data.techs.length / 2))
  const [ techViewOrder, setTechViewOrder ] = useState({
    left_2: Math.floor(data.techs.length / 2) - 2,
    left_1: Math.floor(data.techs.length / 2) - 1,
    select: Math.floor(data.techs.length / 2) ,
    right_1: Math.floor(data.techs.length / 2) + 1,
    right_2: Math.floor(data.techs.length / 2) + 2
  })

  function selectByIndex(index) {
    setSelected(index)
    setTechViewOrder({
      left_2: index - 2,
      left_1: index - 1,
      select: index,
      right_1: index + 1,
      right_2: index + 2
    })
  }

  function nextSelect() {
    if (techViewOrder.select < data.techs.length -1) {
      let nextSelect = techViewOrder.select + 1
      setSelected(nextSelect)

      setTechViewOrder({
        left_2: nextSelect - 2,
        left_1: nextSelect - 1,
        select: nextSelect,
        right_1: nextSelect + 1,
        right_2: nextSelect + 2
      })

    }
  }

  function previousSelect() {
    if (techViewOrder.select > 0) {
      let nextSelect = techViewOrder.select - 1
      setSelected(nextSelect)

      setTechViewOrder({
        left_2: nextSelect - 2,
        left_1: nextSelect - 1,
        select: nextSelect,
        right_1: nextSelect + 1,
        right_2: nextSelect + 2
      })
    }
  }

  function getClassBySelection(index) {
    switch(index) {
      case techViewOrder.left_2: return 'left_2'
      case techViewOrder.left_1: return 'left_1'
      case techViewOrder.select: return 'selected'
      case techViewOrder.right_1: return 'right_1'
      case techViewOrder.right_2: return 'right_2'
      default:
        if(index < techViewOrder.left_2) {
          return 'left'
        } else if(index > techViewOrder.right_2) {
          return 'right'
        }
    }
  }

  function calcTouchEvent() {
    const minDistance = 40
    let distance = touchEndX - touchStartX

    if(Math.abs(distance) < minDistance && touchEndX != undefined) return

    if(distance > 0) previousSelect()
    if(distance < 0) nextSelect()

    setTouchEndX(undefined)
    settouchStartX(undefined)
  }

  return (
    <div id="abilities">
      <Anchor componentId="abilities-anchor"/>
      <div className="content">
        <div className="center">
          <Title value="Habilidades" /> 
          <div className="content"
              onTouchStart={(e) => settouchStartX(e.touches[0].clientX)} 
              onTouchMove={(e) => setTouchEndX(e.touches[0].clientX)}
              onTouchEnd={() => calcTouchEvent()}
            >
            <div className="tech-slide">
              <div className="arrow left" onClick={() => previousSelect() }>←</div>

              <div className="logos-container">
                <div className="logos">
                  {
                    data.techs.map((tech, index) => {
                      return (

                        <div className={`tech-logo ${getClassBySelection(index)}`} 
                        // onClick={() => selectByIndex(index)}
                        >
                            <Icon type={tech.icon_class}/>                       
                          {/* <i className={"icon " + tech.icon_class}></i> */}
                        </div>
                      )
                    })
                  }
                </div>
              </div>


              <div className="arrow left" onClick={ () => nextSelect() }>→</div>
              </div>

              <div className="tech_info">
                <div className="title">
                  <h3>{data.techs[selected].name}</h3>
                </div>
                <div className="infos">
                  <div className="logo-icon">
                    <Icon type={data.techs[selected].icon_class}/>
                  </div>
                  <div className="description">
                    <p>{data.techs[selected].description}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}