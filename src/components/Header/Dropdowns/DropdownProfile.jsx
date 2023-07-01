import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import dropcss from './Dropdown.module.css';

function DropdownProfile({ onClose, handleLogout }) {
  const [visible, setVisible] = useState(true);

  const handleFixClick = () => {
    setVisible(false);
    onClose();
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={dropcss.profile_container}>
      <div className={dropcss.picon}>
        <FiX className={dropcss.fix} onClick={handleFixClick} />
      </div>
      <div className={dropcss.pro_list}>
        <ul>
          <Link to="/settings/profile">
            <li>Online</li>
          </Link>
          <Link to="/settings/profile">
            <li>On Break</li>
          </Link>
          <Link to="/settings/profile">
            <li>Offline</li>
          </Link>
          <Link to="/profile">
            <li>View Profile</li>
          </Link>
          <Link to="/settings/profile">
            <li>Profile Settings</li>
          </Link>
          <li style={{ cursor: 'pointer', color: 'red' }} onClick={handleLogout}>
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
}

DropdownProfile.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default DropdownProfile;
