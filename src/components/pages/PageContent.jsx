
import { Routes, Route } from 'react-router-dom';
// import Message from './Messages/Messages';
import Dashboard from "./Dashboard/Dashboard";
import Messages from "./Messages/Messages";
import Notifications from './Notifications/Notifications';
import Support from './Support/Support';
import Faq from './Support/Faq';
import UserMsg from './Messages/UserMsg';

function PageContent() {
 
  return (
      <div className='PageContent'>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/notifications" element={<Notifications />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/support/Faq" element={<Faq />} />
          <Route exact path="/messages/user" element={<UserMsg />} />
        </Routes>
      </div>
  );
}

export default PageContent;
