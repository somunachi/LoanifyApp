import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import LoanTab from './Loans/LoanTab';
import Profile from './Profile/Profile';
import Notifications from './Notifications/Notifications';
import {Settings} from './SettingsPage/Settings';
import Clients from './Clients/Client'
import { ProfileSettings } from './SettingsPage/ProfileSettings/ProfileSettings';
import { Notification } from './SettingsPage/NotificationPage/Notification';
import { Security } from './SettingsPage/Security/Security';
import AllUserPermission  from './SettingsPage/UserPermission/AllUserPermission';
import Report from './Report/Report';
import Support from './Support/Support';
import Faq from './Support/Faq';
import UserMsg from './Messages/UserMsg';
import Messages from './Messages/Messages';
import { LoanOverview } from './LoansOverview/LoanOverview';
import { LoansContract } from './LoansOverview/LoansContract'
import Overview from './ClientOverview/overview/Overview';
import { GeneralInfo } from './ClientOverview/overview/GeneralInfo';
import LoanDetails from './ClientOverview/overview/LoanDetails';
import RiskScore from './ClientOverview/overview/RiskScore';
import Documents from './ClientOverview/overview/Documents';
import ParentOverview from './ClientOverview/ParentOverview';
import ParentChangePsw from './SettingsPage/PopUps/ParentChangePsw';

function PageContent({photo, selectedItem}) {

  const handleItemSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='PageContent'>
        <Routes>
        <Route exact path='/dashboard' element={<Dashboard selectedItem={selectedItem} onItemSelected={handleItemSelected}  />}/>
        <Route exact path='/loans' element={<LoanTab />}/>
        <Route exact path='/profile' element={<Profile selectedItem={selectedItem} onItemSelected={handleItemSelected}/>}/>
        <Route exact path='/messages/user' element={<UserMsg />}/>
        <Route exact path='/messages' element={<Messages />}/>
        <Route exact path='/notifications' element={<Notifications />}/>
        <Route exact path='/settings' element={<Settings />}/>
        <Route exact path='/clients' element={<Clients />}/>
        <Route exact path="/settings/profile" element={<ProfileSettings photo={photo}/>} />
        <Route exact path="/reports" element={<Report />} />
        <Route
          exact
          path="/settings/userpermission"
          element={<AllUserPermission />}
        />
        <Route exact path="/settings/notification" element={<Notification />} />
        <Route exact path="/settings/security" element={<Security />} />
        <Route exact path='/support' element={<Support />}/>
        <Route exact path='/support/faq' element={<Faq />}/>
        <Route exact path='/loans/overview/general' element={<LoanOverview />}/>
        <Route exact path='/loans/overview/loan-contract' element={<LoansContract />}/>
        <Route exact path='/clients/overview/general' element={<Overview />}/>
        <Route exact path='/clients/overview/-details' element={<LoanDetails />}/>
        <Route exact path='/clients/overview/risk-score' element={<RiskScore />}/>
        <Route exact path='/clients/overview/documents' element={<Documents />}/>
        </Routes>
    </div>
  )
}

export default PageContent