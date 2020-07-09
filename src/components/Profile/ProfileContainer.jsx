import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getMyProfileTC, getStatusTC, updateStatusTC, saveAvaTC, saveProfileTC} from "../../Data/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let Id = this.props.match.params.Id
        if (!Id) {
            Id = this.props.authId
        }
        if (!Id) {
            this.props.history.push ('/login')
        }
        this.props.getMyProfileTC(Id);
        this.props.getStatusTC(Id)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.Id != prevProps.match.params.Id)
        this.refreshProfile()
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}
                     isOwner={!this.props.match.params.Id}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authId: state.auth.id
})

export default compose(
    connect(mapStateToProps, {getMyProfileTC, getStatusTC, updateStatusTC, saveAvaTC, saveProfileTC}),
    withRouter
/*    withAuthRedirect*/
)
(ProfileContainer);