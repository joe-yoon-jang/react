
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from "./HeaderMenu.module.css";
import React, { Component, ReactNode, useState } from "react";

interface HeaderMenuProps{
    title: string;
    imagePath: string;
    className:string;
}
class HeaderMenu extends Component<HeaderMenuProps>{
    render(): ReactNode {
    const [count, setCount] = useState('');
    const FuncCount = () => {
        console.log('count', count);
    }

    return(
            <div className={this.props.className} onClick={FuncCount((count + 1))}>
                <img className={styles.logo} src={`${process.env.PUBLIC_URL}${this.props.imagePath}`}></img>
                <div className={`${styles.title} ${styles.dropdown}`}>{this.props.title}</div>
            </div>
        );
    }
}

export default HeaderMenu;