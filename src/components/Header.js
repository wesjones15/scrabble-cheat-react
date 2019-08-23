import React            from 'react';
import { Link }         from 'react-router-dom';
import { connect }      from 'react-redux';
import { withRouter }   from 'react-router';

// import { startLogout }  from '../actions/auth';


export const Header = () => (
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link to="/" className="header__title">
                <h1>Scrabble Cheat</h1>
            </Link>
        </div>
    </div>
    </header>
);
            // <button className="button button--link" onClick={startLogout}>Logout</button>

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);