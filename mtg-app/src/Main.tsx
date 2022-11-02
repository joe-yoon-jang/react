import React, { Component } from 'react';
import Header from './component/header/Header';
class Main extends Component
{
    render(): React.ReactNode {
    return <>
                <Header />
                <div>Main!!</div>
            </>
    }
}
export default Main;