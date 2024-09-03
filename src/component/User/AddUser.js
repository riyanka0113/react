import React, {useState, useRef} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helpers/Wrapper'; 

import './AddUser.css'


const AddUser = (props) => {
    const usernameRef = useRef();
    const ageRef = useRef();

    const [error, setError] =  useState();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = usernameRef.current.value;
        const enteredAge = ageRef.current.value;

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                    title: 'Invaild Input',
                    message: 'Please enter a vaild name and age.'
                }
            )
            return;
        }
        if(+enteredAge < 1){
            setError({
                    title: 'Invaild Age',
                    message: 'Please enter a vaild age.'
                }
            )
            ageRef.current.value = '';
            return;
        }

        props.onAddUser(enteredName, enteredAge);

        usernameRef.current.value = '';
        ageRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };

    return(
        <Wrapper>
            {error ? <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/> : ''}
            <Card className='input'>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Name</label>
                    <input 
                        id="username" 
                        type="text" 
                        ref={usernameRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="number" 
                        ref={ageRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;