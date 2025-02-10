import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import ResiStatus from "./assets/components/ResiStatus";
import BackToTop from "./assets/components/BackToTop";
import About from "./assets/components/About";
import { ReactLenis, useLenis } from "lenis/react";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Cta from "./assets/components/Cta";
import Footer from "./assets/components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ThemeProvider>
      <ReactLenis root>{/* content */}</ReactLenis>
      <Header />
      <Main />
      <ResiStatus />
      <BackToTop />
      <About />
      <Skills />
      <Projects />
      <Cta />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
