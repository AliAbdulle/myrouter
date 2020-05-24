import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Settings from "./Settings"
import Info from "./Info"

function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li><Link to="/profile/info">Profile Info</Link></li>
                <li><Link to="/profile/Settings">Profile Settings</Link></li>
            </ul>

            <Switch>
                <Route path="/profile/info"></Route>
                <Route path="/profile/"></Route>
            </Switch>
        </div>
    )
}

export default Profile