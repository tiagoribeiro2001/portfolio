import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Resume from "./components/Resume";
import Projects from "./components/Projects"
import Profile from "./components/Profile"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Profile />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
