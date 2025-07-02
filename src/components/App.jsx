import { useState, useEffect, useRef } from 'react'
import { Link,Route,Routes, Navigate  } from 'react-router-dom';


import '../styles/App.css'
import '../styles/skillsmenu.css'
import dark_mode from '../icons/dark_mode.svg';
import light_mode from '../icons/light_mode.svg';
import menu_dark_mode from '../icons/mobile_menu_dark.svg';
import menu_light_mode from '../icons/mobile_menu_light.svg';
import ContactMenu from '../components/Contact';
import MobileMenu from '../components/MobileMenu';
import AboutMenu from '../components/About'; 
import SkillsMenu from '../components/SkillsMenu';
import EducationMenu from '../components/EducationMenu';
import ExperienceMenu from '../components/ExperiencesMenu';   
import ProjectsMenu from '../components/ProjectsMenu'; 
import ThankYou from '../components/ThankYou';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={`min-h-screen flex flex-col text-white`}>
      <header className="fixed top-0 left-0 right-0 h-18 bg-background/80 backdrop-blur-sm border-b z-50 transition-colors duration-500">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex-1 flex items-center justify-start">
            <Link className="text-xl font-bold hover:text-primary transition-colors" to="/about">Laya Aluri</Link>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-1">
            <Link className="text-sm font-medium hover:text-primary transition-colors px-5" to="/skills">Skills</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors px-5" to="/experience">Experiences</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors px-5" to="/projects">Projects</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors px-5" to="/education">Education+Certs</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors px-5" to="/about">About</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors px-5" to="/contact">Contact</Link>          
          </nav>

          <div className="flex-1 flex items-center justify-end space-x-4">
            {/* Mobile Menu Toggle Button */}
            <button
              ref={buttonRef}
              aria-label="Toggle mobile menu"
              onClick={toggleMenu}
              className="z-50 relative h-9 w-9 flex items-center justify-center rounded-md hover:bg-accent cursor-pointer md:hidden"
            >
              <img src={menu_light_mode} alt="Menu icon" className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div ref={menuRef}>
            <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>

      <main className="flex-1 m-[42px]">
        <Routes>
          <Route path="/" element={<Navigate to="/contact" replace />} />
          <Route path="/about" element={<AboutMenu />} />
          <Route path="/skills" element={<SkillsMenu />} />
          <Route path="/experience" element={<ExperienceMenu />} />
          <Route path="/projects" element={<ProjectsMenu />} />
          <Route path="/education" element={<EducationMenu />} />
          <Route path="/contact" element={<ContactMenu />} />
          <Route path="/thank-you" element={<ThankYou />} />  
        </Routes>
      </main>

      <footer className="bg-muted py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Laya Aluri. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
