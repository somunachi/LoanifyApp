import style from './passwordpopup.module.css'
import close from '../../../../assets/Controls.svg'
import checked from '../../../../assets/Generic.svg'
import { Link } from 'react-router-dom';


function ComfirmChangePage() {
  return (
    <div className={style.ComfirmChangePage}>
    <Link to='/settings/security'>
    <div className={style.close}>
      <img src={close} alt='close logo'/>
    </div>
    </Link>

    <div className={style.confirmation}>
      <img src={checked} alt='Checked mark'/>
      <h3>Password changed successfully</h3>
      </div>
    </div>
    
  
  )
}

export default ComfirmChangePage
