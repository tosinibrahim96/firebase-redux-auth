import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import  Homepage  from "./components/Homepage";
import { auth, createUser } from "./firebase/firebase.util";
import setCurrentUser from "./redux/actions/userActions";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

class App extends Component {
  unsubscribe = null;

  componentDidMount() {
    //remember setCurrentuser is from redux, it becomes accessible through props
    // when we do setDispatchFunctionsAsProps below
    const { setCurrentUser } = this.props;
    this.unsubscribe = auth.onAuthStateChanged(async user => {
      //If a user is currently logged in
      if (user) {
        const userRef = await createUser(user);

        /*we want to get the latest user info returned from the function above
         remember the above function returns what's stored in the db (like a reference)
        We want to use that to update the current user property in state*/
        userRef.onSnapshot(snapshot => {
          /*snapshot returns only id property
          to get the remaining values returned from the db, we use .data()*/
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        //Nobody is signed in, set currentUser to null
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Signup />
            }
          />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Signin />
            }
          />
        </Switch>
      </div>
    );
  }
}

/**
 * mapStateToProps receives state as parameter
 * Here, we are destructuring the user objet from the state
 *
 */
const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser };
};

const setDispatchFunctionsAsProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  setDispatchFunctionsAsProps
)(App);
