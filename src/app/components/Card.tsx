import styles from "./Card.module.css";

type CardType = {
  title: string;
  imagePath: string;
  points?: string;
  footer?: string;
};

export default function Card(props: CardType) {
  return (
    <div>
        <div style={{"backgroundImage": `url(${props.imagePath})`}} id={styles.outter}>
        <p id={styles.title}>{props.title}</p>
        {props.points && <h1>{props.points}</h1>}
        {props.footer && <p>{props.footer}</p>}
        </div>
    </div>
  );
}