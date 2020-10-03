import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Events from './components/Events/Events';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';

export const LoginContext = createContext();

const App = () => {
  const [loginData, setLoginData] = useState({});
  return (
    <LoginContext.Provider value={[loginData, setLoginData]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <PrivateRoute path="/activity/:id">
            <Registration></Registration>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
