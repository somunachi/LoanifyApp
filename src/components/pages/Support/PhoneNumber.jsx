import PropTypes from 'prop-types';

const PhoneNumber = ({ number }) => {
  const handlePhoneNumberClick = () => {
    window.open(`tel:${number}`);
  };

  return (
    <span style={{ cursor: 'pointer' }} onClick={handlePhoneNumberClick}>
      {number}
    </span>
  );
};

PhoneNumber.propTypes = {
  number: PropTypes.string.isRequired,
};

export default PhoneNumber;
