import { NavLink } from 'react-router-dom'
import Button from '../Components/Button'
import H1 from '../Components/H1'

function List() {
  return (
    <div>
      <H1 className="title" title="nenhum prontuario cadastrado" />
      
        <NavLink to="/register">
            <Button title="Adicionar novo prontuário"/>
        </NavLink>

    </div>
  )
}

export default List
