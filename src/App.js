import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from "./helpers";
import { Homepage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import {PrivateRoute}from "./components";
class App extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
                <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={Homepage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
};
export default App;
