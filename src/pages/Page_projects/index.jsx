import "./style.css"

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title"

import ProjectCard from "../../components/ProjectCard";

import data from "../../data/data"

export default function Projects() {
  console.log(data.projects)
  return(
    <>
      <Header />
      <Title value="PROJETOS"/>
      <section className="projects-list center">
      {
        data.projects.map((item, index)=>{
          console.log(index)
          return(
            <ProjectCard key={index} data={item}/>
          )
        })
      }
      </section>
      <Footer />
    </>
  )
}