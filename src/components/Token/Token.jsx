import { useNavigate } from 'react-router-dom';
import pic from '../images/business guy.png';
import css from './token.module.css';
import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/Group 7753.svg';
import PropTypes from 'prop-types';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';

const Token = ({ handleLogin }) => {
  const [token, setToken] = useState(new Array(4).fill(''));
  const [errToken, setErrToken] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const inputRefs = useRef([]);


  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setToken((prevToken) => {
      const newToken = [...prevToken];
      newToken[index] = element.value;
      return newToken;
    });

    // Autofocus
    if (element.value.length === 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    } else if (element.value.length === 0 && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    let redirectTimeout;

    if (loading) {
      redirectTimeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [loading, navigate]);

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    if (token.join('').length !== 4) {
      setErrToken('Invalid input');
      setLoading(true);
      // return;
    } 

    const joinedNumber = parseInt(token.join(''), 10);
    console.log(joinedNumber);

    const bearerToken = localStorage.getItem('signup')
      
    axios.post("https://loanifyteama-production.up.railway.app/api/v1/auth/verify-email", {
      
        code: joinedNumber
    },
    { 
      headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    }
  })
      .then(response => {
        console.log(response.data);
        if(response.data.status === true){
          setLoading(false)
          handleLogin(token);
          navigate('/dashboard');
      
        }
        else {
          setErrToken('Invalid token entered. Try again!')
   }
  
      })
    
      .catch(error => {
        console.error(error);
        if(error.message==="Request failed with status code 400"){
          setErrToken("Token expired! Request new token")
        }
        
          setLoading(true)
  });


  };

  return (
    <main className={css.bodyContainer}>
      <div className="picture">
        <img src={pic} alt="pic" className={css.sidepic} />
      </div>
      <div className={css.form}>
        <div className={css.loanLogo}>
          <img src={logo} alt="logo" className={css.logo} />
        </div>
        <form onSubmit={handleSubmit} className={css.tokenForm}>
          <p className={css.formtext}>Please enter your 4 digit token pin</p>

          <div className={css.input_field}>
            {token.map((data, index) => (
              <div className={css.gap} key={index}>
                <input
                  type="text"
                  maxLength={1}
                  className={css.tokendigit}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                />
              </div>
            ))}
          </div>
          {errToken && <p className={css.error}>{errToken}</p>}
            <button type="submit" className={css.proceed} disabled={loading}> {loading ? <SpinnerCircular size={30} color='#FFFFFF' secondaryColor='#3944BC'/> : <p> Proceed to Dashboard</p>} </button>
        
        </form>
      </div>
    </main>
  );
};

Token.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default Token;


