import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './app/components/nav/navigation';
import EpisodePage from './app/components/episode/episode-page';
import BroadcastPage from './app/components/broadcast/broadcast-page';
import StationPage from './app/components/station/station-page';


function App() {
  const pages = [
    {title: 'Episodes', link: '/episodes'},
    {title: 'Broadcasts', link: '/broadcasts'},
    {title: 'Stations', link: '/stations'}
  ];

  return (
    <div className="App">  
      <HashRouter basename="/">
        <Navigation title="Black" pages={pages} />
        <Switch>
          <Redirect exact from="/" to="/episodes" />
          <Route path="/episodes" component={EpisodePage} />
          <Route path="/broadcasts" component={BroadcastPage} />
          <Route path="/stations" component={StationPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
