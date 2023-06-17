import { RiDashboard2Line, RiBitCoinLine } from 'react-icons/ri'
import { CgProfile, CgMail } from 'react-icons/cg';
import { TbUsers, TbReportAnalytics } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiLifeBuoy } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import side from './side.module.css'


function Side() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/dashboard');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);

    if (path.includes(activeLink)) {
      return;
    }

    // onItemSelected(path);
  };


  return (
    <div className={side.side}>
      <aside className={side.sidebarList}>
      <ul>
          <li>
            <Link
              to="/dashboard"
              className={`${side.activeLink} ${activeLink.includes('/dashboard') ? side.active : ''}`}
              onClick={() => handleLinkClick('/dashboard')} 
            >
              <RiDashboard2Line className={side.icon} /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/loans"
              className={`${side.activeLink} ${activeLink.includes('/loans') ? side.active : ''}`}
              onClick={() => handleLinkClick('/loans')} 
            >
              <RiBitCoinLine className={side.icon} /> Loans
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`${side.activeLink} ${activeLink === '/profile' ? side.active : ''}`}
              onClick={() => handleLinkClick('/profile')} 
            >
              <CgProfile className={side.icon} /> Profile
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className={`${side.activeLink} ${activeLink.includes('/messages') ? side.active : ''}`}
              onClick={() => handleLinkClick('/messages')} 
            >
              <CgMail className={side.icon} /> Messages
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={`${side.activeLink} ${activeLink === '/notifications' ? side.active : ''}`}
              onClick={() => handleLinkClick('/notifications')}
            >
              <IoIosNotificationsOutline className={side.icon} /> Notifications
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className={`${side.activeLink} ${activeLink.includes('/reports') ? side.active : ''}`}
              onClick={() => handleLinkClick('/reports')}
            >
              <TbReportAnalytics className={side.icon} /> Reports
            </Link>
          </li>
          <li>
            <Link
              to="/clients"
              className={`${side.activeLink} ${activeLink.includes('/clients') ? side.active : ''}`}
              onClick={() => handleLinkClick('/clients')}
            >
              <TbUsers className={side.icon} /> Clients
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`${side.activeLink} ${activeLink.includes('/settings') ? side.active : ''}`}
              onClick={() => handleLinkClick('/settings')}
            >
              <IoSettingsOutline className={side.icon} /> Settings
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className={`${side.activeLink} ${activeLink.includes('/support') ? side.active : ''}`}
              onClick={() => handleLinkClick('/support')} 
            >
              <FiLifeBuoy className={side.icon} /> Support
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Side