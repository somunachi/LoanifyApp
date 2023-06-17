import LineGraph from '../LineGraph/LineGraph'
import style from './graphs.module.css'
import DoubleBar from '../DoubleBar/DoubleBar'
import BlueBar from '../BlueBar/BlueBar'
import PinkBar from '../PinkBar/PinkBar'

export const Graphs = () => {
  return (
    <div className={style.graphsContainer}>
        <div className={style.graphsBlock_one}>
            <div className={style.completed_defaulted}>
                <p className={style.header}>Completed vs Defaulted</p>
                <LineGraph/>
            </div>
            <div className={style.completed_defaulted}>
                <p className={style.header}>Approved vs Declined</p>
                <DoubleBar/>
            </div>
        </div>
        <div className={style.graphsBlock_two}>
            <div className={style.completed_defaulted}>
                <p className={style.header}>New Loan Applications</p>
                <PinkBar/>
            </div>
            <div className={style.completed_defaulted}>
                <p className={style.header}>Approved Loan Applications</p>
                <BlueBar/>
            </div>
        </div>
    </div>
  )
}
