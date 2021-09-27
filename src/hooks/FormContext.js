// import React, { useState } from 'react'

// export const FormContext = React.createContext({
//   form: {},
//   setForm: () => {}
// })

// export const FormContextProvider = (props) => {

//   const setForm = (form) => {
//     setState({ ...state, form })
//   }

//   const initState = {
//     form: {},
//     setForm
//   } 

//   const [state, setState] = useState(initState)

//   console.log(FormContext)
//   return (
//     <FormContext.Provider value={state}>
        
//       {props.children}
//     </FormContext.Provider>
//   )
// }

import React, { useState } from 'react'

export const FormContext = React.createContext({
  form: {},
  setForm: () => {}
})

export const FormContextProvider = (props) => {

  const setForm = (form) => {
    setState({ ...state, form })
  }

  const initState = {
    form: {},
    setForm
  } 

  const [state, setState] = useState(initState)

  console.log(FormContext)
  return (
    <FormContext.Provider value={state}>
      {props.children}
    </FormContext.Provider>
  )
}
