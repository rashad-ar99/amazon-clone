import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { auth } from './firebase';
import {useStateValue} from './Components/StateProvider'
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51L1OunSHskNrs7sKihzmoRuNKsDt08oOCdIKQkcVEHmSdmhF2ynZBC80roAlFiNrJrp3TN9vvd2AnGkcxOeMcPtd00DEHSbfIT');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS: ',authUser);

      if(authUser){
        dispatch({ 
          type: 'SET_USER',
          user: authUser
        })
      }else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={[<Login/>]}>
          </Route>
          <Route path="/checkout" element={[<Header />, <Checkout />]}/>
          <Route path="/payment" element={[<Header />, <Elements stripe={promise}>, <Payment />, </Elements>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
