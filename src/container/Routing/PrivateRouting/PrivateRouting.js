import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Islogin from '../../Isloging/Islogin';

function PrivateRouting({ component: Component, ...rest }) {
    return (
        <Route {...rest}
            render = {props => (
                Islogin() ?
                    <Component {...props} />
                    :
                    <Redirect to='Login' />

            )
            }
        />
    );
}

export default PrivateRouting;