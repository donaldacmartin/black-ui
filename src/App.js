import React from 'react';

import Navigation from './app/components/nav/navigation';
import EpisodePage from './app/components/episode/episode-page';

function App() {
  return (
    <div className="App">
      <Navigation title="Black" />
      <EpisodePage />
    </div>
  );
}

export default App;
