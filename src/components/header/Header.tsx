import React from 'react'
import { useAppDispatch } from '../../hooks/reduxhooks'
import { opened } from '../../reducers/sidebarSlice'

const Header = () => {

    const dispatch = useAppDispatch()
    
    const handleOpenMenu = (e:React.MouseEvent<HTMLButtonElement>) => {

        document.getElementById("portal")?.classList.add("modal__show-sidebar")
        e.preventDefault()
        dispatch(opened())
    }

return (
    <header>
        <button className='btn pointer btn__header' id='btn-burger' onClick={handleOpenMenu}>
            <img src="../../assets/images/more.png" alt="" />
        </button>
        <h3 className='ml-1'>Aplicación para el control de gastos</h3>
    </header>
  )
}

export default Header