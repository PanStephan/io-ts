import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = (): React.ReactElement => {

    return (
        <nav className={styles.Nav}>
            <ul>
                <li>
                    <NavLink to="/">Авторизация</NavLink>
                </li>
                <li>
                    <NavLink to="/pizza">Страница с пиццей</NavLink>
                </li>
            </ul>
        </nav>
    );
};