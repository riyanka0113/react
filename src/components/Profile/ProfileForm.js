import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordRef = useRef();
  const [isLodding, setIsLodding] = useState(false);

  const AuthCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;

    setIsLodding(true);

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key={add_your_key}',{
      method: 'POST',
      body: JSON.stringify({
        idToken: AuthCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setIsLodding(false);
      if(res.ok){
        history.replace('/');
      }else{
        return res.json().then(data => {
          alert(data.error.message);
        })
      }
      //assumeption: always succed
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordRef}/>
      </div>
      <div className={classes.action}>
        {!isLodding ? <button>Change Password</button> : <p>Send request....</p>}
      </div>
    </form>
  );
}

export default ProfileForm;
