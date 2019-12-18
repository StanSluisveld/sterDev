import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';

import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ArrangementPage from './components/arrangement/ArrangementPage';
import CafetariaPage from './components/cafetaria/CafetariaPage'; 
import AgendaPage from './components/agenda/AgendaPage'; 
import EventPage from './components/event/EventPage';
import ContactPage from './components/contact/ContactPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="overons" component={AboutPage} />
    <Route path="arrangementen" component={ArrangementPage} />
    <Route path="cafetaria" component={CafetariaPage} />
    <Route path="agenda" component={AgendaPage} />
    <Route path="evenementen" component={EventPage} />
    <Route path="contact" component={ContactPage} />  
  </Route>
);