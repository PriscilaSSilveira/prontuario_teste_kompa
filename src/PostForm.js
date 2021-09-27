// import React, { useState, useEffect } from 'react'
// import Api from './service/api'

// function PostForm() {
//   const [form, setForm] = useState({
//     queixa: '',
//     doencas: '',
//     historico: '',
//   })

//   const [selected, setSelected] = useState([])
//   const [queixas, setQueixas] = useState([])
//   const [doenca, setDoenca] = useState([])

//   useEffect(() => {
//     Api.get('/doencas')
//       .then((response) => setDoenca(response.data.data))
//       .catch((err) => {
//         console.error('ops! ocorreu um erro' + err)
//       })
//   }, [])

//   useEffect(() => {
//     Api.get('/queixas') //request(getTest)
//       .then((response) => setQueixas(response.data.data))
//       .catch((err) => {
//         console.error('ops! ocorreu um erro' + err)
//       })
//   }, [])

//   function submit(event) {
//     event.preventDefault()

//     const queixaData = JSON.parse(form.queixa)

//     const data = {
//       queixa: queixaData.id,
//       doencas: selected.map((doenca) => doenca.id),
//       historico: form.historico,
//     }

//     Api.post('/prontuario', data).catch((err) => {
//       console.error('ops! ocorreu um erro' + err)
//     })
//   }

//   function handleQueixas(e) {
//     const newData = { ...form }
//     newData[e.target.id] = e.target.value
//     setForm(newData)
//   }

//   function handleDoencas(e) {
//     const banana = { ...form }
//     banana[e.target.id] = e.target.value
//     setForm(banana)
//     setSelected([...selected, JSON.parse(banana.doencas)])
//     // console.log(newData)
//   }

//   function handleHistorico(e) {
//     const newForm = { ...form }
//     newForm[e.target.id] = e.target.value
//     setForm(newForm)
//     console.log(newForm)
//   }

//   if (!queixas) {
//     return <div>LOADING...</div>
//   }

//   return (
//     <div>
//       <form>
//         <select required onChange={(e) => handleQueixas(e)} id="queixa">
//           <option>Selecione</option>
//           {queixas.map((opt) => (
//             <option value={JSON.stringify(opt)}>{opt.label}</option>
//           ))}
//         </select>

//         <select
//           required
//           onChange={(e) => handleDoencas(e)}
//           id="doencas"
//           value={form.doencas}
//         >
//           <option required value>
//             Selecione
//           </option>
//           {doenca.map((opt) => (
//             <option id="doencas" value={JSON.stringify(opt)}>
//               {opt.label}
//             </option>
//           ))}
//         </select>

//         <textarea
//           type="text"
//           readOnly={true}
//           value={selected.map((item) => item.label).join(', ')}
//           placeholder="historico"
//         ></textarea>

//         <div>
//           <p> Historico da molestia</p>
//           <textarea
//             id="historico"
//             minlength="10"
//             maxlength="1000"
//             onChange={handleHistorico}
//           ></textarea>
//         </div>

//         <button onClick={(e) => submit(e)}>submit</button>
//       </form>
//     </div>
//   )
// }

// export default PostForm
