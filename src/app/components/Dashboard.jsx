import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Stats from './Stats';
import Edit from './Edit';

const Dashboard = () => {
    return ( 
        <>
            <h4>Dashboard</h4>
                <ul>
                    <li>
                        <Link to="/dashboard/stats">Stats</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/edit" >Edit</Link>
                    </li>
                </ul>
            <Switch>
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard/edit" component={Edit} />
            </Switch>
        </>
     )
}
 
export default Dashboard;