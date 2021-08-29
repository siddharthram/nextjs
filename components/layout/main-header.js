import Link from "next/dist/client/link";
import { useLayoutEffect } from "react";
import classes from './main-header.module.css';


function MainHeader() {
    return (<header className={classes.header}>
        <div className={classes.logo}>
            <Link href='/'> NextEvents</Link>
        </div>
        <nav className={classes.navigation}>
            <ul>
                <li>
                <Link href='/events'> All Events </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainHeader;