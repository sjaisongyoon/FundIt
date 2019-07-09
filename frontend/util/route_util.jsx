import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id)
});

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/login" /> : <Component {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to={{pathname: "/login", nextPath: path}} />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));