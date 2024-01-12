import './style.css'

import Title from '../Title'
import CertificateCard from '../CertificateCard'
import Anchor from '../Anchor'

import data from '../../data/data'

export default function Courses() {
  return (
    <div id="certificates">
      <Anchor componentId="certificates-anchor"/>
      <div className="content">
        <div className="center">
          <Title value="certificados" />
          <div className="slide-container">
            <div className="certificates">
              {
                data.certificates.map((data, index) => {
                  return <CertificateCard data={data}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}