import React from "react";
import {connect} from "react-redux";
import {deleteUserTC, follow, postUserTC, setCurrentPage, setUsersTC, unfollow} from "../../Data/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import s from "./UsersContainer.module.css"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPageSelector, isFetchingSelector,
    pageSizeSelector,
    totalCountSelector,
    usersSelector
} from "../../Data/usersSelectors";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setUsersTC(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <div className={s.preloader}><Preloader /></div> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   postUserTC={this.props.postUserTC}
                   deleteUserTC={this.props.deleteUserTC}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: usersSelector(state),
        pageSize: pageSizeSelector(state),
        totalCount: totalCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state)
    }
}

export default compose (
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setUsersTC, postUserTC, deleteUserTC}),
    //withAuthRedirect
) (UsersAPIContainer);