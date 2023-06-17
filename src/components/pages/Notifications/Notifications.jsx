import notify from './notifications.module.css';
import data from './notifydata.jsx';
import borrower from '../../../assets/active borrower avatar.png';
import { Link } from 'react-router-dom';
import {IoSettingsOutline} from 'react-icons/io5'


const Notifications = () => {
  return (
    <section className={notify.notif_container}>
      <div className={notify.notif_header}>
        <div className={notify.notify_header_div}>
          <p className={notify.header_chats}>Clients</p>
          <span className={notify.number}>8</span>
        </div>
        <Link to='/settings/notifications'>
        <IoSettingsOutline/>
        </Link>
      </div>

      <div className={notify.content2}>
        {data.map((client) => (
          <div className={notify.inner_content2} key={client.id}>
            <div className={notify.content_inner1}>
              <div className={notify.notif_flex}>
                <img src={borrower} alt="active borrower" className={notify.borrower} />

                <div className={notify.notif_column}>
                  <p className={notify.name_action}>
                    <b>{client.name}</b> made a new <b>{client.action}</b>
                  </p>
                  <div className={notify.time_type}>
                    <p>2 hrs. ago</p>
                    <i className={`bi bi-circle-fill ${notify.greydot}`}></i>
                    <p>Business Loan</p>
                  </div>
                </div>
              </div>
            </div>
            <i className={`bi bi-circle-fill ${notify.bluedot}`}></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notifications;
