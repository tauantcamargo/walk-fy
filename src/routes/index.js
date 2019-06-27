import { Route, Switch } from 'react-router-dom';

import Browse from '../pages/browse';
import Playlist from '../pages/playlist';
import React from 'react';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/browse" component={Browse} />
    <Route path="/playlists/:id" component={Playlist} />
  </Switch>
);

export default Routes;
