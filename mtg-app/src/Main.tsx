import React, { Component } from 'react';
import Header from './component/header/Header';
import CardList from './component/card-list/CardList';
class Main extends Component
{
    render(): React.ReactNode {
    return <>
                <Header />
                <CardList
                  title="Standard metagame"
                 />
                <div>Main!!</div>
            </>
    }
}
export default Main;