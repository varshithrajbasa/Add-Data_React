import React, { useState, useRef } from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const usernameref = useRef('');
    const ageref = useRef('');
    const [error, setError ] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(usernameref.current.value.trim().length === 0 || ageref.current.value.trim().length === 0){
            setError({
                title:'Invalid Input!',
                message:'Please enter a valid name and age (non-empty values)'
            });
            return;
        }
        if(+ageref.current.value < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age ( >0 )'
            });
            return;
        }
        const users={
            name:usernameref.current.value,age:ageref.current.value
        }
        props.onAddUser(users);
        usernameref.current.value = '';
        ageref.current.value = '';
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
            <input type="text" id="username" ref={usernameref}/>
            <label htmlFor="age" >Age (Years)</label>
            <input type="number" id="age" ref={ageref}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </>
    );
};
export default AddUser;