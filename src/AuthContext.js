import { createContext, useContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { auth } from './App';
import { useLocation, Navigate } from 'react-router-dom';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const createUser = (email, password, username) => {
    console.log('calling create user');
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        });
        return user;
      })
      .then(user => {
        setUser(user);
      });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      userCredential => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      },
    );
  };

  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Password reset email sent!');
        // ..
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        signIn,
        resetPassword,
        user,
        RequireAuth,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default function RequireAuth({ children }) {
  const { user } = UserAuth();
  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export const UserAuth = () => {
  return useContext(UserContext);
};
