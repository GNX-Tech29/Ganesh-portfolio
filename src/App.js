import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/skills";
import Experience from "./components/experience/experience";
import Works from "./components/works/work";
import Certifications from "./components/Certifications/certifications";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Works />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
