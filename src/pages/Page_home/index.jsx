import Header from "../../components/Header"
import Banner from "../../components/Banner"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"
import Abilities from "../../components/abilities"
import Courses from "../../components/Courses"
import Footer from "../../components/Footer"

export default function Page_home() {
  return (
    <div>
      <Header />
      <Banner /> 
      <AboutMe />
      <Projects />
      <Abilities />
      <Courses />
      <Footer />
    </div>
  )
}