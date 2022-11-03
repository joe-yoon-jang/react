import styles from "./CardList.module.css";
import { Component, ReactNode } from 'react';
import Card from "./card/Card";
import CardModel from "./../../model/CardModel";
interface CardListProps{
  title?: string;
  items?: Array<CardModel>;
}
interface CardListState{
  cardItems: Array<CardModel>;
}
class CardList extends Component<CardListProps, CardListState>{
  constructor(props:any){
    super(props);
    this.state = {cardItems: [
      {title:'날빌', source:16, meta:15, cost:115, imagePath:"/img/111.jfif" },
      {title:'사기', source:5, meta:16, cost:214, imagePath:"/img/222.jfif" },
      {title:'칼퇴금지', source:16, meta:17.5, cost:23, imagePath:"/img/333.jfif" },
      {title:'휴가통제', source:31, meta:25.5, cost:455, imagePath:"/img/444.jfif" },
    ]};
  }
  render(): ReactNode {
      const renderCard= () =>{
        if(!this.state.cardItems){
          return <></>;
        }
      // return this.props.menuItems.map(menu => <li>{menu}</li>);
      return this.state.cardItems.map(d => <Card card={d} />);
      }
      return(
          <div className={`${styles.wrap}`}>
            <div className={`${styles.title}`}>
              {this.props.title}
            </div>
            {renderCard()}
          </div>
      );
  }
}

export default CardList;