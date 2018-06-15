import React, {Component} from 'react';


class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: this.props.users
        }
    }
    render(){
        return(
            <div className="App-intro">
                <ul>
                    {/* Ternary Operator 
                        If there are no users, we return a message, otherwise we render
                        a series of list elements */}
                    {this.state.users.length === 0 ?
                        <li>No Users Yet!</li>
                         :
                        this.state.users.map((user, index, thisArray)=>{
                                return <li key={index}>Name: {user.userName} Id:{user.userID}</li>
                        })
                    }
                    {/* Our server does not include any functionality to save data
                        Manually changing the URL in the browser to localhost:8080/form will lose any data
                        you have created.
                        This is where you would implement a database on the server, and use componentDidMount
                        to request that data when the page loads.
                    */}
                </ul>
        </div>
        )
    }
}

export default UserList;