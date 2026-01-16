import { useState, useEffect } from 'react'

import GamesList from './GamesList';
import NavBar from './NavBar';

export default function App() {
  const [language, setLanguage] = useState('en');

  /*useEffect(() => {

  }, [language]);*/

  return (
    <div>
      <NavBar language={language} setLanguage={setLanguage} />
      <GamesList language={language} />
    </div>
  );
}
