import classes from "./Layout.module.css";
import { Fragment } from "react";
import MainNav from "./MainNavigation";

const Layout = (props) => {
    return(
        <Fragment>
            <MainNav/>
            <main className={classes.main}>
                {props.children}
            </main>
        </Fragment>
    );
}

export default Layout;