import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layaut from '../containers/Layaut/Layaut';

export const PrivateRoute = ({ component: Component,  auth, ...props }) => {
  return (
    <>
      <Layaut>
        <Route
          {...props}
          render={ innerProps =>
            auth.uid ? <Component {...innerProps} /> : <Redirect to="/" />
          }
        />
      </Layaut>
    </>
  );
};

const mapStateToProps = state => ({
    auth: state.firebase.auth
});

export default connect(mapStateToProps)(PrivateRoute);