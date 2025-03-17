import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Experiences />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}
