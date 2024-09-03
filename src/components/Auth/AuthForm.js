import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const AuthCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLodding, setIsLodding] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLodding(true);

    let url;
 
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCVfkQFk3jT2zmdxUmYFs9TKFDd0m0VM1g'
    }else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCVfkQFk3jT2zmdxUmYFs9TKFDd0m0VM1g';
    }

    fetch(url,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
    ).then(res => {
      setIsLodding(false);
      if(res.ok){
        return res.json();  
      }else{
        return res.json().then(data => {
          //show error modal
          let errorMessage = "Authentication Failed!";
          // if(data.error){
          //   errorMessage = data.error.message;
          // }
          throw new Error(errorMessage);
        })
      }
    }).then(data => {
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
      AuthCtx.login(data.idToken, expirationTime.toISOString());
      history.replace('/');
    }).catch(err => alert(err.message));
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          {!isLodding ? 
            <button>{isLogin ? 'Login' : 'Create Account'}</button> :
            <p>Send request....</p>
          }
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
