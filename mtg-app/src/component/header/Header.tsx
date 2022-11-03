
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
                        menuItems={['aaa','bbb','ccc']}
                    />
                    <HeaderMenu
                        className={styles.menu}
                        title="LOA"
                        imagePath="/img/loa.jpg"
                        menuItems={['몰루','로아','LOALOALOA']}
                    />
                    <HeaderMenu
                        className={styles.menu}
                        title="원소술사 간호사"
                        imagePath="/img/nur.png"
                        menuItems={['수 간호사','빛의 간호사','어둠간호사']}
                    />
                </Navbar>
            </>
        );
    }
}

export default Header;