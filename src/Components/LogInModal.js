import React, { useState } from 'react';
import {
  Button,
  Stack,
  Container,
  Modal,
  Form,
  Alert,
} from 'react-bootstrap';
import {
  useNavigate,
  Navigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { UserAuth } from '../AuthContext.js';
import './LogInModal.css';

export default function LogInModal({
  setLoginShow,
  loginShow,
  setSignupShow,
  setResetPasswordShow,
}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn, resetPassword, user } = UserAuth();

  const handleSubmit = async e => {
    console.log('handle submit');
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      setLoginShow(false);
      navigate('/home');
    } catch (error) {
      setError(error.message);
      alert(error.message);
      console.error(error);
    }
  };

  const forgotPassword = async () => {
    try {
      console.log('in forgotPassword function');
      await resetPassword(email);
    } catch (error) {
      setError(error.message);
      alert(error.message);
      console.error(error);
    }
  };

  const handleResetPassword = () => {
    setLoginShow(false);
    setResetPasswordShow(true);
  };

  function createAccount() {
    setLoginShow(false);
    setSignupShow(true);
  }

  return (
    <>
      <div style={{ visibility: loginShow === true ? '' : 'hidden' }}>
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"
        >
          <div className="modal-center p-4 w-full max-w-md h-full h-auto mx-auto place-self-center">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => {
                  setLoginShow(false);
                }}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Log in to our platform
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required=""
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required=""
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                      onClick={() => {
                        handleResetPassword();
                      }}
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleSubmit}
                  >
                    Log in to your account
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{' '}
                    <a
                      href="#"
                      className="text-blue-700 hover:underline dark:text-blue-500"
                      onClick={() => {
                        createAccount();
                      }}
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
