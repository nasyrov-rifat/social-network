import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    let AuhtRedirect = (props) => {
        if (!props.isAuth) return <Redirect to={`/login`}/>
        return <Component {...props} />
    }
    let ConnectedAuhtRedirect = connect (mapStateToProps) (AuhtRedirect)
    return ConnectedAuhtRedirect
}