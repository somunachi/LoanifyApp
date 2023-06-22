import { AppClients } from "../NewApplication/AppClients"
import { ActiveInfo } from "./ActiveInfo"
import css from '../AllLoans/AllLoans.module.css';
import data from './data'
import { useState } from "react";


function Active() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAllCheckChange = (checked) => {
    setSelectAll(checked);
    if (checked) {
      const allItemIds = data.map((item) => item.id);
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
        <AppClients selectAll={selectAll} onAllCheckChange={handleAllCheckChange} />
      </div>
      <div className={css.infocontainer}>
        <div className={css.infowrapper}>
          <div className={css.infoscroll}>
            <ActiveInfo
              selectedItems={selectedItems}
              onItemCheckChange={handleItemCheckChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Active