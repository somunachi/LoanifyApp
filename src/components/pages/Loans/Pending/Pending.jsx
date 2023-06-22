import { AppClients } from "../NewApplication/AppClients"
import { PendingInfo } from "./PendingInfo";
import css from '../AllLoans/AllLoans.module.css';
import pendingdata from './data';
import { useState } from "react";

function Pending() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAllCheckChange = (checked) => {
    setSelectAll(checked);
    if (checked) {
      const allItemIds = pendingdata.map((item) => item.id);
      setSelectedItems(allItemIds);
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemCheckChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }; 
  return (
    <div className={css.loans}>
      <div className={css.loanheader}>
      <AppClients selectAll={selectAll} onAllCheckChange={handleAllCheckChange}/>
      </div>
      <div className={css.infocontainer}>
        <div className={css.infowrapper}>
          <div className={css.infoscroll}>
          <PendingInfo selectedItems={selectedItems}
              onItemCheckChange={handleItemCheckChange}/>
          </div>
        </div>
      </div>
    </div>
  );
         
}

export default Pending