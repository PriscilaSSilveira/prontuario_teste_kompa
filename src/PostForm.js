import React, { useState, useEffect} from 'react'
import Axios from 'axios'
// import api from "./services/api"

function PostForm() {
    const [data, setData] = useState({
    queixa: '',
    doencas: '',
    historico: '',
  })
  const [queixas, setQueixas] = useState([]);
  const [doencas, setDoencas] = useState([]);

   useEffect(() => {
    Axios.get('https://assina-prontuario.herokuapp.com/doencas')
      .then((response) => setDoencas(response.data.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    Axios.get('https://assina-prontuario.herokuapp.com/queixas')//request(getTest)
      .then((response) => setQueixas(response.data.data))

      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    // console.log(newData)
  }

  if (!queixas) {
    return (<div>LOADING...</div>)
  }

  return (
    <div>
        <form >   
          <select onChange={(e) => handle(e)}
            id="queixa" value={data.queixa}>
              <option value>Selecione</option>
            {queixas.map((opt) => (
              <option value={opt.label}>{opt.label}</option>
            ))}
          </select>
          <button>submit</button>
      </form>
    </div>
  )
}

export default PostForm
