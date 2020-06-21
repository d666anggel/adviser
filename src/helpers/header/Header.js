import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Header.module.scss';

export default function Header (props) {

    return (
        <header className={styles.header}>
            <div className={styles.brand}>Adviser</div>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li><NavLink exact to="/" className={styles.menuItem} activeClassName={styles.menuItemActive}>Главная</NavLink></li>
                    <li className={styles.menuItem} onClick={ props.toogleDownloadFocus }>Скачать</li>
                    <li><NavLink exact to="/about" className={styles.menuItem} activeClassName={styles.menuItemActive}>Как это работает?</NavLink></li>
                    <li><NavLink exact to="/politic" className={styles.menuItem} activeClassName={styles.menuItemActive}>Политика конфиденциальности</NavLink></li>
                </ul>
            </div>
        </header>
    );
}