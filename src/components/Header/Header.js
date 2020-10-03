import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoginContext } from '../../App';
import './Header.css';

const Header = () => {
  const [loginData, setLoginData] = useContext(LoginContext);
  const history = useHistory();
  return (
    <header className="d-flex align-items-center px-5 pt-3 pb-5 mb-5">
      <img src="https://i.ibb.co/L0QBBYy/Group-1329.png" alt="" />
      <ul className="d-flex mx-auto m-0 list-unstyled">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/donation">Donation</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          {
            loginData.isSignedIn
              ? <Link to="/events">{loginData.name}</Link>
              : <Link to="/login">Login</Link>
          }
        </li>
      </ul>
      <button className="btn btn-primary">Register</button>
      <button onClick={() => history.push('/admin')} className="btn btn-dark ml-3">Admin</button>
    </header>
  );
};

export default Header;