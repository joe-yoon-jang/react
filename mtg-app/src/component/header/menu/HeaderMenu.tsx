
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import styles from "./HeaderMenu.module.css";
import React, { Component, ReactNode, useState } from "react";

interface HeaderMenuProps{
    title: string;
    imagePath: string;
    className:string;
    menuItems:Array<string>;
}
interface HeaderMenuState{
  count: number;
  isOpen: boolean;
}
class HeaderMenu extends Component<HeaderMenuProps, HeaderMenuState>{
  constructor(props: any) {
    super(props);
    this.state = {count: 0, isOpen:false};
  }
  handleToggleMenu():any{
    this.setState({isOpen: !this.state.isOpen});
            // <div className={this.props.className} onClick={() => this.handleToggleMenu()}>
    console.log(this.state.count);
  }
  render(): ReactNode {
    const renderMenu = () =>{
      if(!this.props.menuItems){
        return <></>;
      }
      return this.props.menuItems.map((menu, index) => <li key={index}>{menu}</li>);
    }
    return(
            <div className={styles.menu} onClick={() => this.handleToggleMenu()}>
                <img className={styles.logo} src={`${process.env.PUBLIC_URL}${this.props.imagePath}`}></img>
                <div className={`${styles.title} ${styles.dropdown}`}>{this.props.title}</div>
                <div
                  className={`${styles.menuDiv} ${this.state.isOpen === false ? styles.none : ''}`}
                >
                  <ol>
                    {renderMenu()}
                  </ol>
                </div>
            </div>
        );
    }
}

export default HeaderMenu;