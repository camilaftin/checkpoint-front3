//import './style.scss'
import { useState } from 'react'
import { Checkpoint } from "./components/Checkpoint"


// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  const [nomeGato, setNomeGato] = useState('')
  const [imagemGato, setImagemGato] = useState('')
  const [allGatos, setAllGatos] = useState([
    {
      id: 1,
      name: 'Xbox',
      price: '3.000',
      picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'

    },
  ])

  function cadastrarGato(event) {

    event.preventDefault()

    const novoGatoCadastrado = {
      nome: nomeGato,
      imagem: imagemGato,
    }

    setAllGatos([...allGatos, novoGatoCadastrado])
  }


  return (

    <div className="App">
      <h1>Lista Gatos</h1>
      <form onSubmit={event => cadastrarGato(event)}>

        <div>
          <label htmlFor="nomeGato">Nome</label>
          <input id="nomeGato" type="text" value={nomeGato} onChange={event => setNomeGato(event.target.value)} />
        </div>

        <div>
          <label htmlFor="imagemGato">Imagem</label>
          <input id="imagemGato" type="text" value={imagemGato} onChange={event => setImagemGato(event.target.value)} />
        </div>

        <button type='submit'>Cadastrar Gato</button>

      </form>

      <section className='gatos'>
        {
          allGatos.map(
            gato => {
              return (
                <Checkpoint item={gato} />
              )
            }
          )
        }
      </section>
    </div>
  )
}

export default App