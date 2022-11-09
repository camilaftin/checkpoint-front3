import './style.scss'
import { useState } from 'react'
import { Card } from './Card'

function App() {


  const [nomeGato, setNomeGato] = useState('')
  const [imagemGato, setImagemGato] = useState('')
  const [formularioErro, setFormularioErro] = useState(false)
  const [allGatos, setAllGatos] = useState([])

  function cadastrarGato(event) {

    event.preventDefault()

    const novoGatoCadastrado = {
      nome: nomeGato,
      imagem: imagemGato,
    }

    if (nomeGato === '' || nomeGato === '') {

      setFormularioErro(true)

    } else {

      setFormularioErro(false)

      setAllGatos([...allGatos, novoGatoCadastrado])

      setNomeGato('')
      setImagemGato('')

    }

  }


  return (

    <div className="App">
      <h1>Lista Gatos Favoritos</h1>
      <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrarGato(event)}>

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

      {
        formularioErro ? (
          <span>Por favor, verifique os dados inseridos no formulário</span>
        ) : null
      }

      <section className='gatos'>
        {
          allGatos.map(
            gato => {
              return (
                <Card item={gato} />
              )
            }
          )
        }
      </section>
    </div>
  )
}

export default App