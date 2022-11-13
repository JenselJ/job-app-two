import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import AddJobModal from './Components/AddJob';
import { Container } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { getAuth } from 'firebase/auth';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from 'react-router-dom';
import LandingPage from './tailwind/landing-page/landing-page';
import LogInModal from './Components/LogInModal';
import SignUpModal from './Components/SignUpModal';
import HomePage from './Components/Home-page';
import { AuthContextProvider } from './AuthContext';
import ResetPasswordModal from './Components/ResetPassword.js';
import RequireAuth from './AuthContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBe84MIUEbL15t2RVdCm222_7e-xa1zLOM',
  authDomain: 'job-app-two.firebaseapp.com',
  projectId: 'job-app-two',
  storageBucket: 'job-app-two.appspot.com',
  messagingSenderId: '783830571761',
  appId: '1:783830571761:web:02f9cd18c7f86a03872750',
  measurementId: 'G-4J7KQTVSMR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

function App() {
  const [signupShow, setSignupShow] = useState(false);
  const [loginShow, setLoginShow] = useState(false);
  const [user, setUser] = useState();
  const [username, setUsername] = useState('');

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SignUpModal
                  signupShow={signupShow}
                  setSignupShow={setSignupShow}
                  setLoginShow={setLoginShow}
                  auth={auth}
                  setUser={setUser}
                  username={username}
                  setUsername={setUsername}
                />
                <LandingPage
                  signupShow={signupShow}
                  setSignupShow={setSignupShow}
                  loginShow={loginShow}
                  setLoginShow={setLoginShow}
                  // setEmail={setEmail}
                />
                <LogInModal
                  loginShow={loginShow}
                  setLoginShow={setLoginShow}
                  setSignupShow={setSignupShow}
                  auth={auth}
                  // setUser={setUser}
                />
              </>
            }
          />
          <Route
            exact
            path="/home"
            element={
              // <RequireAuth>
              <HomePage />
              // </RequireAuth>
            }
          />
          <Route
            exact
            path="/resetpassword"
            element={<ResetPasswordModal />}
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
