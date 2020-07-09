import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../Data/authReducer";

class HeaderContainer extends React.Component {
       render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return ({
        login: state.auth.login,
        isAuth: state.auth.isAuth
    })
}

export default connect (mapStateToProps, {logoutTC}) (HeaderContainer);