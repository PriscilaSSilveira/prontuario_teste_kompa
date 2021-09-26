import React, { useState, useEffect } from 'react'
import Axios from 'axios'
// import api from "./services/api"

function PostForm() {
  const [data, setData] = useState({
    queixa: '',
    doencas: '',
    historico: '',
  })
  const [selected, setSelected] = useState([])
  const [queixas, setQueixas] = useState([])
  const [doencas, setDoencas] = useState([])
  const [array, setArray] = useState([])


  useEffect(() => {
    setArray([...testMap])
  }, [queixas])

  useEffect(() => {
    Axios.get('https://assina-prontuario.herokuapp.com/doencas')
      .then((response) => setDoencas(response.data.data))
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  useEffect(() => {
    Axios.get('https://assina-prontuario.herokuapp.com/queixas')
      .then((response) => setQueixas(response.data.data))


      .catch((err) => {
        console.error('ops! ocorreu um erro' + err)
      })
  }, [])

  const testMap = queixas
  console.log(testMap)

  function handleQueixas(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    setSelected([...selected, JSON.parse(newData.queixa)])
    // console.log(newData)
  }
  function handleDoencas(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    setSelected([...selected, JSON.parse(newData.doenca)])
    // console.log(newData)
  }

  if (!queixas) {
    return <div>LOADING...</div>
  }


  return (
    <div>
      {/* <form onSubmit={(e) => submit(e)}> */}
      <form>
        <select
          required
          onChange={(e) => handleQueixas(e)}
          id="queixa"
          value={data.queixas}
        >
          <option value>Selecione</option>
          {queixas.map((opt) => (
            <option value={opt}>{opt.label}</option>
          ))}
        </select>

        <select
          required
          onChange={(e) => handleDoencas(e)}
          id="doenca"
          value={data.doenca}
        >
          <option required value>
            Selecione
          </option>
          {doencas.map((opt) => (
            <option value={JSON.stringify(opt)}>{opt.label}</option>
          ))}
        </select>

        <textarea
          type="text"
          readOnly={true}
          id="historico"
          value={selected.map((item) => item.label).join(', ')}
          placeholder="historico"
        ></textarea>
        <div>
          <p> Historico da molestia</p>
          <textarea
            name="mensagem"
            rows="7"
            minlength="10"
            maxlength="1000"
          ></textarea>
        </div>

        <button>submit</button>
      </form>
    </div>
  )
}

export default PostForm
