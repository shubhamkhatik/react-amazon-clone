import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase"
import { useEffect } from 'react'
import Checkout from "./Checkout";
import {useStateValue} from './StateProvider'
function App() {
  const [{ basket},dispatch] = useStateValue();
  // const [state, dispatch] = useSteteValue();
  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe= auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else { 
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
