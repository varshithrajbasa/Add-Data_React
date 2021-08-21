import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';
const UsersList = (props) => {
    return props.users.length === 0 ? <></> :
    (
        <Card className={classes.users}>
            <ul>
                {props.users.map((object,i)=><li key={i}>{object.name}({object.age} Years Old)</li>)}
            </ul>
        </Card>
    )
}
export default UsersList;