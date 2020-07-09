import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    return <nav className={s.app_sidebar}>
        <NavLink to='/profile' className={s.item} activeClassName={s.active}> <img
            src="https://static.thenounproject.com/png/2874924-200.png"/> Profile </NavLink>

        <NavLink to='/dialogs' className={s.item} activeClassName={s.active}> <img
            src="https://static.thenounproject.com/png/699940-200.png"/> Messages </NavLink>

        <NavLink to='/news' className={s.item} activeClassName={s.active}> <img
            src="https://static.thenounproject.com/png/3341501-200.png"/> News </NavLink>

        <NavLink to='/music' className={s.item} activeClassName={s.active}> <img
            src="https://static.thenounproject.com/png/2024244-200.png"/> Mucis </NavLink>

        <NavLink to='/users' className={s.item} activeClassName={s.active}> <img
            src="https://static.thenounproject.com/png/2586875-200.png"/> Users </NavLink>

        <NavLink to='/friends' className={s.item} activeClassName={s.active}> <img
            src="https://static.thenounproject.com/png/1561334-200.png"/> Friends </NavLink>

        <br/>

        <NavLink to='/settings' className={s.item} activeClassName={s.active}> <img
            src="https://static.thenounproject.com/png/3335726-200.png"/> Settings</NavLink>
    </nav>
}

export default Sidebar;