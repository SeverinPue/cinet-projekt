import style from "./Card.module.css";

type CardType = {
  title: string;
  imagePath?: string;
  points?: string;
  footer?: string;
  image?: string;
};

export default function Card(props: CardType) {
  return (
    <div id={style.outter}>
      <p id={style.title}>{props.title}</p>
      {props.imagePath && (
        <img className="img-fluid" src={props.imagePath} alt="Spiel Icon" width={"300px"} />
      )}
      {props.points && <h1>{props.points}</h1>}
      {props.footer && <p>{props.footer}</p>}
    </div>
  );
}
