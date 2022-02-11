import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/Shop/ShopPage";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfleDocument } from "./Firebase/FirebaseUtils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfleDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
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
