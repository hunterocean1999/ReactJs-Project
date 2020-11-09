import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact strict path="/rooms/:slug" component={SingleRoom} />
        {/* <Route exact strict path="/rooms/:slug" component={SingleRoom1} /> */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
