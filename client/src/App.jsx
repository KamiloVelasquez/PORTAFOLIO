import { useState, useCallback } from 'react';
import './i18n/i18n';
import './styles/custom-bootstrap.scss';
import './styles/animations.css';
import './App.css';

import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AmbientSwitch from './components/AmbientSwitch/AmbientSwitch';
import DevSection from './components/DevSection/DevSection';
import DataSection from './components/DataSection/DataSection';
import ChatWidget from './components/Chatbot/ChatWidget';
import FloatingGithub from './components/Buttons/FloatingGithub';
import Footer from './components/Footer/Footer';
import { useGithubRepos } from './hooks/useGithubRepos';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { repos, loading } = useGithubRepos();

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <div className="app">
      {/* Intro Animation */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Main Content */}
      {!showIntro && (
        <>
          <Navbar />

          <main>
            <Hero />
            <AmbientSwitch />
            <DevSection repos={repos} loading={loading} />
            <DataSection />
          </main>

          <Footer />

          {/* Floating Elements */}
          <FloatingGithub url="https://github.com/KamiloVelasquez" />
          <ChatWidget />
        </>
      )}
    </div>
  );
}

export default App;
