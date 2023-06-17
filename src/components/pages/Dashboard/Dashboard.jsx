import { Graphs } from "./Graphs/Graphs";
import Overview from "./Overview/Overview";
import PieBlock from './PieBlock/PieBlock'

function Dashboard() {
  return (
    <div>
     <Overview />
     <PieBlock />
     <Graphs />
    </div>

  );
}
export default Dashboard