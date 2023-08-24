import VscodeIcon from '/svg/social/vscode.svg'

import Title from '../Title'
import Anchor from '../Anchor'

import Icon from '../Icon'

import './style.css'

export default function AboutMe() {
  return (
    <div id="about_me">
      <Anchor componentId="about-anchor"/>
      <div className="center">
        <Title value="SOBRE MIM" />
        <div className="content">
          <div className="left">
            <p>Olá, me chamo <span className="mark">Richardy Tanure</span>, sou estudante de <span className="mark">Eng. da Computação</span> na Universidade Federal de Ouro Preto. </p>
            <p>Desde a minha infância, sempre tive um grande interesse por <span className="mark">tecnologia</span> e busquei aprender cada vez mais sobre essa área. Com o passar dos anos, descobri na <span className="mark">programação</span> uma <span className="mark">verdadeira paixão</span>, que transformou o que antes era apenas um hobby, em minha profissão.</p>
            <p>Busco sempre <span className="mark">aprender mais</span> e me manter atualizado sobre as últimas tendências e <span className="mark">tecnologias emergentes</span>. Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e ampliar minha bagagem de conhecimentos. Tenho grande interesse em desenvolver <span className="mark">projetos inovadores</span> e trabalhar em equipe com profissionais igualmente comprometidos em criar <span className="mark">soluções de alta qualidade</span>.</p>
            
          </div>
          <div className="right">
            <Icon type="tech-react"/>
          </div>

        </div>
      </div>
    </div>
  )
}