import React, { Component} from 'react';
import UserAcademicForm from '../components/UserAcademicForm'


class UserSettings extends Component{
    render(){
        return(
            <div className='settings'>
                <h1>Settings </h1>
                <UserAcademicForm/>
            </div>
        )
    }
}
export default UserSettings;