import { Graphs } from "./Graphs/Graphs";
import Overview from "./Overview/Overview";
import PieBlock from './PieBlock/PieBlock';
import style from './dashboard.module.css';
import {Link} from 'react-router-dom'


function Dashboard() {
  return (
    <div className={style.dashboardBody}>
      <div className={style.overviewContainer}>
        <Link to='#'>Overview of loans</Link>
      </div>
      <div>
        <Overview />
        <PieBlock />
        <Graphs />
      </div>
    </div>

  );
}
export default Dashboard