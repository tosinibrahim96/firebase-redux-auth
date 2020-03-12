import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../firebase/firebase.util";

const Homepage = ({ currentUser }) => {
  return (
    <div>
      <p>This is the homepage</p>

      {/**
   *show either sign out or sign in based on the currentUser value we get from
    the state
   */}
      {currentUser ? (
        <button onClick={() => auth.signOut()}>SIGN OUT</button>
      ) : (
        <Link to="/signin">
          <button>SIGN IN</button>
        </Link>
      )}
    </div>
  );
};

/**
 * mapStateToProps receives state as parameter
 * Here, we are destructuring the user objet from the state
 *
 */
const mapStateToProps = ({ user }) => {
  return { currentUser: user.currentUser };
};

export default connect(mapStateToProps)(Homepage);
