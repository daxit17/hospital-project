import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Islogin from '../../Isloging/Islogin';

function PublicRouting({ component: Component, restricted = false, ...rest }) {
    return (
        <Route {...rest}
            render={props => (
                Islogin() && restricted ?
                    <Redirect to='/' />
                    :
                    <Component {...props} />
            )
            }
        />
    );
}

export default PublicRouting;