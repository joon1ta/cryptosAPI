import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Nav.module.css'
import Search from '../Search/Search'

export function Nav({filter}) {

    

   


    return (
        <nav >
            <ul className={styles.nav}>
                <Link to='/'>Home</Link>
                <Search filter={filter} />
                <Link to='/form'>Form</Link>
                <li>Mercado</li>
            </ul>
        </nav>
    )
}

// export default Nav;
