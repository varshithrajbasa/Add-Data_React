import React, { useState } from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError ] = useState();
    const usernameHandler = event => {
        setEnteredUserName(event.target.value);
    }
    const ageHandler = event => {
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'Invalid Input!',
                message:'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age ( >0 )'
            });
            return;
        }
        const users={
            name:enteredUsername,age:enteredAge
        }
        props.onAddUser(users);
        setEnteredUserName('');
        setEnteredAge('');
    }
    const closeModalHandler = () =>{
        setError(null);
    }
    return(
        <>
        { error && <ErrorModal title={error.title} message={error.message} closeError={closeModalHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username" >Username</label>
            <input type="text" id="username" value={enteredUsername} onChange={usernameHandler}/>
            <label htmlFor="age" >Age (Years)</label>
            <input type="number" id="age" value={enteredAge} onChange={ageHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </>
    );
};
export default AddUser;