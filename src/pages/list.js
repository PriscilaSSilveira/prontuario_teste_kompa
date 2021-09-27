import { NavLink } from 'react-router-dom'
import Button from '../Components/Button'
import register from '../pages/register'
import '../App.css'
import P from '../Components/P'
import { FormContext } from '../hooks/FormContext'
import { useContext, useState } from 'react'
import Selecionados from '../Components/Selecionados'

function List() {
  const form = useContext(FormContext)

  // console.log(form)

  const queixa = form.form.queixa
  let doencas = form.form.doencas
  const historico = form.form.historico

  // console.log(queixa)

  if (!queixa) {
    return (
      <div value={queixa}>
        <div className="container">
          <div>
            <div></div>
            <img src="https://kompa.com.br/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" />
          </div>
          <div className="container2">
            <P className="title" title="Nenhum prontuário cadastrado." />

            <NavLink to="/register">
              <button>Adicionar novo prontuário</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div>
        <img src="https://kompa.com.br/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" />
      </div>
      <div>
        <div className="container3">
          <div className="container2">
            <P className="anamnese" title="Anamnese" />
            <P className="amamnese-data" title="Queixa Principal:" />
            <P title={JSON.parse(queixa).label} />
            <Selecionados value={JSON.parse(queixa).label} />
          </div>
          <div>
            <P  className="amamnese-data" title="Doenças Adulto:" />
            <P className="doencas-data" title={JSON.parse(doencas).label} />
            <Selecionados value={JSON.parse(doencas).label} />
          </div>
          <div>
            <P className="amamnese-data" title="historico:" />
            <p>{historico}</p>
          </div>
        </div>
        <NavLink to="/register">
          <button className="button-data">Adicionar novo prontuário</button>
        </NavLink>
      </div>
    </div>
  )
}

export default List
