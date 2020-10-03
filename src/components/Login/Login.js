import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { LoginContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [loginData, setLoginData] = useContext(LoginContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { displayName, email } = result.user;
        setLoginData({ isSignedIn: true, name: displayName, email });
        history.replace(from);
      });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 mx-auto px-3 py-5 border border-darken-1 rounded">
          <div className="user-sign-in py-5">
            <h4 className="text-center font-weight-bold mb-5">Login With</h4>
            <div onClick={googleSignIn} className="google-sign-in d-flex align-items-center border border-darken-1 rounded-pill p-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png" alt=""/> <span className="mx-auto">Continue with Google</span></div>
            <h6 className="text-center mt-3">Don’t have an account? <Link to="/login">Create an account</Link> </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;