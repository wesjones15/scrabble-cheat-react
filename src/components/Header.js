import React            from 'react';
import { Link }         from 'react-router-dom';
import { connect }      from 'react-redux';
import { withRouter }   from 'react-router';

import { startLogout }  from '../actions/auth';


export const Header = ({ startLogout }) => (
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link to="/dashboard" className="header__title">
                <h1>Boilerplate</h1>
            </Link>
            <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
    </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Header));