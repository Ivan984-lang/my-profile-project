import Header from './components/Header';
import HomeSection from './components/HomeSetcion';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectSection';
import ContactSection from './components/ContactSection'
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
