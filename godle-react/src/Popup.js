import React, { useEffect } from 'react'
import { usePopup } from './PopupContext'

const Popup = () => {
   const { value, clearPopup } = usePopup()
   
   useEffect(() => {
      const timer = setTimeout(() => {
        clearPopup()
      }, 1500)
      return () => clearTimeout(timer)
   }, [value])
  
  return value ? <div>{value}</div> : null
}
  
export default Popup