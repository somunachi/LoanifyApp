import React from 'react';
import Navbar from './components/Header/Navbar';
import Side from './components/SideMenu/Side';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard/Dashboard';
import LoanTab from "./components/pages/Loans/LoanTab";
import Profile from "./components/pages/Profile/Profile";
import UserMsg from "./components/pages/Messages/UserMsg";
import Messages from "./components/pages/Messages/Messages";
import Notifications from "./components/pages/Notifications/Notifications";
import { Settings } from "./components/pages/SettingsPage/Settings";
import  Clients  from "./components/pages/Clients/Client";
import { ProfileSettings } from "./components/pages/SettingsPage/ProfileSettings/ProfileSettings";
import Report from "./components/pages/Report/Report";
import AllUserPermission from './components/pages/SettingsPage/UserPermission/AllUserPermission'
import { Notification } from "./components/pages/SettingsPage/NotificationPage/Notification";
import { Security } from "./components/pages/SettingsPage/Security/Security";
import Support from "./components/pages/Support/Support";
import Faq from "./components/pages/Support/Faq";
import { LoanOverview } from "./components/pages/LoansOverview/LoanOverview";
import { LoansContract } from "./components/pages/LoansOverview/LoansContract";
import Overview from "./components/pages/ClientOverview/overview/Overview";
import LoanDetails from "./components/pages/ClientOverview/overview/LoanDetails";
import RiskScore from "./components/pages/ClientOverview/overview/RiskScore";
import Documents from "./components/pages/ClientOverview/overview/Documents";
// import ParentChangePsw from './components/pages/SettingsPage/PopUps/ParentChangePsw';


export const Compile = ({handleLogout, photo}) => {


  return (
    <div>
        <Navbar handleLogout={handleLogout}  photo={photo}/>
        <div className="sideandpage">
            <Side />
            <div className='PageContent'>
        <Routes>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/loans' element={<LoanTab/>}/>
       <Route exact path='/profile' element={<Profile/>}/>
       <Route exact path='/messages/user' element={<UserMsg/>}/>
      <Route exact path='/messages' element={<Messages/>}/>
      <Route exact path='/notifications' element={<Notifications/>}/>
      <Route exact path='/settings' element={<Settings/>}/>
      <Route exact path='/clients' element={<Clients/>}/>
      <Route exact path="/settings/profile" element={<ProfileSettings photo={photo}/>} />
      <Route exact path="/reports" element={<Report/>} />
       <Route
    exact
    path="/settings/userpermission"
    element={<AllUserPermission/>}
  />
  <Route exact path="/settings/notification" element={<Notification/>} />
  <Route exact path="/settings/security" element={<Security/>} />
  <Route exact path='/support' element={<Support/>}/>
  <Route exact path='/support/faq' element={<Faq/>}/>
  <Route exact path='/loans/overview/general' element={<LoanOverview/>}/>
  <Route exact path='/loans/overview/loan-contract' element={<LoansContract/>}/>
  <Route exact path='/clients/overview/general' element={<Overview/>}/>
  <Route exact path='/clients/overview/-details' element={<LoanDetails/>}/>
  <Route exact path='/clients/overview/risk-score' element={<RiskScore/>}/>
  <Route exact path='/clients/overview/documents' element={<Documents/>}/>
  
        </Routes>

    </div>
        </div>
    </div>
  )
}

