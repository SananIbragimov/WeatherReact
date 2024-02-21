import React from 'react';
import './Tab.css'

export function Tab({ activeTab, onTabChange }) {
  return (
    <div className="tab">
      <button onClick={() => onTabChange('weather')} className={activeTab === 'weather' ? 'active' : ''}>
        Weather
      </button>
      <button onClick={() => onTabChange('about')} className={activeTab === 'about' ? 'active' : ''}>
        About
      </button>
    </div>
  );
}
