import styles from "./Card.module.css";
import { Component, ReactNode } from 'react';
import CardModel from "../../../model/CardModel";
interface CardProps{
  card: CardModel;
}
interface CardState{
count: number;
}
class Card extends Component<CardProps, CardState>{
  render(): ReactNode {
    const GetSource = (cardFlags:number) => {
      const green = 1;
      const white = 2;
      const black = 4;
      const red = 8;
      const blue = 16;
      const result = [];
      if(cardFlags & green){
        result.push(<img className={styles.source} src={`${process.env.PUBLIC_URL}${"/img/green.png"}`} />);
      }
      if(cardFlags & white){
        result.push(<img  className={styles.source}src={`${process.env.PUBLIC_URL}${"/img/white.png"}`} />);
      }
      if(cardFlags & black){
        result.push(<img  className={styles.source} src={`${process.env.PUBLIC_URL}${"/img/black.png"}`} />);
      }
      if(cardFlags & red){
        result.push(<img className={styles.source} src={`${process.env.PUBLIC_URL}${"/img/red.png"}`} />);
      }
      if(cardFlags & blue){
        result.push(<img className={styles.source} src={`${process.env.PUBLIC_URL}${"/img/blue.png"}`} />);
      }
      return result.map(d => d);
    };
      return(
          <div className={`${styles.card}`}>
            <div className={`${styles.image}`}>
              <img className={styles.mainImage} src={`${process.env.PUBLIC_URL}${this.props.card.imagePath}`} />
            </div>
            <div className={`${styles.title}`}>
              {this.props.card.title}
            </div>
            <div>{GetSource(this.props.card.source)}</div>
          </div>
      );
  }
}

export default Card;