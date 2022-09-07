import React from 'react'
import {Portal} from 'react-portal'
import { useAppDispatch } from '../../hooks/reduxhooks'
import { closed } from '../../reducers/sidebarSlice'
import SidebarContent from '../sidebar/SidebarContent'

const SidebarModal = () => {

  const dispatch = useAppDispatch()

  const handleOnCloseMenu = () => {
    dispatch(closed())
    document.getElementById("portal")?.classList.remove("modal__show-sidebar")
  }

  return ( 
    <Portal node={document.getElementById("portal")}>
      <div className='modal__content'>
        <div className='modal__header ml-1 mt-1'>
          <h3>Manejo de gastos</h3>
          <button className='btn' onClick={handleOnCloseMenu}><img src="../../assets/images/close.png" alt="" /></button>
        </div>

        <SidebarContent />
      </div>
    </Portal>
  )
}

export default SidebarModal