import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Header = (props) => {
    return <header className={s.app_header}>
        <div>
        <NavLink to='/profile'>
            <img src={logo}/>
        </NavLink>

        <div className={s.login}>
            {props.isAuth ? <div> {'Hi, ' + props.login} <button className={s.buttonOut} onClick={ props.logoutTC }> Log out </button> </div> : <NavLink to={'/login'}> Login </NavLink>}
        </div>
    </div>
    </header>
}

export default Header;