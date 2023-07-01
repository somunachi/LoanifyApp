import React from 'react'
import OverHeader from './overview/OverHeader'
import Overview from './overview/Overview'
import css from "./overview/Overview.module.css";


function ParentOverview() {
  return (
    <div  className={css.topBar}>
        <OverHeader />
        <div>
            <Overview />
        </div>
    </div>
  )
}

export default ParentOverview