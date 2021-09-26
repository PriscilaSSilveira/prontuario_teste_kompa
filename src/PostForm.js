import React, { useState, useEffect} from 'react'
import Axios from 'axios'
// import api from "./services/api"

function PostForm() {
    const [data, setData] = useState({
    queixa: '',
    doencas: '',
    historico: '',
  })
  const [selected, setSelected] = useState([])
  const [queixas, setQueixas] = useState([]);
  const [doencas, setDoencas] = useState([]);

  const [array, setArray] = useState([]);
  // const getTest = {
  //   method: 'GET',
  //   url: 'https://assina-prontuario.herokuapp.com/queixas'
  // }

  useEffect(() => {
    setArray([...testMap])
   }, [queixas])

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
      // .then(response => {
      //   const banana = response.map((snap) => ({
      //     ...snap.data()
  
      //   }));
      //   setArray(banana);
      // })
   
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const testMap = queixas;
  // const testMap = queixas.map((item) => item);
console.log(testMap)

  
  // setArray(setQueixas)
  // console.log(array)

  // console.log(teste && teste[0].label)

  // Axios.request(getTest).then(function (response) {
  //   console.log(response.data);
  //   let banana = response.data.data
  // }).catch(function (error) {
  //   console.error(error);
  // });

  // console.log(banana)
  
  // const dataConvert = {
  //   queixa: parseInt(data.queixa),
  //   doencas: [parseInt(data.doencas)],
  //   historico: data.historico,
  // }

  // const options = {
  //   method: 'POST',
  //   url: 'https://assina-prontuario.herokuapp.com/prontuario',
  //   data: dataConvert,
  // }


  // console.log( getTest)

  // function submit(e) {
  //   e.preventDefault()
  //   Axios.post(url, {
  //     queixa: data.queixa,
  //     doencas: data.doencas,
  //     historico: data.historico
  //   })
  //       .then(res=> {
  //         console.log(res.data)
  //       })
  // }

  // function submit(e) {
  //   e.preventDefault()

  //   Axios.request(getTest)
  //     .then(function (response) {
  //       const banana = response.data.data
  //       console.log(banana)
  //     })
  //     .catch(function (error) {
  //       console.error(error)
  //     })
  // }

//   //FUNÇÃO OPTIONS
// document.getElementById("option").addEventListener("change", function_name);
// const option = document.getElementById("option");

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    setSelected([...selected, newData.doenca])
    // console.log(newData)
  }


  if (!queixas) {
    return (<div>LOADING...</div>)
  }
  //console.log(queixas[0].label)
  // const options = queixas[0].optionValue;
  // const values = queixas[1].label;
  // const pairs = options.map((id, index) => ({
  //   id,
  //   label: values[index]
  // }));

  return (
    <div>
      {/* <form onSubmit={(e) => submit(e)}> */}
        <form >   
          <select required onChange={(e) => handle(e)}
            id="queixa" value={data.queixa}>
              <option value>Selecione</option>
            {queixas.map((opt) => (
              <option value={opt.label}>{opt.label}</option>
            ))}
          </select>

          <select required onChange={(e) => handle(e)}
            id="doenca" value={data.doenca}>
            <option required  value>Selecione</option>
            {doencas.map((opt) => (
              <option value={opt.label}>{opt.label}</option>
            ))}

          </select>

          <textarea
            type="text"
            readOnly={true}
            id="historico"
            value={selected.join(', ')}
            placeholder="historico">
          </textarea>

          {/* <textarea
            type="text"
            onChange={(e) => handle(e)}
            id="historico"
            value={data.doenca}
            placeholder="historico">
          </textarea> */}

          <button>submit</button>
      </form>
    </div>
  )
}

export default PostForm
