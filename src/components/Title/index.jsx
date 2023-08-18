import './style.css'

export default function Title({ value }) {
  return (
    <div className='section-title'>
      <div className="title-content">
        <div className="line">
          <span className="line_1"></span>
          <span className="line_2"></span>
          <span className="line_3"></span>
          <span className="line_4"></span>
          <h2>{ value }</h2>
          <span className="line_4"></span>
          <span className="line_3"></span>
          <span className="line_2"></span>
          <span className="line_1"></span>
        </div>
      </div>
    </div>
  )
}