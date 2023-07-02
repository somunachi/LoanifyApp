import React, { useState } from 'react'
import style from './confirmationpops.module.css'
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom'


export const ConfirmationPops = ({ message }) => {

  const [closePop, setClosePop] = useState();

  const handleClosePop =()=>{
    setClosePop(false)
  }

  return (
    <div>
        <div className={style.confirmation}>
           <Link to='/confirmation'>
           {closePop && 
              <img src={close} onClick={handleClosePop} alt='close logo'/>
            }
            </Link>
           <p>{message}</p>
        </div>
    </div>
  )
}
