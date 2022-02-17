import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import ShopPage from "./Pages/Shop/ShopPage";
import Header from "./Components/Header/Header";
import SignInAndSignUp from "./Pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfleDocument } from "./Firebase/FirebaseUtils";
import { setCurrentUser } from "./Redux/User/userActions";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
  const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfleDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
