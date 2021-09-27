import React, { useState, useEffect } from 'react'
import Api from '../service/api'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Components/Button'
import H1 from '../Components/H1'
import P from '../Components/P'
import Textarea from '../Components/Textarea'
import Selecionados from '../Components/Selecionados'
import { Formik, Form, Field } from "formik";
import '../App.css'

function Register() {
  const [form, setForm] = useState({
    queixa: '',
    doencas: '',
    historico: '',
  })

  const [selected, setSelected] = useState([])
  const [queixas, setQueixas] = useState([])
  const [doenca, setDoenca] = useState([])

  useEffect(() => {
    Api.get('/doencas')
      .then((response) => setDoenca(response.data.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  useEffect(() => {
    Api.get('/queixas')
      .then((response) => setQueixas(response.data.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  function submit(event) {
    event.preventDefault()

    const queixaData = JSON.parse(form.queixa)

    const data = {
      queixa: queixaData.id,
      doencas: selected.map((doenca) => doenca.id),
      historico: form.historico,
    }

    Api.post('/prontuario', data).catch((err) => {
      console.error('ops! ocorreu um erro' + err)
    })
  }

  function handleQueixas(e) {
    const newData = { ...form }
    newData[e.target.id] = e.target.value
    setForm(newData)
  }

  function handleDoencas(e) {
    const dataDoencas = { ...form }
    dataDoencas[e.target.id] = e.target.value
    setForm(dataDoencas)
    setSelected([...selected, JSON.parse(dataDoencas.doencas)])
    // console.log(newData)
  }

  function handleHistorico(e) {
    const newForm = { ...form }
    newForm[e.target.id] = e.target.value
    setForm(newForm)
    console.log(newForm)
  }

  if (!queixas) {
    return <div>LOADING...</div>
  }

  return (
    <div className="container">
      <div>
        <img src="https://kompa.com.br/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" />
      </div>
      <div className="container2" >
        <Formik>
          {()=>(
            <Form></Form>
          )}
        </Formik>
        <form>
          <H1 className="anamnese" title="Anamnese" />
          <P className="title" title="Queixa Principal" />
          <select
            className="dropDown"
            required="required"
            onChange={(e) => handleQueixas(e)}
            id="queixa"
          >
            <option selected disabled value="">Selecione...</option>
            {queixas.map((opt) => (
              <option className="option" value={JSON.stringify(opt)}>
                {opt.label}
              </option>
            ))}
          </select>

          <P className="title" title="Doenças Adulto" />
          <select
            className="dropDown"
            required="required"
            onChange={(e) => handleDoencas(e)}
            id="doencas"
            value={form.doencas}
          >
            <option selected disabled value=""  >
              Selecione...
            </option>
            {doenca.map((opt) => (
              <option
                className="option"
                id="doencas"
                value={JSON.stringify(opt)}
              >
                {opt.label}
              </option>
            ))}
          </select>

          <P className="title1" title="Selecionados:" />
          <Selecionados value={selected.map((item) => item.label).join(', ')} />
          <textarea className="historico"
            type="text"
            readOnly={true}
            value={selected.map((item) => item.label).join(', ')}
          ></textarea>

          <P title="Histórico da moléstia" />

          <Textarea
            className="historico"
            id="historico"
            type="text"
            required="required"
            minlength="10"
            maxlength="1000"
            onChange={handleHistorico}
          />

          <Link to="/">
            <Button title="Salvar" handleClick={(e) => submit(e)} />
          </Link>

          {/* <button onClick={(e) => submit(e)}>submit</button> */}
        </form>
      </div>
    </div>
  )
}

export default Register
