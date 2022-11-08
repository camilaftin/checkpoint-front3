import './style.scss'

export function Checkpoint(props) {

  return (
    <li>
      <img src={props.item.imagem} />
      <h1>{props.item.nome}</h1>

    </li>
  )
}