import Profile from "./profile";
import Navigation from "./navigation";
import About from './about'
import Exeperience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Navigation />
      <Profile />
      <About />
      <Exeperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
