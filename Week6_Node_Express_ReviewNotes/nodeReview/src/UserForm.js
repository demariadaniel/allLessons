import React, {Component} from 'react';


class UserForm extends Component {
    render(){
        return(
            <div className="App-intro">
                {/* If you are using Forms, you can send data by submitting the form.
                    To make this work, you need the following:
                        * action attribute on the form with your server's address
                        * method attribute set to GET (can also use Post, but works differently)
                        * name attribute on input elements
                        * value attribute on input elements
                        * button inside of form element with type="submit"
                    This creates a query string URL, i.e.:
                        localhost:8080/form?userID=0&userName=Jin
                    ... which the server can decode using req.query
                    */}
                <form action={`http://localhost:8080/form`} method="GET">
                    <input  onChange={e=>{this.props.onChange(e, 'userID')}} 
                            type="text"
                            name="userID" 
                            value={this.props.userID}/>
                    <input onChange={e=>{this.props.onChange(e, 'userName')}} 
                            type="text"
                            name="userName" 
                            value={this.props.userName}/>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.props.saveUser} >Save User</button>
        </div>
        )
    }
}

export default UserForm;