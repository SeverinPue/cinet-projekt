import style from './Card.module.css'

type CardType = {
  imagePath: string,
  title: string
}

export default function Card(props: CardType) {
  return (
    <div id={style.outter}>
      <p>{props.title}</p>
      <img src={props.imagePath} alt="Spiel Icon" id={style.image} width="200px" />
    </div>
  );
}
