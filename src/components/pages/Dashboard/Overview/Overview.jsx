import over from './overview.module.css';
import OverviewData from './OverviewData';



function Overview() {

  return (
    <div className={over.prediction_table}>
        <div  className={over.prediction_table_table}> 
            {OverviewData.map((item) => {
                 let backgroundColorClass = ''; // Default background color class
                 let textColorClass = '';
                 let iconColorClass = '';

                 if (item.id === 1) {
                   backgroundColorClass = over.allLoan;
                   iconColorClass = over.allLoanIcon
                   textColorClass = over.allLoanText
                 } else if (item.id === 2) {
                    backgroundColorClass = over.NewApp;
                    iconColorClass = over.NweAppIcon
                    textColorClass = over.NewAppText
                 }else if (item.id === 3) {
                    backgroundColorClass = over.pending;
                    iconColorClass = over.pendingIcon
                    textColorClass = over.pendingText
                 }else if (item.id === 4) {
                    backgroundColorClass = over.activeLoan;
                    iconColorClass = over.activeLoanIcon
                    textColorClass = over.activeLoanText
                 }else if (item.id === 5) {
                    backgroundColorClass = over.dueLoan;
                    iconColorClass = over.dueLoanIcon
                    textColorClass = over.dueLoanText
                 }else if (item.id === 6) {
                    backgroundColorClass = over.extended;
                    iconColorClass = over.extendedIcon
                    textColorClass = over.extendedText
                 }else if (item.id === 7) {
                    backgroundColorClass = over.defaulted;
                    iconColorClass = over.defaultedIcon
                    textColorClass = over.defaultedText
                 }else if (item.id === 8) {
                    backgroundColorClass = over.closed;
                    iconColorClass = over.closedIcon;
                    textColorClass = over.closedText
                    
                 }

                return (
                    <div key={item.id} className={over.block_one} > 
                    <div  className={over.overviewBlock}>
                 <div className={`${over.overview} ${backgroundColorClass}`}>
                     <div className={over.dataBlue}>
                         <p>{item.title}</p>
                         <div className={over.percentageBlock}>
                            <span className={`${over.icon}  ${iconColorClass}`}>{item.icon}</span>
                              <p>{item.range}</p>
                     </div>
                         </div>
                         <div className={`${over.figure_blue} ${textColorClass}`}>
                             <p>{item.amount}</p>
                         </div>
                 </div>
             </div>
             </div>

                )
            })}
        </div>
    </div>
    
  )
}

export default Overview