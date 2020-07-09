import React from 'react';
import Information from "./PersonalInformation/Information";
import MyPostsContainer from "./Posts/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <Information saveProfile={props.saveProfileTC} saveAvaTC={props.saveAvaTC} profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
        <MyPostsContainer profileState={props.profileState}
                 dispatch={props.dispatch}/>
    </div>
}

export default Profile;