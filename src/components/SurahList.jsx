import React from 'react';
import { surahs } from '../data/surahs';

const SurahList = ({ currentSurah, onSelectSurah }) => {
  return (
    <div className="surah-grid">
      {surahs.map((surah) => (
        <div
          key={surah.id}
          className={`surah-card glass ${currentSurah?.id === surah.id ? 'active' : ''}`}
          onClick={() => onSelectSurah(surah)}
        >
          <div className="surah-info">
            <h3>سورة {surah.name}</h3>
            <p>{surah.englishName}</p>
          </div>
          <div className="play-icon">
            {currentSurah?.id === surah.id ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SurahList;
