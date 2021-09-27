import React, { useState, useEffect } from 'react'
import Api from '../service/api'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Components/Button'
import H1 from '../Components/H1'
import P from '../Components/P'
import Textarea from '../Components/Textarea'
import Selecionados from '../Components/Selecionados'

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
    <div>
      <H1 className="Anamnese" title="Anamnese" />
      <form>
        <P className="title" title="Queixa Principal" />
        <select required onChange={(e) => handleQueixas(e)} id="queixa">
          <option>Selecione</option>
          {queixas.map((opt) => (
            <option value={JSON.stringify(opt)}>{opt.label}</option>
          ))}
        </select>

        <P className="title" title="Doenças Adulto" />
        <select
          required
          onChange={(e) => handleDoencas(e)}
          id="doencas"
          value={form.doencas}
        >
          <option required value>
            Selecione
          </option>
          {doenca.map((opt) => (
            <option id="doencas" value={JSON.stringify(opt)}>
              {opt.label}
            </option>
          ))}
        </select>

        <P className="title1" title="Selecionados" />
        <Selecionados value={selected.map((item) => item.label).join(', ')} />
        <textarea
          type="text"
          readOnly={true}
          value={selected.map((item) => item.label).join(', ')}
          placeholder="historico"
        ></textarea>

        <P title="Histórico da moléstia" />

        <Textarea
          id="historico"
          type="text"
          minLength={10}
          maxLength="1000"
          onChange={handleHistorico}
        />

        <Link to="/">
          <Button title="Salvar" handleClick={(e) => submit(e)} />
        </Link>

        {/* <button onClick={(e) => submit(e)}>submit</button> */}
      </form>
    </div>
  )
}

export default Register
