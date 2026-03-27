import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AudioPlayer from './components/AudioPlayer';
import SurahList from './components/SurahList';
import { surahs } from './data/surahs';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [currentSurah, setCurrentSurah] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNext = () => {
    if (!currentSurah) return;
    const currentIndex = surahs.findIndex(s => s.id === currentSurah.id);
    if (currentIndex < surahs.length - 1) {
      setCurrentSurah(surahs[currentIndex + 1]);
    } else {
      setCurrentSurah(surahs[0]); // Loop back to start
    }
  };

  const handlePrev = () => {
    if (!currentSurah) return;
    const currentIndex = surahs.findIndex(s => s.id === currentSurah.id);
    if (currentIndex > 0) {
      setCurrentSurah(surahs[currentIndex - 1]);
    } else {
      setCurrentSurah(surahs[surahs.length - 1]); // Loop back to end
    }
  };

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <SurahList 
          currentSurah={currentSurah} 
          onSelectSurah={setCurrentSurah} 
        />
      </main>
      <AudioPlayer 
        currentSurah={currentSurah} 
        onNext={handleNext} 
        onPrev={handlePrev} 
      />
    </div>
  );
}

export default App;
