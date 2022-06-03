import React from "react";

import { login, isAuthenticated, getProfile, logout } from "../utils/auth";



const Private = () => {

    if(!isAuthenticated()){
        login()
        return <p>Redirecting to login...</p>
    }

    const user = getProfile()

    return(
        <div>
            <p>Hi, {user.name ? user.name : "visitor"}!</p>
            <p>
                <a href="#logout" onClick={e => { 
                    logout()
                    e.preventDefault()}}>
                Log Out
                </a>
            </p>
        </div>
    )

}

export default Private;