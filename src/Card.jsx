import './style.scss'


//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
    <div>
      <ul className='card-component'>
        <li>
          <img src={props.item.imagem} />
          <h1>{props.item.nome}</h1>
        </li>
      </ul>
    </div>
  )
}