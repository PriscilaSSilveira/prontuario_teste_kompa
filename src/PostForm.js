import React, { useState, useEffect} from 'react'
import Axios from 'axios'
// import api from "./services/api"

function PostForm() {
    const [data, setData] = useState({
    queixa: '',
    doencas: '',
    historico: '',
  })
  const [queixas, setQueixas] = useState();
  
  useEffect(() => {
    Axios.get('https://assina-prontuario.herokuapp.com/queixas')
      .then((response) => setQueixas(response.data.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <div>
        <form >   
        <input
          onChange={(e) => handle(e)}
          id="queixa"
          value={data.queixa}
          placeholder="queixa"
          type="number"
        ></input>
        <input
          type="number"
          onChange={(e) => handle(e)}
          id="doencas"
          value={data.doencas}
          placeholder="doencas"
        ></input>
      {/* <select    onChange={(e) => handle(e)} */}
        <select >
          {queixas.map((opt) => (
            <option value={opt.value}>{opt.queixas}</option>
          ))}
        </select>
        <textarea
          type="text"
          onChange={(e) => handle(e)}
          id="historico"
          value={data.historico}
          placeholder="historico"
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  )
}

export default PostForm
