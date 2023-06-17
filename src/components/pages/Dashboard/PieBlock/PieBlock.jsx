import  style from './pieblock.module.css'
import Piechart from '../PieChart/Piechart';

const PieBlock = () => {
  return (
    <div className={style.pieblock}>
            <p className={style.pie_head}>Loan Application Chart</p>
            <div className={style.piechat}>
              <Piechart/>
              <div className={style.Keys}>
                <div className={style.pie_show}>
                  <p className={style.pie_blue}>New Applications</p>
                  <span>15%</span>
                </div>

                <div className={style.pie_show}>
                  <p className={style.pie_green}>Approved Loans</p>
                  <span>50%</span>
                </div>
                <div className={style.pie_show}>
                  <p className={style.pie_wine}>Declined Loans</p>
                  <span>20%</span>
                </div>
                <div className={style.pie_show}>
                  <p className={style.pie_red}>Declined Applications</p>
                  <span>15%</span>
                </div>
              </div>
            </div>
                
        </div>
  )
}

export default PieBlock;