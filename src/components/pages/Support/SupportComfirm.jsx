import checked from '../../../assets/Generic.svg'
import close from '../../../assets/Controls.svg'
import sup from './support.module.css'
function SupportComfirm() {
  return (

    <div className={sup.supportConfirmationContainer}>
          <div className={sup.closeSupport}>
            <img src={close} alt='close logo'/>
          </div>
          <div className={sup.supportconfirmation}>
            <img src={checked} alt='Checked mark'/>
            <p>Issue Sent</p>
          </div>
        </div>
    // <div>
    //     <Comfirmation message='Issue Sent' style={{fontWeight: '700'}} />
    // </div>
  )
}

export default SupportComfirm