
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Component, ReactNode } from 'react';
import styles from "./Header.module.css";
import HeaderMenu from './menu/HeaderMenu';

class Header extends Component{
    render(): ReactNode {
        return(
            <>
                <Navbar className={styles.header} >
                    <img className={styles.logo} src={`${process.env.PUBLIC_URL}/img/222.png`}></img>
                    <HeaderMenu 
                        className={styles.menu}
                        title="Warhammer 40K" 
                        imagePath="/img/40k.png"
                    />
                </Navbar>
            </>
        );
    }
}

export default Header;