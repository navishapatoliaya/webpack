import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component{
    render(){
        return(
            // <h2> HomePage</h2>
            <div className="col-md-6 col-md-offset-3">
                 <p>You're logged in with React!!</p>
                 <h3>All registered users:</h3>
                 <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
           
        )
    }
}
export default HomePage;