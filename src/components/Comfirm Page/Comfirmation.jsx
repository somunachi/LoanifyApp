import checked from '../../assets/Generic.svg'
import close from '../../assets/Controls.svg'
import comfirm from './comfirmation.module.css'
import PropTypes from 'prop-types';

function Comfirmation({ message }) {
    return (
        <div className={comfirm.confirmationContainer}>
          <div className={comfirm.close}>
            <img src={close} alt='close logo'/>
          </div>
          <div className={comfirm.confirmation}>
            <img src={checked} alt='Checked mark'/>
            <p>{message}</p>
          </div>
        </div>
      )
    }

Comfirmation.propTypes = {
        message: PropTypes.string.isRequired,
      };

export default Comfirmation