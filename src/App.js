import React from 'react';
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/Shop/ShopPage";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";
import {auth} from "./Firebase/FirebaseUtils";

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    //here we use to call fetch to fetch the data from the backend but once the code call fetch it will not call fetch again until the componentDidMount() will be called again

    //but we don't want to remount our App we want to always know firebase has realized that the authentication state has changed so whenever some body sign in and sign out we should be aware of that change without having to manually fetch

    //so following method is on auth library that we get from firebase
    auth.onAuthStateChanged(user => {
      this.unsubscribeFromAuth = this.setState({currentUser: user})

      console.log(user)
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
