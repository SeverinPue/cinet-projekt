import styles from "./Card.module.css";

type CardType = {
  title: string;
  imagePath?: string;
  points?: string;
  footer?: string;
};

export default function Card(props: CardType) {
  return (
    <div id={styles.outter}>
      <img id={styles.image} src={props.imagePath} />
      <div id={styles.text}>
        <p id={styles.title}>{props.title}</p>
        <p>{props.points}</p>
        <p>{props.footer}</p>
      </div>
    </div>
  );
}
