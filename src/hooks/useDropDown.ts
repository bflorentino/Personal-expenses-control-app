import {useState} from 'react'

const initialState = false

export const useDropDown = () => {

    const [ isArrowOpen, setIsArrowOpen ] = useState<boolean>(initialState)

    const handleDropDown = (id:string) => {
        setIsArrowOpen(!isArrowOpen)
        document.querySelector(`#${id}`)?.classList.toggle("sidebar__dropdownList")
    }

    return { isArrowOpen, handleDropDown }
}