import { useDispatch } from 'react-redux';
import validator from 'validator';
import useInput from '../hooks/use-input';
import { authAction } from '../store/auth-slice';

import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();

  let formIsValid = false;

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput(value => validator.isEmail(value));

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler
  } = useInput(value => value.trim().length > 8);

  if(emailIsValid && passwordIsValid){
    formIsValid = true;
  }

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authAction.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={`${classes.control} ${emailHasError? classes.invalid : ''}`}>
            <label htmlFor='email'>Email</label>
            <input 
              type='email' 
              id='email' 
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p>Please enter a valid email.</p>}
          </div>
          <div className={`${classes.control} ${passwordHasError? classes.invalid : ''}`}>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              id='password' 
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && <p>Password must be 8+ long.</p>}
          </div>
          <button disabled={!formIsValid}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
