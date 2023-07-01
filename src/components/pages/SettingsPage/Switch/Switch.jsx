// Switch.js

import { useContext, useState } from "react";
import style from './switch.module.css';
import { AvatarInfo } from "../../../../Context";

const Switch = ({ onToggle }) => {
  const [toggle, setToggle] = useState(false);

  const handleChange = (e) => {
    const newToggleValue = e.target.checked;
    setToggle(newToggleValue);
    onToggle(newToggleValue);
  };

  return (
    <div className={style.container}>
      <div className={style.toggle_switch}>
        <input
          type="checkbox"
          className={style.checkbox}
          name='label'
          id='label'
          checked={toggle}
          onChange={handleChange}
        />
        <label className={style.label} htmlFor='label'>
          <span className={style.inner}></span>
          <span className={style.switch} />
        </label>
      </div>
    </div>
  );
};

export default Switch;
