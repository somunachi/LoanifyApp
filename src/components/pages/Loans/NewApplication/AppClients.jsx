// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { BiCheckbox } from 'react-icons/bi';
import css from '../AllLoans/Clients.module.css'
import PropTypes from 'prop-types';


export const AppClients =  ({ selectAll, onAllCheckChange }) => {
  const handleAllCheckChange = () => {
    onAllCheckChange(!selectAll);
  };

  return (
    <div className={css.clientsblock}>
       <div className={css.clientsdata}>
       {selectAll ? (
          <BiCheckbox className={css.checkbox11} onClick={handleAllCheckChange} />
        ) : (
          <input type="checkbox" checked={false} onChange={handleAllCheckChange} className={css.checkbox2}/>
        )}
          <h3>Case Number</h3>
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Application Start Date</h3>
          <h3>Submission Date</h3>
          <h3>Application Status</h3>
       </div>
    </div>
  )
}
AppClients.propTypes = {
  selectAll: PropTypes.bool.isRequired,
  onAllCheckChange: PropTypes.func.isRequired,
};