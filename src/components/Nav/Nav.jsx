import React from 'react';
import styles from './Nav.module.css'


export function Nav() {
    return (
        <nav >
            <ul className={styles.nav}>
                <li>Home</li>
                <li>Search</li>
                <li>Mercado</li>
            </ul>
        </nav>
    )
}

// export default Nav;
