import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userActions} from '../actions';
import{Header} from '../Header';
import {Slider} from '../Slider';

class HomePage extends Component{
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }
    render(){
        const {user,users}=this.props;
        return(
                <div>
                    <Header />
                    <Slider />
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="booking-content">
                                    <div className="section-header">
                                        <h1>Hi {user && user.firstName || ''}!</h1>
                                        <p>All registered users:</p>
                                        {users.loading && <em>Loading users...</em>}
                                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                                        {users.items &&
                                        <ul>
                                                {users.items.map((user, index) =>
                                                    <li key={user.id}>
                                                        {user.firstName + ' ' + user.lastName}
                                                        {
                                                            user.deleting ? <em> - Deleting...</em>
                                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                            : <span> - <a className="footer-link" onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                                        }
                                                    </li>
                                                )}
                                            </ul>
                                        }
                                        {/* <p>
                                            <Link to="/login">Logout</Link>
                                        </p> */}

                                    </div>
                                </div>
                        </div>
                    </div>
              </div>
            
            </div>
        )
    }
}
function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };

