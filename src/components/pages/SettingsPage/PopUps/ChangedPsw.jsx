import { useState } from "react";
import style from "./changedpsw.module.css";
import PropTypes from "prop-types";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import man from "../../../images/business guy.png";
import logoIcon from "../../../../assets/Group 7753.svg";
import ComfirmChangePage from "./ComfirmChangePage";
// import style from '../../../ResetPassword/resetpassword.module.css'
// import PropTypes from 'prop-types';

const INITINPUT = { old_password: "", new_password: "", confirm_password: "" };

const ChangedPsw = () => {
  const [form, setForm] = useState(INITINPUT);
  const [errorUI, setErrorUI] = useState({});
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // const handlePasswordPop =()=>{
  //   setChange(true)
  // }

  const handleSuccess = () => {
    setShowConfirmation(true);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible((prevVisible) => !prevVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevVisible) => !prevVisible);
  };

  const VALIDATION = {
    old_password: [
      {
        isValid: (value) => !!value,
        message: "Is required.",
      },
      {
        isValid: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
        message: "Incorrect old password",
      },
    ],
    new_password: [
      {
        isValid: (value) => !!value,
        message: "Is required.",
      },
      {
        isValid: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
        message:
          "Requires 6+ characters, Uppercase, Lowercase letters, numeric digit (0-9) and a special character.",
      },
    ],
    confirm_password: [
      {
        isValid: (value) => !!value,
        message: "Is required.",
      },
      {
        isValid: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value),
        message:
          "Requires 6+ characters, Uppercase, Lowercase letters, numeric digit (0-9) and a special character.",
      },
    ],
  };

  const getErrorFields = (form) =>
    Object.keys(form).reduce((acc, key) => {
      if (!VALIDATION[key]) return acc;

      const errorsPerField = VALIDATION[key]

        .map((validation) => ({
          isValid: validation.isValid(form[key]),
          message: validation.message,
        }))

        .filter((errorPerField) => !errorPerField.isValid);

      return { ...acc, [key]: errorsPerField };
    }, {});

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (errorUI) setErrorUI(null);
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log({ id, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorFields = getErrorFields(form);
    const hasErrors = Object.values(errorFields).flat().length > 0;
    if (hasErrors) return setErrorUI({ ...errorFields });
    if (form.new_password !== form.confirm_password) {
      setErrorUI((prevErrors) => ({
        ...prevErrors,
        confirm_password: [{ message: "Must match the new password." }],
      }));
      return;
    }

    handleSuccess();
    setForm(INITINPUT);
    console.log("Form submitted");
    onSuccess();
    
  };
  
  return (
    <div className={style.ChangedPsw_holder}>
      <div className={style.ChangedPsw_holder_section}>
        <div className={style.image}>
          <img src={man} alt="sidepic" className={style.sideimg} />
        </div>
        <div>
          <div className={style.ChangedPsw__whole}>
             <img src={logoIcon} alt="logo" className={style.ChangedPsw_logo} />
          </div>
          <div className={style.ChangedPsw_details}>
            <h1 className={style.ChangedPsw_text}>Change Password</h1>
            <form
              onSubmit={handleSubmit}
              className={style.ChangedPsw_form}
            >
              <div className={style.ChangedPswpasswordWrapper}>
                <div className={style.ChangedPswcodeBlock}>
                  <input
                    type="password"
                    id="old_password"
                    onChange={handleChange}
                    value={form.old_password}
                    placeholder="Old Password"
                    className={style.ChangedPsw__input}
                  />
                </div>
                <div className={style.error}>
                  {errorUI?.old_password?.length ? (
                    <span style={{ color: "red" }}>
                      {errorUI.old_password[0].message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className={style.ChangedPswpasswordWrapper}>
                <div className={style.ChangedPswcodeBlock}>
                  <input
                    type={newPasswordVisible ? "text" : "password"}
                    id="new_password"
                    value={form.new_password}
                    onChange={handleChange}
                    placeholder="New Password"
                    className={style.ChangedPsw__input}
                  />
                  {newPasswordVisible ? (
                    <BsEye
                      onClick={toggleNewPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  ) : (
                    <BsEyeSlash
                      onClick={toggleNewPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  )}
                </div>
                <div className={style.error}>
                  {errorUI?.new_password?.length ? (
                    <span style={{ color: "red" }}>
                      {errorUI.new_password[0].message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className={style.ChangedPswpasswordWrapper}>
                <div className={style.ChangedPswcodeBlock}>
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="confirm_password"
                    value={form.confirm_password}
                    name="confirm_password"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={style.ChangedPsw__input}
                  />
                  {confirmPasswordVisible ? (
                    <BsEye
                      onClick={toggleConfirmPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  ) : (
                    <BsEyeSlash
                      onClick={toggleConfirmPasswordVisibility}
                      className={style.editPasswordBlock__icon}
                    />
                  )}
                </div>
                <div className={style.error}>
                  {errorUI?.confirm_password?.length ? (
                    <span style={{ color: "red" }}>
                      {errorUI.confirm_password[0].message}
                    </span>
                  ) : null}
                </div>
              </div>

              <button type="submit" className={style.changePasswordBtn}>
                Change Password
              </button>
              {showConfirmation && <ComfirmChangePage />}
            </form>
          </div>
          </div>
      </div>
    </div>
  );
};

ChangedPsw.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default ChangedPsw;



