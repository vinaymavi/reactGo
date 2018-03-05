import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchVoteData } from './fetch-data';
import { App, Vote, Dashboard, About, LoginOrRegister } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    console.log('OnEnter: User not loggedin.');
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    console.log('OnEnter: User already loggedin.');
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Vote} fetchData={fetchVoteData} />
      <Route path="login" component={LoginOrRegister} onEnter={redirectAuth} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route path="about" component={About} />
    </Route>
  );
};
