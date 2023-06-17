import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import sup from './support.module.css';
import SupportComfirm from './SupportComfirm';
import PhoneNumber from './PhoneNumber';

const Support = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleReportIssueClick = () => {
    setShowMessage((prevShowMessage) => !prevShowMessage);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }
    console.log('Sending message:', message);
    setMessage('');
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  return (
    <>
      <section className={sup.support_container}>
        <div className={sup.support_cell}>
          <Link to='/support/faq'>
            <h5 className={sup.support_dropdown} style={{ fontWeight: 700, fontSize: 16, padding: '10px'  }}>
              FAQ
            </h5>
          </Link>
        </div>
        <div className={sup.support_cell}>
          <div className={sup.toll_container}>
            <h5 style={{ fontWeight: 700, fontSize: 16 }}>Toll Free Call</h5>
            <p>Talk to a support officer at any time</p>
          </div>
          <div>
            <PhoneNumber number="08133822178" />
          </div>
        </div>
        <div className={sup.support_cell}>
          <div className={sup.support_cell__block}>
            <h5
              className={sup.toll}
              style={{ fontWeight: 700, fontSize: 16, cursor: 'pointer' }}
              onClick={handleReportIssueClick}
            >
              Report an Issue <span><BiChevronDown /></span>
            </h5>
            {showMessage && (
              <div className={sup.toll__text_area}>
                <textarea
                  rows={10}
                  value={message}
                  onChange={handleMessageChange}
                  className={sup.message_box}
                ></textarea>
                <button onClick={handleSendMessage} className={sup.message_box_button}>
                  Send
                </button>
              </div>
            )}
            {showConfirmation && <SupportComfirm className={sup.support__comfirm} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;